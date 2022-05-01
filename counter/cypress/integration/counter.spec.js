// - [x] counter의 초기값은 0이다.
// - [x] - 버튼을 클릭 시 count가 1증가한다.
// - [x] - 버튼을 클릭 시 count가 1감소한다.
// - [x] - 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)
// - [x] - 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)
// - [x] reset 버튼을 클릭 시 counter가 0으로 초기화된다.

describe("example counter app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("counter의 초기값은 0이다.", () => {
    cy.get("#value").invoke("text").should("eq", "0");
  });

  it(" + 버튼을 클릭 시 count가 1증가한다.", () => {
    // 먼저 기존 값을 가져오고,
    // + 버튼을 클릭한 다음에
    // 변화된 값이 기존값 + 1인지 체크
    cy.get("#value")
      .invoke("text")
      .then((value) => {
        const preValue = Number(value);
        cy.get(".increase-btn").click();
        cy.get("#value")
          .invoke("text")
          .should("eq", String(preValue + 1));
      });
  });

  it(" - 버튼을 클릭 시 count가 1감소한다.", () => {
    // + 버튼을 클릭해서 값을 1로 만든다.
    // 먼저 기존 값을 가져오고,
    // - 버튼을 클릭한 다음에
    // 변화된 값이 기존값 -1인지 체크

    // min 값이 0 이므로, + 버튼을 먼저 클릭한 이후 실행되도록 만든다

    cy.get(".increase-btn").click();
    cy.get("#value")
      .invoke("text")
      .then((value) => {
        const preValue = Number(value);
        cy.get(".decrease-btn").click();
        cy.get("#value")
          .invoke("text")
          .should("eq", String(preValue - 1));
      });
  });

  it(" + 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)", () => {
    for (let i = 0; i < 11; i++) {
      cy.get(".increase-btn").click();
    }
    cy.get("#value").invoke("text").should("eq", "10");
  });

  it(" - 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)", () => {
    cy.get(".decrease-btn").click();
    cy.get("#value").invoke("text").should("eq", "0");
  });

  it("reset 버튼을 클릭 시 counter가 0으로 초기화된다.", () => {
    cy.get(".increase-btn").click();
    cy.get(".reset-btn").click();
    cy.get("#value").invoke("text").should("eq", "0");
  });
});

// describe: 어떤 어플리케이션인지 기술하는 부분
// beforeEach : 하나의 테스트 코드를 실행시키기 전에 매번 실행해주는 함수
// it : 테스트코드 작성

/** 메서드
 * visit : 방문할 주소의 url
 * get : 가져올 element node (querySelector)
 * invoke : 가져올 값
 * should : 가져올 값의 조건
 * click : 테스트 할 해당 객체 클릭
 * then: : invoke를 통해 가져올 값을 변수에 저장하기 위한 체이닝 단계
 */

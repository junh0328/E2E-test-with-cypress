describe("example counter app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("최초의 카운터 값을 0으로 보여준다", () => {
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
 */

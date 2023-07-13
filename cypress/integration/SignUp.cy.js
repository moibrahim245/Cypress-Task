const { homePage } = require("../pageObject/homePage.page")

before('beore', ()=>{
  cy.setCookie('newsletter', "1");

})
describe('empty spec', () => {
  it('passes', () => {
    homePage.visitHomePage();
    homePage.ClosePopUp()
  })
})
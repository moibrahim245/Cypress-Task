const { bakery } = require("../pageObject/bakery.page");
const { cart } = require("../pageObject/cart.page");
const { common } = require("../pageObject/common.page");
const { createAccount } = require("../pageObject/createAccount.page");
const { homePage } = require("../pageObject/homePage.page");
const { identification } = require("../pageObject/identification.page");
const { interceptAddToCart } = require("../support/API/intercepts");
const { generateSignUpData } = require("../support/helper/utils");
const { customerUserInfo } = require("../testData/customerUser");


describe('empty spec', () => {
  beforeEach(()=>{
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.setCookie('newsletter', "1");
    interceptAddToCart()
  })
  it('[TC001] SignUp with valid credentials', () => {
    const signUpData = generateSignUpData();
    homePage.visitHomePage();
    homePage.NavigateToIdentificationPage();
    identification.typeValidEmail(signUpData.email);
    identification.clickContinueButton()
    createAccount.typeValidPassword(signUpData.password)
    createAccount.confirmPassword(signUpData.password)
    createAccount.clickContinueButtonInPasswordCard()
    createAccount.typeFirstName(signUpData.firstName)
    createAccount.typeLastName(signUpData.lastName);
    createAccount.typePhoneNumber(signUpData.phoneNumber)
    createAccount.clickContinueButtonInProfileDetails();
    createAccount.selectGender(signUpData.gender)
    createAccount.selectBirthDate(signUpData.birthDate);
    createAccount.acceptTermAndConditions();
    createAccount.clickContinueButtonInGenderCard()
    createAccount.verifyAccountCreated()
    createAccount.clickGetStart();
    homePage.verifyUserRedirectedToHomePage()
  })
  it('[TC002] add to card with logged in user', { scrollBehavior: false }, () => {
    homePage.visitHomePage();
    homePage.NavigateToIdentificationPage();
    identification.typeValidEmail(customerUserInfo.email);
    identification.clickContinueButton()
    createAccount.typeValidPassword(customerUserInfo.password)
    identification.clickContinueButton()
    homePage.verifyLoginWelcomeLabel(customerUserInfo.firstName)
    homePage.hoverOverSuperMarket()
    homePage.selectBakerySubCategory()
    bakery.addToCartProductNumber(1)
    common.verifyProductIsAddedToCart(1)
    bakery.addToCartProductNumber(2)
    common.verifyProductIsAddedToCart(2)
    common.navigateToCartPage()
    cart.verifySubtotalIsCalculatedCorrectly()
  })
})
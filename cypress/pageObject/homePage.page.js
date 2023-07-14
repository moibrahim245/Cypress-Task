import { actions } from '../support/cypressWrapper/actions';
import $ from 'jquery';
import { assertions } from '../support/cypressWrapper/assertions';

class HomePage{
	// #### Page Elements ####
	closeButton(){
		return cy.get('button[aria-label="newsletter_popup_close-cta"]');
	}
	accountDropdownMenu(){
		return cy.get('[for="dpdw-login"]');
	}

	singInButton(){
		return cy.get('#dpdw-login-box .btn');
	}
	superMarketCategory(){
		return  cy.get('[href="/groceries/"] span');
	}
	bakerySubCategory(){
		return cy.get('[href="/breads-bakery/"]');
	}
	welcomeLabel(){
		return cy.get('label[for="dpdw-login"]');
	}
	// #### Page Actions ####
	visitHomePage(){
		cy.visit('/');
	}
	NavigateToIdentificationPage(){
		actions.click(this.accountDropdownMenu());
		actions.click(this.singInButton());
	}
	hoverOverSuperMarket(){
		// if (window.Cypress) {
		//     $(window).scroll(() => {
		//       $(window).scrollTop(0);
		//     });
		//   }
		//         cy.get('[href="/groceries/"] span')
		//         .scrollIntoView(false).then($el => {
		//     // The previous reference to the element may be detached from the DOM at this point
		//     // Re-query the element to ensure it is still attached to the DOM
		//     cy.get('[href="/groceries/"]')
		//       .trigger('mouseover')
		//   })
		// cy.wait(5000)
		//   cy.get('div.row').within(()=>{
		this.superMarketCategory().realHover();
		//   })
		// cy.scrollIntoView('[href="/groceries/"] span')
		// .get('[href="/groceries/"] span')
		// .scrollIntoView()
		// .get('[href="/groceries/"] span')
		// .trigger('mouseover')
		// this.superMarketCategory()
		// .scrollIntoView({duration: 0}).trigger('mouseover')
        
		// actions.scrollToBottom(this.superMarketCategory());
		// actions.hoverOnElementUsingMouseEnter(this.superMarketCategory())
		// this.superMarketCategory().realHover()
		// .then((el) => {
		//   el.trigger('mouseover');
		// });


	}
	selectBakerySubCategory(){
		actions.click(this.bakerySubCategory());
	}
	// #### Page Assertions ####
	verifyUserRedirectedToHomePage(){
		assertions.assertPageLoad(Cypress.config().baseUrl);
	}
	verifyLoginWelcomeLabel(userName){
		assertions.assertElementHasText(this.welcomeLabel(), `Hi, ${userName}`);
	}
}
export const homePage = new HomePage();
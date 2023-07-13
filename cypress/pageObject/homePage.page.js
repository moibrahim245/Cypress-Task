import { actions } from "../support/cypressWrapper/actions";

class HomePage{
    closeButton(){
        return cy.get('button[aria-label="newsletter_popup_close-cta"]')
    }
    visitHomePage(){
        cy.visit('/')
    }

    ClosePopUp(){
        actions.click(this.closeButton())
    }
}
export const homePage = new HomePage();
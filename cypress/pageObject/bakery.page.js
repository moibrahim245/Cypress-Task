import { actions } from "../support/cypressWrapper/actions";

class Bakery{
// #### Page Elements ####
productCardByIndex(index){
    return cy.get('article.c-prd').eq(index-1)
}
addToCardButtonWithIndex(index){
    return cy.get('[data-track-onsubmit="addToCart"]').eq(index-1)
}
// #### Page Actions ####
addToCartProductNumber(productNumber){
    actions.hoverOnElement(this.productCardByIndex(productNumber))
    actions.click(this.addToCardButtonWithIndex(productNumber))
}
// #### Page Assertions ####
}
export const bakery = new Bakery();
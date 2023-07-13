class Actions {
    /**
     * click on element with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} customTimeout? string value for time in milliseconds (op)
     * @return Cypress.Chainable object
     */
    click(element, customTimeout = '40000') {
      if (customTimeout) {
        return element.click({timeout: customTimeout});
      } else return element.click();
    }
    /**
     * click on element with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} customTimeout? string value for time in milliseconds (op)
     * @return Cypress.Chainable object
     */
    clickMultiple(element, customTimeout = '40000') {
      if (customTimeout) {
        return element.click( {multiple: true}, {timeout: customTimeout});
      } else return element.click({multiple: true});
    }
  
    /**
     * force click into element using javascript with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} customTimeout? string value for time in milliseconds (op)
     * @return Cypress.Chainable object
     */
    forceClick(element, customTimeout) {
      if (customTimeout) {
        return element.click({timeout: customTimeout, force: true});
      } else return element.click({force: true});
    }
    clickOnPostion(element, postion, customTimeout) {
      if (customTimeout) {
        return element.click({timeout: customTimeout}, postion);
      } else return element.click(postion);
    }
  
    clickAnywhereOutsidePopUp() {
      cy.get('body').click(0, 0);
    }
  
    /**
     * clears element and types text into it with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} txt text to type into element
     * @param {string} customTimeout string value for time in milliseconds
     * @return Cypress.Chainable object
     */
    type(element, txt, customTimeout = '40000') {
      if (customTimeout) {
        return element.clear({timeout: customTimeout}).type(txt, {force: true});
      } else return element.clear().type(txt, {force: true});
    }
    /**
     * type into element without clear it
     * @param {*} element DOM element
     * @param {string} txt text to type into element
     * @returns Cypress.Chainable object
     */
    typeWithoutClear(element, txt) {
      return element.type(txt, {force: true});
    }
    /**
     * clears element and types text into it then clicks enter
     * with custom timeout if necessary
     * @param {*} element  DOM element
     * @param txt
     * @param {string} customTimeout string value for time in milliseconds
     * @return Cypress.Chainable object
     */
    typeAndClickEnter(element, txt, customTimeout) {
      if (customTimeout) {
        return element.clear({timeout: customTimeout}).type(`${txt}{enter}`);
      } else return element.clear().type(`${txt}{enter}`);
    }
  
    /**
     * click on first element of list of elements with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} customTimeout string value for time in milliseconds (op)
     * @return Cypress.Chainable object
     */
    clickFirstElement(element, customTimeout) {
      if (customTimeout) {
        return element.first({timeout: customTimeout}).click();
      } else return element.first().click();
    }
  
    /**
     * clears element read only attribute and its text then types text into it and clicks
     * enter with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} txt text to type into element
     * @param {string} customTimeout string value for time in milliseconds
     * @return Cypress.Chainable object
     */
    typeIntoReadOnlyFieldAndClickEnter(element, txt, customTimeout) {
      if (customTimeout) {
        return element
            .invoke('removeAttr', 'readonly', {timeout: customTimeout})
            .clear({force: true})
            .type(txt)
            .wait(500)
            .type('{enter}');
      } else {
        return element
            .invoke('removeAttr', 'readonly')
            .clear({force: true})
            .type(`${txt}`, {force: true})
            .wait(500)
            .type('{enter}', {force: true});
      }
    }
  
    /**
       * clears element read only attribute and its text then types text into it and clicks
       * enter with custom timeout if necessary
       * @param {*} element  DOM element
       * @param {string} txt text to type into element
       * @param {string} customTimeout string value for time in milliseconds
       * @returns Cypress.Chainable object
       */
    typeIntoReadOnlyField(element, txt, customTimeout) {
      if (customTimeout) {
        return element.invoke('removeAttr', 'readonly', {timeout: customTimeout})
            .type(`${txt}`, {force: true});
      } else {
        return element.invoke('removeAttr', 'readonly').type(`${txt}`, {force: true});
      }
    }
  
    realTypeIntoReadOnlyFieldAndClickEnter(element, txt, customTimeout) {
      if (customTimeout) {
        return element
            .invoke('removeAttr', 'readonly', {timeout: customTimeout})
            .clear({force: true})
            .realType(`${txt}{enter}`, {force: true})
            .wait(500);
      } else {
        return element
            .invoke('removeAttr', 'readonly')
            .clear({force: true})
            .realType(`${txt}{enter}`, {force: true})
            .wait(500);
      }
    }
  
    /**
       * Page Scroll till element is in view-port
       * @param {*} element  DOM element
       */
    scrollElementIntoView(element) {
      element.scrollIntoView({easing: 'linear'});
    }
  
    scrollToBottom(element, timeoutPeriod) {
      element.scrollTo('bottom', {timeout: timeoutPeriod});
    }
  
    scrollToRight(element, timeoutPeriod) {
      element.scrollTo('right', {ensureScrollable: false});
    }
  
    changeViewPort(width, height) {
      height?
      cy.viewport(width, height): cy.viewport(width, 1200);
    }
  
    clear(element) {
      element.clear();
    }
  
    goBack() {
      cy.go('back');
    }
  
    goForward() {
      cy.go('forward');
    }
  
    hoverOnElement(element) {
      element.realHover({position: 'center'});
    }
    /**
     *When display logic is controlled via CSS
     * @param {*} element DOM element
     * @returns Cypress.Chainable object
     */
    hoverOnElementUsingMouseEnter(element) {
      element.trigger('mouseenter');
    }
    forceClearAndType(element, txt, customTimeout) {
      /**
     * clears element and types text into it with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} txt text to type into element
     * @param {string} customTimeout string value for time in milliseconds
     * @return Cypress.Chainable object
     */
      if (customTimeout) {
        return element.clear({force: true}, {timeout: customTimeout}).type(txt, {force: true});
      } else return element.clear({force: true}).type(txt, {force: true});
    }
    forceClear(element) {
      element.clear({force: true});
    }
  
    /**
     * Updates attribute value of the element
     * @param {*} element  DOM element
     * @param {string} attribute name of the element attribute to update
     * @param {string} newValue New Value of the attribute
     * @return Cypress.Chainable object
     */
    updateAttributeValue(element, attribute, newValue) {
      element.invoke('attr', attribute, newValue);
    }
  
    /**
     * Upload File for the element
     * @param {*} element  DOM element
     * @param {string} path path of the file where file exists
     * @return Cypress.Chainable object
     */
    uploadFile(element, path) {
      element.selectFile(path);
    }
  
    doubleClick(element) {
      element.dblclick();
    }
  
    checkFirstNCheckboxes(n, element) {
      [...Array(n).keys()].forEach((index) => {
        element.eq(index).check();
      });
    }
  }
  
  export const actions = new Actions();
  


class Assertions {
    assertElementIsVisible(element) {
      element.should('be.visible', {timeout: 90000, multiple: true});
    }
  
    assertElementIsNotVisible(element) {
      element.should('not.be.visible');
    }
  
    assertElementExist(element) {
      element.should('exist', {timeout: 30000});
    }
  
    assertElementIsNotExist(element) {
      element.should('not.exist');
    }
  
    /**
     *
     * @param $element
     * @param {string} txt
     *
     * @param {Cypress.Chainable<undefined>|JQuery<HTMLElement>} $element
     */
    assertElementMatchText($element, txt) {
      const regText = new RegExp(txt, 'i');
      $element.invoke('text').then((elText) => {
        expect(elText).to.match(regText);
      });
  
      // expect($element.text()).to.contain(txt);
    }
  
    assertElementHasText(element, txt) {
      element.should('contain', txt, {matchCase: false});
    }
  
    assertElementDoseNotHaveText(element, txt) {
      element.should('not.contain', txt, {matchCase: false});
    }
  
    assertButtonIsDisabled(element) {
      element.should('have.attr', 'disabled');
    }
  
    assertButtonIsEnabled(element) {
      element.should('not.have.attr', 'disabled');
    }
  
    assertElementIsDisabled(element) {
      element.should('have.attr', 'disabled');
    }
  
    assertElementIsEnabled(element) {
      element.should('not.have.attr', 'disabled');
    }
  
    assertElementHasAttributeValue(element, attribute, value) {
      element.should('have.attr', attribute, value);
    }
    assertButtonIsActive(element) {
      element
          .invoke('attr', 'class')
          .then((attrValue) => expect(attrValue).to.contain('active'));
    }
    assertElementHasClass(element, classValue) {
      element
          .invoke('attr', 'class')
          .then((attrValue) => expect(attrValue).to.contain(classValue));
    }
    assertElementDoesNotHaveClass(element, classValue) {
      element
          .invoke('attr', 'class')
          .then((attrValue) => expect(attrValue).to.not.contain(classValue));
    }
    assertVisibilityOfImg(element, imgTitle) {
      element
          .find('img')
          .invoke('attr', 'src')
          .then((srcUrl) => {
            expect(srcUrl).to.contains(imgTitle);
          });
    }
    assertAttributeContainValue(element, attributeName, value) {
      element.invoke('attr', attributeName).then(
          (attrValue) => expect(attrValue).to.contain(value),
      );
    }
    assertAttributeNotContainValue(element, attributeName, value) {
      element.invoke('attr', attributeName).then(
          (attrValue) => expect(attrValue).to.not.contain(value),
      );
    }
    assertTxtInTable(txt) {
      cy.contains('tr', txt).should('exist');
    }
  
    assertElementBackground(element, backgroundColor) {
      element.should('have.css', 'background-color', backgroundColor);
    }
  
    assertBtnIsHighlighted(element) {
      element.should('have.class', 'active');
    }
  
    assertElementContainTextHaveLength(element, length) {
      element.invoke('text').then((txt)=>{
        expect(txt.length).to.be.equal(length);
      });
    }
  
    assertElementHeight(element, height) {
      element.should('have.css', 'height', height);
    }
    assertElementHasAttribute(element, attribute) {
      element.should('have.attr', attribute);
    }
    assertElementNotHaveAttribute(element, attribute) {
      element.should('not.have.attr', attribute);
    }
  
    assertElementHasAttributeWithValue(element, attribute, value) {
      element.should('have.attr', attribute, value);
    }
  
    assertExpectedURLPresent(element, url) {
      element.should('have.prop', 'href')
          .and('equal', url);
    }
  
    assertNumberOfElement(element, length) {
      element.its('length').should('eq', length);
    }
  
    assertPageLoad(url) {
      cy.url().should('eq', url);
    }
  
    assertPageUrlContains(urlText) {
      cy.url().should('include', urlText);
    }
  
    assertUrlNotContain(url) {
      cy.url().should('not.contain', url);
    }
  
    assertElementHasValue(element, value) {
      element.should('have.value', value);
    }
  
    assertRadioButtonIsChecked(element) {
      element.should('be.checked');
    }
    assertElementIsEmpty(element) {
      element.find()
          .should(($el) => {
            expect($el.text().trim()).equal('');
          },
          );
    }
  
    assertFieldTextPresent(element, text) {
      element.should(($name) => {
        expect($name.first()).to.contain(text);
      });
    }
  
    assertToastMessageTitle(title) {
      cy.contains(title).should('be.visible');
    }
    assertToastMessageText(txt) {
      cy.contains(txt);
    }
    assertElementHasCssPropertyWithValue(element, property, value) {
      element.
          invoke('css', property).
          should('equal', value);
    }
    assertTowTextAreEquals(text1, text2) {
      cy.wrap(text1).should('eq', text2);
    }
    assertStartTimeIsBeforeEndTime(startTime, endtime) {
      expect(startTime.isBefore(endtime), 'Startime should be always less than endtime').to.be.true;
    }
    assertElementLengthGreaterOrEqualOne(element) {
      element.its('length').then((length)=>{
        expect(length).to.be.gte(1);
      });
    }
  
    assertElementLengthNotBeGreaterThan(element, maxLength) {
      cy.get(element).should('have.length.not.greaterThan', maxLength);
    }
    assertBtnIsNotHighlighted(element) {
      element.should('not.have.class', 'active');
    }
  
    assertElementNotContainDecimalValue(element) {
      element.should('not.match', /\./);
    }
  }
  
  export const assertions = new Assertions();
  
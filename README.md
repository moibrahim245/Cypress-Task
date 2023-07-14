# Cypress Jumia E-commerce Website Automation Tests

This repository contains automated tests for the Jumia e-commerce website, implemented using the Cypress testing framework. The tests cover two scenarios: creating a new account and adding items to the cart.

## Getting started

To run the tests in this repository, you'll need to have Node.js and Cypress installed on your machine. Here's how to get started:

1. Clone this repository to your local machine:https://github.com/moibrahim245/Cypress-Task.git
2. Install the dependencies:

```
npm install
````

3. Run the tests:

````
npm run cy_open
````

This will launch the Cypress Test Runner, where you can select the tests you want to run and watch them execute in real-time.

## Test scenarios

### Scenario 1: Creating a new account

This scenario tests the process of creating a new account on the Jumia website. The test steps are as follows:

1. Open [https://www.jumia.com.eg/ ↗](https://www.jumia.com.eg/) and click on the Account -> Sign in link.
2. Fill in the registration form with valid data and submit the form.
3. Verify that the registration is successful by checking that the user is redirected to the "Home" page.

### Scenario 2: Adding items to the cart

This scenario tests the process of adding items to the cart on the Jumia website. The test steps are as follows:

1. Open [https://www.jumia.com.eg/ ↗](https://www.jumia.com.eg/) and log in using valid credentials.
2. Hover over the "Supermarket" menu and click on the "Bakery" submenu.
3. Add two items to the cart by clicking on the "Add to cart" button for each item.
4. Verify that the items are added to the cart successfully by checking that the cart icon in the header shows a count of "2".
5. Verify that the subtotal is calculated correctly by comparing the expected subtotal (the sum of the prices of the two items) to the actual subtotal displayed in the cart.

## Design patterns

These tests utilize the Page Object Model (POM) design pattern to improve the maintainability and reusability of the test code. The POM separates the page-specific logic and elements from the test logic, making it easier to update the tests when the page structure changes. The POM files can be found in the `cypress/integration/pages` directory.

## Best Practices

The tests in this repository follow best practice coding standards for maintainability and utilize design patterns such as POM to make the code more organized and easy to maintain.

## Conclusion

These automated tests demonstrate how to use Cypress and best practice coding standards to test the Jumia e-commerce website.
```

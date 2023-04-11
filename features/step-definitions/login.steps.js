const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../page-objects/login.page");
const ProductsPage = require("../page-objects/products.page");

Given("I'm on the Login Page", async () => {
  await LoginPage.open();
});

When("set the UserName and Password", async () => {
  await LoginPage.validInputUsername();
  await LoginPage.validPassword();
});

When("set a wrong UserName and Password", async () => {
  await LoginPage.notValidInputUsername();
  await LoginPage.notValidPassword();
});

When("set the UserName", async () => {
    await LoginPage.validInputUsername();
  });

When("hit Enter from keyboard", async () => {
    await browser.keys('Enter');
  });

When("click LoginButton", async () => {
  await LoginPage.clickBtnSubmit();
});

Then("the user is on {string} Page", async (expectedPageName) => {
  const obtainedPageName = await ProductsPage.titleProductPage();
  await expect(obtainedPageName).toEqual(expectedPageName);
});

Then(
  "the system throws the error {string} message",
  async (expectedErrorMessage) => {
    const obtainedErrorMessage = await LoginPage.loginErrorMessage();
    await expect(obtainedErrorMessage).toEqual(expectedErrorMessage);
  }
);

const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../page-objects/login.page");
const ProductsPage = require("../page-objects/products.page");

When("enter to the App", async () => {
  await LoginPage.sucessfullyLogin();
});

Then("the product {string} is present", async (expectedProductName) => {
  let result = false;
  await ProductsPage.fillProductNames();
  const productsName = await ProductsPage.dataList;

  for (const productName of productsName) {
    if (productName == expectedProductName) {
      result = true;
    }
  }

  await expect(result).toEqual(true);
});
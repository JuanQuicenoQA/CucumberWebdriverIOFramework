class LoginPage {
  open() {
    return browser.url("/");
  }

  async validInputUsername() {
    await $("#user-name").setValue("standard_user");
  }

  async validPassword() {
    await $("#password").setValue("secret_sauce");
  }

  async notValidInputUsername() {
    await $("#user-name").setValue("not valid name");
  }

  async notValidPassword() {
    await $("#password").setValue("notvalidpass");
  }

  async clickBtnSubmit() {
    await $('#login-button').click();
  }

  async sucessfullyLogin(){
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $('#login-button').click();
  }

  async loginErrorMessage(){
    const errorMessage = await $("//h3[@data-test='error']").getText();
    return errorMessage;
  }
}

module.exports = new LoginPage();

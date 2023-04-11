Feature: Login

  Scenario: Failed Login into the WebApp due to wrong UserName

    Given I'm on the Login Page
    When set a wrong UserName and Password
    And click LoginButton
    Then the system throws the error "Epic sadface: Username and password do not match any user in this service" message


  Scenario: Failed Login into the WebApp due to not provided Password

    Given I'm on the Login Page
    When set the UserName
    And hit Enter from keyboard
    Then the system throws the error "Epic sadface: Password is required" message


  Scenario: Successfully Login into the WebApp

    Given I'm on the Login Page
    When set the UserName and Password
    And click LoginButton
    Then the user is on "Products" Page


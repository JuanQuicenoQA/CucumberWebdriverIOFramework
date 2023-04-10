Feature: Products

  Scenario: Specific product should be present

    Given I'm on the Login Page
    When enter to the App
    Then the user is on "Products" Page
    And the product "Sauce Labs Fleece Jacket" is present
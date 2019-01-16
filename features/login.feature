Feature: Searching for TestCafe on GitHub

  I want to login in Linkedin

  Scenario: Login with an existing user
    Given I open the Linkedin page
    When I am typing my login "rela_email@gmail.com" and password "rela_password" on Linkedin
    And I am pressing enter key on Linkedin
    Then I should be inside linkedin


  Scenario: Login with an user not present
    Given I open the Linkedin page
    When I am typing my login "test@gmail.com" and password "test" on Linkedin
    And I am pressing enter key on Linkedin
    Then I should see a id error "error-for-password" on Linkedin as "Esa no es la contraseña correcta. Vuelve a intentarlo o solicita una nueva."


Scenario: Login with only a email
    Given I open the Linkedin page
    When I am typing my login "test@gmail.com" and password " " on Linkedin
    And I am pressing enter key on Linkedin
    Then I should be in the login of Linkedin

Scenario: Login with only a password
    Given I open the Linkedin page
    When I am typing my login " " and password "password" on Linkedin
    And I am pressing enter key on Linkedin
    Then I should be in the login of Linkedin

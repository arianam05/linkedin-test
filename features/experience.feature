Feature: Searching for TestCafe on GitHub

  I want to add a new experience in Linkedin

  Scenario: Search a profile a linkedin
    Given I open the Linkedin page
    When I am typing my login "real_email_linkedin@gmail.com" and password "rela_password" on Linkedin
    And I am pressing enter key on Linkedin
    And I go to my profile on Linkedin
    And I click in more experience on Linkedin
    And I click in more position on Linkedin
    And I fill position title "esta empresa no existe", company "agrego cualquier cargo", month "enero", year "2018", position headline "una position"
    And I click save my experience on Linkedin
    Then I should see a new experience "esta empresa no existe"

  Scenario: Add new experience without correct data
    Given I open the Linkedin page
    When I am typing my login "suarezcumare@gmail.com" and password "t0N!.27LN" on Linkedin
    And I am pressing enter key on Linkedin
    And I go to my profile on Linkedin
    And I click in more experience on Linkedin
    And I click in more position on Linkedin
    And I click save my experience on Linkedin
    Then I should see a id error "title-error"

  Scenario: Add new experience without correct data
    Given I open the Linkedin page
    When I am typing my login "suarezcumare@gmail.com" and password "t0N!.27LN" on Linkedin
    And I am pressing enter key on Linkedin
    And I go to my profile on Linkedin
    And I click in more experience on Linkedin
    And I click in more position on Linkedin
    And I fill position title "esta empresa no existe", company "agrego cualquier cargo", month "marzo", year "2019", position headline "una position"
    And I click save my experience on Linkedin
    Then I should see a id error "time-period-error"
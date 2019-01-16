Feature: Searching for TestCafe on GitHub

  I want to search a profile in Linkedin

  Scenario: Search a profile a linkedin
    Given I open the Linkedin page
    When I am typing my login "suarezcumare@gmail.com" and password "t0N!.27LN" on Linkedin
    And I am pressing enter key on Linkedin
    And I search a profile of "Ariana Mendez" on Linkedin
    And I am pressing enter key on Linkedin
    And I select the first user on list
    Then I should see a profile

  Scenario: Search a profile a linkedin without results
    Given I open the Linkedin page
    When I am typing my login "suarezcumare@gmail.com" and password "t0N!.27LN" on Linkedin
    And I am pressing enter key on Linkedin
    And I search a profile of "asd asd asd asd aa aasad asdasd asdasd as dasd asd" on Linkedin
    And I am pressing enter key on Linkedin
    And I should not see results

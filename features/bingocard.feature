Feature: Bingo Card
  As a game player
  I want to draw a custom bingo card
  so I can play Car Bing

  Background:
    When I request a new card at "/"
    Then I should receive a car bingo card

  @current
  Scenario: Unique Images
    And No two images should be the same

  Scenario: Unique Card
    When I refresh the card
    Then I should receive a different card

  Scenario: Interactive Card
    When I click on a card cell
    Then The cell should be covered by a bingo chip
    When I click on the same card cell
    Then The bingo chip should be removed

  Scenario: Responsive Card
    Given my screen is:
      | height | width |
      | 500px  | 800px |
      | 340px  | 200px |
      | 1200px | 1200px |
    Then all images should fit on the screen without scrolling

require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup

    @card1 = Card.new("Clubs", 1)
    @card2 = Card.new("Hearts", 5)

    @cardgame = CardGame.new(@card1, @card2)

    @cards = [@card1, @card2]

  end

  def test_check_for_ace
    result = @cardgame.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_highest_card
    result = @cardgame.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end

  def test_cards_total
    result = @cardgame.cards_total(@cards)
    assert_equal("You have a total of 6", result)
  end

end

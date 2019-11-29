require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup

    @cardgame = CardGame.new

    @card1 = Card.new("Clubs", 1)
    @card2 = Card.new("Hearts", 5)

    # @cards = [@card1, @card2]

  end

  def test_check_for_ace(card1, card2)
    result = check_for_ace(@card1)
    assert_equal(true, result)
  end

  # def test_highest_card
  #   result = highest_card(@card1, @card2)
  #   assert_equal(false, result)
  # end
  #
  # def test_cards_total
  #   result = cards_total(@cards)
  #   assert_equal(6, result)
  # end

end

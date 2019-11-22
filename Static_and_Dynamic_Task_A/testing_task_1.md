### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

# there is an extra empty line here, should be deleted to minimise white space which has no purpose
  def checkforAce(card)
    # function name should be in snake case, so check_for_ace
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # dif should be def, there should be a comma between card1 and card2
  if card1.value > card2.value
    return card
    # card should be card1
  else
    return card2
  end
end
end
# this end is unnecessary and should be deleted

def self.cards_total(cards)
  total
  # total should be total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total
    # total should be total.to_s
  end
end
# this function should be within the CardGame class, not underneath
```

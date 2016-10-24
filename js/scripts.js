var deckOfCards = []
var cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
var suits = ["Spades", "Hearts", "Clubs", "Diamonds"]
var tempSuit;

$(document).ready(function() {
  suits.forEach(function(suit) {
    tempSuit = cards.map(function(card) {
      return (card + " of " + suit);
    });
    deckOfCards.push(tempSuit);
  });

  deckOfCards.forEach(function(suit) {
    suit.forEach(function(card) {
      $("#outputList").append("<li>" + card + "</li>");
    })
  });
});

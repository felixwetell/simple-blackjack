var cardColour = ["A", "B", "C", "D"];
var dealerHand = [];
var playerHand = [];

// This function builds the whole deck, one of each card with each colour and value
function deckBuilder() {
    var generated_deck = [];
   for(var i = 0; i < 4; i++) {
       var colour = cardColour[i];
       for(var a = 1; a < 13; a++) {
           var cardValue = a;
           generated_deck.push(colour+":"+cardValue);
       }
   }
    return generated_deck;
}

var deck = deckBuilder();

// This function removes a random card from the deck and returns it
function cardBuilder() {
    if(deck.length<=0) {
        return false;
    }
    var index = Math.floor(Math.random()*deck.length);
    return deck.splice(index,1)[0];
}

// This function
function startHand() {
    for(var i = 0; i < 2; i++) {
        dealerHand.push(cardBuilder());

    }
    for(var i = 0; i < 2; i++) {
        playerHand.push(cardBuilder());
    }
}

function hit() {
    playerHand.push(cardBuilder());

    dealerHand.push(cardBuilder());
    if(count(playerHand)>21) {
        console.log("Player lost");
        console.log("Dealer won");

    }
    else if(count(playerHand)==21) {
        console.log("Player won");
        console.log("Dealer lost");
    }
}

function stand() {
    dealerHand.push(cardBuilder());
    count(dealerHand);
    if(count(dealerHand)>21) {
        console.log("Player won");
        console.log("Dealer lost");
    }
    else if(count(dealerHand)==21) {
        console.log("Player lost");
        console.log("Dealer won");
    }
}

function count(hand) {
    var sum = 0;
    for(var i = 0; i < hand.length; i++){
        sum += (parseInt(hand[i].split(":")[1]))
    }
    return sum;
}

function checkPlayerHand(hand){
    var counter = count(hand);
    if(counter == 21){
        console.log("Player won");
        console.log("Dealer lost");
    }
    else if(counter > 21) {
        console.log("Player lost");
        console.log("Dealer won");
    }
}

function checkDealerHand(hand){
    var counter = count(hand);
    if(counter == 21){
        console.log("Player lost");
        console.log("Dealer won");
    }
    else if (counter > 21){
        console.log("Player won");
        console.log("Dealer lost");
    }
}


startHand();
console.log("Player: "+count(playerHand));
console.log("Dealer: "+count(dealerHand));

checkPlayerHand(playerHand);
checkDealerHand(dealerHand);
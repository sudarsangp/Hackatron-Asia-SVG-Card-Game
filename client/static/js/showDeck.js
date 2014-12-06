var cardDeck = $("#cardDeck").playingCards();

var hand = [];
var player1Hand =[];
var player2Hand =[];
var drawnCards = [];
var showError = function(msg){
    $('#error').html(msg).show();
    setTimeout(function(){
        $('#error').fadeOut('slow');
    },3000);
}
var showHand = function(){
    var el = $('#yourHand');
    el.html('');
    el.append(hand[hand.length-1].getHTML());
}
var doDrawCard = function(){
    var c = cardDeck.draw();
    if(!c){
        showError('no more cards');
        return;
    }
    hand[hand.length] = c;
    //cardDeck.spread();
    showHand();
}
var doShuffle = function(){
    cardDeck.shuffle();
}
var doPlayerDrawCard = function(playerHand){
    var c = cardDeck.draw();
    playerHand[playerHand.length] = c;
    //showHand();
}
var showP1Hand = function(){
    var el = $('#player1Hand')
    el.html('');
    for(var i=0;i<player1Hand.length;i++){
        el.append(player1Hand[i].getHTML());
    }
}
var showP2Hand = function(){
    var el = $('#player2Hand')
    el.html('');
    for(var i=0;i<player2Hand.length;i++){
        el.append(player2Hand[i].getHTML());
    }
}
function closeCard() {
    var closeCardImage = document.createElement("div");
    closeCardImage.style.width="76px";
    closeCardImage.style.height="100px";
    closeCardImage.style.backgroundImage="url('static/img/facedowncard.jpg')";
    var el = $('#yourHand');
    el.html('');
    el.append(closeCardImage);
}
var startGame = function(){
    doShuffle();

    doPlayerDrawCard(player1Hand);
    doPlayerDrawCard(player1Hand);
    doPlayerDrawCard(player1Hand);
    doPlayerDrawCard(player2Hand);
    doPlayerDrawCard(player2Hand);
    doPlayerDrawCard(player2Hand);

    showP1Hand();
    showP2Hand();
}
$('#startGame').click(startGame);
$('#draw').click(doDrawCard);

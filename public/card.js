document.addEventListener('DOMContentLoaded', doStuff);

function doStuff() {
    var card = document.getElementsByClassName('card')[0];
    var frontFace = document.getElementsByClassName('front')[0];
    var happyAnn = document.getElementsByClassName('happyAnnHeader')[0];
    var confetti = document.getElementsByClassName('confetti')[0];

    card.open = false;
    card.addEventListener('click', toggleCardState);

    function toggleCardState() {
        card.open = !card.open;
        frontFace.className = card.open ? 'front face hidden' : 'front face';
        card.style.left = card.open ? '15%' : '0%';
        happyAnn.className = card.open ? 'happyAnnHeader tada' : 'happyAnnHeader';
        confetti.className = card.open ? 'confetti' : 'confetti hidden';  
    }

}

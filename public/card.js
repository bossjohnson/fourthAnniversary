document.addEventListener('DOMContentLoaded', doStuff);

function doStuff() {
    var card = document.getElementsByClassName('card')[0];
    card.open = false;
    card.addEventListener('click', adjustPosition);

    function adjustPosition() {
        card.open = !card.open;
        card.style.left = card.open ? '15%' : '0%';
    }
}

let card_online = document.querySelector('.cards-online');
let other_col = document.querySelector('.other-col');
let online_games = document.querySelector('.online-games');

let card = document.querySelector('.card-video');


duplicateCard(3, card, card_online)
duplicateCard(4, card, other_col);
duplicateCard(4, card, online_games);

let card_image = document.querySelectorAll('.row .card-video .card-img-top');

for (let i = 0; i < card_image.length; i++) {
    card_image[i].removeAttribute('src');
    card_image[i].setAttribute('src', `./images/cards/${i+1}.jpg`)    
}


function duplicateCard(cant_card, cardOrigin, container) {
    for (let i = 1; i <= cant_card; i++) {
        let card_res = cardOrigin.cloneNode(true);
        container.appendChild(card_res);
    }
}

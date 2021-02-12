let card_online = document.querySelector('.cards-online');
let other_col = document.querySelector('.other-col');

let card = document.querySelector('.card-video');


for (let i = 1; i < 4; i++) {
    let card_2 = card.cloneNode(true);
    card_online.appendChild(card_2);
}

for (let i = 0; i < 4; i++) {
    let card_3 = card.cloneNode(true);
    other_col.appendChild(card_3);
}

let card_image = document.querySelectorAll('.row .card-video .card-img-top');

for (let i = 0; i < card_image.length; i++) {
    card_image[i].removeAttribute('src');
    card_image[i].setAttribute('src', `./images/cards/${i+1}.jpg`)    
}

console.log(card_image.length);

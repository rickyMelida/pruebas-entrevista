let menu_user = document.querySelector('.menu-user');
let item_menu_user = document.querySelector('#item-menu-user');

let section_notifications = document.querySelector('.section-notifications');
let notifications = document.querySelector('.notification-all');

let icons = ['fa-users', 'fa-comments', 'fa-heart', 'fa-coins', 'fa-store', 'fa-calendar', 'fa-envelope-open'];
let names_items = ['Privilegiados', 'Comentarios', 'Me gusta', 'Propinas', 'Tienda', 'Calendarios', 'Buzon de sugerencias'];

let first_icon_point = document.querySelector('.f-icon');




for (let i = 0; i < icons.length; i++) {
    let new_item = item_menu_user.cloneNode(true);
    new_item.childNodes[1].classList.remove('fa-th-large');
    new_item.childNodes[1].classList.add(icons[i]);
    new_item.childNodes[2].nodeValue = names_items[i];
    menu_user.appendChild(new_item);
}

for (let j = 0; j < 7; j++) {
    let new_element = notifications.cloneNode(true);
    section_notifications.appendChild(new_element);
}

// first_icon_point.removeChild(first_icon_point.childNodes[0]);
function duplicate_and_modify_icons(element_origin, new_icon) {

}
let menu_user = document.querySelector('.menu-user');
let item_menu_user = document.querySelector('#item-menu-user');

let section_notifications = document.querySelector('.section-notifications');
let notifications = document.querySelector('.notification-all');

let icons = ['fa-users', 'fa-comments', 'fa-heart', 'fa-coins', 'fa-store', 'fa-calendar', 'fa-envelope-open'];
let names_items = ['Privilegiados', 'Comentarios', 'Me gusta', 'Propinas', 'Tienda', 'Calendarios', 'Buzon de sugerencias'];
let old_icon = 'fa-th-large';

let first_icon_point = document.querySelector('.f-icon');



duplicate_and_modify_icons(icons.length, item_menu_user, menu_user, old_icon, icons, names_items);
duplicate_element(7, notifications, section_notifications);

//Eliminamos el icono punto del primer elemento
first_icon_point.removeChild(first_icon_point.childNodes[0]);

//Agregamos margen a la derecha con bootstrap en el elemento que no tiene el icono punto
let first_image_notifications = document.querySelector('.notification-all .publications .my-fhoto img');
first_image_notifications.classList.remove('mr-2');
first_image_notifications.classList.add('mr-4');

let last_notification_box = document.querySelectorAll('.menu-user .box-notifications .count-notifications');
last_notification_box[7].classList.add('last-notification-box');





function duplicate_and_modify_icons(number_of_element, element_origin, container,old_icon ,new_icon, text) {
    for (let i = 0; i < number_of_element; i++) {
        let new_item = element_origin.cloneNode(true);
        new_item.childNodes[1].classList.remove(old_icon);
        new_item.childNodes[1].classList.add(new_icon[i]);
        new_item.childNodes[2].nodeValue = text[i];
        container.appendChild(new_item);
    }
}

function duplicate_element(number_of_element, element_origin, container) {
    for (let j = 0; j < number_of_element; j++) {
        let new_element = element_origin.cloneNode(true);
        new_element.classList.remove('bg-light');
        container.appendChild(new_element);
    }
}
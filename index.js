var modal = document.querySelector(`.modal`);
var modal__text_colse = document.querySelector(`.modal__text_colse`);

var main__items_item = document.querySelector(`.main__items`);
var nav = document.querySelector(`.nav ul`);
var section__right_items = document.querySelector(`.section__right_items`);
var news = document.querySelector(`.news`);

section__right_items.addEventListener(`click`, function() {
    modal.classList.toggle(`modal__toggle`);
})

news.addEventListener(`click`, function() {
    modal.classList.toggle(`modal__toggle`);
})

main__items_item.addEventListener(`click`, function() {
    modal.classList.toggle(`modal__toggle`);
})

nav.addEventListener(`click`, function() {
    modal.classList.toggle(`modal__toggle`);
})

modal__text_colse.addEventListener(`click`, function() {
    modal.classList.remove(`modal__toggle`);
})
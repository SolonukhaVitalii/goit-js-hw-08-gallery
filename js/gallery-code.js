import images from './gallery-items.js';
console.log(images);

const galleryContainer = document.querySelector('.gallery');
const reducedString = images.reduce(( acc, { preview, original, description }) => {
	acc += `<li class="gallery__item"><a class="gallery__link"href="${original}"><img class="gallery__image"src="${preview}"data-source="${original}"alt="${description}"/></a></li>`;
	return acc;
},
   '');
console.log(reducedString);

galleryContainer.insertAdjacentHTML("beforeend", reducedString);
galleryContainer.addEventListener('click', onClick);

const lightBox = document.querySelector('.js-lightbox');

const openModal = document.querySelector('.lightbox__image');
openModal.addEventListener('click', onOpenModal);
function onOpenModal() {
	window.addEventListener('keydown', onEscKeyPress);
	lightBox.classList.add('is-open');
}

const closeModal = document.querySelector('[data-action="close-lightbox"]');
closeModal.addEventListener('click', onCloseModal);
function onCloseModal() {
	window.addEventListener('keydown', onEscKeyPress);
	lightBox.classList.add('is-close');
    lightBox.removeAttribute('src');
    lightBox.removeAttribute("alt");
}

function onClick(evt) {
	console.log(evt.target);
}

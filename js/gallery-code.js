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
function onClick(evt) {
	evt.preventDefault();
	onOpenModal();
	openModal.src = evt.target.dataset.source;
}

const lightBox = document.querySelector('.js-lightbox');
const openModal = document.querySelector('.lightbox__image');
const closeModal = document.querySelector('[data-action="close-lightbox"]');
closeModal.addEventListener('click', onCloseModal);
function onOpenModal() {
	lightBox.classList.add('is-open');
}

function onCloseModal() {
	lightBox.classList.remove('is-open');
    lightBox.removeAttribute('src');
    lightBox.removeAttribute("alt");
}
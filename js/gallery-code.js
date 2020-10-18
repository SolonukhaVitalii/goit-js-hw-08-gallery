import images from './gallery-items.js';
console.log(images);

/*const galleryContainer = document.querySelector('.gallery');
const reducedString = images.reduce(acc,{preview, original, description})=>{
  acc +=
  '<li class="gallery__item"><a class="gallery__link"href="${original}"><img class="gallery__image"src="${preview}"data-source="${original}"alt="${description}"/></a></li>';
  return acc});
  galleryContainer.insertAdjacentHTML('afterbegin', reducedString);
  */


  
 /* const galleryRef = document.querySelector('.gallery');
  
  images.forEach(el =>
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<li class="gallery__item"><a class="gallery__link"href="${original}"><img class="gallery__image"src="${preview}"data-source="${original}"alt="${description}"/></a></li>`,
    ),
  );
  */

 imagesEl.append(...images.map(el => {
  const liRef = document.createElement("li");
  liRef.textContent = el;
  return liRef;});
const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const refs = {
  galleryList: document.querySelector('.gallery'),
  modalW: document.querySelector('.lightbox'),
  currentImg: document.querySelector('.gallery__image'),
  closeBtn: document.querySelector('.lightbox__button'),  
  modalImg: document.querySelector('.lightbox__image'),
  modalOverlay: document.querySelector('.lightbox__overlay'),
  linkImg: document.querySelector('.gallery__link')
}



// добавляет разметку
const addsGalleryItems = galleryItems.map(({preview, description, original}) => {  
  return `<li class = "gallery__item"><a class ="gallery__link" href ='${original}'>
  <img class = 'gallery__image' src = '${preview}' alt = '${description}'/></a></li>`;
}).join(' ');

refs.galleryList.insertAdjacentHTML('afterbegin', addsGalleryItems);


const onOpenModal = event =>{
  event.preventDefault();   
  window.addEventListener("keydown", onEscExit);

  if (event.target.nodeName !== "IMG"){
    return;
  } refs.modalW.classList.add('is-open');
  refs.modalImg.src = event.target.parentNode.href; 
  refs.modalImg.alt = event.target.alt;
}
refs.galleryList.addEventListener('click', onOpenModal);



const onCloseModal = event => {
  window.removeEventListener("keydown", onEscExit);
  const isHasSpecClass = event.target.classList.contains('lightbox__overlay');
    
  if (event.target.nodeName === "BUTTON" || isHasSpecClass){    
   refs.modalW.classList.remove('is-open');
   refs.modalImg.src =  ' '; 
   refs.modalImg.alt = ' ';
  }
}
refs.closeBtn.addEventListener('click', onCloseModal);
refs.modalOverlay.addEventListener('click', onCloseModal);




function onEscExit(e){  
  if(e.code === 'Escape'){
  refs.modalW.classList.remove('is-open');
  refs.modalImg.src =  ' '; 
  refs.modalImg.alt = ' ';
  }
}
// window.addEventListener("keydown", onEscExit);









// стрелки
// const onArrowAction = function flipGallery(e) {   
//   if(e.code === 'ArrowRight'){
//     li.nextSibling  
//     console.log(e.code)
//   }else  if(e.code === 'ArrowLeft'){
//     li.previousSibling    
// }
// }
// refs.galleryList.addEventListener('click', onArrowAction);


// ***********
//Закрытие модального окна по клику на div.lightbox__overlay.
// const onOverlayExit = e => {
// const isHasSpecClass = e.target.classList.contains('lightbox__overlay');
//   if (!isHasSpecClass){
//     return;
//   } refs.modalW.classList.remove('is-open');
//   refs.modalImg.src =  ' '; 
//   refs.modalImg.alt = ' ';
// }
// refs.modalOverlay.addEventListener('click', onCloseModal);









// import galleryItems from './gallery-items.js';
// добавляет элементы в галлерею
//  const createGallery = image => {
//   const galleryItem = document.createElement('li');
//   const galleryLink = document.createElement('a');
//   const galleryImg = document.createElement('img');
//   galleryItem.classList.add('gallery__item');
//   galleryLink.classList.add('gallery__link');
//   galleryImg.classList.add('gallery__image');

//   galleryItem.appendChild(galleryLink);
//   galleryLink.href = image.original;

//   galleryLink.appendChild(galleryImg);
//   galleryImg.src = image.preview;
//   galleryImg.dataset.sourse = image.original;
//   galleryImg.alt = image.description;
   
//   return galleryItem;   
// };

// const galleryElement = galleryItems.map(image => createGallery(image));
// galleryList.append(...galleryElement);


// *****  










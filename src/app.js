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


// открывает модальное окно
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


// ========закрывает модальное окне крестиком или оверлеем
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


// ===закрытие модального окна клавишей Esc
function onEscExit(e){ 
  if(e.code === 'Escape'){
  refs.modalW.classList.remove('is-open');
  refs.modalImg.src =  ' '; 
  refs.modalImg.alt = ' ';
  }
}








const findImageIndex = () => {
  const src = document.querySelector('.lightbox__image').src; 
  return  galleryItems.findIndex(image => image.original === src);
};
console.log(findImageIndex());

const changeImg = imageIndex => {
  const el = galleryItems.find(function (value, index){
    if (imageIndex === index) 
      return value;
    });
    document.querySelector('.lightbox__image').src = el.original;
};

const maxLength = galleryItems.length;

const showPrevious = () => {
  let imageIndex = findImageIndex();
  imageIndex <= 0 ? (imageIndex = maxLength - 1) : imageIndex--;
  changeImg(imageIndex);
}

  const showNext = () => {
    let imageIndex = findImageIndex();
    let nextImageIndex = imageIndex + 1;
    nextImageIndex >= maxLength ? (imageIndex = 0) : imageIndex +=1;
    changeImg(imageIndex);
  }

  function onPressArrowRight(e){
    if(e.code === 'ArrowRight'){
      showNext();
    }
    if(e.code === 'ArrowLeft'){
      showPrevious();
    }
  }
  window.addEventListener("keydown", onPressArrowRight);





// не работает
// const arrayOriginal= galleryItems.filter(el => el.original);
// const arrayElements = [...arrayOriginal];
// // console.log(arrayElements[0]);

// function itaration (){
//   for (let i = 0; i < arrayElements.length, i += 1;) {    
//     if (arrayElements[i]) {
//        return arrayElements[i] +=1;
//   }else if(arrayElements[8]) {    
//     return arrayElements[0];  
//   }
// }
// }

// const onArrowAction = function flipGallery(e) {    
//   if (e.code === 'ArrowRight'){
//     itaration();
//   } 
// }
// window.addEventListener("keydown", onArrowAction); 








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










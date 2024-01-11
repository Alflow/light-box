'use strict';

//const and vars

const images = document.querySelectorAll(`.img`);
const lightbox = document.querySelector(`.lightbox`);
const big = document.querySelector(`.big-img`);
const closeButton = document.querySelector(`.close`);


// functions
const closeBtnHandler = () => lightbox.classList.remove(`isActive`);

const imagesHandler = (index) =>{
    lightbox.classList.add(`isActive`);
    big.src = images[index].src;
}




//When clicked on .img
    //add class "isActive" to .lightbox
    //add src attribute to .big from the .img src attribute
images.forEach((eachImg, index)=>{
    images[index].addEventListener(`pointerdown`,()=>{
     imagesHandler(index);
    })
})


//When clicked on close X
closeButton.addEventListener(`click`, closeBtnHandler );
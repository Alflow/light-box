'use strict';

//const and vars

const images = document.querySelectorAll(`.img`);
const lightbox = document.querySelector(`.lightbox`);
const big = document.querySelector(`.big-img`);
const closeButton = document.querySelector(`.close`);

//When clicked on .img
    //add class "isActive" to .lightbox
    //add src attribute to .big from the .img src attribute

images.forEach((eachImg, index)=>{
    images[index].addEventListener(`click`,()=>{
        lightbox.classList.add(`isActive`)
        big.src = images[index].src
    })
})


//When clicked on close X
closeButton.addEventListener(`click`,()=>{
    lightbox.classList.remove(`isActive`);
 } );
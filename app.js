let arrowLeft = document.querySelector('.arrow-left');

let arrowRight = document.querySelector('.arrow-right');

let dot1 = document.querySelector('#dot1');

let dot2 = document.querySelector('#dot2');

let dot3 = document.querySelector('#dot3');

let slide1 = document.querySelector('#slide1');

let slide2 = document.querySelector('#slide2');

let slide3 = document.querySelector('#slide3');

let showSlide1 = () => {

    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
    slide1.classList.add('active');
};

let showSlide2 = () => {

    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
    slide2.classList.add('active');
};

let showSlide3 = () => {

    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
    slide3.classList.add('active');
};

dot1.addEventListener('click', showSlide1);
dot2.addEventListener('click', showSlide2);
dot3.addEventListener('click', showSlide3);


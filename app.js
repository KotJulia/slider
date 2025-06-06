let activeSlideNumber = 1;

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide' + slideNumber).classList.add('active');
    activeSlideNumber = slideNumber;
};

let showNextSlide = () => {
    if(activeSlideNumber > 5){
        activeSlideNumber = 1;
    }
    else {
        activeSlideNumber += 1;
    }
    showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {

    if(activeSlideNumber < 2){
        activeSlideNumber = 6;
    }
    else {
        activeSlideNumber -= 1;
    }
    showSlide(activeSlideNumber);
};

for( let i = 1; i <= 6; i++){
    let showSlideI = () => {
        activeSlideNumber = i;
        showSlide(i);

    };
    document.querySelector('#dot' + i).addEventListener('click', showSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);

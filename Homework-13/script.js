const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = [...document.getElementsByClassName('img')]

let currentSlide = 0;

const hiddenImgOnLoad = () => {
    const slidesToHidden = slides.slice(1);

    slidesToHidden.forEach((slide) => {
        slide.classList.add('none');
    });
}

window.addEventListener('DOMContentLoaded', hiddenImgOnLoad)


const showPrevImg = () => {
    slides[currentSlide].classList.add('none');
    
    if (currentSlide === 0) {
        slides[slides.length-1].classList.remove('none')
        currentSlide = slides.length - 1
    } else {
        slides[currentSlide - 1].classList.remove('none')
        slides[currentSlide].classList.add('none')
        currentSlide--
    }
}

const showNextImg = () => {
    slides[currentSlide].classList.add('none');
    
    if (currentSlide === slides.length - 1) {
        slides[0].classList.remove('none')
        currentSlide = 0
    } else {
        slides[currentSlide + 1].classList.remove('none')
        currentSlide++
    }
}



prevButton.addEventListener('click', showPrevImg);
nextButton.addEventListener('click', showNextImg);
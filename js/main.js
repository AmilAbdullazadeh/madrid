const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')
const slides = document.querySelectorAll('.slide')

let currentSlide = 0
let latestSlide = slides.length - 1


nextBtn.addEventListener('click', () => {
    if(currentSlide === latestSlide){
        currentSlide = 0
    } else {
        currentSlide += 1
    }

    //100 % slide move
    slides.forEach((slide, idx) =>{
        slide.style.transform = 'translateX(' + (100 * (idx - currentSlide)) + '%)'
    })
})


prevBtn.addEventListener('click', () => {
    if (currentSlide === 0){
        currentSlide = latestSlide
    } else {
        currentSlide -= 1
    }

    //-100 % slide move
    slides.forEach((slide, idx) => {
        slide.style.transform = 'translateX(' + (100 * (idx - currentSlide)) + '%)'
    })
})


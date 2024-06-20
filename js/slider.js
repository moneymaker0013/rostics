const slides = [
    {
        number: '01',
        title: 'Чикен',
        description: 'Доставка за ваши деньги и наши 10 минут',
        image: 'img/kfc.jpg'
    },
    {
        number: '02',
        title: 'Ролл-мамс',
        description: 'Забыли заплатить? Платит официант',
        image: 'img/slide_2.jpg'
    },
    {
        number: '03',
        title: 'Чизбургер',
        description: 'Один друг - 5 бургеров',
        image: 'img/slide3.jpg'
    }
];

let currentIndex = 0;

function showSlide(index) {
    currentIndex = index;
    
    // Update text and image content
    const slideNumber = document.getElementById('slide-number');
    const slideTitle = document.getElementById('slide-title');
    const slideDescription = document.getElementById('slide-description');
    const slideImage = document.getElementById('slide-image');

    slideNumber.innerText = slides[index].number;
    slideTitle.innerText = slides[index].title;
    slideDescription.innerText = slides[index].description;
    slideImage.src = slides[index].image;

    void slideImage.offsetWidth;

    slideImage.style.opacity = 1;

    const buttons = document.querySelectorAll('.point_slide');
    buttons.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000);

showSlide(0);

document.getElementById('slide-image').addEventListener('load', function() {
    this.style.opacity = 1;
});
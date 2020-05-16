
const images = document.querySelectorAll('img');

// отслеживает отступы и порог срабатывания
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

// функция в качестве обработчика
// ф-я получает изображения и сам объкт observer
function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        // свойство intersectionRatio показывает на сколько отслеживаемый объект пересекает видимую область
        console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
            // если больше нуля запускаем функцию loadImage и передаем отслеживаемый объект
            loadImage(myImgSingle.target);
        }
    })
}

function loadImage(image) {
    // вытаскиваем атрибут data и присваиваем src
    image.src = image.getAttribute('data');
}

// создали объект IntersectionObserver
const observer = new IntersectionObserver(handleImg, options);

// observe следит зашла ли картинка в видимую область
images.forEach(img => {
    observer.observe(img);
})
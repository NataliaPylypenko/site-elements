let slides = document.querySelectorAll('.slide-single'); // получаем элементы по класу
console.log(slides);
let slider = [];

for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src; // записываем в масив путь к картинке
    slides[i].remove(); // удаляем элементы
}
console.log(slider);

let step = 0; // шаг
let offset = 0; // смещение изображения

function draw() { //функция отрисовки - создает два необходимых изображения
    let img = document.createElement('img'); // создаем картинку
    img.src = slider[step]; // присваиваем картинке ссылку
    img.classList.add('slide-single'); // добавляем клас
    img.style.left = offset*450 + 'px'; // задаем смещение картинке
    document.querySelector('#slide').appendChild(img); // получаем блок и интегрируем в него картинку
    if (step + 1 == slider.length) { //наращиваем шаг
        step = 0;
    }
    else {
        step++;
    }
    offset = 1;
}

function left() { // коллекция видимых на странице картинок
    // что бы правильно отработала функция setTimeout - отключаем событие клик
    document.onclick = null;
    let slidesVisible = document.querySelectorAll('.slide-single');
    let offsetVisible = 0;
    for (let i = 0; i < slidesVisible.length; i++) {
        slidesVisible[i].style.left = offsetVisible*450 - 450 + 'px';
        offsetVisible++;
    }
    setTimeout(function () { // удаляем нулевой элемент через какоето время после сдвига
        slidesVisible[0].remove();
        draw();
        document.onclick = left; // после того как эффект отрисовался включаем заново событие клик
    }, 1000);
}

draw();draw();
document.onclick = left;



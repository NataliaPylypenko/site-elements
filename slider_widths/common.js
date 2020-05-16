let row = document.querySelector('.row');
let slides = document.querySelectorAll('.slide');  // масив со слайдами
let sliderWidth = document.querySelector('.slider').offsetWidth;  // ширина слайдера
// console.log(sliderWidth);
let widthArray = [0];  // масив с ширинами слайдов
let lineWidth = 0;  // ширина блока .line
let offset = 0;  // сдвиг для слайда
let step = 0;  // шаги сдвига
let balance = 0; // остаток разницы между шириной row и шириной слайдера

for (let i = 0; i < slides.length; i++) {
    widthArray.push(slides[i].offsetWidth);
    lineWidth += slides[i].offsetWidth;
}
row.style.width = lineWidth+'px';
// console.log(widthArray);

document.onclick = function () {
    balance = lineWidth - sliderWidth - (offset + widthArray[step]);
    if (balance >= 0) {
        offset = offset + widthArray[step]; // рассчитываем сдвиг слайда с помощью масива с ширинами слайдов
        row.style.left = -offset+'px';
    }
    else {
        row.style.left = -(lineWidth - sliderWidth) + 'px';
        offset = 0;
        step = -1;
    }

    if (step + 1 == slides.length) {
        step = 0;
        offset = 0;
    }
    else {
        step ++;
    }
}

// вычисляем остаток доступный для прокрутки
// берем ширину row, ширину слайдера и найти их разницу




















//Масив элементов
var mas = document.getElementsByClassName('layer');
var block = document.querySelector('.jlehmann');
//номер элемента масива
var j = 0;
var heightBlock = mas[j].offsetHeight;
var speed = 0.3;
var z = 50;
var delta = 0;

for (var i = 0; i < mas.length; i++) {
    z = z - 1;
    mas[i].style.zIndex = z;
}

function scrollBlock (event) {
    event = event || window.event;
    delta = delta + Math.round(event.deltaY);
    mas[j].style.top = -(delta*speed) +'px';

    //IF SCROLL DOWN
    if ((delta*speed) >= heightBlock) {
        j ++;
        delta = 0;
    }

    //IF SCROLL UP
    if ((-delta*speed) > 0 && j !== 0) {
        mas[j].style.top = null;
        j --;
        delta = heightBlock/speed;
        mas[j].style.top = -(delta*speed) +'px';
    }

    //IF SCROLL DOWN ON THE LAST BLOCK
    if (j == mas.length - 1) {
        mas[j].style.top = null;
        delta = 0;
    }

    //IF SCROLL UP ON THE FIRST BLOCK
    // if (j == 0) {
        if ((-delta*speed) > 0 && j == 0) {
            mas[j].style.top = null;
            delta = 0;
        }
    //}
}

block.addEventListener('mousewheel', scrollBlock)

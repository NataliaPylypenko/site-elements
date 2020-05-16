let images = document.querySelectorAll('.infinity img');
let current = 0;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
}

slider();

// document.querySelector('.infinity').onclick = slider;
document.querySelector('.btn-infinity-up').onclick = function () {
    if (current - 1 == -1) {
        current = images.length - 1;
    }
    else {
        current--;
    }
    slider();
};

document.querySelector('.btn-infinity-down').onclick = function () {
    if (current + 1 == images.length) {
        current = 0;
    }
    else {
        current++;
    }
    slider();
};
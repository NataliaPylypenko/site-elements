autoSlider();
var left = 0;
var num_img = 7;
var timer;

function autoSlider() {
    timer = setTimeout(function () {
        var band = document.getElementById('band');
        left = left - 175;
        if (left < -(num_img-3)*175) {
            left = 0;
            clearTimeout(timer);
        }
        band.style.left = left + 'px';

        autoSlider();
    }, 2000);
}

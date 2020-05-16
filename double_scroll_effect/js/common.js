let y1 = 0;
let left = document.querySelector('.block-left');
let right = document.querySelector('.block-right');

document.querySelector('.container').onmousewheel = function (event) {
    // console.log(event);
    if (event.deltaY > 0) {
        if (y1 + 10 < 300) {
            y1 = y1 + 10;
        }
    }
    else {
        if (y1 - 10 > 0) {
            y1 = y1 - 10;
        }
    }
    left.style.top = -y1 + 'px';
    right.style.bottom = -y1 + 'px';
}
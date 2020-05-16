document.querySelector('#menu').onmouseover = menuShow;
document.querySelector('#menu').onmouseout = menuHide;

document.onkeydown = function (ev) {
    if (ev.code == 'KeyM') menuShow();
    if (ev.code == 'Escape') menuHide();
}

function menuShow() {
    document.querySelector('#menu').style.left = 0;
}

function menuHide() {
    document.querySelector('#menu').style.left = '-230px';
}


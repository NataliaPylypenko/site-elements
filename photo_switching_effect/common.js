document.getElementById('myslide').onmousemove = function (ev) {
    var x = ev.offsetX;

    document.getElementById('two').style.width = x + 'px';
}

document.getElementById('myslide').onmouseleave = function () {
    document.getElementById('two').style.width = '375px';
}
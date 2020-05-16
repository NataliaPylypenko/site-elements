document.onmousemove = function () {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd',
        '<img src="img/cat.png" id="cat" alt="cat">');

    var cat = document.getElementById('cat');

    document.onmousemove = function (ev) {
        cat.style.position = 'fixed';
        cat.style.left = ev.clientX + 'px';
        cat.style.top = ev.clientY + 'px';
    }


};




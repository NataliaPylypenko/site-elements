

document.getElementById('in').oninput = function () {
    const offset = 3;
    //получаем строку из textarea
    //поскольку на елемент с id='in' повесили событие, то его мы получаем через this
    var str = this.value;
    //перебираем строку посимвольно
    var out = '';
    for (var i = 0; i < str.length; i++) {
        //получаем код, прибавляем смещение, например 3.
        var code = str.charCodeAt(i);
        code += offset;
        //получаем символ по коду, формируем новую строку
        out += String.fromCharCode(code);
    }
    document.getElementById('out').innerHTML = out;
}


document.getElementById('cipher').oninput = function () {
    const offset = 3;
    var str = this.value;
    var cipher_out = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        code -= offset;
        cipher_out += String.fromCharCode(code);
    }
    document.getElementById('cipher_out').innerHTML = cipher_out;
}
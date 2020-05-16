document.getElementById('r1').oninput = cssGenerator;

function cssGenerator(){
    // прямоугольник
    let div = document.getElementById('test');
    // получаю textarea
    let out = document.getElementById('out');
    // console.log(this.value);
    div.style.borderRadius = this.value + 'px';
    // border-radius: 30px;
    out.innerHTML = '-webkit-border-radius: '+this.value+'px;\n' ;
    out.innerHTML += 'border-radius: '+this.value+'px;' ;
}

// let range = document.querySelector('.number');
// let rangeNum = document.querySelector('.range-num');
//
// range.oninput = function () {
//     rangeNum.style.left = this.value * 2.8 + 'px';
//     rangeNum.innerHTML = this.value;
// }
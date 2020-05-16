const img =  ['01', '02', '03', '04', '05', '06'];
let square = document.querySelectorAll('.square');
// console.log(square);

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

square.forEach(function(element) {
    let randNum = random(0, img.length - 1);
    // console.log(randNum);

    element.style.backgroundImage = 'url(img/' + img[randNum] + '.png';
    // console.log(element);

    // на изображение вешаем атрибут с его номером
    element.dataset.number = randNum;

    // вешаем на событие по клику функцию
    element.onclick = changeImage;
});

function changeImage() {
    // очищаем вывод
    document.querySelector('#out').innerHTML = '';
    let data = this.dataset.number;
    // console.log(data);

    if (+data + 1 < img.length) {
        data++;
    }
    else {
        data = 0;
    }

    this.dataset.number = data;
    this.style.backgroundImage = 'url(img/' + img[data] + '.png';
    // console.log(element);

    // проверяем не совпала ли нужная комбинация
    checkSurprise();
}

function checkSurprise() {
    let result = [];
    // записали индексы всех текущих картинок в масив result
    square.forEach(function (element) {
        result.push(element.dataset.number);
    });
    console.log(result);
    if(result.join('') == '0000') {
        document.querySelector('#out').innerHTML = 'You win a monster!!!';
    }
    if(result.join('') == '1111') {
        document.querySelector('#out').innerHTML = 'You win a panda!!!';
    }
    if(result.join('') == '2222') {
        document.querySelector('#out').innerHTML = 'You win an elephant!!!';
    }
    if(result.join('') == '3333') {
        document.querySelector('#out').innerHTML = 'You win a cat!!!';
    }
    if(result.join('') == '4444') {
        document.querySelector('#out').innerHTML = 'You win a plutto!!!';
    }
    if(result.join('') == '5555') {
        document.querySelector('#out').innerHTML = 'You win a pumba!!!';
    }
}







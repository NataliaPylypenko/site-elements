//компютер загадал число
let guessNum = Math.floor((Math.random() * 10) + 1);
let count = 2; //ограничение попыток
console.log('hello');

document.getElementById('check').onclick = function () {
    console.log('hello');
    if (count > 0) {
        //пользователь ввел число
        let userNum = document.getElementById('mynum').value;

        let out = document.getElementById('out');

        if (guessNum == userNum) {
            out.innerHTML = 'You guessed!';
        }
        else if (userNum > guessNum) {
            out.innerHTML = 'много';
        }
        else {
            out.innerHTML = 'мало';
        }

        document.getElementById('count').innerHTML = 'Осталось попыток: '+count;
        count --;
    }
    else {
        alert ('Вы использовали все попытки и проиграли');
        location.reload();
    }

};


const t = [
  'hello world\n',
  'dance monkey\n'
];

function typeText() {
    let line = 0; // номер строки
    let count = 0; // номер знака в рядку
    let out = ''; // новая строка
    let htmlOut = document.querySelector('.out');

    function typeLine() {
        // рисуем строку
        let interval = setTimeout(function () {
            out += t[line][count];
            htmlOut.innerHTML = out + '|';
            count++;

            // не закончилась ли строка
            if (count >= t[line].length) {
                count = 0;
                line ++;
                if (line == t.length) {
                    clearTimeout(interval);
                    htmlOut.innerHTML = out; // убираем вертикальную черту
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(350 * 3.0)));
    }
    typeLine();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

typeText();

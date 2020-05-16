
const abuse = ['fuck', 'asshole', 'bitch', 'nerd', 'fool', 'dick'];

document.querySelector('button').onclick = () => {
    let text = document.querySelector('textarea').value;
    // console.log(text);
    for (let i = 0; i < abuse.length; i++) {
        // Ищем в тексте abuse[i]
        // indexOf возвращает позицию подстроки в строке
        // если число равно 0 и больше, значит это слово есть
        // если число равно -1, значит слова нет
        while (text.indexOf(abuse[i]) != -1) {
            // что заменить на что заменить
            text = text.replace(abuse[i], swearwords(abuse[i].length));
        }
    }
    document.querySelector('#out').innerHTML += '<div class="comment">' + text + '</div>';
}

function swearwords(n) {
    let out ='';
    for (let i = 0; i < n; i++) {
        out += '*';
    }
    return out;
}
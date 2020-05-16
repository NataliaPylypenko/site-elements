//получаем текущее время
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

//узнаем градус на который поворачиваем стрелку
sec = sec * 6;
min = min * 6;
//hour - получаем градус на который поворачиваем стрелку за Х часов
// Math.floor(min / (12*6)) -  сколько раз было 12 минут
hour = (hour * 30) + Math.floor(min / (12 * 6)) * 6;

//запускаем функцию при загрузке страницы
fClock();
fHour();

setInterval(fClock, 1000);
setInterval(fHour, 1000*60*12); //60 секунд, 12 минут

function fClock(){
    document.querySelector('#sec').style.transform = 'rotate('+sec+'deg)';
    document.querySelector('#min').style.transform = 'rotate('+min+'deg)';
    if (sec + 6 == 366) {
        sec = 0;
        if (min + 6 == 366) {
            min = 0;
        }
        min += 6;
    }
    sec += 6;
}

function fHour(){
    document.querySelector('#hour').style.transform = 'rotate('+hour+'deg)';
    if (hour + 6 == 366) {
        hour = 0;
    }
    hour += 6;
}

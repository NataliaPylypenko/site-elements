//Есть прогрес бар, который должен заполнятся за заданное кол-во времени.
//Время задает пользователь


document.getElementById('button-progress').onclick = function () {
    //Получить то что ввел пользователь
    var textProgress = document.getElementById('text-progress').value;
    userProgress(textProgress);
};


function userProgress(time) {
    var start = 0;
    
    var time = Math.round(time * 10);   //умножаем на 1000 и делим на 100
    var progressElement = document.getElementById('user-progress'); //элемент прогрес бара
    //функция которая позволяет запускать одно и то же через определенные промежутки времени
    var intervalId = setInterval(function () {
        if (start > 100) {
            clearInterval(intervalId);
            userProgressCallBack();
        }
        else {
            progressElement.value = start;
        }
        start ++;
    }, time);
}

function userProgressCallBack() {
    document.querySelector('.hidden-block').style.display = 'block';
}


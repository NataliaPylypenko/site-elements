//При клике на вкладку определяем число которое стоит в атрибуте data-tab (data- приставка для поддержки стандартов html5)
//таким образом отображаем п-ный элемент масива вкладок
//1. Вешаем событие клик и определяем data-tab

document.querySelector('.tabs-header').addEventListener('click', funcTabs);

function funcTabs(event) {
    console.log(event);
    //2.Получаем значение атрибута data-tab
    if (event.target.className == 'tab-h') {
        //3.Номер вкладки которую нужно отобразить
        var dataTab = event.target.getAttribute('data-tab');
        //6.Отключаем клас tab-active
        var tabH = document.getElementsByClassName('tab-h');
        for (var i = 0; i < tabH.length; i++) {
            tabH[i].classList.remove('tab-active');
        }
        //5.Элементу по которому кликнул добавляем клас, который дилает нижнюю границу прозрачной
        event.target.classList.add('tab-active');

        //4.Собираем масив tabs-body и отображаем нужный
        var tabBody = document.getElementsByClassName('tab-b');
        for (var i = 0; i < tabBody.length; i++) {
            //5.Если номер вкладки не совпадает с числом dataTab ее нужно скрыть
            if (dataTab == i) {
                tabBody[i].style.display = 'block';
            }
            else  {
                tabBody[i].style.display = 'none';
            }
        }
    }

}

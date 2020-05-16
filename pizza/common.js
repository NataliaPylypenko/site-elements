
//1.Вешаем событие на кнопку result
document.getElementById('result').onclick = getResult;
getResult();
//2.ф-я выводит результат и подщитывает элементы
function getResult() {
    //3.получаем колекцию элементов
    var menu = document.getElementsByClassName('menu');
    var cost = 0;
    var kkal = 0;
    for (var i = 0; i < menu.length; i++) {
        //4.если текущий элемент выбран - сумируем цену и килокалории
        //и преобразовываем значение атрибута в число
        if (menu[i].checked) {
            cost += parseFloat(menu[i].getAttribute('data-cost'));
            kkal += parseFloat(menu[i].getAttribute('data-kkal'));
        }
    }
    document.getElementById('cost').innerHTML = cost;
    document.getElementById('kkal').innerHTML = kkal;
}

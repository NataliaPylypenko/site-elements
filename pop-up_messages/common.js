window.onload = () => {
    document.querySelector('#chips-show').onclick = () => { // стрелочная функция
        let text = document.querySelector('#chips-text').value; // получаем текст из инпута
        document.querySelector('#chips-text').value = ''; // после вставки текста стираем инпут
        let chips = document.createElement('div'); // блок со всплывающим сообщением
        chips.classList.add('chips'); // добавляем клас
        chips.innerText = text; // присваиваем сообщение внутрь блока

        // document.body.appendChild(chips); // проверяем работу

        // перед тем как добавлять элемент проверяем усть ли блок с #chips-field
        if (!document.querySelector('#chips-field')) {
            //если нет этого елемента - создаем его
            let chipsField = document.createElement('div'); // блок со всплывающим сообщением
            chipsField.id = 'chips-field'; // добавляем id
            document.body.appendChild(chipsField); // выводим поле
            document.querySelector('#chips-field').appendChild(chips); // выводим сообщение
        }
        // если есть тогда добавляем в него сообщение
        document.querySelector('#chips-field').appendChild(chips);
        // удаляем сообщение через 3 секунды
        setTimeout (
            () => {
                chips.remove();
                // после удаления сообщения запускаем функцию
                removeChipsField();
            },
            3000
        );
    }

    function removeChipsField() {
        // если внутри chipsField ничего нет, мы его удаляем
        let chips = document.querySelectorAll('#chips-field .chips'); // найти все .chips внутри #chips-field
        if (chips.length == 0) {
            document.querySelector('#chips-field').remove();
        }
    }
}
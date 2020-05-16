
for (var i = 0; i<9; i++) {
    document.getElementById('game').innerHTML += '<div class="block"></div>';
}

var move = 0;
document.getElementById('game').onclick = function(ev) {
    // console.log(ev);

    if (ev.target.className == 'block') {
        if (move%2 == 0) {
            ev.target.innerHTML = 'x';
        }
        else {
            ev.target.innerHTML = '0';
        }
        move ++;
        checkWinner();
    }
}

function checkWinner() {
    var allBlock = document.getElementsByClassName('block');
    // console.log(allBlock);

    if (allBlock[0].innerHTML == 'x' && allBlock[1].innerHTML == 'x'  && allBlock[2].innerHTML == 'x') {
        alert('Выиграл первый игрок')
    }
    if (allBlock[3].innerHTML == 'x' && allBlock[4].innerHTML == 'x'  && allBlock[5].innerHTML == 'x') {
        alert('Выиграл первый игрок')
    }
    if (allBlock[6].innerHTML == 'x' && allBlock[7].innerHTML == 'x'  && allBlock[8].innerHTML == 'x') {
        alert('Выиграл первый игрок')
    }
    if (allBlock[0].innerHTML == 'x' && allBlock[3].innerHTML == 'x'  && allBlock[6].innerHTML == 'x') {
        alert('Выиграл первый игрок')
    }
    if (allBlock[1].innerHTML == 'x' && allBlock[4].innerHTML == 'x'  && allBlock[7].innerHTML == 'x') {
        alert('Выиграл первый игрок')
    }
    if (allBlock[2].innerHTML == 'x' && allBlock[5].innerHTML == 'x'  && allBlock[8].innerHTML == 'x') {
        alert('Выиграл первый игрок')
    }
    if (allBlock[0].innerHTML == 'x' && allBlock[4].innerHTML == 'x'  && allBlock[8].innerHTML == 'x') {
        alert('Выиграл первый игрок')
    }
    if (allBlock[2].innerHTML == 'x' && allBlock[4].innerHTML == 'x'  && allBlock[6].innerHTML == 'x') {
        alert('Выиграл первый игрок')
    }


    if (allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0'  && allBlock[2].innerHTML == '0') {
        alert('Выиграл второй игрок')
    }
    if (allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[5].innerHTML == '0') {
        alert('Выиграл второй игрок')
    }
    if (allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0'  && allBlock[8].innerHTML == '0') {
        alert('Выиграл второй игрок')
    }
    if (allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0'  && allBlock[6].innerHTML == '0') {
        alert('Выиграл второй игрок')
    }
    if (allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[7].innerHTML == '0') {
        alert('Выиграл второй игрок')
    }
    if (allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0'  && allBlock[8].innerHTML == '0') {
        alert('Выиграл второй игрок')
    }
    if (allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[8].innerHTML == '0') {
        alert('Выиграл второй игрок')
    }
    if (allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[6].innerHTML == '0') {
        alert('Выиграл второй игрок')
    }


}
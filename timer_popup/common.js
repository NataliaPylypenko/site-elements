//1.Сделать вспливающее окно
//2.Поместить в него опцию согласен
//3.Сохранять состояние в хранилище (local syorage)

$(document).ready(function () {
    showStartModal();
});

function showStartModal() {
    if (localStorage.getItem('modalBtnYes') != 1) {
        setTimeout(function () {
            $('#exampleModal').modal('show');
            $('#modal-btn-yes').on('click', function () {
                localStorage.setItem('modalBtnYes', 1);
                $('#exampleModal').modal('hide');
            })
        }, 5000);
    }

}

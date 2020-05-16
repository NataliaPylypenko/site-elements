window.onload = () => {
    document.querySelector('#show-description').onclick = () => {
        document.querySelector('.wrap').classList.toggle('open');
    }
}

let imgBig = document.getElementById('imgBig');
let imgSmall = document.getElementsByClassName('imgSmall');


for (let i = 0; i < imgSmall.length; i++) {
    // console.log(imgSmall[i].src);
    imgSmall[i].onclick = () => {
        imgBig.src = imgSmall[i].src;
    }
}

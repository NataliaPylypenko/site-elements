console.log(Math.PI);

var Pi = 0;
var a = 1;
var b = 3;

myPi();

function myPi() {
    Pi += (4/a) - (4/b);
    a += 4;
    b += 4;
    console.log(Pi);
    setTimeout(myPi, 300);
}
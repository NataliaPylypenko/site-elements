
document.querySelector('#card-number').oninput = function () {
    let cardNum = this.value.trim();
    if (cardNum.length > 5) {
        let cardInfo = new CardInfo(cardNum, {
            banksLogosPath: './node_modules/card-info/dist/banks-logos/',
            brandsLogosPath: './node_modules/card-info/dist/brands-logos/'
        });
        console.log(cardInfo.bankName);
        console.log(cardInfo.bankLogo);
        console.log(cardInfo.brandLogo);
        console.log(cardInfo.backgroundColor);

        document.querySelector('.card-image').src = cardInfo.bankLogo;
        document.querySelector('.card-logo').src = cardInfo.brandLogo;
        document.querySelector('.card-front').src = cardInfo.backgroundColor;
    }
}
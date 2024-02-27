const btn = document.getElementById('changeColor');
let randomNumber = () => {
    let randomNum = (Math.floor(Math.random() * 256));
    return randomNum;
}

let changeColor = () => {
    let randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    // console.log(
    //     randomColor
    // )
    document.body.style.backgroundColor = randomColor;
}

btn.addEventListener('click', changeColor);
window.addEventListener('load', changeColor);

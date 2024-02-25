const btnOffOn = document.querySelector('#off-on');
const blockRed = document.querySelector('#block-red');
const blockYellow = document.querySelector('#block-yellow');
const blockGreen = document.querySelector('#block-green');
let boolClick = false;

btnOffOn.addEventListener('click',() => {
    if(!boolClick)
    btnOffOn.innerText = 'ON';
    else {
        btnOffOn.innerText = 'OFF';
        blockRed.style.backgroundColor = 'transparent';
        blockYellow.style.backgroundColor = 'transparent';
        blockGreen.style.backgroundColor = 'transparent';
    }
    boolClick = !boolClick;
});

blockRed.addEventListener('click',() => {
    if(boolClick){
        blockRed.style.backgroundColor = 'red';
        blockYellow.style.backgroundColor = 'transparent';
        blockGreen.style.backgroundColor = 'transparent';
    }
});

blockYellow.addEventListener('click',() => {
    if(boolClick){
        blockRed.style.backgroundColor = 'transparent';
        blockYellow.style.backgroundColor = 'yellow';
        blockGreen.style.backgroundColor = 'transparent';
    }
});

blockGreen.addEventListener('click',() => {
    if(boolClick){
        blockRed.style.backgroundColor = 'transparent';
        blockYellow.style.backgroundColor = 'transparent';
        blockGreen.style.backgroundColor = 'green';
    }
});

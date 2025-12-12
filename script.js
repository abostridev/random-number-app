console.log('Hey');


const randomNumber= document.querySelector('#random-number');
randomNumber.addEventListener('click', ()=> {
    document.querySelector("#result").textContent = getRandomNumber(1,100);
})

function getRandomNumber(min,max) {
    return Math.random() * (max - min) + min;
}
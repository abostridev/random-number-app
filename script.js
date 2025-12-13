const randomNumber = document.querySelector('#random-number');
const result = document.querySelector('#result');
const min  = document.querySelector('#min');
const max  = document.querySelector('#max');

randomNumber.addEventListener('click', () => {
    result.textContent = Math.floor(
        getRandomNumber(Number(min.value), Number(max.value))
    );
})

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
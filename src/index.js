const inputField = document.querySelector('#user_password');
const passwordStatus = document.querySelector(".output");

const firstBlock = document.querySelector('.first_block');
const secondBlock = document.querySelector('.second_block');
const thirdBlock = document.querySelector('.third_block');
const allBlocks = document.querySelectorAll('.block');

const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
const digits = '1234567890';
const symbols = '!@#$%^&*()_-+=\|/.,:;[]{}';



inputField.addEventListener('input', passwordInput);

function passwordInput() {
    const entered = inputField.value;   

    let isLetters = false;
    let isDigits = false;
    let isSymbols = false;
    
    for (let i = 0; i < entered.length; i += 1){
        if (!isLetters && letters.indexOf(entered[i]) != -1) {
            isLetters = true;
        } else if (!isDigits && digits.indexOf(entered[i]) != -1) {
            isDigits = true;
        } else if (!isSymbols && symbols.indexOf(entered[i]) != -1) {
            isSymbols = true;
        }
    }

    let rating = 0;

    if (isLetters) {
        rating += 1;
    }
    
    if (isSymbols) {
        rating += 1;
    }
    
    if (isDigits) {
        rating += 1;
    }

    reset();

    console.log(entered.length, 'довжина', rating, 'рейтинг');

    if (entered.length > 0 && inputField.value.length <= 8) {
        allBlocks.forEach(element => {
            element.style.backgroundColor = 'red';
        });
        passwordStatus.textContent = 'Пароль занадто короткий. Введіть більше 8 символів';
    } else if (entered.length > 8 && rating === 1) {
        clear();
        firstBlock.style.backgroundColor = 'red';
        passwordStatus.textContent = 'Пароль занадто легкий!';        
    } else if (entered.length > 8 && rating === 2) {
        clear();
        firstBlock.style.backgroundColor = 'yellow';
        secondBlock.style.backgroundColor = 'yellow';
        passwordStatus.textContent = 'Пароль середньої складності!';
    } else if (entered.length > 8 && rating === 3) {
        allBlocks.forEach(element => {
            element.style.backgroundColor = 'green';
        });
        passwordStatus.textContent = 'Надійний пароль!';

    }
     
}

function reset() {
    if (inputField.value.length === 0) {
        allBlocks.forEach(element => {
            element.style.backgroundColor = 'grey';
        });
        passwordStatus.textContent = '';
    }    
}

function clear() {
    allBlocks.forEach(element => {
        element.style.backgroundColor = 'grey';
    });
}



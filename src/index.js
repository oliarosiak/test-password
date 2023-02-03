const inputField = document.querySelector('#user_password');
const output = document.querySelector(".output");

const blockOne = document.querySelector('.block_one');
const blockTwo = document.querySelector('.block_two');
const blockThree = document.querySelector('.block_three');

inputField.addEventListener('input', passwordInput);

function passwordInput() {
    const entered = inputField.value;
    const minLength = 8;

    output.textContent = entered;

    if (entered.length === 0) {
        console.log('sho tut');
        blockOne.classList.remove('short_password');
        blockTwo.classList.remove('short_password');
        blockThree.classList.remove('short_password');
    }

    if (entered.length> 0 && entered.length < minLength) {
        console.log('закороткий');
        blockOne.classList.add('short_password');
        blockTwo.classList.add('short_password');
        blockThree.classList.add('short_password');
    }   
}
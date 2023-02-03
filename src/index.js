const inputField = document.querySelector('#user_password');
const output = document.querySelector(".output");

const list = document.querySelector('.list');

const firstBlock = list.firstElementChild;
const secondBlock = firstBlock.nextElementSibling;
const allThreeBlocks = document.querySelectorAll('li');

if (inputField.value === 0) {
    console.log(allThreeBlocks);
    allThreeBlocks.forEach(element => {
        element.classList.remove('short');
        element.classList.remove('medium');
        element.classList.remove('hard');  
    })
}


inputField.addEventListener('input', passwordInput);

function passwordInput() {
    const entered = inputField.value;
    const minLength = 8;
    const mediumLength = 13;
    const hardLength = 15;
    const maxLength = 17;

    output.textContent = entered;

    // if (inputField.value === 0) {
    //     allThreeBlocks.forEach(element => {
    //         console.log(element);
    //         element.classList.remove('short');
    //         // element.classList.remove('medium');
    //         // element.classList.remove('hard');  
    //     })
    // }


    if (entered.length> 0 && entered.length < minLength) {
        allThreeBlocks.forEach(element => {
            element.classList.add('short');
        })
    } else if(entered.length > minLength) {
        allThreeBlocks.forEach(element => {
            element.classList.remove('short');
        })
        firstBlock.classList.add('short');
    } else if(entered.length > mediumLength) {
        allThreeBlocks.forEach(element => {
            element.classList.remove('short');
        });
        firstBlock.classList.add('medium');
        secondBlock.classList.add('medium');
    } else if(entered.length > hardLength) {
        allThreeBlocks.forEach(element => {
            element.classList.add('hard');
        });
    }  

  
}
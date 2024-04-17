/* const paragraph = document.getElementByClassName('js-to-remove');
paragraph[0].removeAtrribute('class'); */



const paragraphEl = document.createElement("p");
const node = document.createTextNode('This is a new paragraph');
paragraphEl.appendChild(node);
const main = document.querySelector('main');
main.appendChild(paragraphEl);


const divEl = document.querySelector('.form');
const input = document.createElement('input');
const button = document.querySelector('.button');
input.setAttribute('type', 'text');
divEl.insertBefore(input, button);

/* divEl. removeChild(input); */

/* main[0].remove(); */

const deleteLastButton = document.querySelector('.delete-last-button');

deleteLastButton.addEventListener('click', () => {
  let liEls = document.quer
})



document.querySelector('.button').addEventListener('click', () => {
  const list = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    divEl.removeChild(list);
  }) 


  divEl.appendChild(list);
  list.textContent = input.value;
  list.appendChild(deleteButton);
  input.value = "";
})








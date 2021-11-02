'use strict';

let element;
const input = document.querySelector('.text-input');
const list = document.querySelector('.list');
const addElementButton = document.querySelector('.add-element');
const removeElementButton = document.querySelector('.remove-element');

function addElement() {
  if (!input.value) {
    alert('Please enter the text!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    li.classList.add('element');
    list.append(li);
    input.value = '';
  }
}
addElementButton.addEventListener('click', addElement);

list.addEventListener('click', function(e) {
  element = e.target.closest('.element');
  if (!element) return;
  const elements = document.querySelectorAll('.element');
  for (let coralElement of elements) {
    coralElement.style.backgroundColor = '';
  }
  element.style.backgroundColor = 'coral';
});

function removeElement() {
  element.remove();
}
removeElementButton.addEventListener('click', removeElement);
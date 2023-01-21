// DOM Manipulation

const title = document.getElementById('heading');
title.style.color = 'blue';
console.log(title);

const listItems = document.querySelectorAll('.list-items');

// style all list items using for loop
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
}

//  Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
// Adding Elements
// Modifying the text
const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
li.innerText = 'Jackets';
// Modify Attributes and Classes
li.setAttribute('id', 'heading');
li.removeAttribute('id');
li.classList.add('list-items');
console.log(li.classList.contains('list-items')); //returns true

// remove element
li.remove(); //removes the list-item
// console.log(title.getAttribute('id'));

// GetElementById
// const title = document.getElementById('heading');
// console.log(title);


// GetElementsByClassName()
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);


// getElementsByTagName

// const listTags = document.getElementsByTagName('li');
// console.log(listTags);

// querySelector
// const container = document.querySelector('div');
// console.log(container);


// querySelectorAll()
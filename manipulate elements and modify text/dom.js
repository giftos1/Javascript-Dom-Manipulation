// DOM Manipulation

const title = document.getElementById('heading');
title.style.color = 'gold';
console.log(title);

const listItems = document.querySelectorAll('.list-items');

// style all list items using for loop
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
}

//  Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');
// Adding Elements
ul.append(li);
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

// Parent Node 
console.log(ul.parentNode);
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentNode); //rather use the parentNode
console.log(html.parentElement);

// Child Node Traversal
console.log(ul.childNodes); // indentantion are counted as texts
console.log(ul.firstChild); 
console.log(ul.lastChild);

// ul.firstChild.style.backgroundColor = 'blue';  // an error is generated because the firstChild is a text node due to indentantion
// ul.childNodes[1].style.backgroundColor = 'blue';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal

// console.log(ul.previousSibling); // better to use previousElementSibling
// console.log(ul.nextSibling); // better to use nextElementSibling

console.log(ul.nextElementSibling); // null
console.log(ul.previousElementSibling); // h1 element
const div = document.querySelector('div');
console.log(div.childNodes);
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
'use strict';
let counter = 0;
const add = document.querySelector('.add');
const value = document.querySelector('.value');
const minus = document.querySelector('.minus');


add.addEventListener('click', function() {
    counter++;
    document.querySelector('.value').textContent = counter;
})

minus.addEventListener('click', function(){
    counter--;
    document.querySelector('.value').textContent = counter;
})


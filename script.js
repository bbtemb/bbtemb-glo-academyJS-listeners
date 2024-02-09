'use strict';

const btn = document.getElementById('btn');
const square = document.getElementById('square');
const text = document.getElementById('text');
const eBtn = document.getElementById('e_btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const circle = document.getElementById('circle');

let color = '';
let colorArray = [
  'green',
  'red',
  'blue',
  'aqua',
  'purple',
  'yellow',
  'orange',
  'coral',
  'pink',
  'black',
  'white',
];

const textCheck = function () {
  for (let i = 0; i < colorArray.length; i++) {
    if (text.value === colorArray[i]) {
      color = colorArray[i];
    }
  }
};

const changeColor = function () {
  textCheck();
  square.style.backgroundColor = color;
};

const displayInputRange = function (event) {
  rangeSpan.innerText = event.target.value;
};

const changeCircleSize = function (event) {
  circle.style.width = event.target.value + '%';
  circle.style.height = event.target.value + '%';
};

eBtn.style.display = 'none';

btn.addEventListener('click', changeColor);
range.addEventListener('input', function () {
  displayInputRange(event);
  changeCircleSize(event);
});

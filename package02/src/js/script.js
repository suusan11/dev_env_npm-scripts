"use strict";

var button = document.getElementById('js-click');
button.addEventListener('click', function () {
  alert('awesome!!!');
});
var lists = document.querySelectorAll('.item');
lists.forEach(function (list) {
  list.push('pepe');
});
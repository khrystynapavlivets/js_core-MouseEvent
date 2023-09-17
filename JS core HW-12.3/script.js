/*
Завдання 3.

Необхідно реалізувати наступний функціонал як на відео images, а саме:

на сторінці знаходяться три пустих блоки div.
при кліку на блок виводить функція prompt() в яку ми вводи url адресу зображення
це зображення стає фоном для цього конкретного блоку
------------------------------------------------------------------------------------------
*/
const blocks = document.querySelectorAll(".block");

blocks.forEach(function(block) {
  block.addEventListener("click", function() {
    const imageUrl = prompt("Введіть URL-адресу зображення:");
    if (imageUrl) {
      block.style.backgroundImage = "url('" + imageUrl + "')";
    }
  });
});
/*
Завдання 4.

Необхідно реалізувати наступний функціонал як на відео text, а саме:

на сторінці знаходиться список ol з 6ма кольорами, написаними англійською мовою.
потрібно щоб в при кліку на поточний пункт замалювався тим кольором, який в ньому записаний.
постарайтесь зробити даний функціонал використовуючи тільки одну функцію
------------------------------------------------------------------------------------------
*/


const listItems = document.querySelectorAll("ol li");
function changeColor(event) {
    const clickedItem = event.target;
    const color = clickedItem.textContent;
    clickedItem.classList.add(color);
}
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", changeColor);
}



// const listItems = document.getElementsByTagName("li");

// function changeBackgroundColor(event) {
//   const clickedItem = event.target;
//   const color = clickedItem.textContent;
//   clickedItem.style.color = color;
// }

// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener("click", changeBackgroundColor);
// }
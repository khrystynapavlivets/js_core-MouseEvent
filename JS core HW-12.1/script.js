/*
Завдання 1.

Необхідно реалізувати наступний функціонал як на відео color, а саме:

при першому наведенні мишки на блок колір фону має ставати червоний
при відведенні мишки блок має ставати знову фіолетовий
при другому наведенні – блок стає жовтим
при третьому – зеленим
при наступному наведенні все починається спочатку: червоний, жовтий, зелений
так має відбуватися безкінечно по колу
------------------------------------------------------------------------------------------
*/
const colorsback=['red', 'yellow', 'green'];
let count=0;

document.querySelector('.container').addEventListener('mouseover', function(){
    document.querySelector('.container').style.backgroundColor = colorsback[count];
    count=(count + 1) % colorsback.length;
})
document.querySelector('.container').addEventListener('mouseout', function(){
    document.querySelector('.container').style.backgroundColor = 'purple';
})






/*
Завдання 2.

Необхідно реалізувати наступний функціонал як на відео secret, а саме:

по замовчуванню блок має певний стиль і наступний текст: “У мене є секрет!”
при наведенні на блок його стиль змінюєть і текст стає наступним: “Хочеш знати який”
при натисканні і утриманні клавіші мишки знову по блоку стиль змінюється і текст стає наступним: “А я тобі не скажу”
при відпусканні клавіші мишки стиль і текст знову стає “Хочеш знати який”
при відведенні мишки стиль стає як базовий і текст “У мене є секрет!”
------------------------------------------------------------------------------------------
*/


var isSecretRevealed = false;

    document.getElementById("secretBlock").onmouseover = function () {//При наведенні курсора миші на блок 
        this.classList.add("changedStyle");
        this.innerHTML = "Хочеш знати який?";
    };

document.getElementById("secretBlock").onmousedown = function () {//При натисканні кнопки миші на блоку

        this.classList.remove("changedStyle");
        this.classList.add("revealedStyle");
        this.innerHTML = "А я тобі не скажу!";
      
 
};
document.getElementById("secretBlock").onmouseup = function () {//При відпусканні кнопки миші на блоку 

        this.classList.remove("revealedStyle");
        this.classList.add("changedStyle");
        this.innerHTML = "Хочеш знати який?";
    
    
};
document.getElementById("secretBlock").onmouseout = function () {//Коли курсор миші покидає блок 

        this.classList.remove("changedStyle", "revealedStyle");
        this.innerHTML = "У мене є секрет!";
    
};
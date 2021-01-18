//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

/*
var i = 2;
while (i < 100) {
    j = 2;
    while (j <= Math.round(i / 2)) {
        if (i % j == 0) { break; }
        j++;

    }
    if (j > (i / 2)) { console.log(i); }
    i++;
}*/

//2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//3. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
//for (let item of x) {} //1:36:31
/*
var basket = [
    {
        article: 'Мячик',
        price: 100,
        quantity: 1
    },

    {
        article: 'Вилка',
        price: 321,
        quantity: 2
    },

    {
        article: 'Топор',
        price: 56.25,
        quantity: 1
    }
];

function countBasketPrice(basketarr) {
    var total = 0;
    for (var item of basketarr) {
        total += item.price * item.quantity;
    }
    return total;
}
console.log(countBasketPrice(basket));*/

//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}

//for (let i = 0; i <= 9; console.log(i++));

//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx

//Вариант 1
/*
var a = ""
for (let i = 0; i <= 20; i++) {
    a += "x"
    console.log(a)
}*/

//Вариант2 (не знаю зачем, но написал) 
/*for (let i = 0; i <= 20; i++) {
    var a = ""
    for (let j = 0; j <= i; j++) {
        a += "x"
    }
    console.log(a)
}*/


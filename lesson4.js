//1. Написать функцию, преобразующую число в объект. 
/*
function Devides(num_for_sep) {
    if (num_for_sep < 1000) {

        this.units = num_for_sep % 10
        this.dozens = parseInt(num_for_sep / 10) % 10
        this.hundreds = parseInt(num_for_sep / 100) % 10

    }
    else {
        console.log("Число больше 999! Критическая ошибка)")
        return null
    }
}

console.log(
    new Devides(3221)
)*/

//2. Продолжить работу с интернет-магазином:
//Уже сделал в предыдущем уроке)


class basket {
    element_basket = []
    total = 0

    addBasket(elemet) {
        this.element_basket.push(elemet)
        this.totalBasket()
    }
    totalBasket() {
        this.total = 0;
        for (var item of this.element_basket) {
            this.total += item.price * item.quantity;
        }
        return this.total;
    }

    //ниже две функции - попытки оптимизации базового алгоритма
    totalBasket2() {
        this.total = this.element_basket.reduce(function (sum, current) {
            return sum + (current.quantity * current.price)
        }, 0)
        return this.total;
    }

    totalBasket3() {
        this.total = this.element_basket.reduce((sum, current) => sum + (current.quantity * current.price), 0)
        return this.total;
    }
}

class elemet {
    constructor(article, price, quantity) {
        this.article = article
        this.price = price
        this.quantity = quantity
    }
}

const firstBasket = new basket
const elemetOne = new elemet("Мячик", 100, 1)
const elemetTwo = new elemet("Вилка", 321, 2)
console.log(firstBasket)
firstBasket.addBasket(elemetOne)
firstBasket.addBasket(elemetTwo)
firstBasket.addBasket(new elemet("Топор", 56.25, 1))
console.log(firstBasket)
console.log(firstBasket.total)
console.log(firstBasket.totalBasket())
console.log(firstBasket.totalBasket2())
console.log(firstBasket.totalBasket3())


//на 3ем дз  было так:
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


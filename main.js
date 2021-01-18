
const schessObject = document.querySelector('table');
const tableSchess = document.createElement('tbody');
tableSchess.classList.add('chess-board')

const datachess2 = []
const coldata2 = []


var a = ["", "A", "B", "C", "D", "E", "F", "G", "H"];
datachess2.push(document.createElement('tr'));
a.forEach(function (entry) {
    const text = document.createElement('th');
    text.textContent = entry;
    datachess2[datachess2.length - 1].appendChild(text);
});

var sel = 0;
for (let j = 8; j > 0; j--) {
    datachess2.push(document.createElement('tr'));
    var schesscolors = ["light", "dark"];
    const text = document.createElement('th');
    text.textContent = j;
    datachess2[datachess2.length - 1].appendChild(text);

    if ((j % 2) == 0) { sel = 0 } else { sel = 1; }
    for (let i = 0; i < 8; i++) {
        const text = document.createElement('th');
        text.classList.add(schesscolors[sel]);
        datachess2[datachess2.length - 1].appendChild(text);
        if (sel > 0) { sel = 0 } else sel++;
    }
}

for (elems of datachess2) {
    tableSchess.appendChild(elems)
}

schessObject.appendChild(tableSchess);
console.log(schessObject)

//-----------------------------------------------------------------------
//2-3z ДЗ

class basket {
    element_basket = []
    total = 0

    addBasket(elemet) {
        this.element_basket.push(elemet)
        this.totalBasket()
    }

    totalBasket() {
        this.total = this.element_basket.reduce((sum, current) => sum + (current.quantity * current.price), 0)
        return this.total;
    }

    PrintBasket() {
        const text = document.createElement('p');
        if (this.element_basket.length == 0) {
            text.textContent = "Basket is Empty"
        }
        else {
            for (elems of this.element_basket) {
                text.textContent = text.textContent + " " + elems.article + ", в колличестве " + elems.quantity + "."
                console.log(elems.article)
                console.log(text.textContent)
            }
        }
        console.log(text)
        return text;
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


const divObject = document.querySelector('div');

for (elems of firstBasket.element_basket) {
    const text = document.createElement('p');
    text.textContent = elems.article
    divObject.appendChild(text);
}

k = firstBasket.PrintBasket()
divObject.appendChild(k);


setTimeout(() => {
    const elemetOne = new elemet("Мячик", 100, 1)
    const elemetTwo = new elemet("Вилка", 321, 2)
    firstBasket.addBasket(elemetOne)
    firstBasket.addBasket(elemetTwo)
    firstBasket.addBasket(new elemet("Топор", 56.25, 1))
    divObject.removeChild(k);
    divObject.appendChild(firstBasket.PrintBasket());
}, 3000)
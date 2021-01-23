const potato = document.querySelector('#potato')
const garlic = document.querySelector('#garlic')
const tomato = document.querySelector('#tomato')

elems = []

class basket {
    element_basket = []
    total = 0

    addBasket(elemet) {
        let searchTerm = elemet.article;
        let cityId = this.element_basket.find(city => city.article === searchTerm)
        //console.log(cityId);
        if (cityId == undefined) {
            this.element_basket.push(elemet)
        }
        else {
            cityId.quantity += 1
        }
        this.totalBasket()
    }


    totalBasket() {
        this.total = this.element_basket.reduce((sum, current) => sum + (current.quantity * current.price), 0)
        return this.total;
    }

    PrintBasket() {
        const ulc = document.createElement('ul');
        const lic = document.createElement('li');
        ulc.className = "menu"
        lic.textContent = "Корзина"
        ulc.appendChild(lic)

        if (this.element_basket.length == 0) {
            const lic = document.createElement('li');
            lic.textContent = "Basket is Empty";
            ulc.appendChild(lic)
        }
        else {
            for (elems of this.element_basket) {
                console.log(elems.article)
                const lic = document.createElement('li');
                const spanc = document.createElement('span');
                const emc = document.createElement('em');
                spanc.textContent = elems.article;
                emc.textContent = elems.quantity;
                lic.appendChild(spanc);
                lic.appendChild(emc);
                ulc.appendChild(lic)
                console.log(ulc)

            }
        }

        return ulc;
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

potato.addEventListener('click', function () {
    firstBasket.addBasket(new elemet("Картошка", 56.25, 1))
    divObject.removeChild(k);
    k = firstBasket.PrintBasket()
    divObject.appendChild(k);
})

garlic.addEventListener('click', function () {
    firstBasket.addBasket(new elemet("Чеснок", 56.25, 1))
    divObject.removeChild(k);
    k = firstBasket.PrintBasket()
    divObject.appendChild(k);
})

tomato.addEventListener('click', function () {
    firstBasket.addBasket(new elemet("Помидоры", 100, 1))
    divObject.removeChild(k);
    k = firstBasket.PrintBasket()
    divObject.appendChild(k);
})





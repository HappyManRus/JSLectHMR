const potato = document.querySelector('#potato')
const garlic = document.querySelector('#garlic')
const tomato = document.querySelector('#tomato')
const address = document.querySelector('#address')
const comment = document.querySelector('#comment')
const next = document.querySelector('#next')
const divObject = document.querySelector('#backet');
divObject.style.display = 'block'
address.style.display = 'none'
comment.style.display = 'none'

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

    ItemMinudBasket(elemet) {
        let searchTerm = elemet;
        let cityId = this.element_basket.find(city => city.article === searchTerm)
        //console.log(cityId);
        if ((cityId != undefined) && (cityId.quantity > 1)) {
            cityId.quantity -= 1
        }
        this.totalBasket()
    }

    ItemmDelBasket(elemet) {
        let cityId = this.element_basket.find(city => city.article === elemet)
        cityId = this.element_basket.indexOf(cityId)
        console.log(cityId);
        if (cityId != undefined) {
            this.element_basket.splice(cityId, 1)
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
                //console.log(elems.article)
                const lic = document.createElement('li');
                const spanc = document.createElement('span');
                const emc = document.createElement('em');
                const btnpl = document.createElement('button');
                const btnmn = document.createElement('button');
                const btndel = document.createElement('button');
                spanc.textContent = elems.article;
                emc.textContent = elems.quantity;
                btnpl.textContent = "+"
                btnpl.id = elems.article
                btnmn.textContent = "-"
                btnmn.id = elems.article
                btndel.textContent = "X"
                btndel.id = elems.article
                btnpl.addEventListener('click', function (e) {
                    firstBasket.addBasket(new elemet(e.target.id, 0, 1))
                    divObject.removeChild(k);
                    k = firstBasket.PrintBasket()
                    divObject.appendChild(k);
                })
                btnmn.addEventListener('click', function (e) {
                    firstBasket.ItemMinudBasket(e.target.id)
                    divObject.removeChild(k);
                    k = firstBasket.PrintBasket()
                    divObject.appendChild(k);
                })
                btndel.addEventListener('click', function (e) {
                    firstBasket.ItemmDelBasket(e.target.id)
                    divObject.removeChild(k);
                    k = firstBasket.PrintBasket()
                    divObject.appendChild(k);
                })

                lic.appendChild(spanc);
                lic.appendChild(emc);
                lic.appendChild(btnmn);
                lic.appendChild(btnpl);
                lic.appendChild(btndel);
                ulc.appendChild(lic)

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

next.addEventListener('click', function () {
    if (divObject.style.display == 'block') {
        divObject.style.display = 'none'
        address.style.display = 'block'
    }
    else if (address.style.display == 'block') {
        address.style.display = 'none'
        comment.style.display = 'block'
    }
    else {
        divObject.style.display = 'block'
        address.style.display = 'none'
        comment.style.display = 'none'
    }

})




'use strict'

class GoodsList {
    constructor(container = '.goods-list') {
        this.container = document.querySelector(container);
        this.products = [];
        this.allProducts = [];
        this.fetchProducts();
        this.render();
        this.getSum();

    }
    fetchProducts() {
        this.products = [
            { id: 1, title: 'Notebook', price: 1000, img: 'img/goods-img.jpg' },
            { id: 2, title: 'Mouse', price: 100, img: 'img/goods-img.jpg' },
            { id: 3, title: 'Keyboard', price: 250, img: 'img/goods-img.jpg' },
            { id: 4, title: 'Gamepad', price: 150, img: 'img/goods-img.jpg' },
        ];
    }

    render() {
        for (const good of this.products) {
            const allProduct = new GoodItem(good);
            console.log(allProduct);
            this.allProducts.push(allProduct);
            this.container.insertAdjacentHTML("beforeend", allProduct.getHTMLString());
        }
    }
    getSum() {
        let sum = 0;
        for (let good of this.products) {
            sum += good.price;
        }
        console.log(sum);
    }
}

class GoodItem {
    constructor(good, img = 'img/goods-img.jpg') {
        this.id = good.id;
        this.title = good.title;
        this.price = good.price;
        this.img = good.img;
    }
    getHTMLString() {
        return `<div class="goods-item" data-id="${this.id}">
    <img src = "${this.img}" alt="photo"> <br>
    <div class="desc">
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    <button class="cart-button">Купить</button>
    </div>
    </div>`;
    }
}

new GoodsList();

class Basket {
    addGood() { }
    removeGood() { }
    render() { }
}

class ElBasket {
    getElBasket() { }
}



// const goods = [
//     { id: 1, title: 'Notebook', price: 1000, img: 'img/goods-img.jpg' },
//     { id: 2, title: 'Mouse', price: 100, img: 'img/goods-img.jpg' },
//     { id: 3, title: 'Keyboard', price: 250, img: 'img/goods-img.jpg' },
//     { id: 4, title: 'Gamepad', price: 150, img: 'img/goods-img.jpg' },
// ];


// const renderGoodsItem = (img, title, price) => {
//     return `<div class="goods-item" data-id="${this.id}">
//     <img src = "${img}" alt="photo"> <br>
//     <div class="desc">
//     <h3>${title}</h3>
//     <p>${price}</p>
//     <button class="cart-button">Купить</button>
//     </div>
//     </div>`;
// };


// const renderGoodsList = (list) =>
//     document.querySelector('.goods-list').innerHTML = list.map((item) => renderGoodsItem(item.img, item.title, item.price)).join('');


// renderGoodsList(goods);



let productsInCart = JSON.parse(localStorage.getItem('5G_STORE'));
if(!productsInCart){
	productsInCart = [];
}
const parentElement = document.querySelector('.cart-body');
const cartSumPrice = document.querySelector('.sum-price');
const products = document.querySelectorAll('.colp');


const countTheSumPrice = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

const updateShoppingCartHTML = function () {  // 3
	localStorage.setItem('5G_STORE', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
            return`
			<li class="list-group-item list-group-item-dark">
			<div class="row">
			 <img class="img-cart" src="${product.image}">
			 <h4 class="p-name">${product.name}</h4>
			 <p>$<span class="price-cart">${product.price}</span></p>
			 <div class="control-count">
				 <button data-id="${product.id}" class="btn-minus">-</button>
				 <span class="countOfproduct">${product.count}</span>
				 <button class="btn-plus" data-id="${product.id}">+</button>
			  </div>
			</div>
		 </li>`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.check').classList.remove('hidden');
		cartSumPrice.innerHTML = '$' + countTheSumPrice();

	}
	else {
		document.querySelector('.check').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
		cartSumPrice.innerHTML = '';
	}
}

function updateProductsInCart(product) { // 2
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		}
	}
	productsInCart.push(product);
}

products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('adder')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.p-name').innerHTML;
			const productPrice = item.querySelector('.price-val').innerHTML;
			const image = item.querySelector('.product-img').src ;
			
			let product = {
				name: productName,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
				image: image
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});

parentElement.addEventListener('click', (e) => {
	const isPlusButton = e.target.classList.contains('btn-plus');
	const isMinusButton = e.target.classList.contains('btn-minus');
	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
		updateShoppingCartHTML();
	}
});

updateShoppingCartHTML();
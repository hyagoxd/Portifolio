// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cart = document.getElementById('cart-section');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout');
    const confirmationSection = document.getElementById('confirmation');
    const returnToShopButton = document.getElementById('return-to-shop');
    const backToShopButton = document.getElementById('back-to-shop');

    let cartData = JSON.parse(localStorage.getItem('cartData')) || [];

    if (cartButton) {
        // Adiciona produtos ao carrinho
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productElement = e.target.closest('.product');
                const id = productElement.getAttribute('data-id');
                const name = productElement.querySelector('h3').textContent;
                const price = parseFloat(productElement.querySelector('.product-price').textContent.replace('R$ ', '').replace(',', '.'));

                addToCart(id, name, price);
            });
        });

        // Atualiza o contador de itens no carrinho
        updateCartCount();
    }

    if (cart) {
        // Atualiza o carrinho na página cart.html
        updateCart();

        clearCartButton.addEventListener('click', () => {
            cartData = [];
            localStorage.removeItem('cartData');
            updateCart();
        });

        checkoutButton.addEventListener('click', () => {
            if (cartData.length > 0) {
                // Limpa os itens do carrinho e remove do localStorage
                cartData = [];
                localStorage.removeItem('cartData');

                // Atualiza a visualização do carrinho
                updateCart();

                // Exibe a seção de confirmação
                cart.classList.add('hidden');
                confirmationSection.classList.remove('hidden');
            } else {
                alert('Seu carrinho está vazio.');
            }
        });

        returnToShopButton.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redireciona para a página inicial
        });
    }

    if (backToShopButton) {
        backToShopButton.addEventListener('click', () => {
            localStorage.removeItem('cartData');
        });
    }

    function addToCart(id, name, price) {
        const itemIndex = cartData.findIndex(item => item.id === id);

        if (itemIndex > -1) {
            cartData[itemIndex].quantity += 1;
        } else {
            cartData.push({ id, name, price, quantity: 1 });
        }

        localStorage.setItem('cartData', JSON.stringify(cartData));
        updateCartCount();
    }

    function updateCart() {
        if (cart) {
            cartItems.innerHTML = '';
            let total = 0;

            cartData.forEach(item => {
                total += item.price * item.quantity;
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`;
                cartItems.appendChild(listItem);
            });

            cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
        }
    }

    function updateCartCount() {
        const totalCount = cartData.length;
        if (cartCount) {
            cartCount.textContent = totalCount;
        }
    }
});

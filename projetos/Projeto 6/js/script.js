document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cart = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    
    let items = [];
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));
            
            items.push({ product, price });
            updateCart();
        });
    });
    
    cartButton.addEventListener('click', () => {
        cart.style.display = cart.style.display === 'none' || cart.style.display === '' ? 'block' : 'none';
    });
    
    checkoutButton.addEventListener('click', () => {
        alert('Obrigado pela compra!');
        items = [];
        updateCart();
    });
    
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        
        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = items.length;
    }
});

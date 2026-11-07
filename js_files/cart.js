const CART_KEY = "travelmart_cart";

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId) {
    const cart = getCart();
    const existing = cart.find(function (item) {
        return item.id === productId;
    });

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }

    saveCart(cart);
}

function getCartCount() {
    return getCart().reduce(function (total, item) {
        return total + Number(item.qty || 0);
    }, 0);
}

function updateCartCount() {
    const count = getCartCount();
    document.querySelectorAll("[data-cart-count]").forEach(function (badge) {
        badge.textContent = String(count);
        badge.hidden = count === 0;
    });
}

function showCartToast(message) {
    let toast = document.querySelector(".cart-toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.className = "cart-toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showCartToast.timer);
    showCartToast.timer = setTimeout(function () {
        toast.classList.remove("show");
    }, 1800);
}

document.addEventListener("DOMContentLoaded", updateCartCount);

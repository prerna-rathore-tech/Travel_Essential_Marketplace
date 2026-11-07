const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const cartEmpty = document.getElementById("cart-empty");
const cartSummary = document.getElementById("cart-summary");

function setQty(productId, qty) {
    const nextQty = Math.max(0, Number(qty));
    let cart = getCart();

    if (nextQty === 0) {
        cart = cart.filter(function (item) {
            return item.id !== productId;
        });
    } else {
        cart = cart.map(function (item) {
            if (item.id === productId) {
                return { id: item.id, qty: nextQty };
            }
            return item;
        });
    }

    saveCart(cart);
    renderCart();
}

function renderCart() {
    const cart = getCart();
    const rows = cart.map(function (item) {
        const product = getProductById(item.id);
        if (!product) {
            return "";
        }

        const lineTotal = product.price * item.qty;
        return (
            '<article class="cart-item">' +
                '<img src="' + product.image + '" alt="' + product.name + '">' +
                "<div>" +
                    "<h3>" + product.name + "</h3>" +
                    '<p class="product-category">' + (CATEGORY_LABELS[product.category] || "") + "</p>" +
                    '<p class="product-price">' + formatPrice(product.price) + "</p>" +
                "</div>" +
                '<div class="qty-box">' +
                    '<button type="button" data-action="minus" data-id="' + product.id + '">-</button>' +
                    "<span>" + item.qty + "</span>" +
                    '<button type="button" data-action="plus" data-id="' + product.id + '">+</button>' +
                "</div>" +
                '<p class="line-total">' + formatPrice(lineTotal) + "</p>" +
                '<button type="button" class="remove-btn" data-action="remove" data-id="' + product.id + '">' +
                    '<i class="ri-delete-bin-line"></i>' +
                "</button>" +
            "</article>"
        );
    }).join("");

    const total = cart.reduce(function (sum, item) {
        const product = getProductById(item.id);
        return product ? sum + product.price * item.qty : sum;
    }, 0);

    const isEmpty = !cart.length || !rows;

    if (cartEmpty) {
        cartEmpty.hidden = !isEmpty;
    }
    if (cartSummary) {
        cartSummary.hidden = isEmpty;
    }
    if (cartList) {
        cartList.innerHTML = isEmpty ? "" : rows;
    }
    if (cartTotal) {
        cartTotal.textContent = formatPrice(total);
    }
}

if (cartList) {
    cartList.addEventListener("click", function (event) {
        const button = event.target.closest("button");
        if (!button) {
            return;
        }

        const id = button.dataset.id;
        const item = getCart().find(function (row) {
            return row.id === id;
        });
        if (!item) {
            return;
        }

        if (button.dataset.action === "plus") {
            setQty(id, item.qty + 1);
        } else if (button.dataset.action === "minus") {
            setQty(id, item.qty - 1);
        } else if (button.dataset.action === "remove") {
            setQty(id, 0);
        }
    });
}

renderCart();



//claude code

// ---- Checkout ----
const ORDERS_KEY = "travelmart_orders";
const placeOrderBtn = document.getElementById("place-order-btn");
const checkoutForm = document.getElementById("checkout-form");
const checkoutStatus = document.getElementById("checkout-status");
const orderSuccess = document.getElementById("order-success");

function setCheckoutStatus(text) {
    checkoutStatus.textContent = text;
}

function getCartTotal() {
    return getCart().reduce(function (sum, item) {
        const product = getProductById(item.id);
        return product ? sum + product.price * item.qty : sum;
    }, 0);
}

if (placeOrderBtn && checkoutForm) {
    placeOrderBtn.addEventListener("click", function () {
        checkoutForm.hidden = false;

        // Logged-in user ho to naam pehle se bhar do
        try {
            const user = JSON.parse(localStorage.getItem("travelmart_current_user"));
            const nameInput = document.getElementById("co-name");
            if (user && user.name && !nameInput.value) {
                nameInput.value = user.name;
            }
        } catch (error) {}

        checkoutForm.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("co-name").value.trim();
        const phone = document.getElementById("co-phone").value.trim();
        const address = document.getElementById("co-address").value.trim();
        const city = document.getElementById("co-city").value.trim();
        const pin = document.getElementById("co-pin").value.trim();
        const payment = document.getElementById("co-payment").value;

        if (!name || !phone || !address || !city || !pin) {
            setCheckoutStatus("Please fill in all the fields.");
            return;
        }
        if (!/^[6-9]\d{9}$/.test(phone)) {
            setCheckoutStatus("Enter a valid 10 digit mobile number.");
            return;
        }
        if (!/^\d{6}$/.test(pin)) {
            setCheckoutStatus("Enter a valid 6 digit pincode.");
            return;
        }

        const cart = getCart();
        if (!cart.length) {
            setCheckoutStatus("Your cart is empty.");
            return;
        }

        const total = getCartTotal();
        const orderId = "TM" + String(Date.now()).slice(-6);

        let orders = [];
        try {
            orders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
        } catch (error) {
            orders = [];
        }
        orders.push({
            id: orderId,
            date: new Date().toISOString(),
            items: cart,
            total: total,
            payment: payment,
            delivery: { name: name, phone: phone, address: address, city: city, pin: pin }
        });
        localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

        saveCart([]);
        renderCart();

        checkoutForm.reset();
        checkoutForm.hidden = true;
        cartEmpty.hidden = true;
        document.getElementById("order-id").textContent = orderId;
        document.getElementById("order-total").textContent = formatPrice(total);
        orderSuccess.hidden = false;
        orderSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}
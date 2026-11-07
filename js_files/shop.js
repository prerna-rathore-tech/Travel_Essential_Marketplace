const productGrid = document.getElementById("product-grid");
const resultCount = document.getElementById("result-count");
const searchInput = document.getElementById("shop-search");
const filterButtons = document.querySelectorAll("[data-category]");

const urlCategory = new URLSearchParams(window.location.search).get("category") || "all";
let activeCategory = CATEGORY_LABELS[urlCategory] ? urlCategory : "all";
let searchText = "";

function matchesFilters(product) {
    const categoryOk = activeCategory === "all" || product.category === activeCategory;
    const query = searchText.trim().toLowerCase();
    const searchOk = !query || product.name.toLowerCase().includes(query) ||
        (CATEGORY_LABELS[product.category] || "").toLowerCase().includes(query);
    return categoryOk && searchOk;
}

function renderProducts() {
    const items = PRODUCTS.filter(matchesFilters);

    filterButtons.forEach(function (button) {
        button.classList.toggle("active", button.dataset.category === activeCategory);
    });

    if (resultCount) {
        const label = activeCategory === "all" ? "products" : CATEGORY_LABELS[activeCategory];
        resultCount.textContent = items.length + " " + label + " found";
    }

    if (!productGrid) {
        return;
    }

    if (!items.length) {
        productGrid.innerHTML = '<p class="empty-state">No products match your filters.</p>';
        return;
    }

    productGrid.innerHTML = items.map(function (product) {
        return (
            '<article class="product-card">' +
                '<img src="' + product.image + '" alt="' + product.name + '">' +
                '<p class="product-category">' + (CATEGORY_LABELS[product.category] || product.category) + "</p>" +
                "<h3>" + product.name + "</h3>" +
                '<p class="product-price">' + formatPrice(product.price) + "</p>" +
                '<button type="button" class="add-cart-btn" data-id="' + product.id + '">' +
                    'Add to Cart <i class="ri-shopping-bag-line"></i>' +
                "</button>" +
            "</article>"
        );
    }).join("");
}

if (productGrid) {
    productGrid.addEventListener("click", function (event) {
        const button = event.target.closest(".add-cart-btn");
        if (!button) {
            return;
        }

        addToCart(button.dataset.id);
        showCartToast("Added to cart");
    });
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        activeCategory = button.dataset.category;
        renderProducts();
    });
});

if (searchInput) {
    searchInput.addEventListener("input", function () {
        searchText = searchInput.value;
        renderProducts();
    });
}

renderProducts();

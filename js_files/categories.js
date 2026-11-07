// const categoryGrid = document.getElementById("category-grid");

// if (categoryGrid) {
//     categoryGrid.innerHTML = Object.keys(CATEGORY_LABELS).map(function (key) {
//         const items = PRODUCTS.filter(function (product) {
//             return product.category === key;
//         });

//         if (!items.length) {
//             return "";
//         }

//         const label = CATEGORY_LABELS[key];
//         const countText = items.length + (items.length === 1 ? " product" : " products");

//         return (
//             '<a class="category-tile" href="shop.html?category=' + key + '">' +
//                 '<img src="' + items[0].image + '" alt="' + label + '">' +
//                 "<h3>" + label + "</h3>" +
//                 "<p>" + countText + "</p>" +
//                 '<span class="explore-link">Explore <i class="ri-arrow-right-line"></i></span>' +
//             "</a>"
//         );
//     }).join("");
// }





const categoryGrid = document.getElementById("category-grid");

if (categoryGrid) {
    categoryGrid.innerHTML = Object.keys(CATEGORY_LABELS).map(function (key) {
        const items = PRODUCTS.filter(function (product) {
            return product.category === key;
        });

        if (!items.length) {
            return "";
        }

        const label = CATEGORY_LABELS[key];
        const countText = items.length + (items.length === 1 ? " product" : " products");

        return (
            '<a class="category-tile" href="shop.html?category=' + key + '">' +
                '<img src="' + items[0].image + '" alt="' + label + '">' +
                "<h3>" + label + "</h3>" +
                "<p>" + countText + "</p>" +
                '<span class="explore-link">Explore <i class="ri-arrow-right-line"></i></span>' +
            "</a>"
        );
    }).join("");
}
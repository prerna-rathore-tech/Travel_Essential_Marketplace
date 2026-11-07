const PRODUCTS = [
    {
        id: "bp-01",
        name: "Travel Backpack",
        category: "backpacks",
        price: 2499,
        image: "../images/categories-img/bagpack.jpg"
    },
    {
        id: "lg-01",
        name: "Hard Shell Luggage",
        category: "luggage",
        price: 5499,
        image: "../images/categories-img/Luggage.webp"
    },
    {
        id: "lg-02",
        name: "Cabin Suitcase",
        category: "luggage",
        price: 4299,
        image: "../images/best-seller-img/suitcase.png"
    },
    {
        id: "or-01",
        name: "Packing Cubes",
        category: "organizers",
        price: 899,
        image: "../images/best-seller-img/pakingCubes.png"
    },
    {
        id: "or-02",
        name: "Travel Organizer",
        category: "organizers",
        price: 1199,
        image: "../images/categories-img/Travel Organizers.webp"
    },
    {
        id: "pl-01",
        name: "Travel Neck Pillow",
        category: "pillows",
        price: 799,
        image: "../images/categories-img/Pillows.webp"
    },
    {
        id: "bt-01",
        name: "Insulated Bottle",
        category: "bottles",
        price: 649,
        image: "../images/categories-img/bottle.webp"
    },
    {
        id: "cp-01",
        name: "Sun Cap",
        category: "caps",
        price: 499,
        image: "../images/categories-img/cap.webp"
    },
    {
        id: "gg-01",
        name: "Travel Goggles",
        category: "goggles",
        price: 1299,
        image: "../images/categories-img/gogles.jpeg"
    },
    {
        id: "jk-01",
        name: "Winter Jacket",
        category: "jackets",
        price: 3499,
        image: "../images/categories-img/jacket.jpg"
    },
    {
        id: "cm-01",
        name: "Travel Camera",
        category: "cameras",
        price: 18999,
        image: "../images/categories-img/camera_cate.jpg"
    },
    {
        id: "cm-02",
        name: "Compact Camera",
        category: "cameras",
        price: 12499,
        image: "../images/best-seller-img/camera.png"
    },
    {
        id: "pb-01",
        name: "Fast Charge Powerbank",
        category: "powerbanks",
        price: 1599,
        image: "../images/categories-img/powerbank2.jpg"
    },
    {
        id: "pb-02",
        name: "Travel Powerbank",
        category: "powerbanks",
        price: 1899,
        image: "../images/best-seller-img/powerbank.jpg"
    },
    {
        id: "tn-01",
        name: "Camping Tent",
        category: "tents",
        price: 6999,
        image: "../images/categories-img/tant2.jpg"
    },
    {
        id: "tn-02",
        name: "Weekend Tent",
        category: "tents",
        price: 7499,
        image: "../images/best-seller-img/campingTant.avif"
    },
    {
        id: "ws-01",
        name: "Waist & Sling Pack",
        category: "waist-packs",
        price: 1399,
        image: "../images/categories-img/Waist.webp"
    },
    {
        id: "ws-02",
        name: "Everyday Sling Pack",
        category: "waist-packs",
        price: 1599,
        image: "../images/best-seller-img/Waist & Sling Packs.jpg"
    }
];

const CATEGORY_LABELS = {
    backpacks: "Backpacks",
    luggage: "Luggage",
    organizers: "Organizers",
    pillows: "Pillows",
    bottles: "Bottles",
    caps: "Caps",
    goggles: "Goggles",
    jackets: "Jackets",
    cameras: "Cameras",
    powerbanks: "Powerbanks",
    tents: "Tents",
    "waist-packs": "Waist & Sling Packs"
};

function formatPrice(price) {
    return "₹" + Number(price).toLocaleString("en-IN");
}

function getProductById(id) {
    return PRODUCTS.find(function (product) {
        return product.id === id;
    });
}

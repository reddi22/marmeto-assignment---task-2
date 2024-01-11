let showProducts = document.getElementById("showProducts");
const menChoiceButton = document.getElementById("menChoiceButton");
const womenChoiceButton = document.getElementById("womenChoiceButton");
const kidsChoiceButton = document.getElementById("kidsChoiceButton");

let productsData;
let FilterProducts;
let selectedCategory = "Men";

const createAndAppendProduct = (value) => {
    const {
        badge_text,
        title,
        vendor,
        price,
        image,
        compare_at_price
    } = value;
    const priceLess = compare_at_price - price;
    const discount = Math.floor((priceLess / compare_at_price) * 100);
    const bagdeFound = badge_text ? "product-bagde" : "";

    const productContainer = document.createElement("li");
    const productImgContainer = document.createElement("div");
    const productImgElement = document.createElement("img");
    const productImgBadgeElement = document.createElement("b");
    const productTitleElement = document.createElement("h2");
    const productVendorElement = document.createElement("h4");
    const productPriceElement = document.createElement("span");
    const productOrginalPriceElement = document.createElement("span");
    const productPriceDiscountElement = document.createElement("span");
    const productAddCartBtnElement = document.createElement("button");
    const divele = document.createElement('div');

    productImgElement.src = image;
    productImgElement.className = "product-img";
    productImgContainer.className = "product-img-container";
    productImgContainer.appendChild(productImgElement);
    productContainer.appendChild(productImgContainer);

    productImgBadgeElement.textContent = badge_text;
    productImgBadgeElement.className = bagdeFound;
    productImgContainer.appendChild(productImgBadgeElement);

    productTitleElement.textContent = title.slice(0, 22);
    productTitleElement.className = "product-title";
    productContainer.appendChild(productTitleElement);

    productVendorElement.textContent = vendor;
    productVendorElement.className = "product-vendor";
    productContainer.appendChild(productVendorElement);

    productPriceElement.textContent = "Rs " + price + '.00';
    productPriceElement.className = "product-price";
    productContainer.appendChild(productPriceElement);

    productOrginalPriceElement.textContent = compare_at_price;
    productOrginalPriceElement.className = "procuct-original-price";
    productContainer.appendChild(productOrginalPriceElement);

    productPriceDiscountElement.textContent = discount + " " + "% off";
    productPriceDiscountElement.className = "procuct-discount";
    productContainer.appendChild(productPriceDiscountElement);

    productAddCartBtnElement.textContent = "Add To Cart";
    productAddCartBtnElement.className = "product-btn";
    productContainer.appendChild(productAddCartBtnElement);

    productContainer.className = "product-container";

    showProducts.appendChild(productContainer);
};

const loopEachProduct = (value) => {
    for (let product of value.category_products) {
        createAndAppendProduct(product);
    }
};

menChoiceButton.addEventListener("click", (e) => {
    showProducts.textContent = "";
    selectedCategory = e.target.value;
    menChoiceButton.className = "active-btn";
    womenChoiceButton.className = "";
    kidsChoiceButton.className = "";
    FilterProducts = productsData.find(
        (eachProduct) => eachProduct.category_name === selectedCategory
    );
    loopEachProduct(FilterProducts);
});

womenChoiceButton.addEventListener("click", (e) => {
    showProducts.textContent = "";
    selectedCategory = e.target.value;
    menChoiceButton.className = "";
    womenChoiceButton.className = "active-btn";
    kidsChoiceButton.className = "";
    FilterProducts = productsData.find(
        (eachProduct) => eachProduct.category_name === selectedCategory
    );
    loopEachProduct(FilterProducts);
});

kidsChoiceButton.addEventListener("click", (e) => {
    showProducts.textContent = "";
    selectedCategory = e.target.value;
    menChoiceButton.className = "";
    womenChoiceButton.className = "";
    kidsChoiceButton.className = "active-btn";
    FilterProducts = productsData.find(
        (eachProduct) => eachProduct.category_name === selectedCategory
    );
    loopEachProduct(FilterProducts);
});

const fetchApi = async () => {
    const url =
        "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
    const options = {
        method: "GET",
    };

    const req = await fetch(url, options);
    const res = await req.json();
    productsData = res.categories;
    FilterProducts = productsData.find(
        (eachProduct) => eachProduct.category_name === selectedCategory;
    );
    loopEachProduct(FilterProducts);
};
fetchApi();

menButton.className = "active-btn";

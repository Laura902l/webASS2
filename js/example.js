
var splide1 = new Splide('#splide-2', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
});

splide1.mount();



let cart = {};
let total = 0;

function updateBasket() {
    const cartItemsList = document.getElementById("cart-items");
    const cartList = document.getElementById("list");
    cartItemsList.innerHTML = "";
    cartList.innerHTML = "";

    for (const productName in cart) {
        const product = cart[productName];

        const cartItem = document.createElement("li");
        cartItem.textContent = `${productName} x${product.quantity} - ${product.total.toFixed(0)} KZT\n`;
        cartItemsList.appendChild(cartItem);

        const listElement = document.createElement("li");
        listElement.textContent = `${productName} x${product.quantity} - ${product.total.toFixed(0)} KZT`;
        cartList.appendChild(listElement);


    }

    const totalText = document.getElementById("total");
    totalText.textContent = ` ${total.toFixed(0)} KZT`;

    const cartTotalSpan = document.getElementById("cart-total");
    cartTotalSpan.textContent = total.toFixed(0);



}

function addToBasket(productName, price) {
    if (cart[productName]) {
        cart[productName].quantity++;
        cart[productName].total += price;
    } else {
        cart[productName] = { quantity: 1, total: price };
    }
    total += price;


    updateBasket();
}

function removeFromBasket(productName, price) {
    if (cart[productName]) {
        cart[productName].quantity--;
        cart[productName].total -= price;
        if (cart[productName].quantity === 0) {
            delete cart[productName];
        }
        total -= price;
        updateBasket();
    }
}

const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", function () {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "block";
});

const exite = document.getElementById("close-popup");
exite.addEventListener("click", function () {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "none";
});




$('.quantity_inner .bt_minus').click(function () {
    let $input = $(this).parent().find('.quantity');
    const productName = $input.data('product-name');
    const price = parseInt($input.data('product-price'));
    let count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    removeFromBasket(productName, price);
});

$('.bt_plus').click(function () {
    const $input = $(this).siblings('.quantity');
    const productName = $input.data('product-name');
    const price = parseInt($input.data('product-price'));
    let count = parseInt($input.val());
    const maxCount = parseInt($input.data('max-count'));

    count = count < maxCount ? count + 1 : maxCount;
    $input.val(count);

    addToBasket(productName, price);
});

$('.quantity').on("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }

    const productName = $(this).data('product-name');
    updateProductCount(productName);
});


function mouseOver(element) {
    element.style.backgroundColor = "#F7F4ED";
    element.style.borderColor = "#587493";
}

function mouseOut(element) {
    element.style.backgroundColor = "";
    element.style.borderColor = "";
}


function toggleFormVisibility() {
    var form = document.getElementById('order-form');
    var totalValue = parseFloat(document.getElementById("total").textContent);

    if (totalValue === 0) {
        alert("The Basket is empty.");
    } else {
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    }
}


function toggleAddressFields() {
    var pickupDeliverySelect = document.getElementById('pickup-delivery');
    var addressFields = document.getElementById('address-fields');
    var pickupAddressFields = document.getElementById('pickup-address-fields');

    if (pickupDeliverySelect.value === 'card') {
        addressFields.style.display = 'none';
        pickupAddressFields.style.display = 'block';
    } else if (pickupDeliverySelect.value === 'delivery') {
        addressFields.style.display = 'block';
        pickupAddressFields.style.display = 'none';
    }
}

function showThankYouAlert() {
    if (checkFormFilled()) {
        let input = prompt("Are you ready to confirm your purchase?" + "\n1-YES\n2-NO");
        if (input == 1) {
            const thankYouMessage = "Thanks for your purchase!";
            alert(thankYouMessage);
        }
    }
}


function checkFormFilled() {
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var streetInput = document.getElementById("street");
    var apartmentInput = document.getElementById("apartment");
    var floorInput = document.getElementById("floor");
    var cardInput = document.getElementById("сard");
    var cvvInput = document.getElementById("CVV");

    if (
        nameInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
        streetInput.value.trim() === "" ||
        apartmentInput.value.trim() === "" ||
        floorInput.value.trim() === "" ||
        cardInput.value.trim() === "" ||
        cvvInput.value.trim() === ""
    ) {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}


document.getElementById("order-form").addEventListener("submit", function (event) {
    if (!checkFormFilled()) {
        event.preventDefault();
    }
});


var countDownDate = new Date("Jan 1, 2024 15:37:25").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


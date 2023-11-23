// Splide

var splide1 = new Splide('#splide-2', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
});

splide1.mount();


// filter Products
function filterProducts(category) {
    var products = document.querySelectorAll('.col-sm-3');

    products.forEach(function (product) {
        var productCategory = product.getAttribute('data-category');

        if (productCategory) {
            if (category === 'all' || productCategory.toLowerCase() === category.toLowerCase()) {
                if (!product.classList.contains('shopping-basket')) {
                    product.style.display = 'block';
                }
            } else {
                product.style.display = 'none';
            }
        }
    });
}

// filter Products By Price
function filterByPriceAll() {
    var products = document.querySelectorAll('.col-sm-3');
    var priceRange = document.getElementById('priceRange').value;

    products.forEach(function (product) {
        var productPrice = parseInt(product.getAttribute('data-price'));

        if (!isNaN(productPrice)) {
            if (productPrice <= priceRange) {
                if (!product.classList.contains('shopping-basket')) {
                    product.style.display = 'block';
                }
            } else {
                product.style.display = 'none';
            }
        }
    });

    document.getElementById('priceOutput').textContent = priceRange;
}




let cart = {};
let total = 0;

// Load cart data from local storage on page load
window.addEventListener('load', function () {
    const storedCart = localStorage.getItem('cart');
    const storedTotal = localStorage.getItem('total');

    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    if (storedTotal) {
        total = parseFloat(storedTotal);
    }

    updateBasket();
});

function saveCartToLocalStorage() {
   
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total.toString()); 
}

// update Basket

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

    // Save cart data to local storage after each update
    saveCartToLocalStorage();
}



// add To Basket
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


// remove From Basket
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


function getCountFromLocalStorage(productName) {
    const storedCount = localStorage.getItem(productName);
    return storedCount ? parseInt(storedCount) : 0;
}


function saveCountToLocalStorage(productName, count) {
    localStorage.setItem(productName, count);
}


function updateQuantityInput($input, count) {
    $input.val(count);
    saveCountToLocalStorage($input.data('product-name'), count);
}

// Event handler for minus button
$('.quantity_inner .bt_minus').click(function () {
    let $input = $(this).parent().find('.quantity');
    const price = parseInt($input.data('product-price'));
    let count = getCountFromLocalStorage($input.data('product-name')) - 1;
    count = count < 0 ? 0 : count;
    updateQuantityInput($input, count);
    removeFromBasket($input.data('product-name'), price);
});

// Event handler for plus button
$('.bt_plus').click(function () {
    const $input = $(this).siblings('.quantity');
    const price = parseInt($input.data('product-price'));
    let count = getCountFromLocalStorage($input.data('product-name'));
    const maxCount = parseInt($input.data('max-count'));

    count = count < maxCount ? count + 1 : maxCount;
    updateQuantityInput($input, count);
    addToBasket($input.data('product-name'), price);
});

// Event handler for input change
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
    saveCountToLocalStorage(productName, parseInt(this.value));
});

// Initial loading of quantities from local storage
$('.quantity').each(function () {
    const productName = $(this).data('product-name');
    const count = getCountFromLocalStorage(productName);
    updateQuantityInput($(this), count);
});



// function toggleFormVisibility() {
//     var form = document.getElementById('order-form');
//     var button = document.getElementById('button');
//     var cartTotalElement = document.getElementById("cart-total");
//     var total = parseFloat(cartTotalElement.textContent);

//     if (!cartTotalElement || isNaN(total) || total === 0) {
//         alert("The Basket is empty.");
//         return;
//     } else {
//         if (form.style.display === 'none' || form.style.display === '') {
//             form.style.display = 'block';
//             button.style.display = 'none';
//         } else {
//             form.style.display = 'none';
//             button.style.display = 'block';
//         }
//     }
// }
function toggleFormVisibility() {
    var form = document.getElementById('order-form');
    var button = document.getElementById('button');
    var cartTotalElement = document.getElementById("cart-total");
    var total = parseFloat(cartTotalElement.textContent);
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "false") {
        alert("You should log in or log out.");
        return; 
    } else if (!cartTotalElement || isNaN(total) || total === 0) {
        alert("The Basket is empty.");
        return;
    } else {
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
            button.style.display = 'none';
        } else {
            form.style.display = 'none';
            button.style.display = 'block';
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
function checkFormFilled() {
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var streetInput = document.getElementById("street");
    var apartmentInput = document.getElementById("apartment");
    var floorInput = document.getElementById("floor");
    var cardInput = document.getElementById("card");  
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


// function showThankYouAlert() {
//     if (checkFormFilled()) {
//         let input = prompt("Are you ready to confirm your purchase?" + "\n1-YES\n2-NO");
//         if (input === "1") {
//             const thankYouMessage = "Thanks for your purchase!";
//             alert(thankYouMessage);
//         }
//           // Clear local storage
//           localStorage.removeItem("cart");
//           localStorage.removeItem("total");
        
//     } 
// }
function showThankYouAlert() {
    if (checkFormFilled()) {
        let input = prompt("Are you ready to confirm your purchase?" + "\n1-YES\n2-NO");
        if (input === "1") {
            const thankYouMessage = "Thanks for your purchase!";
            alert(thankYouMessage);
            
            window.localStorage.setItem("purchaseData", JSON.stringify({
                timestamp: Date.now(),
                cart: cart,
                total: total
            }));

       
            localStorage.removeItem("cart");
            localStorage.removeItem("total");

            $('.quantity_inner .bt_minus').off('click');


            $('.bt_plus').off('click');


            $('.quantity').off("change keyup input click");


            $('.quantity').each(function () {
                const productName = $(this).data('product-name');
                localStorage.removeItem(productName);
                updateQuantityInput($(this), 0);
            });

            window.location.href = "user.html";
      
        }
    }
}

function mouseOver(element) {
    element.style.backgroundColor = "#F7F4ED";
    element.style.borderColor = "#587493";
}

function mouseOut(element) {
    element.style.backgroundColor = "";
    element.style.borderColor = "";
}
function mouseOverShowAll(element) {
    element.style.color = "red";
}

function mouseOutShowAll(element) {
    element.style.color = "black";
}

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


function goToProfile() {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
      var userEmail = localStorage.getItem("userEmail");
      var userPassword = localStorage.getItem("userPassword");
      window.location.href = 'user.html';
  } else {

    window.location.href = 'forms.html';
}
}

window.onload = function () {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        var userEmail = localStorage.getItem("userEmail");
        var userPassword = localStorage.getItem("userPassword");
        var userName = localStorage.getItem("userName");
        var userSurname = localStorage.getItem("userSurname");
        var userBirthdate = localStorage.getItem("userBirthdate");

        // Store user details in local storage
        var userDetails = {
            userName: userName || "User's Name",
            userSurname: userSurname || "User's Surname",
            userEmail: userEmail || "You do not have an account",
            userPassword: userPassword || "error",
            userBirthdate: userBirthdate || "User's bday"
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
};
document.addEventListener("DOMContentLoaded", function () {
    var storedUserDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
    document.getElementById("displayName").textContent = storedUserDetails.userName;
});

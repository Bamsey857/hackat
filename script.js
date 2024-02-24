

/*-----cartItem in an array*/

const cartItems = [
    {
        id:0,
        image: 'projimages/localfood.jpeg',
        title: 'White rice with stew',
        price: 'N,1500',
    },
    {
        id:1,
        image: 'projimages/femoree-_VRo59IsqLo-unsplash.jpg',
        title: 'White rice with tomatoe sauce',
        price: 'N,2000',
    },
    {
        id:2,
        image: 'projimages/ke-vin-szQFiGZH8wU-unsplash.jpg',
        title: 'White rice with boiled Egg',
        price: 'N,3000',
    },
    {
        id:3,
        image: 'projimages/amalawithgbegiri.jpeg',
        title: 'Amala with gbegiri',
        price: 'N3,000',
    },
    {
        id:4,
        image: 'projimages/localfood.jpeg',
        title: 'White rice with stew',
        price: 'N2,500',
    },
    {
        id:5,
        image: 'projimages/femoree-_VRo59IsqLo-unsplash.jpg',
        title: 'White rice with tomatoe sauce',
        price: 'N3,000',
    },
    {
        id:6,
        image: 'projimages/ke-vin-szQFiGZH8wU-unsplash.jpg',
        title: 'White rice with boiled Egg',
        price: 'N3,000',
    },
    {
        id:7,
        image: 'projimages/amalawithgbegiri.jpeg',
        title: 'Amala with gbegiri',
        price: 'N2,500',
    },
    {
        id:8,
        image: 'projimages/localfood.jpeg',
        title: 'White rice with stew',
        price: 'N2,500',
    },
    {
        id:9,
        image: 'projimages/femoree-_VRo59IsqLo-unsplash.jpg',
        title: 'White rice with tomatoe sauce',
        price: 'N3,000',
    },
    {
        id:10,
        image: 'projimages/ke-vin-szQFiGZH8wU-unsplash.jpg',
        title: 'White rice with boiled Egg',
        price: 'N,3000',
    },
    {
        id:11,
        image: 'projimages/amalawithgbegiri.jpeg',
        title: 'Amala with gbegiri',
        price: 'N2,500',
    },
    {
        id:12,
        image: 'projimages/ricewithdodo.jpeg',
        title: 'White rice with tomatoe sauce',
        price: 'N3,500',
    },
    {
        id:13,
        image: 'projimages/semo.jpeg',
        title: 'White rice with tomatoe sauce',
        price: 'N3,000',
    },
    {
        id:14,
        image: 'projimages/amala.jpeg',
        title: 'White rice with boiled Egg',
        price: 'N3,000',
    },
    {
        id:15,
        image: 'projimages/jollof.jpeg',
        title: 'White rice with stew',
        price: 'N2,500',
    },
];

//
function displayproduct(){
    document.querySelector('.name').innerHTML= cartItems[0].title
    // document.querySelectorAll('p').innerHTML= cartItems[0].price
    // document.getElementById('1').innerHTML= cartItems[0].id

}
displayproduct()
/*----Having access to cartItembtn-----*/


var btn = document.querySelector(".btn");
// var btn = document.getElementById("btn2");
// var btn = document.getElementById("btn3");
// var btn = document.getElementById("btn4");
// var btn = document.getElementById("btn5");
// var btn = document.getElementById("btn6");
// var btn = document.getElementById("btn7");
// var btn = document.getElementById("btn8");
// var btn = document.getElementById("btn9");
// var btn = document.getElementById("btn10");
// var btn = document.getElementById("btn11");
// var btn = document.getElementById("btn12");
// var btn = document.getElementById("btn13");
// var btn = document.getElementById("btn14");
// var btn = document.getElementById("btn15");
// var btn = document.getElementById("btn16");


console.log(btn);
// Function to retrieve product information based on productId
function getProductInfo(productId) {
    // Retrieve the product element from the DOM based on the productId
    const productElement = document.getElementById(productId);

    // Check if the productElement exists
    if (!productElement) {
        console.error(`Product element with ID ${productId} not found`);
        return null; // Return null if the product element is not found
    }

    // Extract name and price from the product element
    const nameElement = productElement.querySelector('.name');
    const priceElement = productElement.querySelector('p');

    // Check if name and price elements exist
    if (!nameElement || !priceElement) {
        console.error(`Name or price element not found in product with ID ${productId}`);
        return null; // Return null if either name or price element is not found
    }

    // Extract name and price text
    const name = nameElement.innerText;
    const priceText = priceElement.innerText;

    // Parse the price text to get the numerical value
    const priceMatch = priceText.match(/N([\d,.]+)/); // Extracts digits, commas, and periods after "N"
    const price = priceMatch ? parseFloat(priceMatch[1].replace(',', '')) : null; // Remove commas and parse to float

    // Check if price is valid
    if (price === null || isNaN(price)) {
        console.error(`Invalid price format for product with ID ${productId}`);
        return null; // Return null if price cannot be parsed
    }

    // Return the product information
    return {
        id: productId,
        name: name.trim(), // Trim excess whitespace
        price: price,
        // Add any other relevant product information here
    };
}

// Select all buttons with class "btn" (assuming you want to add event listeners to all buttons)
const buttons = document.querySelectorAll(".btn");

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.id;
        addToCart(productId);
    });
});

// Function to add product to cart
function addToCart(productId) {
    // Retrieve product information based on productId
    const product = getProductInfo(productId);

    // If product information is valid, proceed to add to cart
    if (product) {
        // Get the existing cart items from local storage or initialize an empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the product to the cart
        cart.push(product);

        // Save the updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Optional: Display a message or update the UI to indicate the item was added to the cart
        alert('Item added to cart!');
    }
}


/*-----Add btneventlistener----*/

btn.addEventListener('click',addToCart)






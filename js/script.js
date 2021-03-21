let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: "ping pong champion",
        tag: "GameHub_covers",
        price: 49,
        inCart: 0
    },
    {
        name: "super duper",
        tag: "GameHub_covers2",
        price: 29,
        inCart: 0
    },
    {
        name: "black",
        tag: "GameHub_covers3",
        price: 49,
        inCart: 0
    },
    {
        name: "furious",
        tag: "GameHub_covers4",
        price: 59,
        inCart: 0
    },
    {
        name: "assassin",
        tag: "GameHub_covers5",
        price: 49,
        inCart: 0
    },
    {
        name: "space war",
        tag: "GameHub_covers6",
        price: 49,
        inCart: 0
    },
    {
        name: "racing",
        tag: "GameHub_covers7",
        price: 59,
        inCart: 0
    },
    {
        name: "boxer",
        tag: "GameHub_covers8",
        price: 29,
        inCart: 0
    },
    {
        name: "cyberpunk",
        tag: "GameHub_covers9",
        price: 49,
        inCart: 0
    },
    {
        name: "forge legend",
        tag: "GameHub_covers10",
        price: 49,
        inCart: 0
    }
];

 for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
 }

 function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers) {
        document.querySelector(".counter").textContent = productNumbers;
    }
 }

 function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".counter").textContent = productNumbers + 1
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".counter").textContent = 1;
    }

    setItems(product);
 }

 function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

      localStorage.setItem("productsInCart", JSON.stringify
      (cartItems));
 }

 function totalCost(product) {
     let cartCost = localStorage.getItem("totalCost");

     if(cartCost != null) {
        cartCost = parseInt(cartCost);
         localStorage.setItem("totalCost", cartCost + product.price);
     } else {
        localStorage.setItem("totalCost", product.price);
     }

 }

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");

    if (cartItems && productContainer) {

        productContainer.innerHTML = "";

        Object.values(cartItems).map (item => {
            
            productContainer.innerHTML += `<div class="product">
                                                <img src="./images/assets/${item.tag}.jpg">
                                                <h4>${item.name}</h4>
                                           </div>
                                           <div class="price">Price: $${item.price},00</div>
                                           <div class="quantity">Quantity: ${item.inCart}</div>
                                           <div class="total">Total: $${item.inCart * item.price},00</div>
                                           `;
        });

        productContainer.innerHTML += `<div class="basketTotalContainer">
                                            <hr>
                                            <h3 class="basketTotalTitle">Basket total</h3>
                                            <h3 class="basketTotal">$${cartCost},00</h3>
                                       </div>`;
    }
}
 
onLoadCartNumbers();
displayCart();
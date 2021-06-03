const detailContainer = document.querySelector(".details-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://gamehub-api.wibedev.com/wp-json/wc/store/products/" + id;

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        createHTML(details);

        console.log(details);
    }
    catch (error) {
        detailContainer.innerHTML = error;
    }
}

fetchGame();

function createHTML(details) {

    document.title = details.name;

    detailContainer.innerHTML = `
                                <div class="details-image" style="background-image: url(${details.images[0].src})"></div>
                                <div class="info">
                                    <h1 class="details-name">${details.name}</h1>
                                    <p class="description">${details.description}</p>
                                    <h2 class="price">Price: ${details.prices.price}$</h2>
                                    <div class="add-cart">Add to cart</div>
                                </div>`;                    
}

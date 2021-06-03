const url = "https://gamehub-api.wibedev.com/wp-json/wc/store/products/";
const gameContainer = document.querySelector(".game-container");

async function getGames() {
    try {
        const response = await fetch(url);
        const games = await response.json();

        gameContainer.innerHTML = "";

        createHTML(games);

    } 
    catch (error) {
        gameContainer.innerHTML = error;
    }
}

getGames();

function createHTML(games) {
    for (let i = 0; i < games.length; i++) {
        
        if (i === 4) {
            break;
        }

        gameContainer.innerHTML += `<a href="product.html?id=${games[i].id}" class="card">
                                            <div class="image" style="background-image: url(${games[i].images[0].src})"></div>
                                            <div class="details">
                                                <h2 class="name">${games[i].name}</h2>
                                                <h3 class="price">Price: ${games[i].prices.price}$</h3>                                                                                                                                                
                                            </div>
                                      </a>`;
    }
    
}


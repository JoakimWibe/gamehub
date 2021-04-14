const url = "https://gamehub-api.wibedev.com/wp-json/wc/store/products/";
const gameContianer = document.querySelector(".game-container");

async function getGames() {
    try {
        const response = await fetch(url);
        const games = await response.json();

        resultsContainer.innerHTML = "";

        createHTML(games);

    } 
    catch (error) {
        resultsContainer.innerHTML = message("error", error);
    }
}

getGames();

function createHTML(games) {
    for (let i = 0; i < games.length; i++) {
        

        gameContainer.innerHTML += `<a href="details.html?id=${}" class="card">
                                            <div class="image" style="background-image: url(${})"></div>
                                            <div class="details">
                                                <h2 class="name">${}</h2>
                                                <p class="language">Language: ${}</p>
                                                <p class="premiered">Premiered: ${}</p>                                                                                                                                                        
                                            </div>
                                      </a>`;
    }
    
}

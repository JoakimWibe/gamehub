const detailContainer = document.querySelector(".details-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "" + id;

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        createHTML(details);
    }
    catch (error) {
        detailContainer.innerHTML = message("error", error);
    }
}

fetchGame();

function createHTML(details) {

    document.title = details.name;

    detailContainer.innerHTML = `<h1 class="details-name">${details.name}</h1>
                                <div class="details-image" style="background-image: url(${details.image.medium})"></div>
                                <div class="details-summary">${details.summary}</div>
                                <div class="details-rating">Rating: ${details.rating.average}</div>
                                <div class="details-genre">Genres: ${details.genres}</div>`;                    
}


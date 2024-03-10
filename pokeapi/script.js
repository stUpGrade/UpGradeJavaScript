async function getPokemonList() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    return data.results;
}

async function getPokemonDetails(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function renderPokemonList() {
    const pokemonList = await getPokemonList();
    const pokemonContainer = document.getElementById('pokemonList');

    pokemonList.forEach(async (pokemon) => {
        const pokemonData = await getPokemonDetails(pokemon.url);
        const pokemonElement = createPokemonCard(pokemonData);
        pokemonContainer.appendChild(pokemonElement);
    });
}

function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;

    const name = document.createElement('h3');
    name.textContent = pokemon.name;

    const types = document.createElement('p');
    types.textContent = `Type(s): ${pokemon.types.map(type => type.type.name).join(', ')}`;

    const stats = document.createElement('p');
    stats.textContent = `Stats: ${pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(types);
    card.appendChild(stats);

    return card;
}

function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const types = card.querySelector('p:nth-child(3)').textContent.toLowerCase();

        if (name.includes(searchTerm) || types.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

window.onload = function () {
    renderPokemonList();
};

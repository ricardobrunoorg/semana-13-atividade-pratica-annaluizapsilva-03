const apiURL = "http://localhost:3000/looks";

async function fetchItems() {
    const response = await fetch(apiURL);
    return await response.json();
}

function createCard(item) {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <h2>${item.nome}</h2>
        <p>${item.descricaoCurta}</p>
        <p><strong>${item.categoria}</strong></p>
        <p>R$ ${item.preco}</p>

        <a href="details.html?id=${item.id}">
            Ver detalhes
        </a>
    `;

    return card;
}

function renderCards(items) {

    const container = document.getElementById("cards");

    container.innerHTML = "";

    items.forEach(item => {
        container.appendChild(createCard(item));
    });
}

async function init() {
    const items = await fetchItems();
    renderCards(items);
}

init();
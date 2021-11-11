const inputTitle = document.querySelector('#titulo');
const inputDescricao = document.querySelector('#descricao');
const inputUrl = document.querySelector('#url');
const inputSubmit = document.querySelector('#submit-btn');
const cardsContainer = document.querySelector('.cards-container');

inputSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    // Dados de input
    const dados = {
        titulo: inputTitle.value,
        descricao: inputDescricao.value,
        url: inputUrl.value
    }

    // Criação dos elementos HTML
    const container = document.createElement('div');
    container.classList.add('card-container');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const tituloCard = document.createElement('h2');
    tituloCard.innerHTML = dados.titulo;

    const descricaoCard = document.createElement('p');
    descricaoCard.innerHTML = dados.descricao;

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', dados.url);

    // Montagem do card
    container.appendChild(card);
    imgContainer.appendChild(imgCard);
    card.appendChild(imgContainer);
    card.appendChild(cardContent);
    cardContent.appendChild(tituloCard);
    cardContent.appendChild(descricaoCard);

    // Adicionando o card na página
    cardsContainer.appendChild(container);
});
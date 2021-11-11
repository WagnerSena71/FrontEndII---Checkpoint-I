const inputTitle = document.querySelector('#titulo');
const inputDescricao = document.querySelector('#descricao');
const inputUrl = document.querySelector('#url');
const inputSubmit = document.querySelector('#submit-btn');
const cardsContainer = document.querySelector('.cards-container');

inputSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const dados = {
        titulo: inputTitle.value,
        descricao: inputDescricao.value,
        url: inputUrl.value
    }

    const container = document.createElement('div');
    container.classList.add('card-container');
    // container.style.backgroundColor = '#472dbb';
    // container.style.display = 'flex';
    // container.style.flexDirection = 'column';
    // container.style.flexWrap = 'wrap';
    // container.style.justifyContent = 'center';
    // container.style.alignItems = 'center';
    // container.borderRadius = '0.8rem';
    // container.width = '20rem';
    // container.padding = '4rem';
    // container.boxShadow = '5px 5px 15px #222222';

    const card = document.createElement('div');
    card.classList.add('card');
    // card.style.display = 'flex';
    // card.style.flexDirection = 'column';
    // card.style.alignItems = 'center';
    // card.style.justifyContent = 'center';
    // card.style.gap = '0.5rem';

    const tituloCard = document.createElement('h2');
    tituloCard.innerHTML = dados.titulo;

    const descricaoCard = document.createElement('p');
    descricaoCard.innerHTML = dados.descricao;

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', dados.url);
    // imgCard.style.width = '6rem';

    // Montagem do card
    container.appendChild(card);
    card.appendChild(imgCard);
    card.appendChild(tituloCard);
    card.appendChild(descricaoCard);

    // Adicionando o card na página
    cardsContainer.appendChild(container);
});
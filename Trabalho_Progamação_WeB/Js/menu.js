// Menu interativo com animação de abrir e fechar
const menubtn = document.querySelector('.menu-btn');
const Grupomenu = document.querySelector('.Grupo-menu');
const Janelas = document.querySelector('.Janelas');
const menuopcao = document.querySelector('.menu-opcao');
const fecharmenu = document.querySelector('.fechar-menu');

menubtn.addEventListener('click', () => {
    Grupomenu.classList.add("active");
    setTimeout(() => {
        Janelas.classList.add("active");
    }, 1);
    setTimeout(() => {
        menuopcao.classList.add("active");
    }, 1000);
});

fecharmenu.addEventListener('click', () => {
    menuopcao.classList.remove("active");
    Janelas.classList.remove("active");
    setTimeout(() => {
        Grupomenu.classList.remove("active");
    }, 500);
});

// Modal de informação de vaga
const modal = document.querySelector("#jobModal");

// Função para abrir o modal
function openModal(jobTitle, jobCompany, jobCity, jobDescription) {
    modal.querySelector("#jobTitle").textContent = jobTitle;  // Adiciona o título ao modal
    modal.querySelector("#jobCompany").textContent = jobCompany;  // Adiciona a empresa ao modal
    modal.querySelector("#jobCity").textContent = jobCity;  // Adiciona a cidade ao modal
    modal.querySelector("#jobDescription").textContent = jobDescription;  // Adiciona a descrição ao modal
    modal.style.display = "flex";  // Exibe o modal
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none"; // Esconde o modal
}

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Função para filtrar vagas com base na pesquisa
function filterJobs() {
    const searchInput = document.querySelector('.barra_de_pesquisa').value.toLowerCase();
    const cards = document.querySelectorAll('.swiper-slide');

    cards.forEach(card => {
        const jobTitle = card.querySelector('h2').innerText.toLowerCase();
        card.style.display = jobTitle.includes(searchInput) ? 'flex' : 'none'; // Mostra ou esconde o card
    });

    // Atualiza o Swiper após a filtragem
    swiper.update(); // Atualiza o Swiper
}

// Adiciona o evento de input na barra de pesquisa
document.querySelector('.barra_de_pesquisa').addEventListener('input', filterJobs);

// Dados para gerar 2021 avaliações
const reviewsData = {
    names: [
        "Carlos Silva", "Maria Santos", "João Oliveira", "Ana Costa", "Pedro Almeida",
        "Juliana Ferreira", "Ricardo Souza", "Fernanda Lima", "Marcos Ribeiro", "Camila Rodrigues",
        "Lucas Martins", "Patricia Gomes", "Roberto Carvalho", "Aline Barbosa", "Thiago Mendes",
        "Renata Dias", "Bruno Araújo", "Gabriela Nunes", "Daniel Castro", "Vanessa Pinto",
        "Rafael Santos", "Beatriz Costa", "Felipe Oliveira", "Larissa Almeida", "Gustavo Silva",
        "Amanda Ferreira", "Diego Souza", "Isabela Lima", "Rodrigo Ribeiro", "Letícia Rodrigues",
        "André Martins", "Carolina Gomes", "Vinícius Carvalho", "Mariana Barbosa", "Leonardo Mendes",
        "Natália Dias", "Henrique Araújo", "Bianca Nunes", "Matheus Castro", "Júlia Pinto"
    ],
    cities: [
        "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR", "Porto Alegre, RS",
        "Brasília, DF", "Salvador, BA", "Fortaleza, CE", "Recife, PE", "Manaus, AM",
        "Goiânia, GO", "Belém, PA", "São Luís, MA", "Natal, RN", "Campo Grande, MS",
        "Vitória, ES", "Florianópolis, SC", "Maceió, AL", "Teresina, PI", "João Pessoa, PB",
        "Campinas, SP", "Santos, SP", "Ribeirão Preto, SP", "Sorocaba, SP", "Niterói, RJ",
        "Uberlândia, MG", "Contagem, MG", "Londrina, PR", "Joinville, SC", "Caxias do Sul, RS"
    ],
    reviews: [
        "Fiz o teste IPTV e fiquei impressionado com a qualidade. O processo foi super rápido e automatizado. Assinei o plano anual e não me arrependo. Recomendo!",
        "O teste IPTV me convenceu totalmente. A estabilidade é excelente e a variedade de canais surpreendeu. Atendimento automatizado funcionou perfeitamente.",
        "Estava em dúvida, mas o teste IPTV me mostrou que vale muito a pena. Imagem em alta definição e sem travamentos. Contratei o plano trimestral.",
        "Melhor decisão foi fazer o teste IPTV antes de assinar. Pude comprovar a qualidade e agora sou cliente satisfeita. Sistema automatizado é muito prático.",
        "Teste IPTV funcionou perfeitamente. Recebi o acesso rapidamente e pude avaliar tudo com calma. Qualidade impecável, assinei na hora.",
        "Fiquei surpresa com a facilidade do teste IPTV. Tudo automatizado, sem complicação. A qualidade do streaming é superior a outros serviços que já testei.",
        "O teste IPTV me deu total segurança para contratar. Testei em vários dispositivos e funcionou perfeitamente em todos. Excelente serviço!",
        "Recomendo fazer o teste IPTV para quem está em dúvida. É a melhor forma de conhecer o serviço. Fiquei muito satisfeita e já indiquei para amigos.",
        "Processo de teste IPTV é muito bem organizado. Robô de atendimento é eficiente e a liberação foi instantânea. Qualidade de imagem surpreendente.",
        "Fiz o teste IPTV e me surpreendi com a estabilidade. Sem travamentos, imagem perfeita. Assinei o plano anual com desconto.",
        "Teste IPTV superou minhas expectativas. Achei que seria complicado, mas foi super simples. Atendimento automatizado funciona muito bem.",
        "Adorei poder fazer o teste IPTV antes de decidir. Testei todos os canais que me interessavam e a qualidade é excelente. Vale muito a pena!",
        "O teste IPTV me mostrou que o serviço é confiável. Liberação rápida, qualidade excelente e variedade de conteúdo impressionante. Recomendo!",
        "Fazer o teste IPTV foi fundamental para minha decisão. Pude avaliar com calma e tirar todas as dúvidas. Agora sou cliente satisfeita.",
        "Teste IPTV funcionou perfeitamente. Sistema automatizado é muito eficiente e a qualidade do streaming é superior. Contratei sem pensar duas vezes.",
        "Recomendo o teste IPTV para todos que querem um serviço de qualidade. Processo simples, rápido e sem complicação. Estou muito satisfeita!",
        "O teste IPTV me deu total confiança no serviço. Qualidade impecável, estabilidade perfeita e atendimento automatizado muito prático. Excelente!",
        "Fiz o teste IPTV e me impressionei com a variedade de canais e qualidade. Sistema automatizado facilitou muito o processo. Super recomendo!",
        "Teste IPTV é a melhor forma de conhecer o serviço. Fiquei muito satisfeito com a qualidade e estabilidade. Assinei o plano trimestral com desconto.",
        "Adorei fazer o teste IPTV. Processo super rápido e eficiente. A qualidade do streaming é excelente e o atendimento automatizado funciona perfeitamente."
    ]
};

// Função para gerar avaliações
function generateReviews(count) {
    const reviewsContainer = document.querySelector('.reviews-grid');
    if (!reviewsContainer) return;

    for (let i = 0; i < count; i++) {
        const nameIndex = i % reviewsData.names.length;
        const cityIndex = i % reviewsData.cities.length;
        const reviewIndex = i % reviewsData.reviews.length;

        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.setAttribute('itemscope', '');
        reviewCard.setAttribute('itemtype', 'https://schema.org/Review');

        reviewCard.innerHTML = `
            <div class="review-header">
                <div class="reviewer-info">
                    <strong itemprop="author">${reviewsData.names[nameIndex]}</strong>
                    <span class="reviewer-location">${reviewsData.cities[cityIndex]}</span>
                </div>
                <div class="review-stars" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                    <meta itemprop="bestRating" content="5">
                    ★★★★★
                </div>
            </div>
            <p itemprop="reviewBody">${reviewsData.reviews[reviewIndex]}</p>
        `;

        reviewsContainer.appendChild(reviewCard);
    }
}

// Gerar 2000 avaliações adicionais quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    generateReviews(2000);
});

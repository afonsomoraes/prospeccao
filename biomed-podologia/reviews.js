const reviews = [
    {
        name: "Gabriella Argentini",
        text: "Todos da equipe são muito atenciosos! Resolveram meu probleminha, tive retornos constantes para avaliar a evolução. Sofri? Sofri mas achei o lugar que resolve e recomendaria facilmente! Continuem assim ♥",
        stars: 5
    },
    {
        name: "Heitor José Barbosa",
        text: "Excelente experiência. Estava sem conseguir por o pé no chão com minha unha encravada. Resolveram com muito cuidado e deram todo o feedback. Recomendo.",
        stars: 5
    },
    {
        name: "Letícia Lopes",
        text: "Depois de passar por 2 dermatos, resolvi procurar a podologia e, com muita dedicação, paciência e persistência, a profissional resolveu meu problema.",
        stars: 5
    },
    {
        name: "Fábio Padilha",
        text: "Clínica de confiança. Fiz todo meu tratamento aqui e ficou show o resultado!",
        stars: 5
    },
    {
        name: "Renato Belmiro Rocha",
        text: "Foi ótimo, pessoal competente no que faz e atenciosos durante todo processo, nem percebe a hora passar.",
        stars: 5
    },
    {
        name: "Amanda Beddingfield",
        text: "Recomendo a profissional ela fez um excelente trabalho nas minhas unhas e ainda explicou todo o processo com muita clareza. Voltarei em breve",
        stars: 5
    },
    {
        name: "Sheila Aragão",
        text: "Ambiente super agradável e ótimo atendimento, desde a recepção até a podóloga. Amei, voltarei mais vezes",
        stars: 5
    },
    {
        name: "Jorge Rocha",
        text: "Muito bem recebido desde a recepção até o atendimento com a profissional, ambiente agradável e acolhedor, conseguiram aliar conforto com qualidade nos procedimentos. Recomendo!!!",
        stars: 5
    },
    {
        name: "Sebastiana Barros",
        text: "Excelente tratamento de podologia. Minha mãe tinha micose há mais de 30 anos e ainda assim conseguiu melhora significativa. Recomendo!",
        stars: 5
    },
    {
        name: "Camila Quadros",
        text: "Muito profissionais e cuidadosas. Cuidaram muito bem da minha criança de 27 anos <3",
        stars: 5
    },
    {
        name: "Ingrid Saiane",
        text: "Atendimento excelente desde a recepção e profissionais, meu filho de 5 meses estava com a unha encravada marcamos e resolveu.",
        stars: 5
    },
    {
        name: "Alex Paulo",
        text: "O atendimento foi muito bom e as Podólogas foram muito atenciosas e profissionais. Parabéns e que Deus continue abençoando vocês.",
        stars: 5
    },
    {
        name: "Daniela Carneiro",
        text: "Uma excelente profissional, atenciosa, caprichosa, indico!!",
        stars: 5
    },
    {
        name: "Solange Santos",
        text: "Cheguei com uma micose que achava que não teria resultados de cura, foram dois anos praticamente em tratamento, por fim curada.",
        stars: 5
    },
    {
        name: "Ricardo Zibordi",
        text: "Atendimento fantástico, tratou as unhas e saúde plantar do meu pai. Como é importante cuidar dos pés!",
        stars: 5
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.testimonials-grid');
    if (!container) return; // Proteção caso o elemento não exista

    // Limpa o conteúdo estático atual (se houver) e prepara para o carrossel
    container.innerHTML = `
        <div class="carousel-container">
            <button class="carousel-btn prev-btn" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
            <div class="carousel-track-container">
                <ul class="carousel-track">
                    <!-- Reviews serão injetados aqui -->
                </ul>
            </div>
            <button class="carousel-btn next-btn" aria-label="Próximo"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="carousel-dots"></div>
    `;

    const track = document.querySelector('.carousel-track');
    const dotsNav = document.querySelector('.carousel-dots');

    // Renderizar Reviews
    reviews.forEach((review, index) => {
        const slide = document.createElement('li');
        slide.classList.add('carousel-slide');
        if (index === 0) slide.classList.add('current-slide');

        slide.innerHTML = `
            <div class="testimonial-card">
                <div class="stars">${'★'.repeat(review.stars)}</div>
                <p class="testimonial-text">"${review.text}"</p>
                <p class="author">- ${review.name}</p>
            </div>
        `;
        track.appendChild(slide);

        // Criar dots
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('current-slide');
        dot.setAttribute('aria-label', `Ir para depoimento ${index + 1}`);
        dotsNav.appendChild(dot);
    });

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const dots = Array.from(dotsNav.children);

    const updateSlidePosition = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        });
    };

    // Inicializa posições (precisa esperar layout ou forçar)
    // Pequeno delay para garantir que o CSS foi aplicado e larguras calculadas corretamente
    setTimeout(updateSlidePosition, 100);
    window.addEventListener('resize', updateSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    };

    // Botão Próximo
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        let nextDot = currentDot.nextElementSibling;

        // Loop Infinito: se não houver próximo, volta ao primeiro
        if (!nextSlide) {
            nextSlide = slides[0];
            nextDot = dots[0];
        }

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
    });

    // Botão Anterior
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        let prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        let prevDot = currentDot.previousElementSibling;

        // Loop Infinito: se não houver anterior, vai para o último
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1];
            prevDot = dots[dots.length - 1];
        }

        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
    });

    // Navegação por Dots
    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
    });

    // Autoplay
    setInterval(() => {
        nextButton.click();
    }, 8000); // 8 segundos
});

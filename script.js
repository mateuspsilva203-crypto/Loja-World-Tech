document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CONFIGURAÇÃO DO MENU MOBILE
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const body = document.querySelector('body');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            // Impede o scroll do corpo quando o menu está aberto
            body.style.overflow = navUl.classList.contains('active') ? 'hidden' : 'initial';
        });

        // Fecha o menu ao clicar em um link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
                body.style.overflow = 'initial';
            });
        });
    }

    // 2. LÓGICA DE MENSAGENS PERSONALIZADAS (WHATSAPP)
    const phone = "5535992199706"; // SUBSTITUA PELO SEU NÚMERO (DDD + Número)

    const sendWppMessage = (text) => {
        const url = `https://api.whatsapp.com/send?phone=$5535992199706}&text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    // Mapeamento de cliques nos botões
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button');
        if (!target) return;

        // Botão Fale Conosco (Geral)
        if (target.classList.contains('btn-fale-conosco') || target.classList.contains('btn-wpp-large')) {
            e.preventDefault();
            sendWppMessage("Olá! Gostaria de tirar algumas dúvidas sobre os serviços da loja.");
        }

        // Botão Solicitar Orçamento (Serviços)
        if (target.innerText.toLowerCase().includes('orçamento')) {
            e.preventDefault();
            // Tenta pegar o nome do serviço do card pai
            const serviceName = target.closest('.s-card')?.querySelector('h3')?.innerText || "um serviço";
            sendWppMessage(`Olá! Vi o site e gostaria de solicitar um orçamento.`);
        }

        // Botão Consultar Disponibilidade (Acessórios)
        if (target.innerText.toLowerCase().includes('disponibilidade')) {
            e.preventDefault();
            const productName = target.closest('.a-card')?.querySelector('h3')?.innerText || "um acessório";
            sendWppMessage(`Olá, vi o site da World Tech e gostaria de saber se vocês têm acessórios disponíveis para o meu aparelho. Poderiam me ajudar?`);
        }
    });

    // 3. EFEITOS DE INTERAÇÃO NOS BOTÕES (FEEDBACK VISUAL)
    const allButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .q-card, .s-card, .a-card');
    
    allButtons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
    });

    // 4. EFEITO DE REVEAL AO ROLAR A TELA
    const revealElements = document.querySelectorAll('.reveal, .q-card, .s-card, .a-card');

    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                el.classList.add('active');
                // Adiciona um delay cascata opcional para os cards
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Dispara uma vez ao carregar

    // 5. HEADER DINÂMICO
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.98)";
            header.style.padding = "5px 0";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.9)";
            header.style.padding = "10px 0";
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const body = document.querySelector('body');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            body.style.overflow = navUl.classList.contains('active') ? 'hidden' : 'initial';
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
                body.style.overflow = 'initial';
            });
        });
    }

    const phone = "5535992199706";

    const sendWppMessage = (text) => {
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button');
        if (!target) return;

        if (target.classList.contains('btn-fale-conosco') || target.classList.contains('btn-wpp-large')) {
            e.preventDefault();
            sendWppMessage("Olá! Gostaria de tirar algumas dúvidas sobre os serviços.");
            return;
        }

        if (target.innerText.toLowerCase().includes('orçamento')) {
            e.preventDefault();
            sendWppMessage("Olá! Gostaria de solicitar um orçamento.");
            return;
        }

        if (target.innerText.toLowerCase().includes('disponibilidade')) {
            e.preventDefault();
            sendWppMessage("Olá! Gostaria de saber sobre a disponibilidade de acessórios.");
            return;
        }
    });

    const allButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .q-card, .s-card, .a-card');
    
    allButtons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
    });

    const revealElements = document.querySelectorAll('.reveal, .q-card, .s-card, .a-card');

    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                el.classList.add('active');
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener('scroll', checkReveal);
    checkReveal();

    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = "rgba(0, 0, 0, 0.98)";
                header.style.padding = "5px 0";
            } else {
                header.style.background = "rgba(0, 0, 0, 0.9)";
                header.style.padding = "10px 0";
            }
        });
    }
});
const translations = {
    fr: {
        nav: {
            services: "Services",
            about: "À propos",
            contact: "Nous contacter"
        },
        hero: {
            badge: "Innovation 2026",
            title: "L'Automate <span class='gradient-text'>Intelligent</span> au service de votre croissance",
            desc: "Nous concevons des écosystèmes autonomes qui libèrent vos équipes des tâches répétitives pour les concentrer sur ce qui compte vraiment : la stratégie et l'humain.",
            btn_audit: "Réserver un audit gratuit",
            btn_solutions: "Nos Solutions",
            stat_1: "Productivité moyenne",
            stat_2: "Gain de temps annuel"
        },
        services: {
            title: "Nos Expertises",
            subtitle: "Des solutions sur mesure pour chaque défi technologique.",
            s1_title: "Automatisation de Workflows",
            s1_desc: "Connectez vos outils (Make, Zapier, n8n) pour un flux de travail sans friction 24/7.",
            s2_title: "Agents IA & Chatbots",
            s2_desc: "Des assistants intelligents capables de gérer votre support client et votre prospection.",
            s3_title: "Intelligence de Données",
            s3_desc: "Analysez vos données en temps réel pour prendre des décisions basées sur des faits."
        },
        about: {
            title: "À Propos",
            subtitle: "Une agence née de la passion pour l'efficacité radicale.",
            p1: "Your Smart Agent accompagne les entreprises dans leur transition vers une productivité décuplée par l'intelligence artificielle.",
            p2: "Notre mission : transformer les processus complexes en workflows fluides et invisibles."
        },
        how: {
            title: "Notre Méthodologie",
            subtitle: "Une approche structurée pour des résultats concrets.",
            step1_title: "Audit & Analyse",
            step1_desc: "Nous identifions les goulots d'étranglement de votre business et les opportunités d'automatisation.",
            step2_title: "Conception & Stratégie",
            step2_desc: "Nous dessinons l'architecture de vos futurs agents IA et de vos workflows automatisés.",
            step3_title: "Déploiement & Optimisation",
            step3_desc: "Mise en production sécurisée et ajustements continus pour maximiser les performances."
        },
        faq: {
            title: "Questions Fréquentes",
            q1_title: "L'IA peut-elle remplacer mes employés ?",
            q1_desc: "Non, elle les augmentent. L'IA gère le \"bruit\" et les tâches répétitives, permettant à vos talents de se concentrer sur l'innovation et la relation client.",
            q2_title: "Combien de temps prend une intégration ?",
            q2_desc: "Selon la complexité, un premier MVP fonctionnel peut être déployé en 15 jours."
        },
        cta: {
            title: "Prêt à automatiser le futur ?",
            desc: "Rejoignez les entreprises qui ont déjà franchi le pas de l'IA.",
            btn: "Nous contacter"
        },
        footer: {
            slogan: "L'excellence technologique accessible.",
            nav_title: "Navigation",
            method: "Méthodologie",
            blog: "Blog",
            contact_title: "Contact",
            copy: "&copy; 2026 Your Smart Agent. Tous droits réservés."
        }
    },
    en: {
        nav: {
            services: "Services",
            about: "About",
            contact: "Contact Us"
        },
        hero: {
            badge: "Innovation 2026",
            title: "The <span class='gradient-text'>Intelligent</span> Automation driving your growth",
            desc: "We design autonomous ecosystems that free your teams from repetitive tasks, allowing them to focus on what truly matters: strategy and humans.",
            btn_audit: "Book a free audit",
            btn_solutions: "Our Solutions",
            stat_1: "Average Productivity",
            stat_2: "Annual Time Saved"
        },
        services: {
            title: "Our Expertise",
            subtitle: "Tailored solutions for every technological challenge.",
            s1_title: "Workflow Automation",
            s1_desc: "Connect your tools (Make, Zapier, n8n) for a frictionless 24/7 workflow.",
            s2_title: "AI Agents & Chatbots",
            s2_desc: "Intelligent assistants capable of handling your customer support and prospecting.",
            s3_title: "Data Intelligence",
            s3_desc: "Analyze your data in real-time to make decisions based on facts."
        },
        about: {
            title: "About Us",
            subtitle: "An agency born from a passion for radical efficiency.",
            p1: "Your Smart Agent supports companies in their transition to a productivity decupled by artificial intelligence.",
            p2: "Our mission: transform complex processes into fluid and invisible workflows."
        },
        how: {
            title: "Our Methodology",
            subtitle: "A structured approach for concrete results.",
            step1_title: "Audit & Analysis",
            step1_desc: "We identify your business bottlenecks and automation opportunities.",
            step2_title: "Design & Strategy",
            step2_desc: "We design the architecture of your future AI agents and automated workflows.",
            step3_title: "Deployment & Optimization",
            step3_desc: "Secure production launch and continuous adjustments to maximize performance."
        },
        faq: {
            title: "Frequently Asked Questions",
            q1_title: "Can AI replace my employees?",
            q1_desc: "No, it augments them. AI handles the \"noise\" and repetitive tasks, allowing your talents to focus on innovation and customer relations.",
            q2_title: "How long does an integration take?",
            q2_desc: "Depending on complexity, a first functional MVP can be deployed within 15 days."
        },
        cta: {
            title: "Ready to automate the future?",
            desc: "Join the companies that have already taken the leap into AI.",
            btn: "Contact Us"
        },
        footer: {
            slogan: "Accessible technological excellence.",
            nav_title: "Navigation",
            method: "Methodology",
            blog: "Blog",
            contact_title: "Contact",
            copy: "&copy; 2026 Your Smart Agent. All rights reserved."
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Language logic
    const langBtns = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        document.querySelectorAll('[data-t]').forEach(el => {
            const path = el.getAttribute('data-t').split('.');
            let translation = translations[lang];
            path.forEach(key => {
                translation = translation[key];
            });
            el.innerHTML = translation;
        });

        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.documentElement.lang = lang;
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Menu mobile logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            alert('Menu mobile bientôt disponible !');
        });
    }

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.service-card, .section-header, .hero-content, .hero-visual, .cta-box, .step, .faq-item');

    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .reveal-active {
            opacity: 1;
            transform: translateY(0);
        }
        .service-card:nth-child(2), .step:nth-child(2) { transition-delay: 0.1s; }
        .service-card:nth-child(3), .step:nth-child(3) { transition-delay: 0.2s; }
    `;
    document.head.appendChild(style);

    // Subtle parallax
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        window.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            heroVisual.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        heroVisual.addEventListener('mouseleave', () => {
            heroVisual.style.transform = `rotateY(0deg) rotateX(0deg)`;
            heroVisual.style.transition = 'all 0.5s ease';
        });

        heroVisual.addEventListener('mouseenter', () => {
            heroVisual.style.transition = 'none';
        });
    }
});

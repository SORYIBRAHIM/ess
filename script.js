document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Tabs for Programme Section
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Countdown Timer
    const countdownDate = new Date('2025-12-05T08:30:00').getTime();
    const countdownElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            Object.values(countdownElements).forEach(element => element.textContent = '00');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElements.days.textContent = days < 10 ? `0${days}` : days;
        countdownElements.hours.textContent = hours < 10 ? `0${hours}` : hours;
        countdownElements.minutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
        countdownElements.seconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Cookie Consent
    const cookieConsent = document.querySelector('.cookie-consent');
    const cookieConsentBtn = document.querySelector('.cookie-consent-btn');

    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.classList.add('active');
    }

    cookieConsentBtn.addEventListener('click', () => {
        cookieConsent.classList.remove('active');
        localStorage.setItem('cookieConsent', true);
    });

    // Language Selector
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageLinks = languageDropdown.querySelectorAll('a');

    languageLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = event.target.getAttribute('data-lang');
            translatePage(lang);
            languageDropdown.classList.remove('active');
        });
    });

    languageBtn.addEventListener('click', () => {
        languageDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!languageBtn.contains(event.target) && !languageDropdown.contains(event.target)) {
            languageDropdown.classList.remove('active');
        }
    });

    // Translation Data
    const translations = {
        fr: {
            "title-page": "WiB Maroc 2025 | Femmes en affaires",
            "logo-text": "WiBMaroc",
            "nav-home": "Accueil",
            "nav-about": "À propos",
            "nav-programme": "Programme",
            "nav-speakers": "Intervenants",
            "nav-partners": "Partenaires",
            "nav-contact": "Contact",
            "hero-title": "Favoriser la croissance et l'innovation pour les femmes entrepreneurs",
            "hero-subtitle": "Lancement de la phase II du programme WiB au Maroc - Célébration du 10e anniversaire",
            "countdown-days": "Jours",
            "countdown-hours": "Heures",
            "countdown-minutes": "Minutes",
            "countdown-seconds": "Secondes",
            "btn-register": "S'inscrire maintenant",
            "about-title": "À propos de l'événement",
            "about-objectives": "Objectifs de l'événement",
            "about-objectives-text": "Le programme «Femmes d'affaires» (WiB) de la BERD vise à promouvoir l'inclusion financière et à soutenir les femmes entrepreneurs. Cet événement marque le lancement de la phase II du programme au Maroc et célèbre son 10e anniversaire.",
            "about-themes": "Thématiques abordées",
            "about-theme-1": "Accès au financement pour les femmes entrepreneurs",
            "about-theme-2": "Services de conseil et mentorat",
            "about-theme-3": "Innovation numérique et transformation digitale",
            "about-theme-4": "Réseautage et opportunités de partenariat",
            "about-theme-5": "Développement durable et économie verte",
            "about-audience": "Public cible",
            "about-audience-text": "Institutions financières, décideurs politiques, entrepreneurs, ambassadeurs, donateurs, dirigeants et personnel de la BERD, médias et public sélectionné.",
            "programme-title": "Programme",
            "tab-day1": "5 décembre 2025",
            "schedule-title-1": "Inscription et café de bienvenue",
            "schedule-desc-1": "Accueil des invités et réseautage avant l'ouverture officielle.",
            "schedule-title-2": "Séance d'ouverture",
            "schedule-speaker-1": "Maîtresse de cérémonie : Dr Yasmine Benamour",
            "schedule-speaker-2": "Discours de bienvenue par les représentants de la BERD et de l'UE",
            "schedule-speaker-3": "Discours d'ouverture par Amal EL FALLAH - SEGHROUCHNI, Ministre de la Transition numérique et de la Réforme de l'administration",
            "schedule-title-3": "Résultats et perspectives de la session WiB",
            "schedule-desc-3": "Segment anniversaire des 10 ans de WiB incluant la projection d'un documentaire mondial.",
            "schedule-desc-4": "Présentation du projet WiB Phase II au Maroc : objectifs, avantages et réalisations.",
            "schedule-desc-5": "Présentation de l'étude de marché : Un aperçu du paysage des femmes marocaines dans les affaires et des opportunités de croissance futures.",
            "schedule-title-4": "Panel de haut niveau : Développement des entreprises dirigées par des femmes au Maroc",
            "schedule-speaker-4": "Modérateur : Dr Yasmine Benamour",
            "schedule-desc-6": "Intervenants suggérés : Représentant de la BERD, Représentant PFI, Femme entrepreneure.",
            "schedule-desc-7": "Questions : Principaux obstacles et défis des WLB, Politiques, Transformation numérique.",
            "schedule-title-5": "Autonomisation des femmes grâce à l'inclusion numérique",
            "schedule-desc-8": "Présentation de la plateforme DTS et témoignages sur la transformation numérique.",
            "schedule-title-6": "Clôture et célébration",
            "schedule-desc-9": "Remarques finales, cérémonie de découpe du gâteau et photo de groupe.",
            "schedule-title-7": "Déjeuner de réseautage",
            "schedule-desc-10": "Réception et déjeuner de réseautage.",
            "btn-download-programme": "Télécharger le programme complet (PDF)",
            "speakers-title": "Intervenants",
            "speaker-name-1": "Soumaya Benjelloun",
            "speaker-title-1": "Présidente de We4She et Directrice Générale de Burintel",
            "speaker-bio-1": "Experte en leadership et plaidoyer pour l'égalité des sexes.",
            "speaker-name-2": "Lamiae Bernoussi",
            "speaker-title-2": "Directrice Conseil chez Onepoint",
            "speaker-bio-2": "Spécialiste en transformation numérique et développement commercial.",
            "speaker-name-3": "Hind Dinia",
            "speaker-title-3": "Directrice à CFG Bank",
            "speaker-bio-3": "Experte en finance et gouvernance d'entreprise.",
            "speaker-name-4": "Mariem Lahlou",
            "speaker-title-4": "Ingénieure spécialisée en optimisation des procédés industriels",
            "speaker-bio-4": "Experte en efficacité opérationnelle et développement durable.",
            "btn-view-all-speakers": "Voir tous les intervenants",
            "partners-title": "Partenaires",
            "contact-title": "Contact",
            "contact-address": "Casablanca, Maroc",
            "contact-email": "contact@wibmaroc.ma",
            "contact-phone": "+212 5 22 48 56 78",
            "footer-about-text": "Le programme «Femmes d'affaires» (WiB) de la BERD vise à promouvoir l'inclusion financière et à soutenir les femmes entrepreneurs.",
            "footer-links-title": "Liens utiles",
            "footer-contact-title": "Contact",
            "footer-copyright": "© 2025 WiB Maroc. Tous droits réservés.",
            "cookie-consent-text": "Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez leur utilisation.",
            "cookie-consent-btn": "Accepter",
            "title-registration": "Inscription en ligne",
            "label-name": "Nom complet",
            "label-email": "Adresse e-mail",
            "label-organization": "Organisation",
            "label-participants": "Nombre de participants",
            "label-registration-type": "Type d'inscription",
            "option-individual": "Individuelle",
            "option-group": "Groupée",
            "label-terms": "J'accepte les conditions générales",
            "link-terms": "conditions générales",
            "btn-register": "S'inscrire"
        },
        en: {
            "title-page": "WiB Morocco 2025 | Women in Business",
            "logo-text": "WiBMorocco",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-programme": "Program",
            "nav-speakers": "Speakers",
            "nav-partners": "Partners",
            "nav-contact": "Contact",
            "hero-title": "Promoting Growth and Innovation for Women Entrepreneurs",
            "hero-subtitle": "Launch of WiB Phase II in Morocco - Celebrating the 10th Anniversary",
            "countdown-days": "Days",
            "countdown-hours": "Hours",
            "countdown-minutes": "Minutes",
            "countdown-seconds": "Seconds",
            "btn-register": "Register Now",
            "about-title": "About the Event",
            "about-objectives": "Event Objectives",
            "about-objectives-text": "The EBRD's Women in Business (WiB) program aims to promote financial inclusion and support women entrepreneurs. This event marks the launch of Phase II of the program in Morocco and celebrates its 10th anniversary.",
            "about-themes": "Themes Addressed",
            "about-theme-1": "Access to financing for women entrepreneurs",
            "about-theme-2": "Advisory services and mentoring",
            "about-theme-3": "Digital innovation and transformation",
            "about-theme-4": "Networking and partnership opportunities",
            "about-theme-5": "Sustainable development and green economy",
            "about-audience": "Target Audience",
            "about-audience-text": "Financial institutions, policymakers, entrepreneurs, ambassadors, donors, BERD leadership and staff, media, and selected public.",
            "programme-title": "Program",
            "tab-day1": "December 5, 2025",
            "schedule-title-1": "Registration and Welcome Coffee",
            "schedule-desc-1": "Guest reception and networking before the official opening.",
            "schedule-title-2": "Opening Session",
            "schedule-speaker-1": "Master of Ceremonies: Dr Yasmine Benamour",
            "schedule-speaker-2": "Welcome speeches by EBRD and EU representatives",
            "schedule-speaker-3": "Opening speech by Amal EL FALLAH - SEGHROUCHNI, Minister of Digital Transition and Administrative Reform",
            "schedule-title-3": "WiB Session Results and Perspectives",
            "schedule-desc-3": "10th anniversary segment of WiB including the screening of a global documentary.",
            "schedule-desc-4": "Presentation of the WiB Phase II project in Morocco: objectives, benefits, and achievements.",
            "schedule-desc-5": "Presentation of the market study: An overview of the landscape of Moroccan women in business and future growth opportunities.",
            "schedule-title-4": "High-Level Panel: Development of Women-Led Businesses in Morocco",
            "schedule-speaker-4": "Moderator: Dr Yasmine Benamour",
            "schedule-desc-6": "Suggested speakers: EBRD representative, PFI representative, Women entrepreneur.",
            "schedule-desc-7": "Questions: Main obstacles and challenges for WLB, Policies, Digital transformation.",
            "schedule-title-5": "Women's Empowerment through Digital Inclusion",
            "schedule-desc-8": "Presentation of the DTS platform and testimonials on digital transformation.",
            "schedule-title-6": "Closing and Celebration",
            "schedule-desc-9": "Final remarks, cake-cutting ceremony, and group photo.",
            "schedule-title-7": "Networking Lunch",
            "schedule-desc-10": "Reception and networking lunch.",
            "btn-download-programme": "Download Full Program (PDF)",
            "speakers-title": "Speakers",
            "speaker-name-1": "Soumaya Benjelloun",
            "speaker-title-1": "President of We4She and CEO of Burintel",
            "speaker-bio-1": "Expert in leadership and advocacy for gender equality.",
            "speaker-name-2": "Lamiae Bernoussi",
            "speaker-title-2": "Consulting Director at Onepoint",
            "speaker-bio-2": "Specialist in digital transformation and business development.",
            "speaker-name-3": "Hind Dinia",
            "speaker-title-3": "Director at CFG Bank",
            "speaker-bio-3": "Expert in finance and corporate governance.",
            "speaker-name-4": "Mariem Lahlou",
            "speaker-title-4": "Engineer specialized in industrial process optimization",
            "speaker-bio-4": "Expert in operational efficiency and sustainable development.",
            "btn-view-all-speakers": "View All Speakers",
            "partners-title": "Partners",
            "contact-title": "Contact",
            "contact-address": "Casablanca, Morocco",
            "contact-email": "contact@wibmorocco.ma",
            "contact-phone": "+212 5 22 48 56 78",
            "footer-about-text": "The EBRD's Women in Business (WiB) program aims to promote financial inclusion and support women entrepreneurs.",
            "footer-links-title": "Useful Links",
            "footer-contact-title": "Contact",
            "footer-copyright": "© 2025 WiB Morocco. All rights reserved.",
            "cookie-consent-text": "This site uses cookies to improve your experience. By continuing to browse, you accept their use.",
            "cookie-consent-btn": "Accept",
            "title-registration": "Online Registration",
            "label-name": "Full Name",
            "label-email": "Email Address",
            "label-organization": "Organization",
            "label-participants": "Number of Participants",
            "label-registration-type": "Registration Type",
            "option-individual": "Individual",
            "option-group": "Group",
            "label-terms": "I accept the terms and conditions",
            "link-terms": "terms and conditions",
            "btn-register": "Register"
        },
        ar: {
            "title-page": "WiB المغرب 2025 | النساء في الأعمال",
            "logo-text": "WiBMorocco",
            "nav-home": "الصفحة الرئيسية",
            "nav-about": "حول",
            "nav-programme": "البرنامج",
            "nav-speakers": "المتحدثون",
            "nav-partners": "الشركاء",
            "nav-contact": "اتصل",
            "hero-title": "تعزيز النمو والابتكار للنساء المقاولات",
            "hero-subtitle": "إطلاق المرحلة الثانية من برنامج WiB في المغرب - الاحتفال بالذكرى العاشرة",
            "countdown-days": "أيام",
            "countdown-hours": "ساعات",
            "countdown-minutes": "دقائق",
            "countdown-seconds": "ثواني",
            "btn-register": "سجل الآن",
            "about-title": "حول الحدث",
            "about-objectives": "أهداف الحدث",
            "about-objectives-text": "برنامج البنك الأوروبي للإنشاء والتعمير (EBRD) للنساء في الأعمال (WiB) يهدف إلى تعزيز الإدماج المالي ودعم النساء المقاولات. يشير هذا الحدث إلى إطلاق المرحلة الثانية من البرنامج في المغرب والاحتفال بالذكرى العاشرة له.",
            "about-themes": "المواضيع المتناولة",
            "about-theme-1": "الوصول إلى التمويل للنساء المقاولات",
            "about-theme-2": "خدمات الاستشارة والإرشاد",
            "about-theme-3": "الابتكار الرقمي والتحول",
            "about-theme-4": "فرص التواصل والشراكة",
            "about-theme-5": "التنمية المستدامة والاقتصاد الأخضر",
            "about-audience": "الجمهور المستهدف",
            "about-audience-text": "المؤسسات المالية، صناع القرار، المقاولات، السفراء، المانحين، قادة وموظفي البنك الأوروبي للإنشاء والتعمير، وسائل الإعلام، وجمهور مختار.",
            "programme-title": "البرنامج",
            "tab-day1": "5 ديسمبر 2025",
            "schedule-title-1": "التسجيل وقهوة الترحيب",
            "schedule-desc-1": "استقبال الضيوف والتواصل قبل الافتتاح الرسمي.",
            "schedule-title-2": "جلسة الافتتاح",
            "schedule-speaker-1": "مقدمة الحفل: د. ياسمين بنعمور",
            "schedule-speaker-2": "كلمات ترحيب من ممثلي البنك الأوروبي للإنشاء والتعمير والاتحاد الأوروبي",
            "schedule-speaker-3": "كلمة افتتاح من أمل الفلاح - السقروشني، وزيرة التحول الرقمي وإصلاح الإدارة",
            "schedule-title-3": "نتائج وآفاق جلسة WiB",
            "schedule-desc-3": "قسم الذكرى العاشرة لـ WiB يشمل عرض وثائقي عالمي.",
            "schedule-desc-4": "عرض مشروع WiB المرحلة الثانية في المغرب: الأهداف والفوائد والإنجازات.",
            "schedule-desc-5": "عرض دراسة السوق: نظرة عامة على مشهد النساء المغاربات في الأعمال وفرص النمو المستقبلية.",
            "schedule-title-4": "لجنة عليا: تطوير الشركات التي تديرها النساء في المغرب",
            "schedule-speaker-4": "مقدمة: د. ياسمين بنعمور",
            "schedule-desc-6": "متحدثون مقترحون: ممثل البنك الأوروبي للإنشاء والتعمير، ممثل PFI، مقاولة.",
            "schedule-desc-7": "أسئلة: العقبات والتحديات الرئيسية لـ WLB، السياسات، التحول الرقمي.",
            "schedule-title-5": "تمكين النساء من خلال الإدماج الرقمي",
            "schedule-desc-8": "عرض منصة DTS وشهادات حول التحول الرقمي.",
            "schedule-title-6": "الختام والاحتفال",
            "schedule-desc-9": "ملاحظات نهائية، حفل قطع الكعك، وصورة جماعية.",
            "schedule-title-7": "وجبة غداء للتواصل",
            "schedule-desc-10": "استقبال ووجبة غداء للتواصل.",
            "btn-download-programme": "تحميل البرنامج الكامل (PDF)",
            "speakers-title": "المتحدثون",
            "speaker-name-1": "سمية بنجلون",
            "speaker-title-1": "رئيسة We4She والمديرة العامة لشركة Burintel",
            "speaker-bio-1": "خبيرة في القيادة والدعوة للمساواة بين الجنسين.",
            "speaker-name-2": "لميعة برنوسي",
            "speaker-title-2": "مديرة استشارية في شركة Onepoint",
            "speaker-bio-2": "متخصصة في التحول الرقمي وتطوير الأعمال.",
            "speaker-name-3": "هند دينيا",
            "speaker-title-3": "مديرة في بنك CFG",
            "speaker-bio-3": "خبيرة في المالية وحوكمة الشركات.",
            "speaker-name-4": "مريم لحلو",
            "speaker-title-4": "مهندسة متخصصة في تحسين العمليات الصناعية",
            "speaker-bio-4": "خبيرة في الكفاءة التشغيلية والتنمية المستدامة.",
            "btn-view-all-speakers": "عرض جميع المتحدثين",
            "partners-title": "الشركاء",
            "contact-title": "اتصل",
            "contact-address": "الدار البيضاء، المغرب",
            "contact-email": "contact@wibmorocco.ma",
            "contact-phone": "+212 5 22 48 56 78",
            "footer-about-text": "برنامج البنك الأوروبي للإنشاء والتعمير (EBRD) للنساء في الأعمال (WiB) يهدف إلى تعزيز الإدماج المالي ودعم النساء المقاولات.",
            "footer-links-title": "روابط مفيدة",
            "footer-contact-title": "اتصل",
            "footer-copyright": "© 2025 WiB المغرب. جميع الحقوق محفوظة.",
            "cookie-consent-text": "هذا الموقع يستخدم ملفات تعريف الارتباط لتحسين تجربتك. من خلال الاستمرار في التصفح، فإنك توافق على استخدامها.",
            "cookie-consent-btn": "قبول",
            "title-registration": "التسجيل عبر الإنترنت",
            "label-name": "الاسم الكامل",
            "label-email": "عنوان البريد الإلكتروني",
            "label-organization": "المنظمة",
            "label-participants": "عدد المشاركين",
            "label-registration-type": "نوع التسجيل",
            "option-individual": "فردي",
            "option-group": "جماعي",
            "label-terms": "أوافق على الشروط والأحكام",
            "link-terms": "الشروط والأحكام",
            "btn-register": "سجل"
        }
    };

    const translatePage = (lang) => {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    };

    // Reservation System
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(registrationForm);
        const data = Object.fromEntries(formData.entries());

        // Generate QR code
        const qrCodeUrl = await generateQRCode(data.name);
        data.qrCodeUrl = qrCodeUrl;

        // Send registration data to the server
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // Send email with QR code
            await sendEmail(data.email, qrCodeUrl);
            alert('Inscription réussie ! Vérifiez votre email pour le QR code.');
            registrationForm.reset();
            // Fetch and display participants
            fetchParticipants();
        } else {
            alert('Erreur lors de l\'inscription.');
        }
    });

    async function fetchParticipants() {
        const response = await fetch('http://localhost:3000/admin/participants');
        const participants = await response.json();
        const participantsList = document.getElementById('participants-list');
        participantsList.innerHTML = '';

        participants.forEach(participant => {
            const participantElement = document.createElement('div');
            participantElement.classList.add('participant-item');
            participantElement.innerHTML = `
                <h3>${participant.name}</h3>
                <p>Email: ${participant.email}</p>
                <p>Organisation: ${participant.organization}</p>
                <p>Nombre de participants: ${participant.participants}</p>
                <p>Type d'inscription: ${participant.registrationType}</p>
                <img src="${participant.qrCodeUrl}" alt="QR Code">
            `;
            participantsList.appendChild(participantElement);
        });
    }

    // Fetch participants on page load
    fetchParticipants();

    async function generateQRCode(name) {
        const qrCode = new QRCode(document.createElement('div'), {
            text: `Name: ${name}`,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        const qrCodeUrl = qrCode._el.firstChild.toDataURL();
        return qrCodeUrl;
    }

    async function sendEmail(email, qrCodeUrl) {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, qrCodeUrl }),
        });

        if (!response.ok) {
            console.error('Failed to send email');
        }
    }
});

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
  const countdownDate = new Date('2025-06-17T00:00:00').getTime();
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
          "title-page": "Assises de l'ESS 2025 | Économie Sociale et Solidaire",
          "logo-text": "AssisesESS",
          "nav-home": "Accueil",
          "nav-about": "À propos",
          "nav-programme": "Programme",
          "nav-speakers": "Intervenants",
          "nav-committee": "Comité Scientifique",
          "nav-partners": "Partenaires",
          "nav-contact": "Contact",
          "nav-admin": "Admin",
          "hero-title": "Transformer l'économie par l'innovation sociale",
          "hero-subtitle": "Les Assises Nationales de l'Économie Sociale et Solidaire - 17 juin 2025 à l'UM6P Benguerir",
          "countdown-days": "Jours",
          "countdown-hours": "Heures",
          "countdown-minutes": "Minutes",
          "countdown-seconds": "Secondes",
          "btn-register": "S'inscrire maintenant",
          "about-title": "À propos des Assises",
          "about-objectives": "Objectifs de l'événement",
          "about-objectives-text": "Les Assises Nationales de l'Économie Sociale et Solidaire (ESS) visent à rassembler les acteurs clés du secteur pour échanger, débattre et co-construire des solutions innovantes face aux défis économiques, sociaux et environnementaux contemporains.",
          "about-themes": "Thématiques abordées",
          "about-theme-1": "Innovation sociale et entrepreneuriat collectif",
          "about-theme-2": "Transition écologique et économie circulaire",
          "about-theme-3": "Finance solidaire et modèles économiques durables",
          "about-theme-4": "Inclusion sociale et développement territorial",
          "about-theme-5": "Gouvernance participative et démocratie économique",
          "about-audience": "Public cible",
          "about-audience-text": "Entrepreneurs sociaux, coopératives, associations, institutions publiques, chercheurs, étudiants et toute personne intéressée par les modèles économiques alternatifs.",
          "programme-title": "Programme",
          "tab-day1": "Jour 1 - 17 juin",
          "tab-day2": "Jour 2 - 18 juin",
          "schedule-title-1": "Cérémonie d'ouverture",
          "schedule-speaker-1": "Ministre de l'Économie Sociale, Président de l'UM6P",
          "schedule-desc-1": "Discours d'ouverture et présentation des enjeux des Assises",
          "schedule-title-2": "Table ronde : L'ESS comme levier de transformation économique",
          "schedule-speaker-2": "Modérateur : Dr. Karim El Aynaoui",
          "schedule-desc-2": "Échanges sur les modèles économiques alternatifs et leur impact sur le développement territorial",
          "schedule-title-3": "Pause déjeuner & networking",
          "schedule-desc-3": "Espace de restauration et rencontres avec les exposants",
          "schedule-title-4": "Ateliers thématiques",
          "schedule-desc-4": "Session 1 : Financement participatif et outils financiers innovants<br>Session 2 : Économie circulaire et écologie industrielle<br>Session 3 : Inclusion sociale par l'entrepreneuriat collectif",
          "schedule-title-5": "Conférence plénière : Les tendances mondiales de l'ESS",
          "schedule-speaker-3": "Pr. Jean-Louis Laville, Dr. Amina Béji-Bécheur",
          "schedule-desc-5": "Panorama international des innovations sociales et perspectives pour le Maroc",
          "schedule-title-6": "Laboratoire d'idées",
          "schedule-desc-6": "Session collaborative pour co-construire des solutions concrètes aux défis identifiés",
          "schedule-title-7": "Pitchs de projets ESS",
          "schedule-desc-7": "Présentation de 10 initiatives innovantes suivie d'une session de vote du public",
          "schedule-title-8": "Cérémonie de clôture",
          "schedule-desc-8": "Annonce des recommandations et perspectives pour l'ESS marocaine",
          "btn-download-programme": "Télécharger le programme complet (PDF)",
          "speakers-title": "Intervenants",
          "speaker-name-1": "Nadia El Mansouri",
          "speaker-title-1": "Directrice, Réseau des Entreprises Sociales du Maroc",
          "speaker-bio-1": "Experte en entrepreneuriat social avec 15 ans d'expérience dans l'accompagnement des coopératives.",
          "speaker-name-2": "Mehdi Lahlou",
          "speaker-title-2": "Professeur d'Économie, Université Mohammed VI",
          "speaker-bio-2": "Spécialiste des modèles économiques alternatifs et de la finance solidaire.",
          "speaker-name-3": "Amina Belahsen",
          "speaker-title-3": "Fondatrice, Coopérative Tamounte",
          "speaker-bio-3": "Pionnière de l'agroécologie et du développement rural par l'ESS dans le Souss.",
          "speaker-name-4": "Karim Benamor",
          "speaker-title-4": "Directeur, Fondation Banque Populaire pour le Développement",
          "speaker-bio-4": "Expert en finance solidaire et mécanismes de microcrédit social.",
          "btn-view-all-speakers": "Voir tous les intervenants",
          "committee-title": "Comité Scientifique",
          "committee-name-1": "Pr. Fatima Zahra Bennis",
          "committee-title-1": "Chaire ESS, Université Hassan II",
          "committee-bio-1": "Spécialiste des politiques publiques en économie sociale et solidaire.",
          "committee-name-2": "Dr. Ahmed Choukri",
          "committee-title-2": "Chercheur, Institut National de l'Économie Sociale et Solidaire",
          "committee-bio-2": "Expert en gouvernance participative et modèles économiques inclusifs.",
          "committee-name-3": "Sara El Kadiri",
          "committee-title-3": "Consultante, Agence de Développement Social",
          "committee-bio-3": "Spécialiste en inclusion sociale et développement territorial.",
          "committee-name-4": "Youssef Amrani",
          "committee-title-4": "Directeur, Centre de Recherche en Économie Sociale",
          "committee-bio-4": "Expert en transition écologique et économie circulaire.",
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
          "partners-title": "Partenaires",
          "contact-title": "Contact",
          "contact-address": "UM6P Benguerir, Morocco",
          "contact-email": "contact@assisesess.ma",
          "contact-phone": "+212 5 22 48 56 78",
          "label-contact-name": "Nom complet",
          "label-contact-email": "Adresse e-mail",
          "label-contact-message": "Message",
          "btn-send-message": "Envoyer",
          "footer-about-text": "Les Assises Nationales de l'Économie Sociale et Solidaire rassemblent les acteurs clés pour co-construire des solutions innovantes face aux défis contemporains.",
          "footer-links-title": "Liens utiles",
          "footer-contact-title": "Contact",
          "footer-copyright": "© 2025 Assises de l'ESS. Tous droits réservés.",
          "cookie-consent-text": "Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez leur utilisation.",
          "cookie-consent-btn": "Accepter",
          "admin-title": "Tableau de Bord Administrateur"
      },
      en: {
          "title-page": "Assises of the SSE 2025 | Social and Solidarity Economy",
          "logo-text": "AssisesESS",
          "nav-home": "Home",
          "nav-about": "About",
          "nav-programme": "Program",
          "nav-speakers": "Speakers",
          "nav-committee": "Scientific Committee",
          "nav-partners": "Partners",
          "nav-contact": "Contact",
          "nav-admin": "Admin",
          "hero-title": "Transforming the Economy through Social Innovation",
          "hero-subtitle": "National Assises of the Social and Solidarity Economy - June 17, 2025 at UM6P Benguerir",
          "countdown-days": "Days",
          "countdown-hours": "Hours",
          "countdown-minutes": "Minutes",
          "countdown-seconds": "Seconds",
          "btn-register": "Register Now",
          "about-title": "About the Assises",
          "about-objectives": "Event Objectives",
          "about-objectives-text": "The National Assises of the Social and Solidarity Economy (SSE) aims to bring together key players in the sector to exchange, debate, and co-construct innovative solutions to contemporary economic, social, and environmental challenges.",
          "about-themes": "Themes Addressed",
          "about-theme-1": "Social Innovation and Collective Entrepreneurship",
          "about-theme-2": "Ecological Transition and Circular Economy",
          "about-theme-3": "Solidarity Finance and Sustainable Economic Models",
          "about-theme-4": "Social Inclusion and Territorial Development",
          "about-theme-5": "Participatory Governance and Economic Democracy",
          "about-audience": "Target Audience",
          "about-audience-text": "Social entrepreneurs, cooperatives, associations, public institutions, researchers, students, and anyone interested in alternative economic models.",
          "programme-title": "Program",
          "tab-day1": "Day 1 - June 17",
          "tab-day2": "Day 2 - June 18",
          "schedule-title-1": "Opening Ceremony",
          "schedule-speaker-1": "Minister of Social Economy, President of UM6P",
          "schedule-desc-1": "Opening speech and presentation of the Assises' challenges",
          "schedule-title-2": "Round Table: SSE as a Lever for Economic Transformation",
          "schedule-speaker-2": "Moderator: Dr. Karim El Aynaoui",
          "schedule-desc-2": "Discussions on alternative economic models and their impact on territorial development",
          "schedule-title-3": "Lunch Break & Networking",
          "schedule-desc-3": "Catering area and meetings with exhibitors",
          "schedule-title-4": "Thematic Workshops",
          "schedule-desc-4": "Session 1: Participatory Financing and Innovative Financial Tools<br>Session 2: Circular Economy and Industrial Ecology<br>Session 3: Social Inclusion through Collective Entrepreneurship",
          "schedule-title-5": "Plenary Conference: Global Trends in SSE",
          "schedule-speaker-3": "Pr. Jean-Louis Laville, Dr. Amina Béji-Bécheur",
          "schedule-desc-5": "International panorama of social innovations and perspectives for Morocco",
          "schedule-title-6": "Idea Laboratory",
          "schedule-desc-6": "Collaborative session to co-construct concrete solutions to identified challenges",
          "schedule-title-7": "SSE Project Pitches",
          "schedule-desc-7": "Presentation of 10 innovative initiatives followed by a public voting session",
          "schedule-title-8": "Closing Ceremony",
          "schedule-desc-8": "Announcement of recommendations and perspectives for Moroccan SSE",
          "btn-download-programme": "Download Full Program (PDF)",
          "speakers-title": "Speakers",
          "speaker-name-1": "Nadia El Mansouri",
          "speaker-title-1": "Director, Network of Social Enterprises in Morocco",
          "speaker-bio-1": "Expert in social entrepreneurship with 15 years of experience in supporting cooperatives.",
          "speaker-name-2": "Mehdi Lahlou",
          "speaker-title-2": "Professor of Economics, Mohammed VI University",
          "speaker-bio-2": "Specialist in alternative economic models and solidarity finance.",
          "speaker-name-3": "Amina Belahsen",
          "speaker-title-3": "Founder, Tamounte Cooperative",
          "speaker-bio-3": "Pioneer in agroecology and rural development through SSE in the Souss region.",
          "speaker-name-4": "Karim Benamor",
          "speaker-title-4": "Director, Banque Populaire Foundation for Development",
          "speaker-bio-4": "Expert in solidarity finance and social microcredit mechanisms.",
          "btn-view-all-speakers": "View All Speakers",
          "committee-title": "Scientific Committee",
          "committee-name-1": "Pr. Fatima Zahra Bennis",
          "committee-title-1": "ESS Chair, Hassan II University",
          "committee-bio-1": "Specialist in public policies in the social and solidarity economy.",
          "committee-name-2": "Dr. Ahmed Choukri",
          "committee-title-2": "Researcher, National Institute of Social and Solidarity Economy",
          "committee-bio-2": "Expert in participatory governance and inclusive economic models.",
          "committee-name-3": "Sara El Kadiri",
          "committee-title-3": "Consultant, Social Development Agency",
          "committee-bio-3": "Specialist in social inclusion and territorial development.",
          "committee-name-4": "Youssef Amrani",
          "committee-title-4": "Director, Research Center in Social Economy",
          "committee-bio-4": "Expert in ecological transition and circular economy.",
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
          "partners-title": "Partners",
          "contact-title": "Contact",
          "contact-address": "UM6P Benguerir, Morocco",
          "contact-email": "contact@assisesess.ma",
          "contact-phone": "+212 5 22 48 56 78",
          "label-contact-name": "Full Name",
          "label-contact-email": "Email Address",
          "label-contact-message": "Message",
          "btn-send-message": "Send",
          "footer-about-text": "The National Assises of the Social and Solidarity Economy brings together key players to co-construct innovative solutions to contemporary challenges.",
          "footer-links-title": "Useful Links",
          "footer-contact-title": "Contact",
          "footer-copyright": "© 2025 Assises de l'ESS. All rights reserved.",
          "cookie-consent-text": "This site uses cookies to improve your experience. By continuing to browse, you accept their use.",
          "cookie-consent-btn": "Accept",
          "admin-title": "Admin Dashboard"
      },
      ar: {
          "title-page": "مؤتمر الاقتصاد الاجتماعي والتضامني 2025 | الاقتصاد الاجتماعي والتضامني",
          "logo-text": "AssisesESS",
          "nav-home": "الصفحة الرئيسية",
          "nav-about": "حول",
          "nav-programme": "برنامج",
          "nav-speakers": "المتحدثون",
          "nav-committee": "اللجنة العلمية",
          "nav-partners": "الشركاء",
          "nav-contact": "اتصل",
          "nav-admin": "الإدارة",
          "hero-title": "تحويل الاقتصاد من خلال الابتكار الاجتماعي",
          "hero-subtitle": "المؤتمر الوطني للاقتصاد الاجتماعي والتضامني - 17 يونيو 2025 في جامعة محمد السادس بن جيل",
          "countdown-days": "أيام",
          "countdown-hours": "ساعات",
          "countdown-minutes": "دقائق",
          "countdown-seconds": "ثواني",
          "btn-register": "سجل الآن",
          "about-title": "حول المؤتمر",
          "about-objectives": "أهداف الحدث",
          "about-objectives-text": "يهدف المؤتمر الوطني للاقتصاد الاجتماعي والتضامني إلى جمع الفاعلين الرئيسيين في القطاع لتبادل الأفكار والنقاش وبناء حلول مبتكرة للتحديات الاقتصادية والاجتماعية والبيئية المعاصرة.",
          "about-themes": "المواضيع المتناولة",
          "about-theme-1": "الابتكار الاجتماعي وريادة الأعمال الجماعية",
          "about-theme-2": "الانتقال البيئي والاقتصاد الدائري",
          "about-theme-3": "التمويل التضامني ونماذج اقتصادية مستدامة",
          "about-theme-4": "الإدماج الاجتماعي والتنمية الإقليمية",
          "about-theme-5": "الحوكمة التشاركية والديمقراطية الاقتصادية",
          "about-audience": "الجمهور المستهدف",
          "about-audience-text": "رواد الأعمال الاجتماعية، التعاونيات، الجمعيات، المؤسسات العامة، الباحثين، الطلاب، وأي شخص مهتم بالنماذج الاقتصادية البديلة.",
          "programme-title": "برنامج",
          "tab-day1": "اليوم الأول - 17 يونيو",
          "tab-day2": "اليوم الثاني - 18 يونيو",
          "schedule-title-1": "حفل الافتتاح",
          "schedule-speaker-1": "وزير الاقتصاد الاجتماعي، رئيس جامعة محمد السادس",
          "schedule-desc-1": "خطاب الافتتاح وتقديم تحديات المؤتمر",
          "schedule-title-2": "جلسة مستديرة: الاقتصاد الاجتماعي والتضامني كرافعة لتحويل الاقتصاد",
          "schedule-speaker-2": "المنسق: د. كريم العيناوي",
          "schedule-desc-2": "مناقشات حول النماذج الاقتصادية البديلة وتأثيرها على التنمية الإقليمية",
          "schedule-title-3": "استراحة الغداء والتواصل",
          "schedule-desc-3": "منطقة التقديم والاجتماعات مع المعرضين",
          "schedule-title-4": "ورشات عمل موضوعية",
          "schedule-desc-4": "الجلسة 1: التمويل التشاركي والأدوات المالية المبتكرة<br>الجلسة 2: الاقتصاد الدائري والبيئة الصناعية<br>الجلسة 3: الإدماج الاجتماعي من خلال ريادة الأعمال الجماعية",
          "schedule-title-5": "مؤتمر عام: الاتجاهات العالمية في الاقتصاد الاجتماعي والتضامني",
          "schedule-speaker-3": "بروفيسور جان لويس لافيل، د. أمينة بن جيجي بشير",
          "schedule-desc-5": "نظرة عامة على الابتكارات الاجتماعية عالمياً وآفاقها للمغرب",
          "schedule-title-6": "مختبر الأفكار",
          "schedule-desc-6": "جلسة تعاونية لبناء حلول ملموسة للتحديات المحددة",
          "schedule-title-7": "عروض مشاريع الاقتصاد الاجتماعي والتضامني",
          "schedule-desc-7": "تقديم 10 مبادرات مبتكرة يليها جلسة تصويت عامة",
          "schedule-title-8": "حفل الختام",
          "schedule-desc-8": "إعلان التوصيات وآفاق الاقتصاد الاجتماعي والتضامني المغربي",
          "btn-download-programme": "تحميل البرنامج الكامل (PDF)",
          "speakers-title": "المتحدثون",
          "speaker-name-1": "نادية المنصوري",
          "speaker-title-1": "مديرة، شبكة المشاريع الاجتماعية في المغرب",
          "speaker-bio-1": "خبيرة في ريادة الأعمال الاجتماعية بخبرة 15 عاماً في دعم التعاونيات.",
          "speaker-name-2": "مهدي لحلو",
          "speaker-title-2": "أستاذ الاقتصاد، جامعة محمد السادس",
          "speaker-bio-2": "متخصص في النماذج الاقتصادية البديلة والتمويل التضامني.",
          "speaker-name-3": "أمينة بلحسن",
          "speaker-title-3": "مؤسسة، تعاونية تامونت",
          "speaker-bio-3": "رائدة في الزراعة البيئية والتنمية الريفية من خلال الاقتصاد الاجتماعي والتضامني في منطقة سوس.",
          "speaker-name-4": "كريم بنعمر",
          "speaker-title-4": "مدير، مؤسسة بنك الشعب للتنمية",
          "speaker-bio-4": "خبير في التمويل التضامني وآليات الائتمان الصغير الاجتماعي.",
          "btn-view-all-speakers": "عرض جميع المتحدثين",
          "committee-title": "اللجنة العلمية",
          "committee-name-1": "أستاذة فاطمة الزهراء بنيس",
          "committee-title-1": "رئيسة كرسي الاقتصاد الاجتماعي والتضامني، جامعة الحسن الثاني",
          "committee-bio-1": "متخصصة في السياسات العامة في الاقتصاد الاجتماعي والتضامني.",
          "committee-name-2": "د. أحمد شوقري",
          "committee-title-2": "باحث، المعهد الوطني للاقتصاد الاجتماعي والتضامني",
          "committee-bio-2": "خبير في الحوكمة التشاركية والنماذج الاقتصادية الشاملة.",
          "committee-name-3": "سارة القادري",
          "committee-title-3": "مستشارة، وكالة التنمية الاجتماعية",
          "committee-bio-3": "متخصصة في الإدماج الاجتماعي والتنمية الإقليمية.",
          "committee-name-4": "يوسف عمراني",
          "committee-title-4": "مدير، مركز الأبحاث في الاقتصاد الاجتماعي",
          "committee-bio-4": "خبير في الانتقال البيئي والاقتصاد الدائري.",
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
          "partners-title": "الشركاء",
          "contact-title": "اتصل",
          "contact-address": "جامعة محمد السادس بن جيل، المغرب",
          "contact-email": "contact@assisesess.ma",
          "contact-phone": "+212 5 22 48 56 78",
          "label-contact-name": "الاسم الكامل",
          "label-contact-email": "عنوان البريد الإلكتروني",
          "label-contact-message": "رسالة",
          "btn-send-message": "إرسال",
          "footer-about-text": "يجمع المؤتمر الوطني للاقتصاد الاجتماعي والتضامني الفاعلين الرئيسيين لبناء حلول مبتكرة للتحديات المعاصرة.",
          "footer-links-title": "روابط مفيدة",
          "footer-contact-title": "اتصل",
          "footer-copyright": "© 2025 مؤتمر الاقتصاد الاجتماعي والتضامني. جميع الحقوق محفوظة.",
          "cookie-consent-text": "هذا الموقع يستخدم ملفات تعريف الارتباط لتحسين تجربتك. من خلال الاستمرار في التصفح، فإنك توافق على استخدامها.",
          "cookie-consent-btn": "قبول",
          "admin-title": "لوحة التحكم الإدارية"
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

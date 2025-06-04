const translations = {
  en: {
    navAbout: "About Me",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    navImpressum: "Impressum",
    navPrivacy: "Privacy Policy",
    profession: "Full-Stack Software Engineer",
    infoShort: "Experienced software developer with a focus on modern Android apps.",
    requestResume: "Request CV",
    greeting: "Dear Mr. Vukic,\n\nplease send me your CV. Thank you!",
    infoLong: "I've been passionate about software development for over 15 years. Since 2016, my focus has been on developing modern Android apps using Kotlin and the latest Android technologies like Jetpack Compose.",
    projectObtsicarousel: "Android library for displaying a horizontally scrolling list of images in a repeating „one big, two small“ pattern.",
    projectWebsite: "",
    namePlaceholder: "Name",
    emailPlaceholder: "E-Mail",
    messagePlaceholder: "Message",
    submit: "Send",
    contactPrivacy: "By submitting this form, you agree that your information will be stored and processed to answer your inquiry. Further information can be found in our privacy policy.",
  },
  de: {
    navAbout: "Über mich",
    navSkills: "Skills",
    navProjects: "Projekte",
    navContact: "Kontakt",
    navImpressum: "Impressum",
    navPrivacy: "Datenschutzerklärung",
    profession: "Full-Stack-Softwareentwickler",
    infoShort: "Erfahrener Softwareentwickler mit Fokus auf moderne Android-Apps.",
    requestResume: "Lebenslauf anfordern",
    greeting: "Sehr geehrter Herr Vukic,\n\nbitte senden Sie mir Ihren Lebenslauf zu. Vielen Dank!",
    infoLong: "Ich bin seit über 15 Jahren leidenschaftlicher Softwareentwickler. Seit 2016 konzentriere ich mich auf die Entwicklung moderner Android-Apps mit Kotlin und den neuesten Android-Technologien wie Jetpack Compose.",
    projectObtsicarousel: "Android-Bibliothek zur Darstellung eine eine horizontal scrollende Liste von Bildern in einem sich wiederholenden Muster „ein großes, zwei kleine“.",
    projectWebsite: "Eine individuell gestaltete HTML/CSS-Website, die meine Arbeit, Projekte und Fähigkeiten präsentiert. Ohne Frameworks erstellt, mit Fokus auf sauberem Code und responsivem Layout.",
    namePlaceholder: "Name",
    emailPlaceholder: "E-Mail",
    messagePlaceholder: "Nachricht",
    submit: "Absenden",
    contactPrivacy: "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass Ihre Angaben zur Beantwortung Ihrer Anfrage gespeichert und verarbeitet werden. Weitere Informationen finden Sie in unserer Datenschutzerklärung.",
  },
  hr: {
    navAbout: "O meni",
    navSkills: "Skilovi",
    navProjects: "Projekti",
    navContact: "Kontakt",
    navImpressum: "Impresum",
    navPrivacy: "Pravila o privatnosti",
    profession: "Full-stack softverski inženjer",
    infoShort: "Iskusni softverski programer s fokusom na moderne Android aplikacije.",
    requestResume: "Zatraži životopis",
    greeting: "Poštovani gospodine Vukiću,\n\nmolim Vas da mi pošaljete svoj životopis. Hvala!",
    infoLong: "Strastveno se bavim razvojem softvera već više od 15 godina. Od 2016. godine fokusiram se na razvoj modernih Android aplikacija koristeći Kotlin i najnovijih Android tehnologija poput Jetpack Compose.",
    projectObtsicarousel: "Android biblioteka za prikaz horizontalno pomicanog popisa slika u ponavljajućem uzorku „jedna velika, dvije male“.",
    projectWebsite: "Invidualno dizajnirana HTML/CSS web stranica koja predstavlja moj rad, projekte i vještine. Izrađena bez frameworka, sa fokusom na čistom kodu i responzivnom dizajnu.",
    namePlaceholder: "Ime",
    emailPlaceholder: "E-pošta",
    messagePlaceholder: "Poruka",
    submit: "Pošalji",
    contactPrivacy: "Slanjem ovog obrasca pristajete da će se vaši podaci pohraniti i obraditi kako bismo odgovorili na vaš upit. Više informacija možete pronaći u našoj politici privatnosti.",
  }
};

function applyTranslations(lang) {
  const t = translations[lang] || translations.en;
  //test = document.getElementsByName("nav-links")

  document.getElementById("lang-nav-about").textContent = t.navAbout;
  document.getElementById("lang-nav-skills").textContent = t.navSkills;
  document.getElementById("lang-nav-projects").textContent = t.navProjects;
  document.getElementById("lang-nav-contact").textContent = t.navContact;
  document.getElementById("lang-profession").textContent = t.profession;
  document.getElementById("lang-info-short").textContent = t.infoShort;
  document.getElementById("lang-info-long").textContent = t.infoLong;
  document.getElementById("lang-project-obtsicarousel").textContent = t.projectObtsicarousel;
  document.getElementById("lang-project-website").textContent = t.projectWebsite;
  const resumeBtn = document.getElementById("lang-request-resume");
  resumeBtn.textContent = t.requestResume;
  resumeBtn.onclick = () => {
    document.getElementById("message").value = t.greeting;
    document.getElementById("message").focus();
  };
  document.getElementById("lang-about-title").textContent = t.navAbout;
  document.getElementById("lang-skills-title").textContent = t.navSkills;
  document.getElementById("lang-projects-title").textContent = t.navProjects;
  document.getElementById("lang-contact-title").textContent = t.navContact;
  document.querySelector("input[name='name']").placeholder = t.namePlaceholder;
  document.querySelector("input[name='email']").placeholder = t.emailPlaceholder;
  document.querySelector("textarea[name='message']").placeholder = t.messagePlaceholder;
  document.querySelector("button[type='submit']").textContent = t.submit;

  document.getElementById("lang-contact-privacy").textContent = t.contactPrivacy;
  document.getElementById("lang-nav-impressum").textContent = t.navImpressum;
  document.getElementById("lang-nav-privacy").textContent = t.navPrivacy;

  highlightActiveLang(lang);
}

function setLanguage(lang) {
  localStorage.setItem("preferredLang", lang);
  applyTranslations(lang);
  highlightActiveLang(lang);
}

const browserLang = navigator.language.slice(0, 2);
const savedLang = localStorage.getItem("preferredLang");
const initialLang = ["de", "hr", "en"].includes(savedLang) ? savedLang : (["de", "hr", "en"].includes(browserLang) ? browserLang : "en");
applyTranslations(initialLang);

function highlightActiveLang(lang) {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active-language");
    } else {
      btn.classList.remove("active-language");
    }
  });
}

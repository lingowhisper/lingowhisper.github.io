const translations = {
  es: {
    slogan: "Tus palabras también tienen voz.",
    navHome: "Inicio", navServices: "Servicios", navLanguages: "Idiomas", navContact: "Contacto",
    eyebrow: "TRADUCCIÓN · EDICIÓN · PRECISIÓN",
    heroCopy: "Traducción profesional y corrección de textos en español e inglés, para que tus ideas lleguen más lejos.",
    heroButton: "Hablemos de tu proyecto",
    servicesEyebrow: "LO QUE HACEMOS", servicesTitle: "Nuestros Servicios",
    service1Title: "Traducción<br>Inglés - Español",
    service1Text: "Traducciones precisas y naturales para todo tipo de textos.",
    service2Title: "Traducción<br>Español - Inglés",
    service2Text: "Tu mensaje, en el idioma que necesitas.",
    service3Title: "Corrección de estilo<br>de textos en español",
    service3Text: "Mejora la claridad, coherencia y fluidez de tus escritos.",
    service4Title: "Corrección tipográfica<br>de textos en español",
    service4Text: "Sin errores, con precisión y profesionalismo.",
    languagesEyebrow: "IDIOMAS", languagesTitle: "Dos idiomas, una misma voz",
    spanishText: "Corrección de estilo y corrección tipográfica.",
    englishText: "Traducción al inglés y desde el inglés.",
    promiseEyebrow: "NUESTRO COMPROMISO", promiseTitle: "Cada palabra cuenta",
    promise1: "Calidad y precisión", promise2: "Compromiso con los plazos",
    promise3: "Atención personalizada", promise4: "Tu confianza es nuestra prioridad",
    contactEyebrow: "CONTACTO", contactTitle: "¿Tienes un proyecto en mente?",
    contactText: "Escríbenos. Será un placer ayudarte.",
    emailButton: "Por correo electrónico", whatsappButton: "Por WhatsApp"
  },
  en: {
    slogan: "Your words have a voice too.",
    navHome: "Home", navServices: "Services", navLanguages: "Languages", navContact: "Contact",
    eyebrow: "TRANSLATION · EDITING · PRECISION",
    heroCopy: "Professional English-Spanish translation and Spanish copyediting, so your ideas can go further.",
    heroButton: "Let's talk about your project",
    servicesEyebrow: "WHAT WE DO", servicesTitle: "Our Services",
    service1Title: "English - Spanish<br>Translation",
    service1Text: "Accurate, natural translations for all kinds of texts.",
    service2Title: "Spanish - English<br>Translation",
    service2Text: "Your message, in the language you need.",
    service3Title: "Spanish<br>Copyediting",
    service3Text: "Improving the clarity, consistency and flow of your writing.",
    service4Title: "Spanish<br>Proofreading",
    service4Text: "Precision and professionalism, without typographical errors.",
    languagesEyebrow: "LANGUAGES", languagesTitle: "Two languages, one voice",
    spanishText: "Spanish copyediting and proofreading.",
    englishText: "Translation to and from English.",
    promiseEyebrow: "OUR COMMITMENT", promiseTitle: "Every word matters",
    promise1: "Quality and precision", promise2: "Commitment to deadlines",
    promise3: "Personalized attention", promise4: "Your trust is our priority",
    contactEyebrow: "CONTACT", contactTitle: "Have a project in mind?",
    contactText: "Get in touch. It will be a pleasure to help you.",
    emailButton: "By email", whatsappButton: "By WhatsApp"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("lingoWhisperLang", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("lingoWhisperLang") || "es");

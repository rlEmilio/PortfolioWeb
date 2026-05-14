const languageButton = document.getElementById("language-toggle");

let currentLanguage = localStorage.getItem("portfolio-language") || "es";

function applyLanguage(language) {
  document.documentElement.lang = language;

  const elements = document.querySelectorAll("[data-es][data-en]");

  elements.forEach((element) => {
    const text = language === "es" ? element.dataset.es : element.dataset.en;
    element.innerHTML = text;
  });

  const placeholderElements = document.querySelectorAll(
    "[data-placeholder-es][data-placeholder-en]"
  );

  placeholderElements.forEach((element) => {
    element.placeholder =
      language === "es"
        ? element.dataset.placeholderEs
        : element.dataset.placeholderEn;
  });

  languageButton.textContent = language === "es" ? "EN" : "ES";
  localStorage.setItem("portfolio-language", language);
}

if (languageButton) {
  applyLanguage(currentLanguage);

  languageButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    applyLanguage(currentLanguage);
  });
}
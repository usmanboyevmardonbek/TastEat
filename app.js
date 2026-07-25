document.addEventListener("DOMContentLoaded", () => {

    const LANG_KEY = "tasteat_lang";
    const flags = {
        en: { img: "./images/lang/united-states.png", text: "EN" },
        ru: { img: "./images/lang/russia.png", text: "RU" },
        uz: { img: "./images/lang/uzbekistan.png", text: "UZ" }
    };
    let currentLang = localStorage.getItem(LANG_KEY);
    if (!translations[currentLang]) {
        currentLang = "en";
    }

    function switchLanguage(lang) {
        if (!translations[lang]) {
            lang = "en";
        }
        localStorage.setItem(LANG_KEY, lang);
        currentLang = lang;

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-value]").forEach(el => {
            const key = el.getAttribute("data-i18n-value");
            if (translations[lang] && translations[lang][key]) {
                el.value = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.querySelector(".lang-switcher").classList.remove("open");
        updateLangButton(lang);
    }

    function updateLangButton(lang) {
        const btn = document.querySelector("#langToggle");
        const img = btn.querySelector("img");
        
        const span = btn.querySelector("span");

        const flag = flags[lang] || flags.en;
        img.src = flag.img;
        img.alt = flag.text;
        span.textContent = flag.text;
    }

    document.querySelector("#langToggle").addEventListener("click", () => {
        document.querySelector(".lang-switcher").classList.toggle("open");
    });

    document.querySelectorAll("#langDropdown li").forEach(li => {
        li.addEventListener("click", () => {
            const lang = li.getAttribute("data-lang");
            switchLanguage(lang);
        });
    });

    switchLanguage(currentLang);

    document.addEventListener("click", (e) => {
        const switcher = document.querySelector(".lang-switcher");
        if (!switcher.contains(e.target)) {
            document.querySelector(".lang-switcher").classList.remove("open");
        }
    });

});

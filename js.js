document.addEventListener("DOMContentLoaded", function() {
    console.log("Le script js.js est chargé et s'exécute correctement.");
    var userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.substring(0, 2); // Get the first two characters of the language code

    var langElements = document.querySelectorAll('.lang-content');
    langElements.forEach(function(element) {
        if (element.classList.contains(userLang)) {
            element.style.display = 'block';
        }
    });
});

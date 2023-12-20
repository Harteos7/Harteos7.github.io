const titre = document.getElementById('titre');
titre.textContent = "Bienvenue";

let i = 0;
while (i < 3) {
  i++;
  setTimeout(() => {
    titre.textContent += " sur le portfolio de Yoann Harmand";
  }, i * 1000);
}

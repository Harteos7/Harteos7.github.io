document.getElementById('titre').value = "Bienvenue";

let i = 0;
while (i < 3) {
  i++;
  setTimeout(() => {
    document.getElementById('titre').value = "Bienvenu sur le portfolio de Yoann Harmand";
  }, i * 1000);
}

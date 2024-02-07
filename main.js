//Déclencher une action sans addEventListener mais avec onclick Event
const leBouton = document.querySelector("#bouton01");
leBouton.onclick = () => {
  alert("J'utilise onclick pour déclencher une action");
};

//Déclencher une action avec un écouteur d'évènement addEventListener()
const leBouton2 = document.querySelector("#bouton02");
leBouton2.addEventListener("click", () => {
  alert("J'utilise addEventListener pour déclencher une action");
});

console.log(leBouton2);

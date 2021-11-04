export function mediaTagFiltering(allMedias) {
  //creation d'un tableau pour les tags actifs
  let active = [];

  //récupération de tous les tags cliquables
  const allTagsClickable = document.querySelectorAll(".tag");

  let TagClickedString;

  allTagsClickable.forEach((TagClicked) =>
    //Evenement click sur un tag
    TagClicked.addEventListener("click", (e) => {
      //Selection de l'enfant "span" , de son texte et supression du hashtag
      TagClickedString =
        TagClicked.childNodes[1].childNodes[1].textContent.slice(1);
      console.log(TagClickedString);
      //creation d'une liste de tous les tags actifs de la page via le aria label
      let list = document.querySelectorAll(
        `[aria-label="${TagClickedString}"]`
      );
      let navTag = document.querySelector(
        `[aria-label="${TagClickedString} Tag"]`
      );
      //condition si  le tag est n'est pas présent dans le tableau active
      if (active.filter((valeur) => valeur == TagClickedString) == "") {
        //le rajouter
        active.push(TagClickedString);
        //et ajouter une classe checked pour changer l'etat visible du tag
        list.forEach((element) => element.classList.add("checked"));
        navTag.classList.add("checked");
      } else {
        //suppresion du tag dui tableau s'il est déja actif en le selectionnant avec
        //une condition d'égalité
        for (let i = 0; i < active.length; i++) {
          if (active[i] === TagClickedString) {
            active.splice(i, 1);
            list.forEach((element) => element.classList.remove("checked"));
            navTag.classList.removew("checked");
          }
        }
      }

      filterMedia();
    })
  );

  //test de filtrage de photographs
  function filterMedia() {
    let mediasWanted = document.querySelectorAll()`[data-tags= ${TagClickedString}]`);
    for (let mediacount = 0; mediacount < allMedias.length; mediacount++) {
      let actualMedia = document.getElementById("card-" + allMedias.id);
      if (
        allMedias[mediacount].tags.filter((valeur) =>
          active.includes(valeur)
        ) != "" ||
        active.length === 0
      ) {
        actualMedia.style.display = "block";
      } else {
        actualMedia.style.display = "none";
      }
    }
  }
}

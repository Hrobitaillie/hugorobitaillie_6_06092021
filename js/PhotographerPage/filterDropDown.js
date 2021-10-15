export function filterDropDown(){
  var customSelect, i, j, customSelectLength, selElmntLength, selElmnt, a, b, c;
/*
  Recher d'un élément avec pour classe "custom-selected"
*/
customSelect = document.getElementsByClassName("custom-select");
customSelectLength = customSelect.length;
for (i = 0; i < customSelectLength; i++) {
  selElmnt = customSelect[i].getElementsByTagName("select")[0];
  selElmntLength = selElmnt.length;
  /*
    pour chaque élément, créer une nouvelle div, 
    qui va agir comme option selectionnée
  */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  customSelect[i].appendChild(a);
  /* 
    Pour chaque élément , créer une nouvelle div
    qui va contenir la lioste des options
  */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmntLength; j++) {
    /* 
    Pour chaque option dans le select medel,
    créer une nouvelle div avec le contenu de l'option
    */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      
        /* 
        Quand un choix est fait, mise a jour du choix 
        affiché par celui cliqué
        */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  customSelect[i].appendChild(b);
  a.addEventListener("click", function(e) {

    /*
    Quand un select est cliqué, fermeture de tous les autres,
    et ouverture/fermeture de celui cliqué
    */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* 
    Fermeture de toutes les selects de la page
    a l'exception du select actuel
  */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* 
  Si un utilisateur clique en dehors du dropdown, alors,
  la liste déroulante se ferme
*/
document.addEventListener("click", closeAllSelect);
}
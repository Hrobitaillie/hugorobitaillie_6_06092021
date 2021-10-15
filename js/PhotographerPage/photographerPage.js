import { photographerData } from '../Component/photographerCard.js';
import { filterDropDown } from '../PhotographerPage/filterDropDown.js';
import { verifySessionStorage } from '../Utils/gettingData.js';
import { mediaBuilder } from '../Component/models.js'
import { filtering } from './mediaContent.js';

await verifySessionStorage();
/*
    Récupération des photographes dans la sessionStorage
    et conversion du string en objet js.
*/
const allPhotographers = sessionStorage.getItem('photographers');
const photographers = JSON.parse(allPhotographers);


//récupération de l'url
let url = (new URL(document.location)).searchParams;

//récupération de l'id du pohotograph
let idOfPhotograph = url.get('id');

//récupération des éléments du dom
let name = document.querySelector(".name");
let location = document.querySelector(".location");
let baseline = document.querySelector(".baseline");
let tags = document.querySelector(".photograph-list__tags");
let avatar = document.querySelector(".photograph-card__img");

let encart = document.getElementById("Encart");
let photographLikes = encart.querySelector(".likes");
let price = encart.querySelector(".price");
/*
    Comparaison de l'id avec le tableau de photographe
    et selection tu photographe pertinent
*/
const activePhotograph = photographers.find(photographer => {
    return photographer.id.toString() === idOfPhotograph;
});

/*
    Insertion des différentes informations du photographe
    dans le body
*/
photographerData(activePhotograph,name,location,baseline,tags,avatar,photographLikes,price);

/*
    Crée un nouveau filtre déroulant avec un css customisable
    en se basant sur un bloc "select" qui est masqué
*/
filterDropDown();

//récupération des médias du photographe actuel
const currentPhotographerMedias = activePhotograph.medias;

//récupération des éléments du dom pour les filtres
let filterItem = document.querySelector(".select-items");
let selectSelected = document.querySelector(".select-selected");

/*
    Appel de la fonction filtering qui vas insérer
    à l'affichage de la page les médias déja filtré
    avec le filtre par défaut (popularité)
*/
filtering(currentPhotographerMedias,selectSelected);

/*
    Appel de la fonction filtering après un clic
    sur un des éléments de filtrage.

*/
filterItem.addEventListener("click", function(){filtering(currentPhotographerMedias,selectSelected)});

//récupération des icones de coeurs de chauqe media
let hearts = document.querySelectorAll(".fa-heart");

/*
    Pour chaque coeur, s'il est cliqué,
    vérifier s'il a déja été liké, si c'est le cas
    changer le css du coeur et décrémenter le nombre de like
    du média et du photographe, sinon incrémenter
*/
hearts.forEach( heartClicked =>

    heartClicked.addEventListener("click", () => {

        if(!heartClicked.classList.contains("liked")){
            heartClicked.style.color="#901C1C";
            heartClicked.classList.add("liked");

            heartClicked.parentNode.querySelector("p").innerHTML ++;
            activePhotograph.likes ++;
            photographLikes.firstChild.innerHTML ++;
        }else{
            heartClicked.style.color="transparent";
            heartClicked.classList.remove("liked");

            heartClicked.parentNode.querySelector("p").innerHTML --;
            activePhotograph.likes --;
            photographLikes.firstChild.innerHTML --;
        }

    })
);


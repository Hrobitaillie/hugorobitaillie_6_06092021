import {verifySessionStorage,getPhotographers} from './Utils/gettingData.js';
import {gettingTags,addingTagsIntoNavbar} from './Utils/gettingTags.js';
import {addingPhotographersIntoBody} from './Component/photographerCard.js';
import {filtering} from './Utils/tagFiltering.js';

async function startup(){

    /*
        Vérificaztion si SessionStorage est vide,
        si c'est la cas, récupérer les valeurs JSON
        et les stoquer en deux tableaux.
    */
    await verifySessionStorage();

    //  Récupération déléments du DOM
    const domNavBar = document.getElementById("nav");
    const domListOfTags = domNavBar.querySelector(".list__tags");
    const domMain = document.getElementById("main");


    /*
        Récupérations de tous les photographes
    */
    const allPhotographers = await getPhotographers()
    console.log(allPhotographers);

    /*
        Récupération de la liste totale des tags présents,
        suppression des itérations
    */
    let tags;
    tags = gettingTags(allPhotographers,tags);

    //  Ajout de la liste des tags dans la navbar
    addingTagsIntoNavbar(tags,domListOfTags);

    addingPhotographersIntoBody(allPhotographers,domMain);

    filtering(allPhotographers);


    document.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter'){
            console.log("clocked enter");
            event.target.click();
        }
    })
}

startup();
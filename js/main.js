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
}

startup();




// fetch("./database.json")
//     .then(response =>{
//         return response.json();
//     })
//     .then(data =>{
//         pageLoading(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

    

// function pageLoading(data){
//     const domNavBar = document.getElementById("nav");
//     const domListOfTags = domNavBar.querySelector(".list__tags");
//     const domMain = document.getElementById("main");

//     //getting Pohotographers list
//     let photographers = (data.photographers);
//     let tags;


//     //getting tag list
//     gettingTags();
//     import {gettingTags} from './utils/gettingTags';


//     //adding tags to navbar
//     addingTagsIntoNavbar();
//     function addingTagsIntoNavbar(){
//         let tag = 0 ;
//         for(tag of tags){
//             //ajout  dans le dom de chaque tag
//             domListOfTags.innerHTML += `
//             <li class="tag nav-tag" aria-labelledby="${tag}">
//             <span >#${tag}</span>
//             </li>
//             `;
//         }
//     }

//     //adding photographers in body
//     addingPhotographersIntoBody(photographers)
//     import {addingPhotographersIntoBody} from './component/photographerCard';

//     filtering();
//     import {filtering} from './utils/tagFiltering';
// }


    
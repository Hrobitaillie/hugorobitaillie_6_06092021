export function gettingTags(allPhotographers,tags){
    //map depuis un tableau, création de nouveau tableau
    //récupération des tags par tableaux
    tags = allPhotographers.map(
        (p) => {
            return{
                tags: p.tags,
            };
        }
    );

    //création d'un tableau vide pour tous les tags réunis
    let allTagsString = "";

    //ajout des tags dans la variable allTagsString de type string
    for (let i = 0; i <= tags.length-1; i++){
        allTagsString += tags[i].tags + ',';
    }

    //transformation de la variable de type string en tableau en les séparant avec les ","
    tags = allTagsString.split(',')

    //Set permet de stoquer des valeurs d'un tableau en supprimant tous les doublons
    tags = new Set(tags);

    //Convertion du set de donnée en tableau
    tags = Array.from(tags);

    //suppression du dernier élément ("")
    tags.pop();
    return tags;
}

//adding tags to navbar
export function addingTagsIntoNavbar(tags,domListOfTags){
    let tag = 0 ;
    for(tag of tags){
        //ajout  dans le dom de chaque tag
        domListOfTags.innerHTML += `
        <li class="tag nav-tag" aria-label="${tag} Tag">
        <a href="#">
        <span >#${tag}</span>
        </a>
        </li>
        `;
    }
}
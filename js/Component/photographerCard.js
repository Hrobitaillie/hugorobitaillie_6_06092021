import{ photographCardBuilder } from "../factory.js";

export function addingPhotographersIntoBody(allPhotographers,domMain){
    let number = 0;
    allPhotographers.forEach(photograph => {
        new photographCardBuilder(photograph.name,photograph.id,photograph.city,photograph.country,photograph.tags,photograph.tagline,photograph.price,photograph.portrait,domMain, number);
    });
}

function photographerData(activePhotograph,name,location,baseline,tags,avatar,photographLikes,price){
    name.innerHTML = activePhotograph.name;

    location.innerHTML = activePhotograph.city + ", " + activePhotograph.country;

    baseline.innerHTML = activePhotograph.tagline;

    let tagLength = activePhotograph.tags.length;

    /*
    Ajout des tags lié au allPhotographers
    via une boucle itérante
    */
   
    for(let j = 0; j < tagLength ; j++){

        tags.innerHTML += `
        <li tabindex="0" class="tag" aria-label="${activePhotograph.tags[j]} Tag">
            <span >#${activePhotograph.tags[j]}</span>
        </li>
        `;
    }
    let pathPortrait = `${activePhotograph.portrait}`;
    //replace .jpeg to .webp
    //pathMedia = pathMedia.replace(/\.[^/.]+$/, "");
    pathPortrait = pathPortrait+".webp";
    avatar.innerHTML= `<img src="./img/Photographers ID Photos/${pathPortrait}" alt="${activePhotograph.name}">`;

    photographLikes.innerHTML = `<p>${activePhotograph.likes}</p> <i class="fas fa-heart"></i>`;
    price.innerHTML = `<p>${activePhotograph.price}€/jour `;
}

export {photographerData};
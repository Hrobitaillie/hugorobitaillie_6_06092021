
export function addingPhotographersIntoBody(allPhotographers,domMain){



        //Creation d'une boucle afin de créer chaque carte de photographe
        domMain.innerHTML="";
        for( let photographCount = 0; photographCount < allPhotographers.length ; photographCount++){

                        //console.log("Creation de la carte de " + allPhotographers[photographCount].name)


            //insertion dans le html les éléments de chaque photographes.
            domMain.innerHTML += `
            <article class="photograph-card" id="card-${allPhotographers[photographCount].id}">
                    <a class="photograph-card__cover photograph-card__link" href="photograph.html?id=${allPhotographers[photographCount].id}" aria-label="${allPhotographers[photographCount].name}">
                        <div class="photograph-card__img">
                            <img src="./img/Photographers ID Photos/${allPhotographers[photographCount].portrait}" alt="Photograph: ${allPhotographers[photographCount].name} Avatar">
                        </div>
                        <h2 class="photograph-card__title base-color-light">${allPhotographers[photographCount].name}</h2>
                    </a>
                    <p>
                        <span class="base-color">${allPhotographers[photographCount].city},${allPhotographers[photographCount].country}</span>
                        <span class="second-color">${allPhotographers[photographCount].tagline}</span>
                        <span class="second-color-light">${allPhotographers[photographCount].price}€/jour</span>
                    </p>
                    <ul class="photograph-list__tags list__tags">
            `;


            //récupération de la liste globale des emplacements de tags des photographes
            const allPhotographCardsTags = domMain.querySelectorAll(".photograph-list__tags");


            //récupération de l'emplacement de tags du photographe en cours
            let DOMPhotographCardTags = allPhotographCardsTags[photographCount];


            //verification du nombre de tags du photographs
            let tagLength = allPhotographers[photographCount].tags.length;


                        // console.log(allPhotographers[photographCount].name + ' à ' + tagLength + ' tags');
                        // console.log(allPhotographers[photographCount].tags);
                        // console.log('Son Pemier tag est: ' + allPhotographers[photographCount].tags[0]);


            //création d'une boucle qui va ajouter les tags de chaque photographe présents dans le tableau allPhotographers
            for(let j = 0; j < tagLength ; j++){

                
                        // console.log(allPhotographers[photographCount].tags[j]);


                DOMPhotographCardTags.innerHTML += `
                    <li class="tag" aria-label="${allPhotographers[photographCount].tags[j]}">
                        <span >#${allPhotographers[photographCount].tags[j]}</span>
                    </li>
                </ul>
            </article>
            `;
        } 
    }
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
        <li class="tag" aria-label="${activePhotograph.tags[j]} Tag">
            <span >#${activePhotograph.tags[j]}</span>
        </li>
        `
    }

    avatar.innerHTML= `<img src="./img/Photographers ID Photos/${activePhotograph.portrait}" alt="${activePhotograph.name}">`;

    photographLikes.innerHTML = `<p>${activePhotograph.likes}</p> <i class="fas fa-heart"></i>`;
    price.innerHTML = `<p>${activePhotograph.price}€/jour `;
}

export {photographerData};
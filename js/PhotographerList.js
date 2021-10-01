fetch("./database.json")
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
        pageLoading(data);
    })
    .catch(err => {
        console.log(err);
    });

function pageLoading(data){
    //initalisation des variables DOM
    const domNavBar = document.getElementById("nav");
    const domListOfTags = domNavBar.querySelector(".list__tags");
    const domMain = document.getElementById("main");


    //getting Pohotographers list
    console.log("Getting Pohotographers list...");
    let photographers = (data.photographers);
    let tags;
    console.log(photographers);



    
    //getting tag list
    console.log("Getting tag list...");
    gettingTags();
    function gettingTags(){

        //map depuis un tableau, création de nouveau tableau
        //récupération des tags par tableaux
        tags = photographers.map(
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
        console.log(tags);
    }

    //adding tags to navbar
    addingTagsIntoNavbar();
    function addingTagsIntoNavbar(){
        let tag = 0 ;
        for(tag of tags){
            //ajout  dans le dom de chaque tag
            domListOfTags.innerHTML += `
            <li class="tag nav-tag" aria-labelledby="${tag}">
            <span >#${tag}</span>
            </li>
            `;
        }
    }
    
    //adding photographers in body

    addingPhotographersIntoBody(photographers)
    function addingPhotographersIntoBody(photographers){
        //Creation d'une boucle afin de créer chaque carte de photographe
        domMain.innerHTML="";
        for( let photographCount = 0; photographCount < photographers.length ; photographCount++){


                        //console.log("Creation de la carte de " + photographers[photographCount].name)


            //insertion dans le html les éléments de chaque photographes.
            domMain.innerHTML += `
            <article class="photograph-card" id="card-${photographers[photographCount].id}">
                    <a class="photograph-card__cover photograph-card__link" href="?id=${photographers[photographCount].id}">
                        <div class="photograph-card__img">
                            <img src="./img/Photographers ID Photos/${photographers[photographCount].portrait}" alt="">
                        </div>
                        <h2 class="photograph-card__title base-color-light">${photographers[photographCount].name}</h2>
                    </a>
                    <p>
                        <span class="base-color">${photographers[photographCount].city},${photographers[photographCount].country}</span>
                        <span class="second-color">${photographers[photographCount].tagline}</span>
                        <span class="second-color-light">${photographers[photographCount].price}€/jour</span>
                    </p>
                    <ul class="photograph-list__tags list__tags">
            `;


            //récupération de la liste globale des emplacements de tags des photographes
            const allPhotographCardsTags = domMain.querySelectorAll(".photograph-list__tags");


            //récupération de l'emplacement de tags du photographe en cours
            let DOMPhotographCardTags = allPhotographCardsTags[photographCount];


            //verification du nombre de tags du photographs
            let tagLength = photographers[photographCount].tags.length;


                        // console.log(photographers[photographCount].name + ' à ' + tagLength + ' tags');
                        // console.log(photographers[photographCount].tags);
                        // console.log('Son Pemier tag est: ' + photographers[photographCount].tags[0]);


            //création d'une boucle qui va ajouter les tags de chaque photographe présents dans le tableau photographers
            for(let j = 0; j < tagLength ; j++){

                
                        // console.log(photographers[photographCount].tags[j]);


                DOMPhotographCardTags.innerHTML += `
                    <li class="tag" aria-labelledby="${photographers[photographCount].tags[j]}">
                        <span >#${photographers[photographCount].tags[j]}</span>
                    </li>
                </ul>
            </article>
            `;
            } 
        }
    }




    //creation d'un tableau pour les tags actifs
    let active = [];

    //récupération de tous les tags cliquables
    const allTagsClickable = document.querySelectorAll(".tag");

    let tagClickedString;


    allTagsClickable.forEach(TagClicked => 
        //Evenement click sur un tag
        TagClicked.addEventListener("click", (e) => {
            //Selection de l'enfant "span" , de son texte et supression du hashtag
            TagClickedString = TagClicked.childNodes[1].textContent.slice(1);
            //creation d'une liste de tous les tags actifs de la page via le aria label
            let list = document.querySelectorAll(`[aria-labelledby="${TagClickedString}"]`);

            //condition si  le tag est n'est pas présent dans le tableau active
            if(active.filter(valeur => valeur == TagClickedString)==""){
                //le rajouter
                active.push(TagClickedString);
                //et ajouter une classe checked pour changer l'etat visible du tag
                list.forEach(element => element.classList.add("checked"));
            }else{
                //suppresion du tag dui tableau s'il est déja actif en le selectionnant avec
                //une condition d'égalité
                for( let i = 0; i < active.length; i++){ 
                    if (active[i] === TagClickedString) { 
                        active.splice(i, 1); 
                        list.forEach(element => element.classList.remove("checked"));
                    }
                }
            }

            filterPhotographs();
        })
    );
    
    //test de filtrage de photographs
    function filterPhotographs(){
        for( let photographCount = 0; photographCount < photographers.length ; photographCount++){
            let actualCard = document.getElementById("card-"+photographers[photographCount].id);
            if (photographers[photographCount].tags.filter(valeur => active.includes(valeur))!="" || active.length===0){
                actualCard.style.display="block";
            }else{
                actualCard.style.display="none";
            }
        }

    }
    // const filter = "sports";
    // const filteredPhotograph = photographers.filter(p => {
    //     console.log(p);
    //     return p.tags.includes(filter);

    // })
    // console.log(filteredPhotograph);
    // addingPhotographersIntoBody(filteredPhotograph);
}
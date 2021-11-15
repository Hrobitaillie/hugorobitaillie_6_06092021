export let photographBuilder = class photographBuilder{
    constructor(name,id,city,country,tags,tagline,price,portrait,medias,likes){
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
        this.medias = medias;
        this.likes = likes;
    }
};

export let photographCardBuilder = class photographCardBuilder extends photographBuilder{
    constructor(name,id,city,country,tags,tagline,price,portrait,domMain){
        super(name,id,city,country,tags,tagline,price,portrait);
        let pathPortrait = `${this.portrait}`;
        pathPortrait = pathPortrait+".webp";

        //verification du nombre de tags du photographs
        let tagLength = this.tags.length;
        let thisPhotographTags ="";
        for(let j = 0; j < tagLength ; j++){
            thisPhotographTags +=`
                    <li tabindex="0" class="tag" aria-label="${this.tags[j]}">
                        <span class="tagClickable">#${this.tags[j]}</span>
                    </li>`;
        }


        domMain.innerHTML += `
            <article class="photograph-card" id="card-${this.id}">
                <a class="photograph-card__cover photograph-card__link" href="photograph.html?id=${this.id}" aria-label="${this.name}">
                    <div class="photograph-card__img">
                        <img src="./img/Photographers ID Photos/${pathPortrait}" alt="Photograph: ${this.name} Avatar">
                    </div>
                    <h2 class="photograph-card__title">${this.name}</h2>
                </a>
                <p>
                    <span class="base-color city">${this.city},${this.country}</span>
                    <span class="second-color tagline">${this.tagline}</span>
                    <span class="second-color-light price">${this.price}€/jour</span>
                </p>
                <ul class="photograph-list__tags list__tags">
                    ${thisPhotographTags}
                </ul>
            </article>
               `;
    }
};
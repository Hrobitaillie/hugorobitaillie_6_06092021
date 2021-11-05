export function mediaBuilder(currentPhotographerMedias){
    const mediaContent = document.querySelector(".media-content");
    mediaContent.innerHTML ="";
    mediaHTMLBuilder(mediaContent)
    function mediaHTMLBuilder(mediaContent){
        currentPhotographerMedias.forEach((element) =>{
            let cover;
            let coversrc;

            //saving .jpeg path
            let pathMedia = `../img/${element.photographerId}/${element.image}`;
            //replace .jpeg to .webp
            // pathMedia = pathMedia.replace(/\.[^/.]+$/, "");
            pathMedia = pathMedia+'.webp';

            if(element.video === undefined){
                mediaContent.innerHTML += ` 
                <article class= "media" id="image-${element.id}">
                    <div class= "media-cover"
                    data-title = "${element.title}"
                    data-type = "image"
                    data-src = "${pathMedia}"
                    data-likes = "${element.likes}"
                    data-tags = "${element.tags}"
                    aria-label="${element.title}, closeup view"
                    tabindex="0"
                    >
                    <img src="${pathMedia}" alt="">
                    </div>
                    <div class="media-infos">
                        <p class="media-title">${element.title}</p>
                        <div class="media-likes">
                            <p>${element.likes}</p>
                            <i tabindex="0" class="fas fa-heart" aria-label="Likes" aria-hidden="false"></i>
                        </div>
                    </div>
                </article>
                `;
            }else{
                mediaContent.innerHTML += `
                <article class= "media" id="image-${element.id}">
                    <div class= "media-cover"
                    data-title = "${element.title}"
                    data-type = "video"
                    data-src = "../img/${element.photographerId}/${element.video}"
                    data-likes = "${element.likes}"
                    data-tags = "${element.tags}"
                    aria-label="${element.title}, closeup view"
                    tabindex="0"
                    >
                    <video src="../img/${element.photographerId}/${element.video}" alt="${element.title}">
                    </div>
                    <div class="media-infos">
                        <p class="media-title">${element.title}</p>
                        <div class="media-likes">
                            <p>${element.likes}</p>
                            <i tabindex="0" class="fas fa-heart" aria-label="Likes" aria-hidden="false"></i>
                        </div>
                    </div>
                </article>
                `;
            }

            
        });
    }

}
{/* <article class="media" id="image-">
<div class="media-cover">
    <img src="" alt="">
</div>
<div class="media-infos">
    <p class="media-title"></p>
    <div class="media-likes">
        <p></p>
        <i class="fas fa-heart"></i>
    </div>
</div>
</article>  */}
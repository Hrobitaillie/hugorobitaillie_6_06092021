export function mediaBuilder(currentPhotographerMedias){
    const mediaContent = document.querySelector(".media-content");
    mediaContent.innerHTML ="";
    mediaHTMLBuilder(mediaContent)
    function mediaHTMLBuilder(mediaContent){
        currentPhotographerMedias.forEach((element) =>{
            let cover;
            let coversrc;
            if(element.video === undefined){
                mediaContent.innerHTML += `
                <article class= "media" id="image-${element.id}">
                    <div class= "media-cover"
                    data-title = "${element.title}"
                    data-type = "image"
                    data-src = "../img/${element.photographerId}/${element.image}"
                    data-likes = "${element.likes}"
                    >
                    <img src="../img/${element.photographerId}/${element.image}" alt="">
                    </div>
                    <div class="media-infos">
                        <p class="media-title">${element.title}</p>
                        <div class="media-likes">
                            <p>${element.likes}</p>
                            <i class="fas fa-heart"></i>
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
                    >
                    <video src="../img/${element.photographerId}/${element.video}" alt="">
                    </div>
                    <div class="media-infos">
                        <p class="media-title">${element.title}</p>
                        <div class="media-likes">
                            <p>${element.likes}</p>
                            <i class="fas fa-heart"></i>
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
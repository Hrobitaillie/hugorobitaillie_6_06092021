export function mediaBuilder(currentPhotographerMedias){
    const mediaContent = document.querySelector(".media-content");
    mediaContent.innerHTML ="";
    mediaHTMLBuilder(mediaContent)
    function mediaHTMLBuilder(mediaContent){
        currentPhotographerMedias.forEach((element) =>{
            let cover;
            if(element.video === undefined){
                cover = `<img src="../img/${element.photographerId}/${element.image}" alt="">`
            }else{

                cover = `<video src="../img/${element.photographerId}/${element.video}" alt="">`
            }

            mediaContent.innerHTML += `
            <article class="media" id="image-${element.id}">
                <div class="media-cover">
                    ${cover}
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
export function openLightBox(){
    const lightbox = document.getElementById('lightbox');
    const closeLightbox = lightbox.querySelector('.fa-times');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxPrev = lightbox.querySelector(".fa-chevron-left");
    const lightboxNext = lightbox.querySelector(".fa-chevron-right");
    let mediaData = this;
    let articleDisplayed = this.parentElement;
    document.body.classList.add("no-scroll");
    lightbox.style.display="flex";

    loadLightboxContent(mediaData);

    function loadLightboxContent(mediaData){
        if(mediaData.dataset.type === 'image'){
            lightboxImage.innerHTML =`
            <div class="media-content">
                <img class="image-closeup" src="${mediaData.dataset.src}" alt="">
                <p class="image-title">${mediaData.dataset.title}</p>
            </div>
            `
        }else{
            lightboxImage.innerHTML =`
            <div class="media-content">
                <video src="${mediaData.dataset.src}" alt="" controls autoplay></video>
                <p class="image-title">${mediaData.dataset.title}</p>
            </div>
            `
        }
    }

    lightboxNext.addEventListener("click",nextMedia);
    lightboxPrev.addEventListener("click",previousMedia);
    document.addEventListener('keydown',(event)=>{
        const touche = event.key;
        if(touche === 'ArrowRight'){
            nextMedia()
        }
        if(touche === 'ArrowLeft'){
            previousMedia()
        }
    })

    function nextMedia(){
        let articleNext = articleDisplayed.nextElementSibling;
        let nextMediaData = articleNext.firstElementChild;
        loadLightboxContent(nextMediaData);
        articleDisplayed = articleNext;
    }
    function previousMedia(){
        let articlePrev = articleDisplayed.previousElementSibling;
        let prevMediaData = articlePrev.firstElementChild;
        loadLightboxContent(prevMediaData);
        articleDisplayed = articlePrev;
    }


    closeLightbox.addEventListener("click",()=>{
        lightbox.style.display = "none";
        document.body.classList.remove("no-scroll");
    })
}
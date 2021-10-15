export function mediaSorter(currentPhotographerMedias){

    let photographerVideos = [];
    let photographerImages = [];

    currentPhotographerMedias.forEach(element => {
        if(element.video === undefined){
            photographerImages.push(element);
        }else{
            photographerVideos.push(element);
        }
    });
}
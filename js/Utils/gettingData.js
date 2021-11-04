async function getData(){
    const response = await fetch("./database.json");
    const data = await response.json();
    sessionStorage.setItem('photographers',JSON.stringify(dataSorter(data)));

}
function dataSorter(data){
    const photographersData = data.photographers;
    const photographersMedia = data.media;
    const photograph = [];

    photographersData.forEach(({
        id,city,country,tags,tagline,price,portrait,name
    }) =>{
        const photographMedia = photographersMedia
        .filter((photographersMedia) => photographersMedia.photographerId === id);

        let mediaLike = 0;
        const TotalLikes = photographMedia.forEach(media => {
            mediaLike = mediaLike + media.likes;
        });
        
        const result = {
            id,
            city,
            country,
            tags,
            tagline,
            price,
            portrait,
            name,
            medias: photographMedia,
            likes: mediaLike
        };
        photograph.push(result);
    });
    return photograph;
    
}


export async function getPhotographers(){
    const allPhotographers = sessionStorage.getItem('photographers');
    const result = JSON.parse(allPhotographers);
    return result;
}

export async function verifySessionStorage(){
    if(sessionStorage.length < 2){
        await getData();
        console.log("getting data");
    }else{
        console.log("Déja chargé");
        await getData();
    }
}
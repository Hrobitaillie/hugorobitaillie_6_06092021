import { mediaBuilder } from "../Component/models.js";


export function filtering(currentPhotographerMedias,selectSelected){
    let selectedFilter = selectSelected.innerHTML;

    let filteredTable ;

    if(selectedFilter === "Popularité"){
        filteredTable = currentPhotographerMedias.sort(function(a,b){
            if(a.likes < b.likes) {return 1;}
            if(a.likes > b.likes) {return -1;}
            return 0;
        });
    }
    if(selectedFilter === "Date"){
        filteredTable = currentPhotographerMedias.sort(function(a,b){
            if(a.date < b.date) {return 1;}
            if(a.date > b.date) {return -1;}
            return 0;
        });
    }
    if(selectedFilter === "Titre"){
        filteredTable = currentPhotographerMedias.sort(function(a,b){
            if(a.title < b.title) {return -1;}
            if(a.title > b.title) {return 1;}
            return 0;
        });
    }

    mediaBuilder(currentPhotographerMedias);
}

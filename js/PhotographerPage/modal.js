export function contactModal(activePhotograph){
    // appel de la fonction pour activer la navgation clavier
    // seulement sur la modale
    navOnlyModal();

    // Cette fonction permet desactiver/activer
    // la navigation clavier de la page lors
    // pour se focaliser sur la navigation de la modale

    function navOnlyModal(){
        if(document.body.classList.contains("no-scroll")){
            let tabindex = document.querySelectorAll('[tabindex = "0"]');
            tabindex.forEach(element => {
                element.setAttribute("tabindex","-1");
            });
        }else{
            let tabindex = document.querySelectorAll('[tabindex = "-1"]');
            tabindex.forEach(element => {
            element.setAttribute("tabindex","0");
        });
        }
    }

    // selection et affichage de la modale
    let modal = document.getElementById('contact');
    modal.style.display="flex";

    // blocage du scroll sur le body
    document.body.classList.add("no-scroll");

    // définit le aria-label de la modal en fonction du nom du photographe
    const modalContent = document.querySelector('.modal--container');
    modalContent.ariaLabel=`Contact me ${activePhotograph.name}`;

    // Detection du click sur le bouton de fermeture
    // fermeture de la modale
    // reactivation de la navigation clavier sur la page
    // reactivation du scroll
    let closeModal = modal.querySelector('.fa-times');
    closeModal.addEventListener("click",()=>{
        modal.style.display = "none";
        navOnlyModal();
        document.body.classList.remove("no-scroll");
    });

    // Ecriture du nom du photographe dans le titre de la modale
    let contactName = document.querySelector(".modal--title__name");
    contactName.innerHTML = `${activePhotograph.name}`;


    // detection de la pression sur la touche Echape
    // fermeture de la modale
    // reactivation de la navigation clavier sur la page
    // reactivation du scroll
    document.addEventListener('keydown',(event)=>{
        navOnlyModal();
        if(event.key === 'Escape'){
            if(document.body.classList.contains("no-scroll")){
                modal.style.display = "none";
                document.body.classList.remove("no-scroll");
            }
        }
    })

    //---------------------------------------------------------------
    //---------------------------------------------------------------
    //---------------------------------------------------------------

    //DOM Elements validation
    const form = document.getElementById('form');
    const first = document.getElementById('prenom');
    const last = document.getElementById('nom');
    const email = document.getElementById('email');
    const message = document.getElementById('message');


    //DOM Elements Erorr
    const firstError = document.getElementById('firstError');
    const lastError = document.getElementById('lastError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');


    //---------------------------------------------------------------
    //---------------------------------------------------------------
    //---------------------------------------------------------------
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
    })

    function validate(){

        let firstOk;
        let lastOk;
        let mailOk;
        let messageOk;

        // Testing lirstname content
        if(first.value.length<2 || first.value == Number){
            firstError.style.display="block";
            firstError.innerHTML = "Ecrivez un prénom de plus de 2 lettres";
            firstError.style.color="white";
            firstError.style.fontStyle="italic";
            firstError.style.fontSize="14px";
        }else{
            firstError.style.display="none";
            firstOk=true;
        }

        // Testing lastname content
        if(last.value.length<2 || last.value == Number){
            lastError.style.display="block";
            lastError.innerHTML = "Ecrivez un nom de plus de 2 lettres";
            lastError.style.color="white";
            lastError.style.fontStyle="italic";
            lastError.style.fontSize="14px";
        }else{
            lastError.style.display="none";
            lastOk=true;
        }

        //checking mail format
        const mailformat = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
        if(!(mailformat.test(email.value))){
            emailError.style.display="block";
            emailError.innerHTML = "Merci d'entrer un Email valide";
            emailError.style.color="white";
            emailError.style.fontStyle="italic";
            emailError.style.fontSize="14px";
        }else{
            emailError.style.display="none";
            mailOk=true;
        }

        //checking message not empty
        if(message.value.length<4){
            messageError.style.display="block";
            messageError.innerHTML = "Votre message doit contenir au moins 4 caractères";
            messageError.style.color="white";
            messageError.style.fontStyle="italic";
            messageError.style.fontSize="14px";
        }else{
            messageError.style.display="none";
            messageOk=true;
        }

        //Checking if everything is ok
        if(firstOk == true && lastOk == true && mailOk == true && messageOk == true){
            modal.style.display = "none";
            navOnlyModal();
            document.body.classList.remove("no-scroll");
            // Ecriture des informations dans la console
            console.log("Prénom: " + first.value);
            console.log("Nom: " + last.value);
            console.log("Email: " + email.value);
            console.log("Message: " + message.value);
        }
    }
}
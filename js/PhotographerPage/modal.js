export function contactModal(activePhotograph){
    let modal = document.getElementById('contact');
    modal.style.display="flex";

    let closeModal = modal.querySelector('.fa-times');
    closeModal.addEventListener("click",()=>{modal.style.display = "none"});

    let contactName = document.querySelector(".modal--title__name");
    contactName.innerHTML = `${activePhotograph.name}`;

    //---------------------------------------------------------------
    //---------------------------------------------------------------
    //---------------------------------------------------------------

    //DOM Elements validation
    const form = document.getElementById('form');
    const first = document.getElementById('first');
    const last = document.getElementById('last');
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
            firstError.style.color="red";
            firstError.style.fontSize="14px";
        }else{
            firstError.style.display="none";
            firstOk=true;
        }

        // Testing lastname content
        if(last.value.length<2 || last.value == Number){
            lastError.style.display="block";
            lastError.innerHTML = "Ecrivez un nom de plus de 2 lettres";
            lastError.style.color="red";
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
            emailError.style.color="red";
            emailError.style.fontSize="14px";
        }else{
            emailError.style.display="none";
            mailOk=true;
        }

        //checking message not empty
        if(message.value.length<4){
            messageError.style.display="block";
            messageError.innerHTML = "Merci d'écrire un message";
            messageError.style.color="red";
            messageError.style.fontSize="14px";
        }else{
            messageError.style.display="none";
            messageOk=true;
        }

        //Checking if everything is ok
        if(firstOk == true && lastOk == true && mailOk == true && messageOk == true){
            modal.style.display = "none";
            //Open Confirm Modal
            console.log("Prénom: " + first.value);
            console.log("Nom: " + last.value);
            console.log("Email: " + email.value);
            console.log("Message: " + message.value);
        }
    }
}
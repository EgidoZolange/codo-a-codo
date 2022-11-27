const contactForm = document.getElementById("contactForm");
const updateMessage = (field, message) => {
    if(!!message) {
        setError(field, message);
    } 
    else {
        setSuccess(field);
    }
}

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    let isValid = validateInputs();    

    if (isValid==true) {
        contactForm.reset();
        alert("Se ha enviado correctamente.")
    }

});

validateInputs = () => {
    let message, isValid=true
    for (let i=0;i<contactForm.elements.length;i++){
        let field = contactForm.elements[i]
        
        switch (field.className){
            case 'nombre':
                message = field.value==='' ? 'Se requiere un nombre.' : field.value.match("^[0-9]") ? 'No puede tener números.': null
                updateMessage(field,message)
                break;
            case 'email':
                message = field.value==='' ? 'Se requiere un email.' : !isValidEmail(field.value) ? 'El email no tiene el formato correcto.' : null
                updateMessage(field,message)
                break;
            case 'asunto':
                message = field.value==="-1" ? 'Elija un asunto' : null
                updateMessage(field,message)
                break;
            case 'comentarios':
                message = field.value==='' ? 'Se requiere un comentario.' : null
                updateMessage(field,message)
                break;                     
        }        

        isValid=!message&&isValid
    }    
    return isValid
}

const setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.'+element.className+'_error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.'+element.className+'_error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}  

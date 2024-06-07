document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
    var mail = document.getElementById("mail").value;
    var haslo = document.getElementById("haslo").value;
    var telefon = document.getElementById("telefon").value;
    // var data = document.getElementById("data").value;
    var kraj = document.getElementById("kraj").value;
    clearErrors();
    if (!mail || !haslo || !telefon || !data || !kraj) {
    displayError("Wypełnij wszystkie pola.");
    event.preventDefault();
    return;
    }       

    const emailField = document.getElementById('mail');
    emailField.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        emailField.setCustomValidity("Proszę podać poprawny adres e-mail.");
    }
    else{
        emailField.setCustomValidity("");
    }
    });


    if (!checkPasswordStrength(haslo)) {
        displayError("Hasło jest za słabe, hasło musi zawierać dużą literę, małą literę, cyfrę i znak specjalny.", "haslo");
        event.preventDefault();
        return;
        }
    function checkPasswordStrength(password) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
        }



    // function toggleEmail(){
    //         var st=document.querySelectorAll('button')[0].style;
    //         st.visibility=(st.visibility==='hidden')?'visible':'hidden';
    //         var
    //     }
       
    
    if (!validateBirthDate(data)) {
    displayError("Musisz mieć 18 lat żeby przejść dalej.", "data");
    event.preventDefault();
    return;
    }
    });   

    const phoneField = document.getElementById('telefon');
    phoneField.addEventListener('input', () => {
    const phoneRegex =  /^[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{9,9}$/;
    if (!phoneRegex.test(phoneField.value)) {
        phoneField.setCustomValidity("Proszę podać poprawny numer telefonu.");
    }
    else{
        phoneField.setCustomValidity("");
    }
}); 

    function clearErrors() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(error) {
    error.textContent = "";
    });
    }
    
    function displayError(message, fieldId) {
    var errorField = document.getElementById(fieldId + "Error");
    errorField.textContent = message;
    }
    });
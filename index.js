
document.getElementById('formContact').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const numero =document.getElementById('numero').value;

    alert(`Nom: ${nom}\nEmail: ${email}\nMessage: ${message}\nNumero: ${numero}`);

});

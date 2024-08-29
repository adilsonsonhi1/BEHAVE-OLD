// login.js

const loginForm = document.getElementById('loginForm');
const resetPasswordButton = document.getElementById('resetPasswordButton');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!firebase.apps.length) {
        console.log("Inicializando Firebase...");
        firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Redirect to conteudo.html after successful login
        window.location.replace("https://app.behave-academy.com/curso/ux-ui-design.html");
    })
    .catch((error) => {
        console.error(error.code, error.message);
        alert("Erro ao fazer login. Verifique suas credenciais.");
    });
});


// Adicionar evento de clique ao botão de redefinição de senha
resetPasswordButton.addEventListener('click', function() {
    // window.location.replace("recuperar-senha.html"); // Redireciona para a página de recuperação de senha
    window.location.replace("https://app.behave-academy.com/recuperar-senha"); /* apagar depois */
});



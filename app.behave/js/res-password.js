// recuperar-senha.js

// Traduz para português brasileiro a autenticação do Firebase
firebase.auth().languageCode = 'pt-BR'

const resetPasswordForm = document.getElementById('resetPasswordForm');

resetPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
        // Email de redefinição de senha enviado com sucesso
        alert("Um email para redefinição de senha foi enviado para o seu endereço de email.");
        window.location.replace("https://app.behave-academy.com"); // Redireciona de volta para a página de login após o envio do email
    })
    .catch(function(error) {
        // Ocorreu um erro ao enviar o email de redefinição de senha
        //console.error("Erro ao enviar email de redefinição de senha:", error);
        alert("Ocorreu um erro ao enviar o email de redefinição de senha. Por favor, tente novamente.");
    });
});

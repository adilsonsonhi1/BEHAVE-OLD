// conteudo.js

// Verificar se o usuário está autenticado
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        // Redirect to login.html if user is not logged in
        // window.location.replace("login.html");
        window.location.replace("https://app.behave-academy.com"); /* apagar depois */
    }
});

// Obter referência ao botão de logout
const logoutButton = document.getElementById('logoutButton');

// Adicionar evento de clique ao botão de logout
logoutButton.addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
        // Logout bem-sucedido, redirecionar para a página de login
        // window.location.replace("login.html");
        window.location.replace("https://app.behave-academy.com"); /* apagar depois */
    }).catch(function(error) {
        // Ocorreu um erro ao fazer logout
        console.error("Erro ao fazer logout:", error);
        alert("Ocorreu um erro ao fazer logout. Por favor, tente novamente.");
    });
});



// =======================================================================================

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const videoTitle = document.getElementById("video-title");
    const videoDescription = document.getElementById("video-description");

    video.removeAttribute("src");

    const videoLinks = document.querySelectorAll(".video-link"); // Seleciona todos os links de vídeo

    videoLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita a navegação padrão do link
            
            // Remover a classe "active-list" de todos os links de vídeo
            document.querySelectorAll(".video-link").forEach(function(videoLink) {
                videoLink.classList.remove("active-list");
            });

            // Adicionar a classe "active-list" ao link clicado
            link.classList.add("active-list");

            const clickedLink = event.currentTarget;
            const videoSource = clickedLink.querySelector(".video-title").getAttribute("data-src");
            const titleText = clickedLink.querySelector(".video-title").innerText;
            const descriptionText = clickedLink.querySelector(".list-small-description").innerText;
            video.src = videoSource;
            video.play();
            videoTitle.innerText = titleText;
            videoDescription.innerText = descriptionText;
        });
    });

    // Desabilitar o menu de contexto ao clicar com o botão direito do mouse
    video.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});


const divElement = document.getElementById('conteudo');
const botaoElement = document.getElementById('see-more-btn');
// const tabContentElement = document.querySelector('.tab-content');

botaoElement.addEventListener('click', function() {
  const alturaAtual = divElement.clientHeight;
  
  if (alturaAtual !== 0) {
    divElement.style.height = '0';
    botaoElement.textContent = 'Ver mais';
  } else {
    divElement.classList.remove('oculto');
    divElement.style.height = divElement.scrollHeight + 'px';
    botaoElement.textContent = 'Ver menos';
  }
});

// Adiciona um ouvinte de evento para capturar cliques fora da div
// document.addEventListener('click', function(event) {
//   if (!tabContentElement.contains(event.target) && divElement.clientHeight !== 0) {
//     divElement.style.height = '0';
//     botaoElement.textContent = 'Ver mais';
//   }
// });









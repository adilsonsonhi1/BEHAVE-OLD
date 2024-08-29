'use strict';

// PESQUISA ELEMENTOS EM (cursos.html)
// Função para atualizar o título com o número de conteúdos exibidos
function updateListTitle() {
  var itemList = document.getElementById('itemList');
  var visibleItems = itemList.querySelectorAll('.list-item:not([style*="display: none"])');
  var listTitle = document.getElementById('listTitle');
  listTitle.textContent = 'Todos os cursos (' + visibleItems.length + ')';
}

// Atualiza o título no início do programa
updateListTitle();

// Função para realizar a pesquisa
function searchItems() {
  var filter = document.getElementById('searchInput').value.trim().toUpperCase();
  var itemList = document.getElementById('itemList');
  var items = itemList.getElementsByClassName('list-item');
  var listContainer = document.getElementById('listContainer');
  var errorMessage = document.getElementById('errorMessage');
  var searchTagArea = document.getElementById('searchTagArea');
  var searchTag = document.getElementById('searchTag');
  
  if (errorMessage) {
      listContainer.removeChild(errorMessage);
  }
  
  var found = false;
  for (var i = 0; i < items.length; i++) {
      var txtValue = items[i].textContent || items[i].innerText;
      var tags = items[i].getAttribute('data-tags');
      
      if (tags) {
          tags = tags.toUpperCase().split(',');
          if (tags.some(tag => tag.includes(filter))) {
              items[i].style.display = '';
              found = true;
          } else {
              items[i].style.display = 'none';
          }
      } else {
          items[i].style.display = 'none';
      }
  }
  
  if (!found) {
      errorMessage = document.createElement('p');
      errorMessage.textContent = 'Nenhum resultado encontrado para: ' + filter;
      errorMessage.id = 'errorMessage';
      listContainer.appendChild(errorMessage);
  }
  
  searchTagArea.style.display = '';
  searchTag.textContent = filter;
  searchTagArea.scrollIntoView({ behavior: 'smooth' });
  
  // Atualizar o título da lista após a pesquisa
  updateListTitle();
}

// Função para limpar a tag de pesquisa e restaurar a lista completa
function clearSearchTag() {
  var itemList = document.getElementById('itemList');
  var items = itemList.getElementsByClassName('list-item');
  
  // Exibir todos os itens da lista
  for (var i = 0; i < items.length; i++) {
      items[i].style.display = '';
  }
  
  // Ocultar a área de tag de pesquisa
  var searchTagArea = document.getElementById('searchTagArea');
  searchTagArea.style.display = 'none';
  
  // Limpar o conteúdo da tag de pesquisa
  var searchTag = document.getElementById('searchTag');
  searchTag.textContent = '';
  
  // Remover a mensagem de erro, se existir
  var errorMessage = document.getElementById('errorMessage');
  if (errorMessage) {
      errorMessage.remove();
  }
  
  // Atualizar o título da lista para mostrar todos os itens
  updateListTitle();
}

// Adiciona o evento de submissão ao formulário para capturar o "ENTER"
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita a submissão padrão do formulário
  searchItems(); // Chama a função de pesquisa
});

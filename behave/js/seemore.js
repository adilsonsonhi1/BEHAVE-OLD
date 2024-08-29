'use strict';

const myDivElement = document.getElementById('my-conteudo');
const myButtonElement = document.getElementById('my-see-more-btn');

myButtonElement.addEventListener('click', function() {
  const currentHeight = myDivElement.clientHeight;

  if (currentHeight !== 0) {
    myDivElement.style.height = '0';
    myButtonElement.textContent = 'Ver mais';
  } else {
    myDivElement.classList.remove('my-oculto');
    myDivElement.style.height = myDivElement.scrollHeight + 'px';
    myButtonElement.textContent = 'Ver menos';
  }
});
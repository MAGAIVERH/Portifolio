const carousel = document.querySelector(".carousel");
const iconsContainer = document.querySelector(".icons-container");
let isSliding = false; // Variável para controlar se a animação de deslizamento está em andamento

function slideNext() {
  if (isSliding) return; // Se a animação já estiver em andamento, não faz nada

  isSliding = true; // Define a animação como em andamento

  const lastItem = carousel.lastElementChild; // Pega o último item
  carousel.style.transition = "none"; // Remove a transição para que a mudança seja instantânea
  carousel.prepend(lastItem); // Move o último item para o início
  const offset = lastItem.offsetWidth; // Obtém a largura do último item
  carousel.style.transform = `translateX(-${offset}px)`; // Desloca o carrossel para a esquerda

  // Força o navegador a aplicar a transformação antes de adicionar a transição
  setTimeout(() => {
    carousel.style.transition = "transform 0.5s ease"; // Adiciona a transição para criar o efeito suave
    carousel.style.transform = "translateX(0)"; // Retorna o carrossel à sua posição original
  }, 50); // Aguarda um curto período antes de adicionar a transição para garantir que funcione corretamente

  // Define um intervalo para resetar o sinalizador de animação após a conclusão da transição
  setTimeout(() => {
    isSliding = false; // Reset o sinalizador de animação
  }, 500); // Tempo da transição, ajuste conforme necessário
}

setInterval(slideNext, 2000); // Alterna automaticamente para a próxima imagem a cada 2 segundos

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.getElementById('prev-project');
  const nextButton = document.getElementById('next-project');
  const projects = document.querySelectorAll('.project');
  let currentProject = 0; // Índice do projeto atual

  // Verifica se a largura da tela é menor ou igual a 768px (versão mobile)
  if (window.innerWidth <= 768) {
      // Mostra o projeto atual e esconde os outros
      function showCurrentProject() {
          projects.forEach((project, index) => {
              project.style.display = index === currentProject ? 'block' : 'none';
          });
      }

      // Avança para o próximo projeto
      nextButton.addEventListener('click', function() {
          currentProject = (currentProject + 1) % projects.length;
          showCurrentProject();
      });

      // Retorna ao projeto anterior
      prevButton.addEventListener('click', function() {
          currentProject = (currentProject - 1 + projects.length) % projects.length;
          showCurrentProject();
      });

      showCurrentProject(); // Inicialmente, mostre o primeiro projeto

      // Verifica a largura da tela novamente quando a janela é redimensionada
      window.addEventListener('resize', function() {
          if (window.innerWidth > 768) {
              // Ocultar os botões de navegação ou fazer qualquer outra ação necessária
              prevButton.style.display = 'none';
              nextButton.style.display = 'none';
          } else {
              prevButton.style.display = 'block';
              nextButton.style.display = 'block';
          }
      });
  } else {
      // Se a tela for maior que 768px, oculte os botões de navegação
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
  }
});


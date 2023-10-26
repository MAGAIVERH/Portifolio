document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const profileContent = document.querySelector('.profile-content');
    const profileSinopse = document.querySelector('.profile-sinopse');

    function toggleProfile() {
        profileContent.classList.toggle('profile-visible');
        profileContent.classList.toggle('profile-hidden');
        profileSinopse.classList.toggle('profile-visible');
        profileSinopse.classList.toggle('profile-hidden');

        if (toggleButton.textContent === 'Sobre Mim') {
            toggleButton.textContent = 'Voltar';
        } else {
            toggleButton.textContent = 'Sobre Mim';
        }
    }

    if (window.innerWidth <= 768) {
        toggleButton.addEventListener('click', toggleProfile);
    } else {
        toggleButton.style.display = 'none'; // Esconda o botão em telas maiores que 768px
    }
});



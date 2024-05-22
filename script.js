document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const textToAdd = 'O que acontece em Vegas, fica em Vegas.';
    contentDiv.textContent = textToAdd;
})


const imagens = document.querySelectorAll('.img');
    
    // Itera sobre a lista de imagens e as imprime no console
    imagens.forEach((imagem, index) => {
        console.log(`Imagem ${index + 1}:`, imagem.src);
})

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Evento de clique no botão para alternar o modo de cores
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.addEventListener('click', toggleDarkMode);
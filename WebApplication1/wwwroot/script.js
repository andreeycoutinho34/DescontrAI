const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}
// Função para buscar dados do back-end ASP.NET
function buscarDadosDoBackend() {
    fetch('http://localhost:5145/Home/Index', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Exibe o resultado na tela
        const resultado = document.getElementById('resultado-backend');
        if (resultado) {
            resultado.textContent = data.mensagem;
        } else {
            alert(data.mensagem);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

// Exemplo: buscar dados ao carregar a página
window.onload = buscarDadosDoBackend;

// Exemplo de requisição para o back-end
function buscarDadosDoBackend() {
    fetch('http://localhost:5145/', { // Troque pela URL do seu back-end
        method: 'GET', // ou 'POST', 'PUT', etc.
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Manipule os dados recebidos do back-end aqui
        console.log(data)
    })
    .catch(error => {
        console.error('Erro:', error)
    })
}

// Chame a função quando quiser buscar dados
// buscarDadosDoBackend()
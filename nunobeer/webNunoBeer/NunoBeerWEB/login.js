import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import './firebase-config.js';

// Inicialize o Firebase Auth
const auth = getAuth();

// Manipular o envio do formulário
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Fazer login com email e senha
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert('Login realizado com sucesso!');
        console.log('Usuário logado:', userCredential.user);
        window.location.href = 'home.html'; // Redirecionar para a página inicial
    } catch (error) {
        console.error('Erro ao logar:', error);
        alert('Erro ao fazer login: ' + error.message);
    }
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config.js";

// Inicializando o app Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Capturando o formulário
const registerForm = document.getElementById("register-form");

// Escutando o evento de envio do formulário
registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Capturando os valores do formulário
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Criando o usuário no Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Conta criada com sucesso
            alert("Conta criada com sucesso! Você será redirecionado para a página de login.");
            window.location.href = "login.html"; // Redireciona para a página de login
        })
        .catch((error) => {
            // Tratamento de erros
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === "auth/email-already-in-use") {
                alert("Este email já está em uso. Tente outro.");
            } else if (errorCode === "auth/weak-password") {
                alert("A senha deve ter pelo menos 6 caracteres.");
            } else {
                alert(`Erro: ${errorMessage}`);
            }
        });
});
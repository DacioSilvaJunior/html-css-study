<?php
// Exemplo de dados de login (substitua com um banco de dados em uma aplicação real)
$usuarios = [
    "email" => "usuario@exemplo.com",
    "senha" => "senha123"
];

// Captura os dados do formulário
$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';

// Verifica as credenciais
if ($email === $usuarios['email'] && $senha === $usuarios['senha']) {
    echo "Login realizado com sucesso! Bem-vindo, " . htmlspecialchars($email) . ".";
} else {
    echo "Email ou senha incorretos.";
}
?>

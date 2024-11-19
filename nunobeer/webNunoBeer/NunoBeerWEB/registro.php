<?php
// Recebe os dados do formulário
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';
$confirmar_senha = $_POST['confirmar_senha'] ?? '';

// Valida se todos os campos estão preenchidos
if (empty($nome) || empty($email) || empty($senha) || empty($confirmar_senha)) {
    die("Por favor, preencha todos os campos.");
}

// Verifica se as senhas coincidem
if ($senha !== $confirmar_senha) {
    die("As senhas não coincidem. Tente novamente.");
}

// Simula o armazenamento (em uma aplicação real, isso seria salvo em um banco de dados)
$arquivo = 'usuarios.txt'; // Arquivo para armazenar os dados
$dados = "Nome: $nome, Email: $email, Senha: " . password_hash($senha, PASSWORD_DEFAULT) . "\n";

// Salva os dados no arquivo
file_put_contents($arquivo, $dados, FILE_APPEND);

echo "Conta criada com sucesso! Bem-vindo, " . htmlspecialchars($nome) . ".";
?>

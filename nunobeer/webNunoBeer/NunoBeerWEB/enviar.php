<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $celular = htmlspecialchars($_POST["celular"]);
    $quantidade = htmlspecialchars($_POST["quantidade"]);

    $to = "seuemail@exemplo.com"; // Substitua pelo seu email
    $subject = "Novo Pedido de Cerveja";
    $message = "Nome: $nome\nEmail: $email\nCelular: $celular\nQuantidade de Cervejas: $quantidade";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Pedido enviado com sucesso!";
    } else {
        echo "Desculpe, ocorreu um erro ao enviar seu pedido. Tente novamente.";
    }
}
?>

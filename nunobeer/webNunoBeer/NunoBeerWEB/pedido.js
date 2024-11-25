emailjs.init({
    publicKey: 'MZGd4MOmr92tMF4Wi',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

const pedidoForm = document.getElementById('pedido-form');

pedidoForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const celular = document.getElementById('celular').value;
    const localizacao = document.getElementById('localizacao').value;
    const quantidade = document.getElementById('quantidade').value;

    // Envio do pedido via EmailJS
    emailjs.send('service_e04qs6f', 'template_ajjonp7', {
        nome: nome,
        celular: celular,
        localizacao: localizacao,
        quantidade: quantidade
    },'MZGd4MOmr92tMF4Wi')
    .then(function(response) {
        console.log('Pedido enviado com sucesso:', response);
        alert('Seu pedido foi realizado com sucesso!');
        pedidoForm.reset(); // Limpa os campos do formulário
    })
    .catch(function(error) {
        console.error('Erro ao enviar o pedido:', error);
        alert(`Erro ao enviar o pedido. Tente novamente. Erro: ${error.text}`);
    });
});

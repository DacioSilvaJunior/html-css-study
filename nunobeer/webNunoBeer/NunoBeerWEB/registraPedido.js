import { getFirestore, collection, addDoc } from "firebase/firestore";
import './firebase-config.js';

// Inicialize o Firestore
const db = getFirestore(app);

// Função para adicionar pedido
async function adicionarPedido(nome, telefone, email, quantidade) {
    try {
        await addDoc(collection(db, "pedidos"), {
            nome,
            telefone,
            email,
            quantidade,
            data_pedido: new Date()
        });
        console.log("Pedido registrado com sucesso!");
    } catch (error) {
        console.error("Erro ao registrar pedido:", error);
    }
}

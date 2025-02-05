import express from 'express';
import livroController from './controller/livroController.js';
import vendaController from './controller/vendaController.js'; // Importando o controller de vendas

export default function adicionarRotas(servidor) {
    servidor.use(livroController);
    servidor.use(vendaController); // Adicionando rotas de venda
    servidor.use('/storage/capaLivro', express.static('./storage/capaLivro'));
}

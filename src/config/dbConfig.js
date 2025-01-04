import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(NEW_CHAVE_DB_CONEXAO) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(NEW_CHAVE_DB_CONEXAO);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro.message);
        throw erro; // Lançar o erro em vez de encerrar o processo
    }
}
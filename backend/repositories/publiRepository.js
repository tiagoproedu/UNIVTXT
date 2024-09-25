const sql = require('mssql');
const config = require('../bd/config');

class PubliRepository {
    async create(publi) {
        const pool = await sql.connect(config);
        try{
            const request = pool.request();
            await request
                .input('usuario_id', sql.Int, publi.usuario_id)
                .input('conteudo', sql.Text, publi.conteudo)
                .input('data_criacao', sql.DateTime, publi.data_criacao)
                .query('INSERT INTO publicacoes(usuario_id, conteudo, data_criacao) VALUES (@usuario_id, @conteudo, @data_criacao);');
                console.log('Publicação postada!');
        } catch (err) {
            console.error('Erro ao criar publicação: ', err);
            throw err;
        } finally {
            try {
                console.log('Operação finalizada!');
                await pool.close();
            } catch (err) {
                console.error('Erro ao fechar a conexão: ', err);
            }
        }
    }
    async delete(publi) {
        const pool = await sql.connect(config);
        try{
            const request = pool.request();
            await request
                .input('id', sql.Int, publi.id)
                .query('DELETE FROM publicacoes WHERE id=@id');
            console.log('Publicação deletada com sucesso!');
        } catch (err){
            console.error('Erro ao deletar publicação: ', err);
            throw err;
        } finally {
            try {
                console.log('Operação finalizada!');
                await pool.close();
            } catch (err){
                console.error('Erro ao fechar a conexão: ', err);
            }
        }
    }
}

module.exports = PubliRepository;
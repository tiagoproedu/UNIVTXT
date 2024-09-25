const sql = require('mssql');
const config = require('../bd/config');

class LikeRepository{
    async create(like){
        const pool = await sql.connect(config);
        try{
            const request = pool.request();
            await request
                .input('usuario_id', sql.Int, like.usuario_id)
                .input('publicacao_id', sql.Int, like.publicacao_id)
                .input('data_curtida', sql.DateTime, like.data_curtida)
                .query('INSERT INTO curtidas(usuario_id, publicacao_id, data_curtida) VALUES (@usuario_id, @publicacao_id, @data_curtida);');
            console.log('Curtida criada com sucesso!')
        } catch (err) {
            console.error('Erro ao criar curtida: ', err);
            throw err;
        } finally {
            try{
                console.log('Operação finalizada!');
                pool.close();
            } catch (err) {
                console.error('Erro ao finalizar operação: ', err);
            }
        }
    }
    async delete(like) {
        const pool = await sql.connect(config);
        try {
            const request = pool.request();
            await request
                .input('id', sql.Int, like.id)
                .query('DELETE FROM curtidas WHERE id=@id')
            console.log('Curtida removida com sucesso!');
        } catch (err) {
            console.error('Erro ao remover curtida: ', err);
            throw err;
        } finally {
            try {
                console.log('Opereção finalizada!');
                pool.close();
            } catch (err) {
                console.error('Erro ao finalizar operação: ', err);
            }
        }
    }
}

module.exports = LikeRepository;
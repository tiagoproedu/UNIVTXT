const sql = require('mssql');
const config = require('../bd/config');

class UserRepository {
    /*async connect(){
        try{
            const connect = await sql.connect(config);
        }
        catch(err){
            console.error('Error ao iniciar o servidor: ', err);
            throw err;
        }
    }*/
   async create(user) {
        const pool = await sql.connect(config);
        try {
            const request = pool.request();
            await request
                .input('nome', sql.VarChar, user.nome)
                .input('email', sql.VarChar, user.email)
                .input('senha', sql.VarChar, user.senha)
                .input('data_nasc', sql.Date, user.data_nasc)
                .input('bio', sql.Text, user.bio)
                .query('INSERT INTO usuarios(nome, email, senha, data_nasc, bio) VALUES (@nome, @email, @senha, @data_nasc, @bio);');
            console.log("Usuario criado com sucesso!");
        } catch (err) {
            console.error('Error ao criar usuário: ', err);
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
    async delete(user) {
        const pool = await sql.connect(config);
        try{
            const request = pool.request();
            await request
                .input('email', sql.VarChar, user.email)
                .query('DELETE FROM usuarios WHERE email=@email');
            console.log('Usuario deletado com sucesso!');
        } catch (err) {
            console.error('Erro ao deletar usuario:', err);
            throw err;
        } finally {
            try {
                console.log('Operação finalizada!');
                await pool.close();
            } catch (err) {
                console.error('Erro ao fechar conexão: ', err);
            }
        }
    }
}

module.exports = UserRepository;
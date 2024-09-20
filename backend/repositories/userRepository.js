const sql = require('mssql');
const config = require('../bd/config');

class UserRepository {
    async create(user){
        try {
            const connect = await sql.connect(config);
            const request = await connect.request()
                .input('nome', sql.VarChar, user.nome)
                .input('email', sql.VarChar, user.email)
                .input('senha', sql.VarChar, user.senha)
                .input('data_nasc', sql.Date, user.data_nasc)
                .input('bio', sql.Text, user.bio)
                .query('INSERT INTO usuarios(nome, email, senha, data_nasc, bio) VALUES (@nome, @email, @senha, @data_nasc, @bio);'); 
        } catch (err) {
            console.error('Error ao criar usuário: ', err);
            throw err;
        }
    }
}

module.exports = UserRepository;
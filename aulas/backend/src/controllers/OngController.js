const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; //recuperando os dados do usuario

        const id = crypto.randomBytes(4).toString('HEX'); //criando a id automatico
    
        //inserindo as infos na tabela ong do db, que criamos no migration. Obs: o migration nmos permite criar a tabela via JS, depois ele 'migra' para sql
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        
        //so precisamos retornar o id para o usuario pois é isso que ele precisa para se conectar
        return response.json({
            id
        });

    }
};
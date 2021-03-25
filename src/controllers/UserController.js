const knex = require('../database/connection.js');

module.exports = {
    async create(request, response) {
        const {
            name,
            email,
            password,
    
        } = request.body;
    
    
        const ids = await knex('users').insert({
            name,
            email,
            password,
            avatar: 'image-fake'
        })

        const userID = ids[0];
    
        return response.json({ userID });
    },
    async list(request,response) {
        const users = await knex('users').select('*')

        return response.json(users)
    }
}
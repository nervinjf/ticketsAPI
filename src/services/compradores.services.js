const { Compradores } = require('../models');
const EnvioDeTickets = require('./function/compradores/EnvioDeTickets');
const generateTickets = require('./function/compradores/generateTickets');

class CompradoresServices {
    static async create(compradores){
        try {
            const result = await Compradores.create(compradores)

            const {cantidadTickets, userId, sorteoId} = result

            if(result){
                const tickets = await generateTickets(cantidadTickets, userId, sorteoId)
                await EnvioDeTickets(tickets, cantidadTickets)
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll(){
        try {
            const result = await Compradores.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = CompradoresServices;
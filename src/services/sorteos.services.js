const uploadToFTP = require('../function/functionFTP');
const { Sorteos } = require('../models');
const available_tickets = require('./function/AvailableTickets/AvailableTickets')

class SorteosServices {
    static async create(user){
        try {
            const result = await Sorteos.create(user)
            const {id} = result
            if(result){
                available_tickets(id);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll(){
        try {
            const result = await Sorteos.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async uploadToFTP(file){
        try {
            
            const link = uploadToFTP(file)
            return link;
        } catch (error) {
            throw error
        }
    }
    
}

module.exports = SorteosServices;
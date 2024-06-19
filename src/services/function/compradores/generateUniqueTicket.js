const { AvailableTicket, Compradores, Sold } = require('../../../models');
const sequelize = require('../../../utils/database');

const generateUniqueTicket = async (userId, sorteoId) => {

    const transaction = await sequelize.transaction();

    try {
        
        const availableTicket = await AvailableTicket.findOne({
            where: {sorteoId: sorteoId},
            order: sequelize.random(),
            transaction
        })

        console.log(availableTicket.id)

        if(!availableTicket){
            throw new Error('No quedan tickets disponibles');
        }

        // Mueve el ticket a la tabla de compras

        const data = {"userId": userId, "sorteoId": sorteoId, "numeroTickets": availableTicket.ticket}

        const newTicket = await Sold.create(data, {transaction});


        // Elimina el ticket de la tabla de AvailableTicket

        await AvailableTicket.destroy({where: {id: availableTicket.id}}, {transaction});

        await transaction.commit();
        return newTicket.numeroTickets

    } catch (error) {
        await transaction.rollback();
        throw error;  
    }
}

module.exports= generateUniqueTicket;
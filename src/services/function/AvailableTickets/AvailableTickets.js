const { AvailableTicket } = require("../../../models");

const available_tickets = async (id) => {
    try {
        console.log(id)
        const tickets = [];
        for (let i = 1; i <= 9999; i++) {
            const ticketNumber = i.toString().padStart(4, '0');
            tickets.push({ ticketNumber: i, sorteoId: id, ticket: ticketNumber });
        }
        console.log(tickets)

        await AvailableTicket.bulkCreate(tickets);
        console.log('Tickets pre-generados con éxito.');

    } catch (error) {
        console.error('Error al pre-generar los tickets:', error);
    }

}

module.exports = available_tickets;
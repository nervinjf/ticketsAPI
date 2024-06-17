const generateUniqueTicket = require("./generateUniqueTicket");


const generateTickets = async (count, userId, sorteoId) => {

    const tickets = [];

    for (let i = 0; i < count; i++) {
        try {
            const ticket = await generateUniqueTicket(userId, sorteoId);
            tickets.push(ticket)
        } catch (error) {
            console.error(`Error generando el ticket ${i + 1}: ${error.message}`);
        }

    }
    return tickets
}

module.exports = generateTickets;
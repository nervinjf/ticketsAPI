const transporter = require("../../../utils/mailer");

const EnvioDeTickets = async (tickets, cantidadTickets) => {

    await transporter.sendMail({
        from: '<no-reply@lotoeureka.com>',
        to: '<nervinjflores@gmail.com>',
        subject: `Recibo compra tickets`,
        text: `Buenas tardes usted compro ${cantidadTickets} tickets y tienen estos numeros ${tickets}`,
        // attachments: [
        //     {
        //         filename: 'recibo.pdf',
        //         content: pdf, // Adjunta el PDF generado
        //     },
        // ],
    });

    return console.log('envio efectivo');
}

module.exports = EnvioDeTickets;
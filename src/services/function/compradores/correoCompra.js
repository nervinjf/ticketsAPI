const transporter = require("../../../utils/mailer");

const correoCompra = async () => {

    await transporter.sendMail({
        from: '<no-reply@lotoeureka.com>',
        to: '<carlargel@gmail.com>',
        subject: `Gracias por su compra`,
        text: `gracias por comprar los tickets, estaremos validando el pago en un lapso de 24 horas! pronto recibira sus tickets por correo`,
        // attachments: [
        //     {
        //         filename: 'recibo.pdf',
        //         content: pdf, // Adjunta el PDF generado
        //     },
        // ],
    });

    console.log("correo de compra enviado")
}

module.exports = correoCompra;

const express = require('express');
const multer = require('multer');
const ftp = require('basic-ftp');
const { PassThrough } = require('stream');
require("dotenv").config();

// Configurar Multer para guardar los archivos temporalmente en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configurar el cliente FTP
async function uploadToFTP(file) {
  const client = new ftp.Client();
  client.ftp.verbose = true;

    console.log(process.env.FTP_SERVER)
    console.log(process.env.FTP_USER)
    console.log(process.env.FTP_PASS)

  try {
    await client.access({
      host: process.env.FTP_SERVER,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: false // true para SFTP, false para FTP
    });

    // await client.ensureDir("/public_html/sorteos/flayer");
     // Crear un stream a partir del buffer
     const stream = new PassThrough();
     stream.end(file.buffer);
 
     await client.uploadFrom(stream, `/${file.originalname}`);
    
    return `https://lotoeureka.com/sorteos/flayer/${file.originalname}`;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.close();
  }
}

module.exports = uploadToFTP;
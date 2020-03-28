const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => {
    mongoose.connect(dbURL, {useNewUrlParser: true})
    .then(() => console.log(`Mongo conectado en ${dbURL}`))
    .catch(err => console.log(`La conexión tuvo el error ${err}`))

    process.on('SIGINT', () => {
        mongoose.Connection.close (() => {
            console.log(`Mongo está desconectado`);
            process.exit(0);
        })
    })
}
const mongoose = require('mongoose');

const dbconfig = 'mongodb+srv://admin:admin@cluster0.iswh0.mongodb.net/annotations?retryWrites=true&w=majority';


const connection = mongoose.connect(dbconfig, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = connection;

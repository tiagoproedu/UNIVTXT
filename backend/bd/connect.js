const { config } = require('./config')

let Connection = require('tedious').Connection;

let connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    connection.connect();


const config = {
    server: 'FIBBONOTE',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'univtxt', //update me
            password: 'tiagomuitolindo'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'UNIVTXT'  //update me
    }
};

module.exports = {config};
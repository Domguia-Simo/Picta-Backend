const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

function config(app){
    app.use(bodyParser.urlencoded({'extended':false}));
    app.use(bodyParser.json());
    app.use(cors())
    app.use(express.static(__dirname+'/'))

        return app
}

module.exports = config
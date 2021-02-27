const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
var mongo = require('mongodb');
require('dotenv').config();

//MiddleWares
app.use(cors());
app.use(express.json());

//MongoDb Methods
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_DB_URL;

//Particle connection
var Particle = require('particle-api-js');
var particle = new Particle();
var token = process.env.PARTICLE_TOKEN;

particle
    .login({
        username: process.env.PARTICLE_EMAIL,
        password: process.env.PARTICLE_PASSWORD,
    })
    .then(
        function (data) {
            console.log('API Login Sucess', data.body.access_token);
        },
        function (err) {
            console.log('Could not log in.', err);
        }
    );

particle
    .getVariable({
        deviceId: process.env.PHOTON_DEVICE_ID,
        name: normal - doctor,
        auth: token,
    })
    .then(
        function (data) {
            MongoDbUpdate(data, 'IotData');
            res.send(data);
            console.log('Device variable retrieved successfully:', data);
        },
        function (err) {
            console.log('An error occurred while getting attrs:', err);
        }
    );
/*
var devicesPr = particle.listDevices({ auth: process.env.PARTICLE_TOKEN });
devicesPr.then(
    function (devices) {
        console.log('Devices: ', devices);
    },
    function (err) {
        console.log('List devices call failed: ', err);
    }
);
*/

function MongoDbUpdate(Data, collection) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db('HackDB');
            var myquery = { _id: 1 };
            var newvalues = { $set: { _id: 1, PhotonData: Data } };
            console.log(Data);
            dbo.collection(collection).updateOne(
                myquery,
                newvalues,
                function (err, res) {
                    if (err) throw err;
                    console.log('1 document updated');
                    db.close();
                }
            );
        }
    );
}

function MongoDbQuery(collection) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db('HackDB');
            var myquery = { _id: 1 };
            dbo.collection(collection)
                .find(myquery)
                .toArray(function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    db.close();
                });
        }
    );
}

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/photonToggle', function (req, res) {
    particle
        .signalDevice({
            deviceId: process.env.PHOTON_DEVICE_ID,
            signal: false,
            auth: token,
        })
        .then(
            function (data) {
                console.log('The LED is back to normal:', data);
            },
            function (err) {
                console.log('Error sending a signal to the device:', err);
            }
        );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

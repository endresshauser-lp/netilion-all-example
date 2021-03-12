require('dotenv').config()
const CNetilionAPI = require('./CNetilionAPI.js');

const apiClient = new CNetilionAPI(process.env.USER, process.env.PASS);

apiClient.AssetAPI.getAssets()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });



var axios = require('axios');
var express = require('express');
var data = '{\r\n    "ksql": "DESCRIBE USERS EXTENDED;"\r\n}';

var router = express.Router();

router.get(“/”, function(req, res, next) {
    res.send(“API is working properly”);
});

module.exports = router;

var config = {
  method: 'post',
  url: 'https://pksqlc-w6265.us-east-2.aws.confluent.cloud:443/ksql',
  headers: { 
    'Authorization': 'Basic RlpTMzRMWk01R0ZDS0pCNzp0cmZscjE2OW9RVFFqTTVFUk5tOXdiUGZFbE93RktrZ1ZLZUswQjdwZURNYm1pcGF1MjlpQVppV0lUT3R1ZENN', 
    'Content-Type': 'text/plain'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
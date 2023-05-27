/*
Copyright 2019-Present Sonatype Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());


/*****************/
// ENVIRONMENT VARIABLES
const PORT = 3000
/*****************/


// Listener
app.post('/sonatypeiq', function (req, res) {
    var data = req.body;
    triggerAPIRequest(data, res)
});


async function triggerAPIRequest(config, res){
    let results = {}
    await axios.request(config).then((response) => {
        // console.log(JSON.stringify(response.data));
        results = response.data
    }).catch((error) => {
        console.log(error);
        results = error
    });

    //Check if thio
    res.send(results)
    // return results
  
}


// Test Function
// testAPIMessage()
async function testAPIMessage(){
    const token = `admin:admin!23`;
    const encodedToken = Buffer.from(token).toString('base64');
    // console.log(encodedToken)

    let exampleBody = {
        method: 'get',
        url: 'http://localhost:8070/api/v2/applications',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic '+encodedToken
        },
        // data: {}
    }
    
    let results = await triggerAPIRequest(exampleBody, false)
    console.log(results)
}


app.listen(PORT || 3000);
console.log("Running on http://localhost:" + PORT + "/")

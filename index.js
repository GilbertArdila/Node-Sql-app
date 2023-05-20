const express = require('express');
const cors = require('cors');

const routerApi = require('./src/routes');
const app = express();
const port = 3000;

//to return json
app.use(express.json());

//to cors access
const whitelist = ['http://localhost:8080','https://mydomain.com','http://localhost:3000'];
const options = {
  origin: (origin,callback) => {
    if(whitelist.includes(origin) || !origin ){
      callback(null,true);
    }else{
      callback(new Error('Access not allowed'));
    }
  }
}
app.use(cors(options));

routerApi(app);

app.listen(port, ()=>{

});

const express=require('express');
const port=1109
const cors=require('cors');
const app= express();
const userSchemadata=require("./schema/userdata")

app.use(express.json());
app.use(cors());

require("./database/connect")

// app.use('/',userSchemadata)

app.post('/data',(req,res) => {
    console.log(req.body)
    userSchemadata.insertMany(req.body)
    res.send("done")
})

app.listen(port,()=>
  console.log("Listening on port: " + port)
)
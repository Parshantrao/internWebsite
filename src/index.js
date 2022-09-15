const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const route = require("./routes/route")

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect(
    "mongodb+srv://Parshant_rao:C4fIOvHGi74DVINv@newcluster.squkrr6.mongodb.net/InternGroup43",
    {
        useNewUrlParser:true
    }
)
.then(()=>console.log("MongoDB is connected"))
.catch((error)=>console.log(error))

app.use("/",route)

app.listen(process.env.PORT || 3000 , function(){
    console.log("Express app running on port " + (process.env.PORT || 3000))
})
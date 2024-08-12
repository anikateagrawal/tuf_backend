const express=require("express")
const { default: mongoose } = require("mongoose")
const tuf=require("./models/tuf")
const app=express()
const port=4000
const seed=require("./seed")
const cors=require("cors");


app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    const banner=await tuf.find();
    res.json(banner[0]);
});

app.put("/",async(req,res)=>{
    const banner=req.body;
    const data=await tuf.findByIdAndUpdate(banner.id,banner);
    console.log("updated");
    res.status(200).send("success");
})

mongoose.connect('mongodb+srv://Anikate7316ag:Anikate%4025@cluster0.ofjnmbo.mongodb.net/tuf').then(()=>{console.log("db connected");seed()}).catch((e)=>console.log(e));




app.listen(port,()=>console.log("server is running on port "+port))
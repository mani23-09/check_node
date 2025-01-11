const { MongoClient }=require('mongodb');
var app=require('express')();
var dbname="court";
var tabname="tax";
var url="mongodb+srv://mani2309:mani2309@vtcluster.oeavm.mongodb.net/";
const client=new MongoClient(url,{useUnifiedTopology:true});
app.get('/render',async(req,res)=>{
    try{
        await client.connect();
        const db= client.db(dbname);
        const collect=db.collection(tabname);
        var result=await collect.find().toArray();
        res.send(result);
    }
    catch(err){
        res.send(err);
    }
    finally{
        await client.close();
    }
})
module.exports=app;
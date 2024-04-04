import express from 'express';

const app = express();

// GET request to read and fetch
// PUT request to update
// POST request to insert data
// DELETE request
app.use(express.json());
app.post("/post",(req,res,next)=>{
  console.log(req.body);
  return res.send("posted");
});

app.listen(5000,()=>console.log("server open"));

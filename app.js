var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
//   res.header("Access-Control-Expose-Headers","Authorization")
// res.header("Access-Control-Expose-Headers","X-Auth-Token")
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node APP Listening on ${port}!`));
let baseURL="https://repo-8qu2.onrender.com/studentServer";

let axios=require("axios");


app.get("/testServer/getToken", async function(req,res){
  try {
    let response=await axios.get(baseURL+"/getToken");
    console.log(response.data);
    res.send(""+response.data)
  } catch (error) {
    if(error.response){
      let {status,statusText}=error.response;
      console.log(status,statusText);
      res.status(status).send(statusText);
  }
  else {                 
      res.status(404).send(error)
  }
  }

})


app.get("/testServer/students",async function(req,res){
try {
  let token=req.header("authorization");
  let response=await  axios.get(baseURL+"/students",{headers :{authorization:token}})
  console.log(response.data);
  let json={method:req.method,url:req.url,body:req.body,data:response.data}
  res.send(json);
} catch (error) {
  if(error.response){
    let {status,statusText}=error.response;
    console.log(status,statusText);
    res.status(status).send(statusText);
}
else {                 
    res.status(404).send(error)
}
}
})

app.get("/testServer/students/:id",async function(req,res){
  try {
    let {id}=req.params
    let token=req.header("authorization");
    let response=await  axios.get(`${baseURL}/students/${id}`,{headers :{authorization:token}})
    console.log(response.data);
    let json={method:req.method,url:req.url,body:req.body,data:response.data}
    res.send(json);
  } catch (error) {
    if(error.response){
      let {status,statusText}=error.response;
      console.log(status,statusText);
      res.status(status).send(statusText);
  }
  else {                 
      res.status(404).send(error)
  }
  }
  })

  app.get("/testServer/students/course/:name",async function(req,res){
    try {
      let {name}=req.params
      let token=req.header("authorization");
      let response=await  axios.get(`${baseURL}/students/course/${name}`,{headers :{authorization:token}})
      console.log(response.data);
      let json={method:req.method,url:req.url,body:req.body,data:response.data}
      res.send(json);
    } catch (error) {
      if(error.response){
        let {status,statusText}=error.response;
        console.log(status,statusText);
        res.status(status).send(statusText);
    }
    else {                 
        res.status(404).send(error)
    }
    }
    })
    app.post("/testServer/students",async function(req,res){
      try {
        let body=req.body;
        let token=req.header("authorization");
        let response=await  axios.post(baseURL+"/students",body,{headers :{authorization:token}})
        console.log(response.data);
        let json={method:req.method,url:req.url,body:req.body,data:response.data}
        res.send(json);
      } catch (error) {
        if(error.response){
          let {status,statusText}=error.response;
          console.log(status,statusText);
          res.status(status).send(statusText);
      }
      else {                 
          res.status(404).send(error)
      }
      }
      })


    app.put("/testServer/students/:id",async function(req,res){
      try {
        let {id}=req.params
        let body=req.body;
        let token=req.header("authorization");
        let response=await  axios.put(`${baseURL}/students/${id}`,body,{headers :{authorization:token}})
        console.log(response.data);
        let json={method:req.method,url:req.url,body:req.body,data:response.data}
        res.send(json);
      } catch (error) {
        if(error.response){
          let {status,statusText}=error.response;
          console.log(status,statusText);
          res.status(status).send(statusText);
      }
      else {                 
          res.status(404).send(error)
      }
      }
      })


      app.delete("/testServer/students/:id",async function(req,res){
        try {
          let {id}=req.params
   
          let token=req.header("authorization");
          let response=await  axios.delete(`${baseURL}/students/${id}`,{headers :{authorization:token}})
          console.log(response.data);
          let json={method:req.method,url:req.url,body:req.body,data:response.data}
          res.send(json);
        } catch (error) {
          if(error.response){
            let {status,statusText}=error.response;
            console.log(status,statusText);
            res.status(status).send(statusText);
        }
        else {                 
            res.status(404).send(error)
        }
        }
        })




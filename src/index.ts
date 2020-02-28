//es6写法
// import express from "express";

// const app= express();

// app.get('/',(req,res)=>{
//     res.send("hello,I'm Carfield")
// })
// app.listen(5000,()=>{
//     console.log('Server running,port:5000...');
// })


//ts写法，明显的类型注解,改改参数 感受下ts带来的好处
import express,{Application,Request,Response,NextFunction  } from "express";


const add=(a:number,b:number):number=>a+b

const app:Application=express();
app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    console.log(add(5,5));   
    res.send("hello,I'm Carfield")
})
app.listen(5000,()=>{
    console.log('Server running,port:5000...');
})
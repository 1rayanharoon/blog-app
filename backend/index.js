import express from 'express';


const app=express();

const port = 5000;

app.listen(PORT, ()=> console.log("Server is running on port ${PORT}"))
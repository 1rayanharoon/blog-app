import express from 'express';

import dotenv from "dotenv";

import Connection from "./databse/db.js";

dotenv.config();


const app=express();

const port = 8000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`)) 

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
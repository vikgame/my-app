import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "antd/dist/antd.min.css";
import { Result } from 'antd';
//const cors = require("cors");
//require ("./DB/config");
//const User = require('./DB/User');
//App.use(express.json());
//App.use(cors());
//App.post("/register", async (req,resp)=>{
  //  let user = new User(req.body);
  //   let result = await user.save();
   // resp.send(result);
//})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


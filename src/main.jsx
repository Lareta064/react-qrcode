import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// import {Layout} from './Layout';
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import QrCodeScanner from "./components/QrCodeScanner/QrScanner";
import "./style.css";
import { Layout } from './Layout';



ReactDOM.createRoot(document.getElementById("root")).render(

   <BrowserRouter>
      <Layout />
    </BrowserRouter>

);

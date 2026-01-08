import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";

// import {Layout} from './Layout';
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import QrCodeScanner from "./components/QrCodeScanner/QrScanner";
import "./style.scss";
import { Layout } from './Layout';



ReactDOM.createRoot(document.getElementById("root")).render(

   <HashRouter >
      <Layout />
    </HashRouter>

);

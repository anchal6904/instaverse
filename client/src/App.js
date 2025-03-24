import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Layout } from 'antd';
import Home from './components/Home';
import AuthForm from "./components/Authform/AuthForm.js";
import styles from "./Styles";
import './index.css';
import Appbar from "./components/appbar/appbar.js";

const {Footer}=Layout;

const App=()=>{
  return (
    <BrowserRouter>
      <Layout style={styles.layout}>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authform" element={<AuthForm/>}/>
        </Routes>
        <Footer style={styles.footer}>2024 Instaverse</Footer>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
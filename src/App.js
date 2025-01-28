import React from "react";
import { Layout, Typography,Image } from 'antd';
import Home from './components/Home';
import Logo from './images/Instaverse.png';
import styles from "./Styles";
import './index.css';

const {Title}=Typography;
const {Header, Footer}=Layout;

const App=()=>{
  return(
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Image style={styles.image} src={Logo} width="45" preview={false}/>&nbsp;
        <Title style={styles.title}>Instaverse</Title>
      </Header>
      <Home/>
      <Footer style={styles.footer}>2024 Instaverse</Footer>
    </Layout>
  )
}
export default App;
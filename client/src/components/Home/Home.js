import React from "react";
import { useEffect,useState } from "react";
import {useDispatch} from "react-redux";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import { Layout } from "antd";
import styles from "./Styles";
import {getStories} from '../../actions/stories.js';


const {Sider,Content}=Layout;

const Home=()=>{
    const [selectedId,setSelectedId]=useState(null);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getStories());
    },[dispatch]);
    return(
        <Layout>
            <Sider style={styles.sider} width={400}>
                <StoryForm selectedId={selectedId} setSelectedId={setSelectedId}/>
            </Sider>
            <Content style={styles.content}>
                <StoryList setSelectedId={setSelectedId}/>
            </Content>
        </Layout>
    )
}
export default Home;

import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import { Layout } from "antd";
import styles from "./Styles";
import {getStories} from '../../actions/stories.js';


const {Sider,Content}=Layout;

const Home=()=>{
    const dispatch=useDispatch();
    useEffect=(()=>{
        dispatch(getStories());
    },[dispatch]);
    return(
        <Layout>
            <Sider style={styles.sider} width={400}>
                <StoryForm/>
            </Sider>
            <Content style={styles.content}>
                <StoryList/>
            </Content>
        </Layout>
    )
}
export default Home;

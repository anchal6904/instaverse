import React from 'react'
import {Row} from 'antd';
import Story from '../Story';
import { useSelector } from 'react-redux';

function StoryList() {
  const stories=useSelector((state)=>state.stories);
  console.log(stories)
  return (
    <Row gutter={[48,32]}>
        <Story/>
        <Story/>
    </Row>
  )
}

export default StoryList

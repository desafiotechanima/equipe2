import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';
import {DisplayNodeHeader, DisplayNodeBody} from './NodeDisplay';


const StartNode = ({ data }) => {
  return (
    <>
        <div 
        style={{width:60}}
        className="blockelem noselect block botInput">
            <DisplayNodeHeader data={data}></DisplayNodeHeader>
            <DisplayNodeBody data={data}></DisplayNodeBody>
            <Handle type="source" position="right" style={{ top: '50%', borderRadius: 2 }} />
        </div>
    </>
  );
};

export default memo(StartNode);
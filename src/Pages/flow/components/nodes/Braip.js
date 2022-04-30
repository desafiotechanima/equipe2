import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';
import {DisplayNodeHeader, DisplayNodeBody} from './NodeDisplay';


const IntegraçãoNode = ({ data }) => {
  return (
    <>
        <div 
        style={{width:97}}
        className="blockelem noselect block botInput">
            <DisplayNodeHeader data={data}></DisplayNodeHeader>
            <DisplayNodeBody data={data}></DisplayNodeBody>
            <Handle type="source" position="right" style={{ top: '50%', borderRadius: 1 }} />
        </div>
    </>
  );
};

export default memo(IntegraçãoNode);
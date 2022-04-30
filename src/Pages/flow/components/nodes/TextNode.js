import React, { memo } from 'react';


import { Handle } from 'react-flow-renderer';
import {DisplayNodeBody} from './NodeDisplay';


const TextNode = ({ data }) => {
  return (
    
        <div className="blockelem noselect block botInput">
           <h6>Enviar mensagem </h6> 
            <DisplayNodeBody data={data}></DisplayNodeBody>
            <Handle type="target" id="d" position="left" style={{ top: '20%', borderRadius: 0 }} />
            <Handle type="source" position="right" style={{ top: '50%', borderRadius: 2 }} />                                            
        </div>
    
  );
};

export default memo(TextNode);
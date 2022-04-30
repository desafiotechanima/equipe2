import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';
import {DisplayNodeBody} from './NodeDisplay';


const MediaNode = ({ data }) => {
  let errorClass='';
  if((data.subtype==='multimedia'&&(data.mediaUrl!==""))||(data.subtype==='suggestionchip'&&(!data.rowChip||data.rowChip.length<0||(data.rowChip[0].text===''||data.rowChip[0].description==='')))){
    errorClass='red';
  }
  return (
    <>
        <div className={`blockelem noselect block botInput ${errorClass}`}>
            <h6>Enviar imagem</h6>
            <DisplayNodeBody data={data}></DisplayNodeBody>
            <Handle type="source" id="b" position="right" style={{ borderRadius: 0 }} />
            <Handle type="target" id="d" position="left" style={{ top: '50%', borderRadius: 0 }} />
        </div>
    </>
  );
};

export default memo(MediaNode);
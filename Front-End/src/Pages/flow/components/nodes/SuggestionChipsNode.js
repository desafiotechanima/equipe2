import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';
import { DisplayNodeBody} from './NodeDisplay';


const SuggestionChipsNode = ({ data }) => {
  let errorClass='';
  if((data.subtype==='multimedia'&&(data.mediaUrl!==""))||(data.subtype==='suggestionchip'&&(!data.rowChip||data.rowChip.length<0||(data.rowChip[0].text===''||data.rowChip[0].description==='')))){
    errorClass='red';
  }
  return (
    <>
        <div className={`blockelem noselect block botInput ${errorClass}`}>
            <h6>Clipes de sugestão:</h6>
            <DisplayNodeBody data={data}></DisplayNodeBody>
           
            <Handle type="target" id="a" position="left" style={{ top: '50%', borderRadius: 0 }} />
            
            
              <Handle 
            type="source" id="b" 
            position="bottom" 
            style={{ borderRadius: 5 , marginLeft: 2}} />
            

            <Handle type="source" id="c" 
            position="bottom" 
            style={{ borderRadius: 5 , marginLeft: 12}} />

            <Handle type="source" id="d" 
            position="bottom" 
            style={{ borderRadius: 5 , marginLeft: 20}} />

            <Handle type="source" id="e"
             position="bottom" 
             style={{ borderRadius: 5 , marginLeft: 30}} />
        </div>
    </>
  );
};

export default memo(SuggestionChipsNode);
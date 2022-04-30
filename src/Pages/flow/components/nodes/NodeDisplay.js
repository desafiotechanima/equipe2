import React from 'react';

export const DisplayNodeHeader = (props) => {

    return (
        <h3>{props.data.label}</h3>
    );

};

export const DisplayNodeBody = (props) => {

    return (
        <>
         
            <div><h6>
            {props.data.description}
            </h6>
               
            </div>
        </>
    );
};



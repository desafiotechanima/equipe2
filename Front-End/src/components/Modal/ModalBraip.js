import React from 'react';
import "./Modal.css";

function Modal( { setOpenModal }) {
    return (
      <div 
      className=" d-flex justify-content-center modalBackground ml-32 mt-40">
        <div className="modalContainer">
          <div>
            
          </div>   
          <div className="body">
            <h3>Configuração de Atendentes:</h3>

            <button id="cancel"
            onClick={() =>{ 
              setOpenModal(false);
              }}>
               <h2 id="cancel-text"> X </h2>
            </button>
            
          </div>
            <div className="cont">
            <button 
            onClick={() =>{ 
              setOpenModal(false);
              }}>
              <h2 id="cancel-text"> Salvar </h2>
            </button>

            
            </div>
        </div>
      </div>
    );
  }


export default Modal;
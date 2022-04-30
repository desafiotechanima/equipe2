import React from 'react';
import "./Modal.css";

var QRCode = require('qrcode.react');

function Modal( { setOpenModal }) {
    return (
      <div 
      className=" d-flex justify-content-center modalBackground ">
        <div className="modalContainer">
          <div> 
          </div>   
          <div className="body">
            <h3>Sincronizar com o WhstsApp:<br/>
            siga o paso a paso abaixo para vincular:<br/><br/>
            1- Abra o WhatsApp em seu celular<br/>
            2 - Toque no Menu ⁝ ou Configurações <br/> e selecione WhatsApp Web<br/>
            3 - Aposte a camera do seu celular para o QrCode ao lado.

            <br/><br/>Logs:
        </h3>
   <div className="py-2 flex items-center">

<div class="px-7">
  <QRCode 
      value="http://http://localhost:3001/qr" 
      size="300"/>
    </div>
  </div>
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
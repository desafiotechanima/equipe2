import React, { useState} from "react";
import {Button} from "reactstrap";
import {edit} from "../../../Api/ApiAxios";
import "@material-tailwind/react/tailwind.css";
import "antd/dist/antd.css";
import { Tag } from 'antd';
import "emoji-mart/css/emoji-mart.css";
import InputEmoji from 'react-input-emoji'
import { Tab } from '@headlessui/react'
import Cards from './Components/cards'
import Menu from '../../../components/Menu/';
const EditProfile = props => {


    let user = JSON.parse(localStorage.getItem("user"));
    const [name, setname] = useState(user.name);
    const [email] = useState(user.email);
    const [isTestUser] = useState(false);
    const [whatsNumber] = useState(user.whatsNumber);
    const [hotmartCBSB , sethotmartCBSB] = useState(user.hotmartCBSB);
    const [hotmartCBSP, sethotmartCBSP] = useState( user.hotmartCBSP);

  
    const editUser = async () => {
        const response = await edit(user._id, 
            name, email, whatsNumber, hotmartCBSB , hotmartCBSP);
        const { data } = response;
        if (data.success) {
            user = {...user, name, email, whatsNumber, hotmartCBSB, hotmartCBSP}
            localStorage.setItem("user", JSON.stringify(user));
            props.history.push("/admin/home");
        }
    }

    return (
        <>


<Tab.Group>
<Tab.List className="col-10 items-center center justify-center mt-4 flex">
<Tab>
  <div class="shadow-lg rounded-2xl border-blue-600 mt-3 p-4 ml-3 bg-white border">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="flex flex-col">
          <span class="font-bold text-md text-black dark:text-white ml-2">
          Configuração
          </span>
        </div>
    </div>
  </div>
</div>
</Tab>

<Tab>
  <div class="shadow-lg rounded-2xl border-blue-600 mt-3 p-4 ml-3 bg-white border">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="flex flex-col">
          <span class="font-bold text-md text-black dark:text-white ml-2">
          Compra bem sucedida
          </span>
        </div>
    </div>
  </div>
</div>
</Tab>

<Tab>
  <div class="shadow-lg rounded-2xl border-blue-600 mt-3 p-4 ml-3 bg-white border">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="flex flex-col">
          <span class="font-bold text-md text-black dark:text-white ml-2">
          Carrinho Abandonado
          </span>
        </div>
    </div>
  </div>
</div>
</Tab>

<Tab>
  <div class="shadow-lg rounded-2xl border-blue-600 mt-3 p-4 ml-3 bg-white border">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="flex flex-col">
          <span class="font-bold text-md text-black dark:text-white ml-2">
          Boleto Gerado
          </span>
        </div>
    </div>
  </div>
</div>
</Tab>

<Tab>
  <div class="shadow-lg rounded-2xl border-blue-600 mt-3 p-4 ml-3 bg-white border">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="flex flex-col">
          <span class="font-bold text-md text-black dark:text-white ml-2">
          Compra bem sucedida
          </span>
        </div>
    </div>
  </div>
</div>
</Tab>
        
</Tab.List>
<Tab.Panels>
  <Tab.Panel>

  <div className="pt-20 items-center w-full flex mt-1">
       <Menu/>
  <div className="w-5/12 px-20">
  
  <p class="font-bold text-3xl text-black dark:text-white ml-2"> 
        Integração com a HotMart
    </p>
    
      <p class="text-2xl text-black dark:text-white ml-2 mb-2 mt-2"> 
          Sincronize a Zoe as suas contas para podemos começar a criação 
          do seu bot, e ativação do mesmo.
      </p>
      
      <Cards/>
  </div>    

 

</div>


  </Tab.Panel>


     <Tab.Panel>
        <div className="col-10 items-center center justify-center mt-4 rounded-3xl border">
            <div className="mb-3"> 
                <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
              Compra bem Sucedida no Boleto:
                </label>
                    <InputEmoji
                     onChange={sethotmartCBSB}
                     placeholder={user.hotmartCBSB}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
                <Tag color="magenta" data-value="John" onClick={""}>
                  Nome do Cliente
                </Tag>
              <Tag color="red" data-value="Cena" onClick={""}>
                Pix
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
   
<div className="mb-3">     
  <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
    Compra bem Sucedida no Pix:
  </label>
    <InputEmoji
      onChange={sethotmartCBSP}
      placeholder={user.hotmartCBSP}
      borderColor="#4737c4"
      fontSize="18"
    />
  <Tag color="magenta" data-value="John" onClick={""}>
    Nome do Cliente
  </Tag>
  <Tag color="red" data-value="Cena" onClick={""}>
    Pix
  </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
      Salvar 
      </Button>
    </div>
  </div>
</Tab.Panel>

<Tab.Panel>
  <div className="col-10 items-center center justify-center mt-5 rounded-3xl border">
    <div className="mb-3">     
      <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Carrinho Abandonado:
      </label>
        <InputEmoji
          onChange={setname}
          placeholder={user.name}
          borderColor="#4737c4"
          fontSize="18"
        />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Pix
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
</div>   
</Tab.Panel>

        <Tab.Panel>
        <div className="col-10 items-center center justify-center mt-5 rounded-3xl border">
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Boleto Gerado | Dia 01:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Boleto
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Boleto Gerado | Dia 02:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Boleto
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Boleto Gerado | Dia 03:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Boleto
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Boleto Gerado | Dia 04:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Boleto
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
  <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
    Boleto Gerado | Dia 05:
  </label>
      <InputEmoji
          onChange={setname}
          placeholder={user.name}
          borderColor="#4737c4"
          fontSize="18"
      />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Boleto
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Boleto Gerado | Dia 06:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Boleto
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
</div>
</Tab.Panel>

<Tab.Panel>
<div className="col-10 items-center center justify-center mt-5 rounded-3xl border">
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Pix Gerado | Dia 01:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Boleto
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Pix Gerado | Dia 02:
            </label>
              <InputEmoji
                onChange={setname}
                placeholder={user.name}
                borderColor="#4737c4"
                fontSize="18"
              />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Pix
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Pix Gerado | Dia 03:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Pix
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Pix Gerado | Dia 04:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Pix
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
  <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
    Pix Gerado | Dia 05:
  </label>
      <InputEmoji
          onChange={setname}
          placeholder={user.name}
          borderColor="#4737c4"
          fontSize="18"
      />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Pix
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
 </div>
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Pix Gerado | Dia 06:
                </label>
                <InputEmoji
                     onChange={setname}
                     placeholder={user.name}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
          <Tag color="magenta" data-value="John" onClick={""}>
            Nome do Cliente
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Pix
          </Tag>
    <Button
      color="primary"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Salvar 
   </Button>
        </div>
        </div>
      </Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
</>
);
}
export default EditProfile;

import React, { useState} from "react";
import {Button} from "reactstrap";
import {edit} from "../../../Api/ApiAxios"
import "@material-tailwind/react/tailwind.css";
import "antd/dist/antd.css";
import { Tag } from 'antd';
import "emoji-mart/css/emoji-mart.css";
import InputEmoji from 'react-input-emoji'
import { Tab } from '@headlessui/react'
import Menu from '../../../components/Menu';
import Confetti from 'react-confetti'


const EditProfile = props => {

    let user = JSON.parse(localStorage.getItem("user"));
    const [name, setname] = useState(user.name);
    const [email] = useState(user.email);
    const [isTestUser] = useState(false);
    const [whatsNumber] = useState(user.whatsNumber);
    const [braipCBSB , setbraipCBSB] = useState(user.braipCBSB);
    const [braipCBSP] = useState( user.braipCBSP);

    let username = JSON.parse(localStorage.getItem("user")).name;

    const editUser = async () => {
        const response = await edit(user._id, 
            name, email, whatsNumber, braipCBSB, braipCBSP );
        const { data } = response;
        if (data.success) {
            user = {...user, name, email, whatsNumber, braipCBSB, braipCBSP}
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
          Introdução
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
          Atividade 01
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
          Atividade 02
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
          Notas
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
  <div className="w-10/12 px-20">
  
    <p class="font-bold text-3xl text-black dark:text-white ml-2"> 
        Bem vindo as atividas de introdução a progrmação usando c
    </p>
    
    <p class="text-2xl text-black dark:text-white ml-2 mb-2 mt-2"> 
        Neste topico você ira aprender a usar o if , vetor e matric usando a linguagem de progrmação c
    </p>
      
  </div>    



</div>


  </Tab.Panel>


     <Tab.Panel>
        <div className="col-10 items-center center justify-center mt-4 rounded-3xl border">
            <div className="mb-3"> 
                <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
              Crie um vetor do tipo int de 10 posições usando c:
                </label>
                    <InputEmoji
                     onChange={setbraipCBSB}
                     placeholder={user.braipCBSB}
                     borderColor="#4737c4"
                    fontSize="18"
                    />
                    <br/>
                <Tag color="magenta" data-value="John" onClick={""}>
                  Dicas:
                </Tag>
              <Tag color="red" data-value="Cena" onClick={""}>
                o valor de um vetor deve ficar entre []
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
               expecifique o tipo de informação do seu vetor
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
              de um nome ao seu vetor do seu vetor
          </Tag>
          <br/>
    <Button
      color="primary mt-10"
      href="#/"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Enviar Resposta
   </Button>

   <Button
      color="primary mt-10"
      href="https://docs.microsoft.com/pt-br/cpp/c-language/?view=msvc-170"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Ver Documentação do C
   </Button>

 </div>
   

  </div>
</Tab.Panel>

<Tab.Panel>
  <div className="col-10 items-center center justify-center mt-5 rounded-3xl border">
    <div className="mb-3">     
      <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Crie uma matrix do tipo int de 15 posições em c
      </label>
        <InputEmoji
          onChange={setname}
          placeholder={user.name}
          borderColor="#4737c4"
          fontSize="18"
        />
          <Tag color="magenta" data-value="John" onClick={""}>
            Dicas:
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            Uma matrix deve armazenar as linhas e colunas
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
            como você deve criar uma matrix de 15 posições leve em consideração culunas x linhas
          </Tag>
          <Tag color="red" data-value="Cena" onClick={""}>
           Uma matrix se criar no tipo []
          </Tag>
          <Button
          color="primary mt-10"
          href="#/"
          onClick={editUser}
          size="m"
          disabled={isTestUser}>
          Enviar Resposta
    </Button>

   <Button
      color="primary mt-10"
      href="https://docs.microsoft.com/pt-br/cpp/c-language/?view=msvc-170"
      onClick={editUser}
      size="m"
      disabled={isTestUser}>
     Ver Documentação do C
   </Button>
 </div>
</div>   

</Tab.Panel>

<Tab.Panel>
     
        <Confetti
          width={1920}
          height={1080}
        />
     

<div className="col-10 items-center center justify-center mt-5 rounded-3xl border">
 <div className="mb-3">     
           <label className="mb-2 mt-1 font-bold text-2xl text-black dark:text-white ml-2">
           Progresso:
           <br/>
           </label>

           <p class="font-bold text-3xl text-black dark:text-white ml-2"> 
            👋 Olá {username} .
            </p>
            <p class=" mt-10 font-bold text-3xl text-black dark:text-white ml-2"> 
             sua nota é {username} 🤩.
            </p>
 </div>



        </div>
      </Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
</>
);
}
export default EditProfile;

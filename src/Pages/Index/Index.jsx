import React from 'react';
import bemvindo from "../../assets/img/index2.svg";
import Cards from './components/cards'
import Menu from '../../components/Menu';
//import Modal from "../../components/Modal/Modal"
function App (){


  let username = JSON.parse(localStorage.getItem("user")).name;
  return(
    <>

  <div className="pt-20 items-center w-full flex justify-center mt-1">

       <Menu/>
       
  <div className="w-6/12 px-20">

  <p class="font-bold text-3xl text-black dark:text-white ml-2"> 
        👋 Olá {username} .
    </p>
    
      <p class="text-2xl text-black dark:text-white ml-2 mb-2 mt-2"> 
          Bem vindo vindo(a) ao PromrAmar ❤️
          <br/>
      </p>

      <Cards/>
  </div>    

  <div className="px-3 w-8/10">
          <img src={bemvindo} 
           alt="Bem Vindo"> 
          </img>
      </div>
</div>
    </>
  )
}
export default App;
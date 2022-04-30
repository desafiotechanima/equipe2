import React, { useState} from "react";
import {Button,Card,CardBody,Form,Input,Row} from "reactstrap";
import {edit} from "../../Api/ApiAxios";
import perfil from "./Components/perfil.svg";

const EditProfile = props => {

    let user = JSON.parse(localStorage.getItem("user"));
    let username = JSON.parse(localStorage.getItem("user")).name;

    const [name, setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    const [isTestUser] = useState(false);
    const [whatsNumber,setWhatsNumber] = useState(user.whatsNumber);

    const editUser = async () => {
        const response = await edit(user._id, 
            name, email, whatsNumber);
        const { data } = response;
        if (data.success) {
            user = {...user, name, email, whatsNumber}
            localStorage.setItem("user", JSON.stringify(user));
            props.history.push("/admin/home");
            
        }
    }

    return (

  <div className="pt-20 items-center w-full flex mt-1">

  <div className="w-6/12 px-20">
  
  <p class="font-bold text-3xl text-black dark:text-white ml-2"> 
        👋 Olá {username}.
    </p>
    
      <p class="text-2xl text-black dark:text-white ml-2 mb-2 mt-2"> 
          Configuração do perfil | Login na plataformas Zoe.
      </p>
<Card className="bg-secondary shadow">
                            
    <CardBody>
      <Form>
        <div className="pl-lg-4">
            <Row>

                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username">
                                                        Username
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        value={name}
                                                        id="input-username"
                                                        placeholder="Username"
                                                        onChange={e => setName(e.target.value)}
                                                        type="text"/>
                                                
                                            
                                            
                                                
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email">
                                                        Email address
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-email"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                        type="email"
                                                    />
                                                
                                          
                                            
                                             
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email">
                                                        WhatsApp Number:
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-whats"
                                                        value={whatsNumber}
                                                        onChange={e => setWhatsNumber(e.target.value)}
                                                        type="text"
                                                    />
                                                
                                            
                                        </Row>
                                        
                                    </div><br/>
                                    <Button
                                            color="primary"
                                            href="#/"
                                            onClick={editUser}
                                            size="m"
                                            disabled={isTestUser}>
                                            Salvar 
                                        </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    
      
     
  </div>    

    <div className="px-3 w-8/10">
        <img src={perfil} 
         alt="Bem Vindo"> 
         </img>
    </div>
</div>

);
}
export default EditProfile;

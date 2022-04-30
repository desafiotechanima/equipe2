import React, {useState} from "react";
import {
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import {login} from "../../Api/ApiAxios";

const Login = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const tryLogin = async () => {
        const response = await login(email, password);
        const {data} = response;
        if (data.success) {
            setError("");
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            props.history.push("/");
        } else {
            setPassword("");
            setError(data.msg);
        }
    }
    return (
  
      <section className="text-gray-600 body-font pt-10 items-center flex mt-1 mt-9">
      
      <div className="w-2/8  
        rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0" >
      <img
          src="https://imgur.com/z31tjXb.png" style={{width:500}}
          alt="..."/>
      </div>
          
        <div
        className="w-2/8 bg-gray-100 rounded border-8 border-purple-100 
        rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0">
          <h2 className="text-gray-900 text-3xl  font-medium title-font mb-5">
            Entrar
          </h2>
            <Form role="form">
             <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                     <InputGroupAddon addonType="prepend">
                         <InputGroupText>
                            <i className="ni ni-email-83"/>
                         </InputGroupText>
                    </InputGroupAddon>
             <Input placeholder="Email" type="email" autoComplete="email" value={email}
                onChange={e => setEmail(e.target.value)}/>
                 </InputGroup>
                </FormGroup>
            <FormGroup>
        <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
                 <InputGroupText>
                     <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                </InputGroupAddon>
        <Input placeholder="Password" type="password" autoComplete="password" value={password}
                onChange={e => setPassword(e.target.value)}/>
            </InputGroup></FormGroup>{error ?
                <div className="text-muted font-italic">
                <small>
                 error:{" "}
          <span className="text-red font-weight-700">{error}</span>
            </small></div> : null }
                <button  type="button" 
                 className={`text-white bg-indigo-700 border-0 py-2 px-8 
                 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
                onClick={tryLogin}>Entrar
            </button>
        </Form>     
        <br/>
        <a href="#/" 
           onClick={() => props.history.push('/auth/reset-password')}>
             Esqueceu a senha?</a>
        </div>
      
    </section>
         
    );
} 
export default Login;

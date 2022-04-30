import axios from 'axios';
import config from "../Config/config";


const instance = axios.create({
    baseURL: config.WS_BASE_URL,
});

instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = (token ? token : '');
    config.headers.ContentType = 'application/json';
    return config;
});

export const getAll = async () => (
    await instance.post('users/all')
);

export const register = async (name, email, password, phone, agency, role) => (
    await instance.post('users/register', {name, email, password, phone, agency, role})
);

export const confirmRegister = async id => (
    await instance.post(`users/confirm/${id}`)
);

export const forgotPassword = async email => (
    await instance.post('users/forgotpassword', {email})
);

export const confirmReset = async (id, password) => (
    await instance.post(`users/resetpass/${id}`, {password})
);

export const login = async (email, password) => (
    await instance.post('users/login', {email, password})
);

export const logout = async token => (
    await instance.post('users/logout', {token})
);

export const edit = async (userID, name, email, whatsNumber,
    //<-Chaves Braip->
     braipCBSB, braipCBSP,
     //<-Chaves Braip Boleto Gerado->
      braipBG01, braipBG02, braipBG03, braipBG04, braipBG05, braipBG06, 
      //<-Chaves Hotmart->
      hotmartCBSB, hotmartCBSP , 
      //<-Chaves Hotmart Boleto Gerado->
      hotmartBG01 , hotmartBG02 ,hotmartBG03 , hotmartBG04 , hotmartBG05 , hotmartBG06 ,


    ) => (
    await instance.post('/users/edit', {userID, name, email, whatsNumber ,
         //<-Chaves Braip->
        braipCBSB, braipCBSP, 
        //<-Chaves Braip Boleto Gerado->
        braipBG01, braipBG02, braipBG03, braipBG04,braipBG05,braipBG06 ,
        //<- Craves, Hotmart ->
        hotmartCBSB, hotmartCBSP ,
       //<-Chaves Hotmart Boleto Gerado->
       hotmartBG01 , hotmartBG02 ,hotmartBG03 , hotmartBG04 , hotmartBG05 , hotmartBG06 ,

    })
        
       

);

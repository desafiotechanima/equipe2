//<-Sistema (Pagina principal, login e demais)->
import Index from "./Pages/Index/Index.jsx";
import Register from "./Pages/Sistema/Register.jsx";
import Login from "./Pages/Sistema/Login.jsx";
import ConfirmEmail from "./Pages/Sistema/ConfirmEmail.jsx";
import EditProfile from "./Pages/Sistema/EditProfile.jsx";
import ResetPassword from "./Pages/Sistema/ResetPassword.jsx";
import ConfirmPassword from "./Pages/Sistema/ConfirmPassword.jsx";
import ResetPasswordSuccess from "./Pages/Sistema/ResetPasswordSuccess.jsx";
import Contatos from "./Pages/contatos.jsx"

//<-Sistema de flow (Painel de configuração de fluxo de mensagens do sistema)- > 
import Flow from "./Pages/flow/index.jsx";

//<-Paginas da aula do curso de c-  >
import C from './Pages/Aulas/C';

//<-Pagina da aulas do curso de c++ >
import Cmaismais from './Pages/Aulas/Cmaismais';


var routes = [ 
  {
    path: "/home",
    component: Contatos,
    layout: "/admin",
    api: false
  },
  {
    path: "/c",
    component: C,
    layout: "/admin",
    api: true
  },
  {
    path: "/cmaismais",
    component: Cmaismais,
    layout: "/admin",
    api: true
  },
  {
    path: "/configuração",
    component: EditProfile,
    layout: "/admin",
    api: true
  },
  {
    path: "/whatsapp-flow",
    component: Flow,
    layout: "/admin",
    api: false
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth",
    api: true
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/auth",
    api: true
  },
  {
    path: "/confirm-email/:id",
    name: "Confirm Email",
    component: ConfirmEmail,
    layout: "/auth",
    api: true
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    component: ResetPassword,
    layout: "/auth",
    api: true
  },
  {
    path: "/confirm-password/:id",
    name: "Confirm Password",
    component: ConfirmPassword,
    layout: "/auth",
    api: true
  },
  {
    path: "/reset-success",
    name: "Password Reset Confirmed",
    component: ResetPasswordSuccess,
    layout: "/auth",
    api: false
  },
  {
    path: "/index",
    component: Index,
    layout: "/admin",
    api: false
  },
];
export default routes;

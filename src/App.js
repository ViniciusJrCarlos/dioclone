//import {

  //BrowserRouter as Router,
  //Routes,
  //Route,

//} from "react-router-dom";

import {Routes, Route, HashRouter} from 'react-router-dom';

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Cadastro } from "./pages/cadastro";

function App() {
  return (<>
    <HashRouter>
      <Routes>
      
        <Route path="/" element={ <Home /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/cadastro" element={ <Cadastro/> } />
        <Route path="/feed" element={ <Feed /> } />

      </Routes>
   </HashRouter>

   </>);
};

export default App;

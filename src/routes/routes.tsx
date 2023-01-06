import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Teste } from "../pages/teste";


export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/teste" element={<Teste/>}/>
        </Routes>
      </BrowserRouter>
    );
  };
  
  
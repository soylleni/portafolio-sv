import * as React from 'react';
import Portafolio from './components/portafolio/Portafolio';
import Proyectos from './components/proyectos/proyectos';
import UserRegistry from './components/user-registry/userRegistry';
import ReqsAdmin from './components/reqsAdmin/reqsAdmin';
import Contacto from './components/contacto/contacto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from './components/ProtectedRoute/protectedRoute';
import { useState } from 'react'


//import { Link } from "react-router-dom";


const  App = ()  => {
  const [isAllowed, setIsAllowed] = useState()


  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === ''){
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
    console.log('isAllowed',isAllowed)
  }

  
  return (
     <BrowserRouter>
        <Routes>
         <Route element={<ProtectedRoute  isAllowed={isAllowed}/>}>
              <Route path='/reqsAdmin' element={<ReqsAdmin/>}></Route>
          </Route>
          <Route path='/' element={<Portafolio />}></Route>
          <Route path='/proyectos' element={<Proyectos />}></Route>
          <Route path='/login' element={<UserRegistry childToParentData={functionToGetchildData}/>}></Route>      
          <Route path='/contacto' element={<Contacto/>}></Route>
          
        </Routes>
     </BrowserRouter>

    
  );

}


export default App;
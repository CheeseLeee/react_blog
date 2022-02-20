import Head from "./components/public/Head/Head"

import { BrowserRouter,Route,Routes, useLocation,useRoutes} from "react-router-dom";
 import {routes} from './router/index'

function Router(){
  const elements = useRoutes(routes)
  console.log(elements)
  return elements 
}
function App(){
  return (
    <div id="app">
      <BrowserRouter>
        <Head/>
        <Router/>
  
      </BrowserRouter>    
    </div>
  )
}

export default App
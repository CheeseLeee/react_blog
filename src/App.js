import Head from "./components/public/Head/Head"

import { BrowserRouter, useLocation,useRoutes} from "react-router-dom";
 import {routes} from './router/index'

function Router(){
  const elements = useRoutes(routes)
  console.log('11')
  let title
  if(elements.props.value.matches[0].route.meta){
    title = elements.props.value.matches[0].route.meta.title
    document.title = title
  }else{
    document.title = 'React app'
  }
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
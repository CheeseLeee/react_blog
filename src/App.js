import { BrowserRouter,useRoutes} from "react-router-dom";
import {routes} from './router/index'
import ContainerHead from "./store/Container/ContainerHead";
function Router(){
  const elements = useRoutes(routes)
  return elements 
}
function App(){
  return (
      <div id="app">
          <BrowserRouter>
            <ContainerHead/>
            <Router/> 
          </BrowserRouter>         
      </div>
 
  )
}
export default App
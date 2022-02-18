import Head from "./components/public/Head/Head"
import { BrowserRouter,Route,Routes} from "react-router-dom";

import {routes} from './router/index'
function App(){
  const routesComt = routes.map(item => {
    const Ele = item.element
    return <Route path={item.path} element={<Ele/>} key={item.name}></Route>
  })
  return (
    <div id="app"> 
      <BrowserRouter >
        <Head/>
        <Routes>
         {routesComt}
        </Routes> 
      </BrowserRouter>
    </div>
  )
}
export default App
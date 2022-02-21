import Head from "./components/public/Head/Head"
import { BrowserRouter,useRoutes} from "react-router-dom";
import {routes} from './router/index'
import ContainerHeader from "./store/Container/ContainerHeader";
import { store } from "./store/store";


function Router(){
  const elements = useRoutes(routes)
  console.log(elements)
/* 
  let title
  if(elements.props.value.matches[0].route.meta){
    title = elements.props.value.matches[0].route.meta.title
    document.title = title
  }else{
    document.title = 'React app'
  } */
  return elements 
}
function App(){
  return (
      <div id="app">
          <BrowserRouter>
            <ContainerHeader store={store}/>
            <Router/> 
          </BrowserRouter>         
      </div>
 
  )
}


export default App
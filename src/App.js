import Head from "./components/public/Head/Head"
import { BrowserRouter,Route,Routes,withRouter} from "react-router-dom";
import Home from './views/Home/Home'
import Diary from "./views/Diary/Diary";
function App(){
  return (
    <div id="app">
      
      <BrowserRouter >
      <Head/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/diary" element={<Diary/>} />
          <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
        </Routes> 
      </BrowserRouter>
    </div>
  )
}
export default App
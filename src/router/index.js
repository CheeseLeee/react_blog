import Home from '../views/Home/Home'
import Diary from '../views/Diary/Diary'
function DefaultRoute(){
    return (
        <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
        </main>
    )
}
export const routes = [
    {
        name:'Home',
        path:'/',
        element:Home,
        meta:null, 
    
    },
    {
        name:'Diary',
        path:'/Diary',
        element:Diary,
        meta:null,
        
    },
    {
        name:'*',
        path:'*',
        element:DefaultRoute,
        meta:null,
    }
]





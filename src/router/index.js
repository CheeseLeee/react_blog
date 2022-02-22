import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router'
//const Home = lazy(() => import('../views/Home/Home'))
import Home from '../views/Home/Home'
//const Diary = lazy(() => import('../views/Diary/Diary'))
import Diary from '../views/Diary/Diary'
import ContainerAside from '../store/Container/ContainerAside'
import { store } from "../store/store";
function DefaultRoute() {
    return (
        <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
        </main>
    )
}
/* function WithSuspense(Com) {
    return (
        <Suspense fallback={<DefaultRoute />}>
            <Com />
        </Suspense>
    )
} */
export const routes = [
    {
        path:'/',
        element:<Navigate to="/Home" />
    },
    {
        name: 'Home',
        path: '/Home',
        element: <ContainerAside />,//WithSuspense(Home),
        children:[
            {
                path:'home1',
                element:<div>home1</div>
            },
            {
                path:'home2',
                element:<div>home2</div>          
            }
        ],
        meta: {title:'Home'},

    },
    {
        name: 'Diary',
        path: '/Diary',
        element: <ContainerAside  />,//WithSuspense(Diary),
        children:[
            {
                path:'diary1',
                element:<div>diary1</div>
            },
            {
                path:'diary2',
                element:<div>diary2</div>         
            }
        ],
        meta: {title:'Diary'},

    },
    {
        name: '*',
        path: '*',
        element: <DefaultRoute/>,
        meta: null,
    }
]





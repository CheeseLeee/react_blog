import { lazy, Suspense } from 'react'
import { useLocation } from 'react-router'
//const Home = lazy(() => import('../views/Home/Home'))
import Home from '../views/Home/Home'
//const Diary = lazy(() => import('../views/Diary/Diary'))
import Diary from '../views/Diary/Diary'
import Aside from '../views/Aside/Aside'
function DefaultRoute() {
    return (
        <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
        </main>
    )
}
function WithSuspense(Com) {
    return (
        <Suspense fallback={<DefaultRoute />}>
            <Com />
        </Suspense>
    )
}
export const routes = [
    {
        name: 'Home',
        path: '/',
        element: <Aside/>,//WithSuspense(Home),
        children:[
            {
                path:'home1',
                element:<Home/>
            },
            {
                path:'home2',
                element:<Diary/>               
            }
        ],
        meta: {title:'Home'},

    },
    {
        name: 'Diary',
        path: '/Diary',
        element: <Aside/>,//WithSuspense(Diary),
        children:[
            {
                path:'diary1',
                element:<div>123</div>
            },
            {
                path:'diary2',
                element:<Diary/>            
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





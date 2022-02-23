import { Navigate } from 'react-router'
//const Home = lazy(() => import('../views/Home/Home'))
//const Diary = lazy(() => import('../views/Diary/Diary'))
import ContainerAside from '../store/Container/ContainerAside'
import ContainerPaper from '../store/Container/ContainerPaper'
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
        element:<Navigate to="/Home/home1" />
    },
    {
        name: 'Home',
        path: '/Home',
        element: <ContainerAside />,//WithSuspense(Home),
        children:[
            {
                path:'home1',
                element:<ContainerPaper/>,
                contextElement:<div>home1</div>
            },
            {
                path:'home2',
                element:<ContainerPaper/>,
                contextElement:<div>home2</div>   
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
                element:<ContainerPaper/>,
                contextElement:<div>diary1</div>
            },
            {
                path:'diary2',
                element:<ContainerPaper/>,
                contextElement:<div>diary2</div>  
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





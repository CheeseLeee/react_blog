import { lazy, Suspense } from 'react'
import { useLocation } from 'react-router'
const Home = lazy(() => import('../views/Home/Home'))
const Diary = lazy(() => import('../views/Diary/Diary'))
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
        element: WithSuspense(Home),
        meta: null,

    },
    {
        name: 'Diary',
        path: '/Diary',
        element: WithSuspense(Diary),
        meta: null,

    },
    {
        name: '*',
        path: '*',
        element: DefaultRoute,
        meta: null,
    }
]





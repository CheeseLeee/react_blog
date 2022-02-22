import { useEffect, useState } from 'react'
import { useLocation, useNavigate , Route, Routes, Outlet } from 'react-router-dom'
import styles from '../Aside/Aside.module.css'

export default function Aside(props){
    const location = useLocation()
    let navigate = useNavigate()
    let [state,setState] = useState([])
    useEffect(() => {
        setState(props.store.getState().headerNav[0].children)
    },[])
    useEffect(() => {
        console.log(location.state)
        if(location.state){
            setState(location.state.data)
            console.log(1)
        }      
    },[location])

    let topMenu
    function goRoute(index) {
        navigate(state[index].path)   
        console.log(location.state)    
    }
    topMenu = state.map((item,index) => {
        return <span onClick={() => goRoute(index)} key={index}>{item.name}</span>
    }) 
    return (
        <div>
            <div className={styles.main}>
                <Outlet /> 
            </div>
            <div className={styles.aisde_bg}>
                <div className={styles.Aside_title}>
                    <p style={{'marginRight':`10px`}}>{'title'}</p>
                    <p>^</p>
                </div>
                <ul className={styles.Aside_menu}>
                    {topMenu}
                </ul>
                <ul className={styles.Aside_bottomMenu}>
                   {/*  {bottomMenu} */}
                </ul>
            </div>
        </div>
    )
}
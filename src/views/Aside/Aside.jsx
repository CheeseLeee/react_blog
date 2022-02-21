import { useLocation, useNavigate , Route, Routes, Outlet } from 'react-router-dom'
import styles from '../Aside/Aside.module.css'

export default function Aside(){
    const location = useLocation()
    let navigate = useNavigate()
    let navs 
    let topMenu
    function goRoute(index) {
        navigate(navs[index].path)
    }
    if(location.state   ){
        navs = location.state.data
        console.log(navs)
        topMenu = navs.map((item,index) => {
            return <span onClick={() => goRoute(index)} key={index}>{item.name}</span>
        }) 
    }


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
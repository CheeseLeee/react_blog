import { useLocation, useNavigate ,BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from '../Home/Home'
import styles from '../Aside/Aside.module.css'
import Diary from '../Diary/Diary'
import { useEffect } from 'react'
export default function Aside(){
    const location = useLocation()
     console.log(location)
/*     let {title,navs} = location.state
     console.log(navs)  */
   /* 
    let asideConfig = location.state.asideConfig
    let topMenu = asideConfig.topMenu.map((item,index) => {
        return <span key={index}>{item.name}</span>
    }) */

    return (
        <div>
            <div className={styles.main}>
{/*                 <Routes>
                    <Route path={asideConfig.topMenu[0].routePath} element={<Home/>}/>
                    <Route path={asideConfig.topMenu[1].routePath} element={<Diary/>}/>
                    <Route path="*" element={<div>onthing</div>}></Route>
                </Routes> */}
               
            </div>
            <div className={styles.aisde_bg}>
                <div className={styles.Aside_title}>
                    <p style={{'marginRight':`10px`}}>{'title'}</p>
                    <p>^</p>
                </div>
                <ul className={styles.Aside_menu}>
                    {/* {topMenu} */}
                </ul>
                <ul className={styles.Aside_bottomMenu}>
                   {/*  {bottomMenu} */}
                </ul>
            </div>
        </div>
    )
}
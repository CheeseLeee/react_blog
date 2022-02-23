
import  React ,{ useEffect, useState ,useContext } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from '../Aside/Aside.module.css'
import Paper from '../Paper/Paper'



export default function Aside(props){
    console.log(props)
    let  asideNav = props.asideNav
    let [activeIndex,setActiveIndex] = useState(0)
    let loaction = useLocation()
 
    useEffect(() => {
        console.log(activeIndex)
        activeNav(loaction)
        console.log(activeIndex)
        clickAsideItem(activeIndex)
        props.onNavToOutlet(activeIndex)
    },[])

    function activeNav(loaction){
        let currentUrl = loaction.pathname
        console.log(currentUrl)
        let _activeIndex = asideNav.indexOf(currentUrl)
        console.log('----',asideNav,currentUrl)
        if(_activeIndex === -1){
            setActiveIndex(0)
        }else{
            setActiveIndex(_activeIndex)
        }
    }
    
    let [PaperDom,setPaperDom] = useState(null)
    let navgiate = useNavigate()
    function clickAsideItem(index){
        navgiate(asideNav[index].childrenPath)
        props.onNavToOutlet(index)      
    }
    let navsDom = asideNav.map((item,index) => {
        return <li onClick={() => clickAsideItem(index)} key={index}>{item.name}</li>
    })
    return (
        <div>
            <div className={styles.main}> 
    
                <Outlet/>      
           
            </div>
            <div className={styles.aisde_bg}>
                <div className={styles.Aside_title}>
                    <p style={{'marginRight':`10px`}}>{'title'}</p>
                    <p>^</p>
                </div>
                <ul className={styles.Aside_menu}>
                   {navsDom}
                </ul>
                <ul className={styles.Aside_bottomMenu}>
                   {/*  {bottomMenu} */}
                </ul>
            </div>
        </div>
    )
}
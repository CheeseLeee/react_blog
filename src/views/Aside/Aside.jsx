
import  React ,{ useEffect, useState ,useContext } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from '../Aside/Aside.module.css'
import Paper from '../Paper/Paper'
export default function Aside({headNavs}){
    let loaction = useLocation()
    useEffect(() => {
        console.log(activeHeadItem)
    },[])
    let navgiate = useNavigate()
    useEffect(() => {
        headNavs[activeHeadItem].children.map((item,index) => {
            if(item.path === latteUrl){
                setActiveAsideItem(index)
            }
        })      
    },[])
    let formerUrl =  '/' + loaction.pathname.split('/')[1]
    let latteUrl = loaction.pathname.split('/')[2]

    function clickAsideNav(index){
        navgiate(headNavs[activeHeadItem].path + '/' + headNavs[activeHeadItem].children[index].path)
        setActiveAsideItem(index)
    
    }

    let [activAsideItem,setActiveAsideItem] = useState(0)
    let activeHeadItem 
    headNavs.forEach((ele,idx) => {
        if(ele.path === formerUrl){
            activeHeadItem = idx
        }
    })
    console.log(headNavs[activeHeadItem])
    let asideNavs = headNavs[activeHeadItem].children.map((ele,index) => {
        return <li className={activAsideItem === index ? styles.active_aside : undefined} onClick={() => clickAsideNav(index)} key={index}>{ele.name}</li>
    })
    /* let  asideNav = props.asideNav
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
    }) */
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
                   {asideNavs}
                </ul>
                <ul className={styles.Aside_bottomMenu}>
                   {/*  {bottomMenu} */}
                </ul>
            </div>
        </div>
    )
}
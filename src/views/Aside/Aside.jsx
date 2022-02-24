
import  React ,{ useEffect, useState ,useContext } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ContextEventBus } from '../..'
import styles from '../Aside/Aside.module.css'
import Paper from '../Paper/Paper'
export default function Aside({headNavs,onNavToOutlet}){
    const eventBus = useContext(ContextEventBus)
    let loaction = useLocation()
    let navgiate = useNavigate()
    useEffect(() => {
        headNavs[activeHeadItem].children.map((item,index) => {
            if(item.path === latteUrl){
                setActiveAsideItem(index)
            }
        })      
    },[])
    useEffect(() => {     
        eventBus.on('changeActiveHeadItem',() => {
            clickAsideNav(activAsideItem)
            console.log(headNavs)
        }) 
    },[])
    let formerUrl =  '/' + loaction.pathname.split('/')[1]
    let latteUrl = loaction.pathname.split('/')[2]
    function clickAsideNav(index){
        
        navgiate(headNavs[activeHeadItem].path + '/' + headNavs[activeHeadItem].children[index].path)
        setActiveAsideItem(index)    
    }
    let [activAsideItem,setActiveAsideItem] = useState(0)
    useEffect(() => {
        onNavToOutlet({activeHeadItem,activAsideItem})
    },[activAsideItem])
    let activeHeadItem 
    headNavs.forEach((ele,idx) => {
        if(ele.path === formerUrl){
            activeHeadItem = idx
        }
    })
   
    let asideNavs = headNavs[activeHeadItem].children.map((ele,index) => {
        return <li className={activAsideItem === index ? styles.active_aside : undefined} onClick={() => clickAsideNav(index)} key={index}>{ele.name}</li>
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
                   {asideNavs}
                </ul>
                <ul className={styles.Aside_bottomMenu}>
                   {/*  {bottomMenu} */}
                </ul>
            </div>
        </div>
    )
}
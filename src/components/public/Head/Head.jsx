import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Head.module.css'
export default function Head(props) {
  
    let navs = props.store.getState().headerNav
    // handler nav
    let location = useLocation()
    useEffect(() => {      
        activateNav(location)
     
    },[location]) 
/*     useEffect(() => {
        if(activeHeaderItem){
            clickHeaderItems(activeHeaderItem)
        }else{
            clickHeaderItems(0)
        }       
    },[]) */
    function activateNav(location){    
        let currentUrl = location.pathname
        let firstUrl = '/' + currentUrl.split('/')[1] 
        console.log(firstUrl)
        let navPaths = navs.map(item => {
            return item.path
        })
        let activeIndex = navPaths.indexOf(firstUrl)
        if(activeIndex === -1){
            setActiveHeaderItem(0)
        }else{
            setActiveHeaderItem(activeIndex)
        }
    }
    let [activeHeaderItem, setActiveHeaderItem] = useState(0) 
    let navigate = useNavigate();
    function clickHeaderItems(idx) {    
        setActiveHeaderItem(idx)
        console.log(navs[idx].path,'??? ')
        navigate(navs[idx].children[0].path,{state:{data:navs[idx].children}})
    }
    let [isFocus_SearchInput,setIsFocus_SearchInput] = useState(false)
    function focusInput(){
        setIsFocus_SearchInput(true)
    }
    function blurInput(){
        setIsFocus_SearchInput(false)
    }
/*     let navs = [
        {
            name:'主页',
            path:'/',
        },
        {
            name:'日志',
            path:'/diary',
        
        },
        {
            name:'文档',
            path:'/doc',
        },
        {
            name:'社区',
            path:'/community',
        },
    ] */
    let headerItems = navs.map((item, idx) => {
        return <li key={idx}
                onClick={() => clickHeaderItems(idx)}
                className={activeHeaderItem === idx ? styles.headerItems_li_active : styles.headerItems_li}
                >{item.name}</li>
    })
    return (
        <>
        <header className={styles.head}>
            <ul className={styles.head_ul}>
                {headerItems} 
            </ul>
            <div className={isFocus_SearchInput ? styles.header_searchBox_inputFocus : styles.header_searchBox}>
                <i style={{'fontSize':`18px`}} className='iconfont icon-search icon-searcSize'></i>
                <input onBlur={blurInput} 
                    onFocus={focusInput} 
                    className={isFocus_SearchInput ? styles.header_search_input : styles.header_search_input_blur} 
                    placeholder='搜索'/>
            </div>
            <h3 className={styles.version}>Version:beat</h3>
            <div className={styles.translate}>
                <i className='iconfont icon-shuyi_fanyi-36' style={{'fontSize':`25px`}}></i>
                <span>多语言</span>
            </div>
            <div className={styles.github}>
                <i className='iconfont icon-github' style={{'fontSize':`25px`}}></i>
                <span>Github</span>
                
            </div>
        </header>
        <div style={{'height':`70px`}}></div>
        </>
    )
}
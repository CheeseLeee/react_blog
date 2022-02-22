import { useEffect,  useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { actionNavToDiary } from '../../../store/actions'

import styles from './Head.module.css'
export default function Head({onChangeNav}) {
    // handler nav
    let location = useLocation()
    let [activeHeaderItem, setActiveHeaderItem] = useState(0) 
    useEffect(() => {      
        activateNav(location) 
    },[location]) 
    useEffect(() => {
        onChangeNav(activeHeaderItem) 
    },[activeHeaderItem])
    function activateNav(location){      
        let currentUrl = location.pathname
        let firstUrl = '/' + currentUrl.split('/')[1] 
        let navPaths = navs.map(item => {
            return item.path
        })    
        let activeIndex = navPaths.indexOf(firstUrl)
        console.log(navPaths,firstUrl,activeIndex)        
        if(activeIndex === -1){
            setActiveHeaderItem(0)
        }else{
            setActiveHeaderItem(activeIndex)
            console.log(activeHeaderItem,'activeSet')
        }
       
    }
    
    let navigate = useNavigate();
    function clickHeaderItems(idx) {    
        setActiveHeaderItem(idx)
             
        navigate(navs[idx].path)
    }
    let [isFocus_SearchInput,setIsFocus_SearchInput] = useState(false)
    function focusInput(){
        setIsFocus_SearchInput(true)
    }
    function blurInput(){
        setIsFocus_SearchInput(false)
    }
     let navs = [
        {
            name:'主页',
            path:'/Home',
            action:'navToHome',
        },
        {
            name:'日志',
            path:'/Diary',
            action:'navToDiary',
        
        },
        {
            name:'文档',
            path:'/doc',
        },
        {
            name:'社区',
            path:'/community',
        },
    ] 
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
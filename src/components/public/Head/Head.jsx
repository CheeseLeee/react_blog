import { useEffect,  useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Head.module.css'
export default function Head({headNavs}) {
    let navigate = useNavigate()
    let [isFocus_SearchInput,setIsFocus_SearchInput] = useState(false)
    let [activeHeadItem,setActiveHeadItem] = useState(0)
    let loaction = useLocation()
    let formerUrl =  '/' + loaction.pathname.split('/')[1]
    useEffect(() => {
        activeRoute()
    },[])
    function activeRoute(){
        headNavs.forEach((ele,idx) => {
            if(ele.path === formerUrl){
                setActiveHeadItem(idx)
            }
        });
    }
    function focusInput(){
        setIsFocus_SearchInput(true)
    }
    function blurInput(){
        setIsFocus_SearchInput(false)
    }
    function clickNavItem(index){
        setActiveHeadItem(index)
        navigate(headNavs[index].path + '/' + headNavs[index].children[0].path)
    }
    let headerItems = headNavs.map((item, idx) => {
        return <li key={idx}
                onClick={() => clickNavItem(idx)}
                className={activeHeadItem === idx ? styles.headerItems_li_active : styles.headerItems_li}
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
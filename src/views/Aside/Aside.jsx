
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Aside/Aside.module.css'

export default function Aside(props){
    let  headerNavs = props.headerNav
    let navgiate = useNavigate()

    function clickAsideItem(index){
        navgiate(index)
    }
    let navsDom = headerNavs.map((item,index) => {
        return <li onClick={() => clickAsideItem(index)} key={index}>{item.name}</li>
    })
    return (
        <div>
            <div className={styles.main}>                
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
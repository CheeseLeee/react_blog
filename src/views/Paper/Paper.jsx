import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
export default function Paper(props){  
    let [soltDomPoprs,setSlotDomProps] = useState()
    let location = useLocation()
    useEffect(() => {
        props.asideNav.forEach((ele,idx) => {
            if(ele.childrenPath === location.pathname){
                
                setSlotDomProps(props.asideNav[idx].element)
            }
        });
    })
    useEffect(() => {
        console.log(soltDomPoprs)
    },[soltDomPoprs])
    return (
        <div className="paper">
            <h1>defualt h1</h1>
            <h2>defualt h2</h2>
                {soltDomPoprs}
            <div>end</div>
        </div>
    )
}
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
export default function Paper(props){  
  
    let activeOutletView

        activeOutletView = props.activeOutlet
     


    return (
        <div className="paper">
            <h1>defualt h1</h1>
            <h2>defualt h2</h2>
                {activeOutletView}
            <div>end</div>
        </div>
    )
}
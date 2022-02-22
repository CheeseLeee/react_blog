import {NAVTOHOME,NAVETODIARY} from './actioncreator'
export let defaultNavRouteMap = {
    headerNav:[
        {
            name:'主页1',
            element:null
        },
        {
            name:'主页2',
            element:null
        },
    ]
        
}

export function reducers(state = defaultNavRouteMap,action){
    console.log(action)
    switch(action.type){
        case NAVTOHOME:
            console.log('to home')
            return {
                ...state,
                headerNav:[{name:'主页1',element:null},{name:'主页1',element:null}]
            }
        case NAVETODIARY:
            console.log('to navToDiary')
            return {
                ...state,
                headerNav:[{name:'日志1',element:null},{name:'日志2',element:null}]
            }
        default :
        console.log('defautl')
            return state
    }
   
}
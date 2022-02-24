import Paper from '../views/Paper/Paper'
import {NAVTOHOME,NAVETODIARY,NAVTOOUTLET} from './actioncreator'
import { routes } from '../router'
export let defaultNavRouteMap = {
    navs:routes.slice(1,routes.length - 1),
    activeOutlet:null
}
export function reducer(state = defaultNavRouteMap,action){
    console.log(action)
    switch(action.type){
        case NAVTOHOME :
            break
        case NAVTOOUTLET:
            
            console.log(NAVTOOUTLET)
            return {
                ...state,
                activeOutlet:state.navs[action.activeNavInfo.activeHeadItem].children[action.activeNavInfo.activAsideItem].contextElement
            }
        default :
            return state
    }
}

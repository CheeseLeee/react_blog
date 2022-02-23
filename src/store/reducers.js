import Paper from '../views/Paper/Paper'
import {NAVTOHOME,NAVETODIARY,NAVTOOUTLET} from './actioncreator'
import { routes } from '../router'
export let defaultNavRouteMap = routes.slice(0,routes.length - 1)
export function reducer(state = defaultNavRouteMap,action){
    console.log(state)
    switch(action.type){
        case NAVTOHOME :
            break
        default :
            return state
    }
}

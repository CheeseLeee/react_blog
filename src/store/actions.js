import {NAVTOHOME,NAVETODIARY,NAVTOOUTLET} from './actioncreator'
export function actionNavToHome(text){
    return {
        type:NAVTOHOME,
        text
    }
}

export function actionNavToDiary(text){
    return {
        type:NAVETODIARY,
        text
    }
}

export function actionNavToOutlet(activeNavInfo){
    return {
        type:NAVTOOUTLET,
        activeNavInfo
    } 
}
import {NAVTOHOME,NAVETODIARY} from './actioncreator'
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
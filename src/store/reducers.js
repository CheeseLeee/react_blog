import Paper from '../views/Paper/Paper'
import {NAVTOHOME,NAVETODIARY,NAVTOOUTLET} from './actioncreator'
import { routes } from '../router'
export let defaultNavRouteMap = {
    activeOutlet:null,
    headNavs:[
        {
            name:'主页',
            path:'/Home',
            action:'navToHome',
            defualtRoute:'/home1'
         
        },
        {
            name:'日志',
            path:'/Diary',
            action:'navToDiary',
            defualtRoute:'/diary1'
        
        },
        {
            name:'文档',
            path:'/doc',
        },
        {
            name:'社区',
            path:'/community',
        },
    ] ,
    asideNav:[
        {
            name:'主页1',
            element:<div>主页1</div>,
            childrenPath:'/Home/home1'
        },
        {
            name:'主页2',
            element:<div>主页2</div>,
            childrenPath:'/Home/home2'
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
                asideNav:[
                    {
                        name:'主页1',
                        element:<div>主页1</div>,
                        childrenPath:'/Home/home1'
                    },
                    {
                        name:'主页2',
                        element:<div>主页2</div>,
                        childrenPath:'/Home/home2'
                    },
                ],
                activeOutlet:<div>主页1</div>
            }
        case NAVETODIARY:
            console.log('to navToDiary')
            return {
                ...state,
                asideNav:[{name:'日志1',element:<div>日志1</div>,childrenPath:'/Diary/diary1'},{name:'日志2',element:<div>日志2</div>,
                childrenPath:'/Diary/diary2'}],
                activeOutlet:<div>日志1</div>
            }
        case NAVTOOUTLET:
            console.log('to NAVTOOUTLET')
            return {
                ...state,

                activeOutlet:state.asideNav[action.index].element
            }
        default :
        console.log('defautl')
            return state
    }
   
}
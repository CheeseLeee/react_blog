let defaultNavRouteMap = {
    headerNav:[
        {
            name:'主页',
            path:'/',
            children:[{
                name:'主页1',
                path:'/home',
              /*   element:<div>div1</div> */
            },{
                name:'主页2',
                path:'/home' ,
                /* element:<div>div2</div>          */
            }]
        },
        {
            name:'日志',
            path:'/Diary',
            children:[
                {
                    name:'日志1',
                    path:'/Diary/diary1'
                },
                {
                    name:'日志2',
                    path:'/diary2'
                },
            ]
        
        },
        {
            name:'文档',
            path:'/doc',
        },
        {
            name:'社区',
            path:'/community',
        },
    ]
}

export function reducers(state = defaultNavRouteMap,action){
    return state
}
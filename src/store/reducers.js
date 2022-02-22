let defaultNavRouteMap = {
    headerNav:[
        {
            name:'主页',
            path:'/home',
            children:[{
                name:'主页1',
                path:'/home/home1',
              /*   element:<div>div1</div> */
            },{
                name:'主页2',
                path:'/home/home2' ,
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
                    path:'/Diary/diary2'
                },
            ]
        
        },
        {
            name:'文档',
            path:'/doc',
            children:[
                {
                    name:'文档1',
                    path:'/doc/diary1'
                },
                {
                    name:'文档2',
                    path:'/doc/diary2'
                },
            ]
        },
        {
            name:'社区',
            path:'/community',
            children:[
                {
                    name:'社区1',
                    path:'/community/diary1'
                },
                {
                    name:'社区2',
                    path:'/community/diary2'
                },
            ]
        },
    ]
}

export function reducers(state = defaultNavRouteMap,action){
    return state
}
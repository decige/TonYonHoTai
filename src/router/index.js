import { createRouter,createWebHashHistory } from "vue-router"
//定义路由规则
const routes=[
    {
    path:"/",
    name:"main",
    component:()=>import("../views/Main.vue"),
    //使刚开始就是home组件
    redirect:"/home",
    children:[
        {
             path:"home",
             name:"home",
            component:()=>import("../views/home.vue")
        },
         {
             path:"user",
             name:"user",
            component:()=>import("../views/User.vue")
        },
         {
             path:"mall",
             name:"mall",
            component:()=>import("../views/mall.vue")
        }, {
             path:"page1",
             name:"page1",
            component:()=>import("../views/page1.vue")
        }, {
             path:"page2",
             name:"page2",
            component:()=>import("../views/page2.vue")
        }
    ]
    },
   
]

const router=createRouter({
    history:createWebHashHistory(),
    //把路由规则放到路由对象中一起导出
    routes
})
//导出路由对象，在main.js中引入并使用
export default router
   
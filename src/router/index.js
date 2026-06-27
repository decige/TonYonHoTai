import { createRouter,createWebHashHistory } from "vue-router"
//定义路由规则

// 路由配置采用嵌套结构：
// - 第1层（path: "/"）：渲染 Main.vue（包含侧边栏和头部布局）
// - 第2层（children）：渲染具体页面组件（首页、用户管理等）
const routes=[
    {
    path:"/",
    name:"main",
    component:()=>import("../views/Main.vue"),
    //使刚开始就是home组件
    redirect:"/home",
    // 子路由：这些组件会渲染到 Main.vue 内部的 <router-view /> 中
    children:[
        {
             path:"home",
             name:"home",
             icon:"vue.svg",
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
   
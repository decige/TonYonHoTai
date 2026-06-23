
const env=import.meta.env.MODE || "production"
const EnvConfig={
    development:{
        baseApi:"/api",
        mockApi:"https://apifoxmock.com/m1/4068509-0-default/api/home"
    },
    
    test:{
        baseApi:"/api",
        mockApi:"/api"
    },
    production:{
        baseApi:"/api",
        mockApi:"https://apifoxmock.com/m1/4068509-0-default/api"
    },
}

export default {
    ...EnvConfig[env],
    env,
    //mock:true,//为true,就会使用mockApi这个地址,如果关闭了mock,就会使用baseApi这个地址
}
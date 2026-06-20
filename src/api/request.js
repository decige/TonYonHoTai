import axios from "axios";
import { ElMessage } from "element-plus";
const service = axios.create();
const NETWORK_ERROR = "网络异常，请稍后再试！";
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器,请求之后 
service.interceptors.response.use(
(res)=>{
    // 对响应数据做点什么
    //这叫 ES6 对象解构赋值，专门用来快速取出对象里的属性，不用反复写长长的代码。
    // const code = res.data.code，
    // const data = res.data.data，
    // const msg = res.data.msg
    const {code,data,msg} = res.data;
    if(code === 200){
        return data;
    }else{
        // 这里可以根据后端返回的msg提示错误信息
        ElMessage.error(msg || NETWORK_ERROR);//msg不存在时,输出NETWORK_ERROR
       //报错完后还要返回return,因为这是一个Promise对象,如果不返回,外面调用这个接口的地方就无法拿到数据了
        return Promise.reject(msg || NETWORK_ERROR);
    }

}
  );
  
  function request(options){
    options.method = options.method || "get";
    return service(options); 
  }
  //暴露出去直接用request,在组件中就可以直接使用这个函数来发送请求了,比如 this.$api.getTableData() 就可以了
  export default request;
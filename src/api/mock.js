import Mock from "mockjs";
import homeApi from "./mockData/home.js";
//1拦截的路径，2请求的类型方法，3返回的假数据
// Mock.mock("/api/getTableData", "get", {
//   code: 200,
//   data: [
//     {
//       name: "Java",
//       todayBuy: 100,
//       monthBuy: 200,
//       totalBuy: 300
//     },
//     {
//       name: "Python",
//       todayBuy: 100,
//       monthBuy: 200,
//       totalBuy: 300
//     }
//   ]
// });
Mock.mock("/api/getTable", "get",homeApi.getTableData);
Mock.mock("/api/home/getTableLabel", "get", homeApi.getTableLabel);
Mock.mock("/api/home/getCountData", "get", homeApi.getCountData);
Mock.mock("/api/home/getChartData", "get", homeApi.getChartData);
import { tableV2Props } from "element-plus"
import { vi } from "element-plus/es/locale/index.mjs"

export default {
    getTableData: () => {
        return {
            code: 200,  
            data: {
                tableData :[
                {
                    name: "Java",
                    todayBuy: 100,
                     monthBuy: 200,
                     totalBuy: 300
                 },
                 {
                    name: "Python",
                    todayBuy: 100,
                    monthBuy: 200,
                     totalBuy: 300
                 },
                  {
                    name: "Python",
                    todayBuy: 100,
                    monthBuy: 200,
                     totalBuy: 300
                 },
                  {
                    name: "Python",
                    todayBuy: 100,
                    monthBuy: 200,
                     totalBuy: 300
                 },
                  {
                    name: "Python",
                    todayBuy: 100,
                    monthBuy: 200,
                     totalBuy: 300
                 },
                  {
                    name: "Python",
                    todayBuy: 100,
                    monthBuy: 200,
                     totalBuy: 300
                 },
                  {
                    name: "Python",
                    todayBuy: 100,
                    monthBuy: 200,
                     totalBuy: 300
                 },
                  {
                    name: "Python",
                    todayBuy: 100,
                    monthBuy: 200,
                     totalBuy: 300
                 }
                ]
            }
    }
},
 getTableLabel:() => {
    return {
        code: 200,
        data: {
            tableLabel: {
                        name: "商品名称",
                        todayBuy: "今日购买",
                        monthBuy:"本月购买",  
                        totalBuy: "总购买",}   
                } 
            }
},
getCountData:() => {
    return {
        code: 200,
        data: {
            countData:[

                {
            
                        name: "今日支付订单",
                        value: "1234",
                        icon:"SuccessFilled",  
                        color: "#2e7c99",
                } ,
                {
            
                        name: "今日收藏订单",
                        value: "210",
                        icon:"StarFilled",  
                        color: "#ffb980",
                } ,{
            
                        name: "今日未支付订单",
                        value: "1234",
                        icon:"GoodsFilled",  
                        color: "#5ab1ef",
                } ,{
            
                        name: "本月支付订单",
                        value: "1234",
                        icon:"SuccessFilled",  
                        color: "#2e7c99",
                } ,
                {
            
                        name: "本月收藏订单",
                        value: "1234",
                        icon:"StarFilled",  
                        color: "#ffb980",
                } ,
                {
            
                        name: "本月未支付订单",
                        value: "1234",
                        icon:"GoodsFilled",  
                        color: "#5ab1ef",
                } ,
            ]
        }
            
            }
},
getChartData:() => {
    return {
        code: 200, 
        data:{
            orderData:{
                date:[  
                    "2023-09-01",
                    "2023-09-02",
                    "2023-09-03",
                    "2023-09-04",
                    "2023-09-05",
                    "2023-09-06",
                    "2023-09-07",
                ],
                data:[
                    {
                        苹果: 100,
                        华为: 200,
                        小米: 300,
                        一加: 400,
                        oppo: 500,
                        vivo: 600,
                    },
                    {
                        苹果: 120,
                        华为: 220,
                        小米: 320,  
                        一加: 420,
                        oppo: 520,
                        vivo: 620,
                    },
                    {
                        苹果: 150,
                        华为: 250,  
                        小米: 350,
                        一加: 450,
                        oppo: 550,
                        vivo: 650,
                    },
                    {
                        苹果: 170,
                        华为: 270,
                        小米: 370,
                        一加: 470,
                        oppo: 570,
                        vivo: 670,
                    },
                    {
                        苹果: 180,
                        华为: 280,
                        小米: 380,
                        一加: 480,
                        oppo: 580,
                        vivo: 680,
                    },
                    {
                        苹果: 200,
                        华为: 300,
                        小米: 400,
                        一加: 500,
                        oppo: 600,
                        vivo: 700,
                    },
                ]
            },
            visitorData:[
                {
                    name: "小米",
                    value: 1000,
                },
                {
                    name: "苹果",
                    value: 2000,
                },
                {
                    name: "华为",
                    value: 3000,
                },
                {
                    name: "一加",
                    value: 4000,
                },
                {
                    name: "oppo",
                    value: 5000,
                },
                {
                    name: "vivo",
                    value: 6000,    
                }

            ],
            userData:[
                {
                    date: "周一",new: 1000, active: 200,
                },
                {
                    date: "周二",new: 1200, active: 300,
                },
                {
                    date: "周三",new: 15, active: 400,
                },
                {
                    date: "周四",new: 17, active: 500,
                },
                {
                    date: "周五",new: 30, active: 600,
                },
                {
                    date: "周六",new: 20, active: 700,
                },
                {
                    date: "周日",new: 65, active: 800,
                },
            ]
        } 
    }
},

}
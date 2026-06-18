import { tableV2Props } from "element-plus"

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
}
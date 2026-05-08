import { defineStore} from "pinia" 
import {ref} from "vue"

function initState(){
  return {
     isCollapse:false,
  };
   
}
export const useAllDataStore = defineStore('alldata', () => {
  //ref state属性
  //computer getters
  //funcion actions
  const state=ref(initState())

  return {
    state,
};
})
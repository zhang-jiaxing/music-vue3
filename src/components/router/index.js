import axios from 'axios'

let instan=axios.create({
    baseURL:'http://zhangjiaxing.cn:4000/',
    timeout:30000
})
// import {ref} from "vue"
// export const useStore = defineStore('main', {
//     state:()=>{
//         const lunbo=ref({})
//         fetch("http://zhangjiaxing.cn:4000/banner?type=0")
//             .then(resp => resp.json())
//             .then((poor)=>{
//             lunbo.value=poor
//             console.log(poor);
//             })
//         return{
//             lunbo
//         }
//     }
//   })




//导出实例   
export default instan;
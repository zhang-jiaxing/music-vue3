import { defineStore } from "pinia";

import { ref } from "vue";



//main是pinia的唯一识别id
export const useStore = defineStore('main',{
    state:()=>{
        return{
            sosuo:"",
            gqxb:"",
            gdid:1,
            i:0,
            singer:"歌手",
            picUrl:"/src/components/logo.png",
            name:"名字",
            geturl:100
        //定义公共数据
        }  
    },
    getters:{
    },
    actions:{
        //修改公共数据的方法，定义函数在这完成取值赋值
        revise(url){
            //歌曲的id是变化的，所以定义形参，在使用页面完成赋值
            this.geturl = url
        },
        increment(e){
            this.name = e 
        },
        album(picUrl){
            this.picUrl=picUrl
        },
        Singer(name){
            this.singer=name
        },
        NextSong(a){
            this.i=a
        },
        Gdid(id){
            this.gdid=id
        },
        Gqxb(xb){
            this.gqxb=xb
        },
        Suoso(ddd){
            this.sosuo=ddd
        }
    },
});




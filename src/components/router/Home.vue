<template>
    <div class="buju">
        
        <el-carousel>
            <img  src="/src/components/logo.png" class="beijing"/>
            <el-carousel-item v-for="item in lunbo" :key="item">
                <el-image
                :src="item.imageUrl"
                class="img"
                />
                <img :src="item.imageUrl" class="beijing"/>
            </el-carousel-item>
        </el-carousel>
        <div class="ziti">
            强烈推荐
        </div>
        <div class="buju1">
            <div class="buju" v-for="gedan in gedan" :key="gedan">
            <img @click="gd(gedan.id)" class="Gdtp" :src="gedan.coverImgUrl">
            <div @click="gd(gedan.id)" class="ziti1">{{gedan.name}}</div>
            </div>
        </div>
    </div>
    
</template>
<script  setup>
import {Get} from "./api"
import{Getgedan} from "./api"
import {ref, onMounted} from "vue"
import { useRouter } from 'vue-router'
import { useStore } from '/src/store/index.js'
const gqstate = useStore()
const router =new useRouter()
var lunbo=ref({})
var gedan=ref({})
var gdleibiao=ref("")
function gd(ee){
    console.log(ee);
    gdleibiao.value=ee
    gqstate.Gdid(gdleibiao.value)
    router.push({
        path:'/gdliebiao',
        query:{
          id:gdleibiao.value
        }
      })
}
onMounted (()=>{
    Get()
    .then(function(res){
        // console.log(res.data.banners)
        lunbo.value=res.data.banners
    })
    Getgedan()
    .then(function(res){
        // console.log(res.data.playlists);
        gedan.value=res.data.playlists
    })
})
</script>
<style scoped>
.Gdtp{
    margin-top: 10px;
    border-radius: 5px;
    width: 200px;
    height: 200px;
}
.img{
    margin-left: 10%;
  width: 80%;
  height: 100%;
}
.beijing{
    width: 100%;
    height: 100%;
    filter: blur(10px);
}
.buju{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.buju1{
    margin-left: 50px;
    display: flex;
    justify-content: space-around;
}
.ziti{
  margin-left: 10px;
  margin-top: 10px;
  font-size: 25px;
  font-weight: 200;
  user-select:none
}
.ziti1{
    width: 200px;
    word-break: break-word;
}
</style>
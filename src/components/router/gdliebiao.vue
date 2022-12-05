<template>
  <div class="buju">
    <div class="buju1">
      <img class="tp" :src="xiangxi.coverImgUrl" />
      <div>
        <h1 class="ziti">{{ xiangxi.name }}</h1>
        <div class="buju1">
          <p class="ziti2" v-for="item in xiangxi.tags" :key="item">
            {{ item }}
          </p>
        </div>
        <p class="ziti1"> {{ xiangxi.description }}</p>
      </div>
    </div>
    <el-table :data="gem" class="wenzi" style="width: 100%"
       :row-class-name="tableRowClassName"
        @row-dblclick="gq(gem[index].id)"
        @row-click="getEmpDetail">
        <el-table-column  prop="name" label="标题" width="220"/>
        <el-table-column  prop="ar[0].name" label="歌手" width="200" />
        <el-table-column  prop="ar[1].name" />
      </el-table>
  </div>

</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, reactive, watch } from "vue";
import { Getgedanleibiao, Getgedanxiangxi, Getgequ,Getgqxx } from "./api";
import { useStore } from '/src/store/index.js'

//1、 引入store下index.js

//2、 实例化index.js

//3、 定义响应式数据
// const state = reactive({
  //响应式数据
// })
//4、get  pinia公共方法里实参的值，完成赋值

//5、返回state和方法
const gqstate = useStore()
const router = useRoute();
//通过路由传参来获取歌单id
const gd = router.query.id;
const gqlj=ref([])
const gem = ref([]);
const xiangxi = ref({});
const index =ref([])
const gqxq=ref([])
const Album=ref("")
const Singer=ref([])
const i=ref("")
    function  tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    }
    function getEmpDetail(row) {
      index.value = row.index;
      console.log(index.value);
      gqstate.Gqxb(index.value)
    }
    function gq(row){
      console.log(row);
      Getgequ(row)
      .then(function(res){
        console.log(res.data.data[0].url);
        gqlj.value=res.data.data[0].url
        // 响应式数据.state函数(实参等于 = gqlj.value)
        gqstate.revise(gqlj.value)
      })
      Getgqxx(row)
      .then(function(ress){
        console.log(ress.data.songs[0].ar[0].name);
        gqxq.value=ress.data.songs[0].name
        Album.value=ress.data.songs[0].al.picUrl
        Singer.value=ress.data.songs[0].ar[0].name

        gqstate.Singer(Singer.value)
        gqstate.album(Album.value)
        gqstate.increment(gqxq.value)
      })
    }
    Getgedanleibiao(gd).then(function (res) {
    // console.log(res.data.songs);
    gem.value = res.data.songs;
    });
    Getgedanxiangxi(gd).then(function (res) {
    console.log(res.data.playlist);
    xiangxi.value = res.data.playlist;
  });

</script>

<style scoped>
.buju1 {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.buju {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.tp {
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 20px;
  height: 200px;
  width: 200px;
}
.ziti {
  margin-top: 20px;
  margin-left: 80px;
  font-weight: bold;
}
.ziti1 {
  margin-top: 20px;
  margin-left: 80px;
  font-weight: 200;
  width: 800px;
  word-break: break-word;
}
.ziti2 {
  margin-left: 80px;
  font-weight: 200;
  width: 70%;
  word-break: break-word;
  
}
.wenzi{
    user-select:none
}
</style>
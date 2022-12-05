<template>
    <el-table :data="sj" style="width: 100%">
    <el-table-column prop="id" label="序号" width="180"/>
    <el-table-column prop="name" label="标题" width="180"/>
    <el-table-column prop="singers" label="歌手"/>
  </el-table>
</template>
<script setup>
import {ref,onMounted} from "vue"
const sj=ref([])
 onMounted(()=>{
    fetch("http://zhangjiaxing.cn:8090/albums")
    .then(resp=>resp.json())
    .then((posts)=>{
        sj.value=posts;
        console.log(posts)
    })
})
</script>
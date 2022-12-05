<template>
  <el-table
    :data="xrsj"
    class="wenben"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @row-click="getEmpDetail"
    @row-dblclick="gq(xrsj[index].id)"
  >
    <el-table-column prop="name" label="标题" width="220" />
    <el-table-column prop="ar[0].name" label="歌手" width="100" />
    <el-table-column prop="ar[1].name" />
  </el-table>
</template>

<script setup>
import { useStore } from "/src/store/index.js";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { Getchaxun, Getgequ } from "/src/components/router/api.js";
import { Getgqxx } from "./api";
const gequ = ref([]);
const gqstate = useStore();
const router = useRoute();
const sj = router.query.id;
const xrsj = ref([]);
const index = ref([]);
const gqxq = ref([]);
const Album = ref("");
const Singer = ref([]);
const i=ref("")
watch(
  () => router.query.id,
  (sj) => {
    sj = router.query.id;
    gqstate.Suoso(sj)
    Getchaxun(sj).then(function (res) {
      console.log(res.data.result.songs);
      xrsj.value = res.data.result.songs;
    });
  }
);
onMounted(() => {
  Getchaxun(sj).then(function (res) {
    console.log(res.data.result.songs);
    xrsj.value = res.data.result.songs;
  });
  console.log(xrsj);


});
function tableRowClassName({ row, rowIndex }) {
  row.index = rowIndex;
}
function getEmpDetail(row) {
  index.value = row.index;
  gqstate.Gqxb(index.value)
}
function gq(row) {
  console.log(row);
  Getgequ(row).then(function (res) {
    console.log(res.data.data[0].url);
    gequ.value = res.data.data[0].url;
    // 响应式数据.state函数(实参等于 = gqlj.value)
    gqstate.revise(gequ.value);
  });
  Getgqxx(row).then(function (ress) {
    console.log(ress.data.songs);
    gqxq.value = ress.data.songs[0].name;
    Album.value = ress.data.songs[0].al.picUrl;
    Singer.value = ress.data.songs[0].ar[0].name;

    gqstate.Singer(Singer.value);
    gqstate.album(Album.value);
    gqstate.increment(gqxq.value);
  });
}
</script>

<style scoped>
.wenben {
  user-select: none;
}
</style>
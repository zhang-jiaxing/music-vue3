<template>
  <div class="websit">
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>扩展</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3"
            ><el-button type="info" style="top: 15px" @click="drawer = true"
              >点击</el-button
            >
            <el-drawer
              v-model="drawer"
              title="I am the title"
              :with-header="false"
            >
              <span>Hi 薛艳萍</span>
            </el-drawer></el-menu-item
          >
          <el-menu-item index="4" disabled>薛艳萍</el-menu-item>
        </el-menu>
    <br />
    <el-row>
      <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark" />
        <el-carousel :interval="4000" type="card" height="500px">
          <el-carousel-item v-for="item in carouseData" :key="item" fit="cover">
            <el-image
              :src="item.url"
              alt=""
              class="img"
              :preview-src-list="[item.url]"
              :initial-index="1"
            />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <div style="width: 800px; height: 200px; left: 200px">
        <el-col :sm="12" :lg="12">
          <div class="demo-progress">
            <el-progress
              type="dashboard"
              :percentage="percentage"
              :color="colors"
            />
            <el-progress
              type="dashboard"
              :percentage="percentage2"
              :color="colors"
            />
            <div>
              <el-button-group>
                <el-button :icon="Minus" @click="decrease">-</el-button>
                <el-button :icon="Plus" @click="increase">+</el-button>
              </el-button-group>
            </div>
          </div>
        </el-col>
      </div>
      <div style="width: 200px; height: 200px; left: 650px">
        <el-col :sm="12" :lg="6">
          <div class="yyy">
            <table>
              <tr>
                <td>
                  <input
                    placeholder="请输入你的名称"
                    v-model="uess"
                    size="30"
                  />
                </td>
                <td><button @click="yud">提交</button></td>
              </tr>
            </table>
          </div>
        </el-col>
      </div>
    </el-row>
    <br />
    <el-row>
      <el-col :sm="24" :lg="14">
        <el-result
          icon="success"
          title="YPxue"
          sub-title="来自辽宁的一枚小仙女"
        >
        </el-result>
        <div class="duy">
          <el-tooltip
            effect="light"
            content="你确定你是仙女吗？"
            placement="top"
          >
            <el-button @click="las" style="width: 200px; left: 220px"
              >确定</el-button
            >
          </el-tooltip>
        </div>
      </el-col>
      <el-col :sm="24" :lg="10">
        <img
          src="src\image\图片 (16).jpg"
          alt=""
          style="width: 100%; height: 500px"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="24" :lg="12">
        <el-empty image="src\image\图片 (1).jpg" :image-size="200">
          <h1>薛艳萍</h1>
        </el-empty>
      </el-col>
      <el-col :sm="24" :lg="12"> </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { createApp, ref, reactive, onMounted } from "vue";
let uess = ref();

function yud() {
  alert("hello" + uess.value);
}
function las() {
  alert("不,我觉得你不是");
}
const carouseData = [
  { url: reactive("src/image/图片 (4).jpg") },
  { url: reactive("src/image/图片 (3).jpg") },
  { url: reactive("src/image/图片 (7).jpg") },
];
const percentage = ref(10);
const percentage2 = ref(0);

const colors = [
  { color: "#f56c6c", percentage: 20 },
  { color: "#e6a23c", percentage: 40 },
  { color: "#5cb87a", percentage: 60 },
  { color: "#1989fa", percentage: 80 },
  { color: "#6f7ad3", percentage: 100 },
];

const increase = () => {
  percentage.value += 10;
  if (percentage.value > 100) {
    percentage.value = 100;
  }
};
const decrease = () => {
  percentage.value -= 10;
  if (percentage.value < 0) {
    percentage.value = 0;
  }
};
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10;
  }, 500);
});
</script>
<style scoped>
.img {
  width: 100%;
  height: inherit;
}
.duy {
  position: absolute;
  left: 180px;
  top: 200px;
}
.yyy {
  position: absolute;
  top: 60px;
  right: 100px;
}
.websit {
  right: 200px;
  width: 1700px;
  height: 1000px;
}
</style>
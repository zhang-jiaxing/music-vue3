<template>
  <div class="buju">
    <div class="title">赞助我们</div>
    <div class="buju1">
        <div class="buju">
            <div class="navbar">
        TO：
        <p />
        感谢支持我们工作室的的制作活动（主要来吃饭）
        <p />
        *请注意不要相信任何以工作室名义通过私人方式联系你并索取信息/钱财的人*
      </div>
      <div class="img">
        <img
          src="/src/components/zhifubao.png"
          style="width: 100%; height: 100%"
        />
      </div>
        </div>
      
        <div class="main">
            <div>
      <el-card class="box-card">
        <div class="card-header">
          <img src="/src/components/biaoqing1.png" style="width: 76px" />
          <span>30￥</span>
        </div>
        <div class="text">支持银河战舰工作室（请我们吃顿饭吧）</div>
      </el-card>
      <el-card class="box-card">
        <div class="card-header">
          <img src="/src/components/biaoqing2.png" style="width: 76px" /><span
            >50￥</span
          >
        </div>
        <div class="text">
          肯德基疯狂星期四 V我50，让我在这个寒冷的冬天吃上炸鸡
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="card-header">
          <img src="/src/components/biaoqing3.png" style="width: 76px" /><span
            >300￥</span
          >
        </div>
        <div class="text">
          我是陈冠希，我现在在LA，我遇到一些很坏很坏的人，微信转账300块帮我回香港，我对你敬礼啊，salute
        </div>
      </el-card>
    </div>
        </div>
      
    </div>

    
  </div>
</template>
  
  <style scoped>
.buju {
  display: flex;
  flex-direction: column;
}
.buju1 {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 70px;
  font-weight: 900;

  text-align: center;
}

.navbar {
  margin-left: 20%;
  width: 50%;

  overflow-y: auto;
}

.main {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.card-header {
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
    margin-top: 5%;
  font-size: 20px;
}
.img {
  margin-left: 20%;
  width: 30%;

  overflow-y: auto;
}

.box-card {
  background-color: #dee2ce;
  width: 90%;
}
.el-card {
  margin-bottom: 45px;
}
</style>
<template>
  <div class="buju">
    <div class="daohangbeijin">
      <img
        style="width: 150px; height: 100px; border-radius: 80px"
        src="/src/components/image.png"
      />
      <router-link to=""
        ><input
          v-model="e"
          @keyup.enter="soshuo"
          style="text-align: center"
          placeholder="歌曲/歌手"
          class="shurukuang"
        />
      </router-link>
    </div>
    <div>
      <el-menu
        style="width: 100%; height: 57px"
        mode="horizontal"
        background-color="#80c4ca"
        text-color="white"
        class="buju1"
      >
        <router-link to="/">
          <el-menu-item index="1">首页</el-menu-item>
        </router-link>
        <router-link to="/about">
          <el-menu-item index="2">歌手</el-menu-item>
        </router-link>
        <router-link to="/dd">
          <el-menu-item index="3">排行</el-menu-item>
        </router-link>
        <router-link to="/zanzhu">
          <el-menu-item index="4">赞赏</el-menu-item>
        </router-link>
        <router-link to="/guanyu">
          <el-menu-item index="5">关于</el-menu-item>
        </router-link>
      </el-menu>
    </div>
    <router-view></router-view>
    <div class="had">
      <div class="bofangqi">
        <img class="zj" :src="gqstate.picUrl" @click="drawer = true" />
        <el-drawer
          v-model="drawer"
          direction="btt"
          :with-header="false"
          size="90%"
        >
          <div class="buju">
            <div class="buju3">
              <img class="zjtp" :src="gqstate.picUrl" />
              <div class="buju4">
                <h1>{{ gqstate.name }}</h1>
                <p>歌手：{{ gqstate.singer }}</p>
                <el-scrollbar class="geci" height="400px">
                  <p v-for="item in arr" :key="item">{{item.lrc}}</p>
                </el-scrollbar>
              </div>
            </div>
            <div class="bofangqi">
              <svg
                v-if="bf"
                t="1669550331117"
                @click="onPlay"
                class="icon tubiao"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7169"
              >
                <path
                  d="M755.712 492.3904L250.368 223.3856a51.2 51.2 0 0 0-75.264 45.2096v538.0096a51.2 51.2 0 0 0 75.264 45.2096l505.3952-269.0048a51.2 51.2 0 0 0 0-90.4192z"
                  p-id="7170"
                ></path>
              </svg>
              <svg
                v-if="bf2"
                @click="onPlay"
                t="1669606763245"
                class="icon tubiao"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3614"
              >
                <path
                  d="M191.397656 128.194684l191.080943 0 0 768.472256-191.080943 0 0-768.472256Z"
                  p-id="3615"
                ></path>
                <path
                  d="M575.874261 128.194684l192.901405 0 0 768.472256-192.901405 0 0-768.472256Z"
                  p-id="3616"
                ></path>
              </svg>
              <svg
                @click="Nextsong"
                t="1669690765952"
                class="icon tubiao1"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3654"
                width="200"
                height="200"
              >
                <path
                  d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z"
                  fill="#231815"
                  p-id="3655"
                ></path>
              </svg>
              <svg
                @click="PreviousTrack"
                t="1669690841725"
                class="icon tubiao2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4229"
                width="200"
                height="200"
              >
                <path
                  d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z"
                  fill="#231815"
                  p-id="4230"
                ></path>
              </svg>
              <el-slider
                class="jidutiao"
                :max="update"
                v-model="jindu"
                @change="timeChange"
              />
            </div>
          </div>
        </el-drawer>
        <div class="buju2">
          <p>{{ gqstate.name }}</p>
          <p>歌手：{{ gqstate.singer }}</p>
        </div>
        <svg
          v-if="bf"
          t="1669550331117"
          @click="onPlay"
          class="icon tubiao"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7169"
        >
          <path
            d="M755.712 492.3904L250.368 223.3856a51.2 51.2 0 0 0-75.264 45.2096v538.0096a51.2 51.2 0 0 0 75.264 45.2096l505.3952-269.0048a51.2 51.2 0 0 0 0-90.4192z"
            p-id="7170"
          ></path>
        </svg>
        <svg
          v-if="bf2"
          @click="onPlay"
          t="1669606763245"
          class="icon tubiao"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3614"
        >
          <path
            d="M191.397656 128.194684l191.080943 0 0 768.472256-191.080943 0 0-768.472256Z"
            p-id="3615"
          ></path>
          <path
            d="M575.874261 128.194684l192.901405 0 0 768.472256-192.901405 0 0-768.472256Z"
            p-id="3616"
          ></path>
        </svg>
        <svg
          @click="Nextsong"
          t="1669690765952"
          class="icon tubiao1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3654"
          width="200"
          height="200"
        >
          <path
            d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z"
            fill="#231815"
            p-id="3655"
          ></path>
        </svg>
        <svg
          @click="PreviousTrack"
          t="1669690841725"
          class="icon tubiao2"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4229"
          width="200"
          height="200"
        >
          <path
            d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z"
            fill="#231815"
            p-id="4230"
          ></path>
        </svg>
        <el-slider
          class="jidutiao"
          :max="update"
          v-model="jindu"
          @change="timeChange"
        />
        <audio
          @durationchange="shichang"
          ref="audio"
          autoplay
          :src="gqstate.geturl"
          @ended="onEnd"
          @timeupdate="timeupdate"
        ></audio>
      </div>
    </div>
  </div>
</template>
<script  setup>
import { useStore } from "/src/store/index.js";
import {
  Getchaxun,
  Getgedanleibiao,
  Getgequ,
  Getgqxx,
  Getgqgc,
} from "/src/components/router/api.js";
import { onMounted, ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
const drawer = ref(false);
const gqstate = useStore();
const router = new useRouter();
const e = ref();
let audio = ref("");
const bf = ref(true);
const bf1 = ref(true);
const bf3 = ref(false);
const bf2 = ref(false);
const url = ref("");
const nextsong = ref(0);
const jindu = ref(0);
const update = ref("");
const gdid = ref("");
const gem = ref([]);
const gqxq = ref([]);
const Album = ref("");
const Singer = ref([]);
const gqlj = ref([]);
const Gc=ref("")
const arr=ref("")


url.value = gqstate.geturl;

const onPlay = () => {
  if (audio.value.paused) {
    console.log(audio.value.currentTime)
    audio.value.play();
    bf.value = !bf.value;
    bf2.value = !bf2.value;
  } else {
    bf.value = !bf.value;
    bf2.value = !bf2.value;
    audio.value.pause();
  }
};
const onEnd = () => {
  bf.value = bf1.value;
  bf2.value = bf3.value;
  nextsong.value++;
  gqstate.NextSong(nextsong.value);
};
const timeupdate = () => {
  jindu.value = audio.value.currentTime;
};
const timeChange = () => {
  audio.value.currentTime = jindu.value;
};
const shichang = (e) => {
  update.value = e.target.duration;
};
function soshuo() {
  router.push({
    path: "/soshuo",
    query: {
      id: e.value,
    },
  });
}
function Nextsong() {
  console.log(nextsong.value);
  nextsong.value++;
}
function PreviousTrack() {
  --nextsong.value;
}
watch(() => {
  if (url.value != gqstate.geturl) {
    bf.value = !bf1.value;
    bf2.value = !bf3.value;
  }
});
watch(() => {
  if (gdid.value != gqstate.gdid) {
    gdid.value = gqstate.gdid;
    console.log(gdid.value);
    Getgedanleibiao(gdid.value).then(function (res) {
      gem.value = res.data.songs;
      // console.log(gem.value);
    });
  } else {
    if (gqstate.i != nextsong.value) {
      gqstate.NextSong(nextsong.value);
      Getgequ(gem.value[gqstate.gqxb + nextsong.value].id).then(function (res) {
        console.log(res.data.data[0].url);
        gqlj.value = res.data.data[0].url;
        // 响应式数据.state函数(实参等于 = gqlj.value)
        gqstate.revise(gqlj.value);
      });
      Getgqxx(gem.value[gqstate.gqxb + nextsong.value].id).then(function (
        ress
      ) {
        // debugger
        console.log(ress.data.songs[0].ar[0].name);
        gqxq.value = ress.data.songs[0].name;
        Album.value = ress.data.songs[0].al.picUrl;
        Singer.value = ress.data.songs[0].ar[0].name;

        gqstate.Singer(Singer.value);
        gqstate.album(Album.value);
        gqstate.increment(gqxq.value);
      });
    }
  }
});
watch(() => {
  if (e.value == gqstate.sosuo) {
    Getchaxun(gqstate.sosuo).then(function (res) {
      console.log(res.data.result.songs);
      gem.value = res.data.result.songs;
    });
  } else {
    if (gqstate.i != nextsong.value) {
      gqstate.NextSong(nextsong.value);
      Getgequ(gem.value[gqstate.gqxb + nextsong.value].id).then(function (res) {
        console.log(res.data.data[0].url);
        gqlj.value = res.data.data[0].url;
        // 响应式数据.state函数(实参等于 = gqlj.value)
        gqstate.revise(gqlj.value);
      });
      Getgqxx(gem.value[gqstate.gqxb + nextsong.value].id)
      .then(function (ress) {
        // debugger
        console.log(ress.data.songs[0].ar[0].name);
        gqxq.value = ress.data.songs[0].name;
        Album.value = ress.data.songs[0].al.picUrl;
        Singer.value = ress.data.songs[0].ar[0].name;

        gqstate.Singer(Singer.value);
        gqstate.album(Album.value);
        gqstate.increment(gqxq.value);
      });
    }
  }
});
watch(()=>{
  if(gqstate.gqxb != ""){
    console.log(gem.value);
    Getgqgc(gem.value[gqstate.gqxb + nextsong.value].id)
    .then(function(res){
    // console.log(res.data.lrc.lyric);
    Gc.value=res.data.lrc.lyric
    if(Gc.value){
      arr.value=Gc.value.split(/[(\r\n)\r\n]+/).map((item,i)=>{
        var min=item.slice(1,3);
        var sec=item.slice(4,6);
        var mill=item.slice(7,10);
        var lrc=item.slice(11,item.length)
        if(isNaN(Number(mill))){
          mill=item.slice(7,9);
          lrc=item.slice(10,item.length)
        }
        // console.log(min,sec,Number(mill),lrc);
        return{min,sec,mill,lrc}
      })
    }
    return arr
  })
  }
})
</script>
<style scoped>
.buju {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.buju1 {
  display: flex;
  justify-content: space-around;
}
.buju2 {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.buju3 {
  display: flex;
  justify-content: space-between;
}
.buju4 {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 25%;
}
.daohangbeijin {
  display: flex;
  justify-content: space-between;
  background-color: #9ec784;
  line-height: 100px;
  height: 100px;
  width: 100%;
}
.shurukuang {
  margin-top: 30px;
  margin-right: 200px;
  width: 50%;
  border-radius: 50px;
  height: 30px;
}
.bofangqi {
  z-index: 1;
  bottom: 0px;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: rgb(240, 232, 232);
  display: flex;
  padding: 10px;
}
.tubiao {
  position: absolute;
  left: 50%;
  height: 50px;
  width: 50px;
}
.tubiao1 {
  position: absolute;
  top: 25%;
  left: 57%;
  height: 35px;
  width: 40px;
}
.tubiao2 {
  position: absolute;
  top: 25%;
  left: 43%;
  height: 35px;
  width: 40px;
}
.had {
  height: 100px;
  width: 100%;
}
.zj {
  border-radius: 30%;
  height: 100%;
  width: 5%;
}
.zjtp {
  margin-top: 8%;
  margin-left: 10%;
  height: 400px;
  width: 450px;
  border-radius: 20px;
}
.jidutiao {
  position: absolute;
  width: 40%;
  left: 35%;
  top: 60%;
}
.geci{
  margin-top: 10%;
  width: 50%;
}
</style>
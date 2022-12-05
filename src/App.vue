<template>
    <div id="app">
        <table>
            <tr>
              <th><button @click="acc1">获取数据</button></th>
                <th>id</th>
                <th>title</th>
                <th>author</th>
            </tr>
            <tr v-for="abc1 of abc1" :key="abc1.id">
                <td>{{abc1.id}}</td>
                <td>{{abc1.uname}}</td>
                <td>{{abc1.password}}</td>
                <td>{{abc1.age}} </td>
                <td><button @click="rrr(abc1.id)">删除</button></td>
            </tr>
            <tr>
              <h1>id</h1>
              <input type="text" v-model="zhang.id">
              <h3>name</h3>
              <input type="text" v-model="zhang.uname" >
              <h3>password</h3>
              <input type="text" v-model="zhang.password" >
              <h3>age</h3>
              <input type="text" v-model="zhang.age" >
              <button @click="huo(zhang.id)">修改</button>
            </tr>
            <tr>
              <h1>添加名字</h1>
              <input type="text" v-model="ooo.uname" >
              <h3>添加密码</h3>
              <input type="text" v-model="ooo.password">
              <h3>添加年龄</h3>
              <input type="text" v-model="ooo.age" >
              <button @click="ccc">添加数据</button>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { createApp,ref,reactive, onMounted} from 'vue';
            let ooo=ref({})
            const abc1=ref([])
            let zhang=ref({})
            function acc1(){
              fetch("http://www.zxpzz.top:8081/users/")
                        .then(resp => resp.json())
                        .then((posts) => {
                            abc1.value=posts
                            console.log(posts)
                        })
          }
          
           function rrr(e){
              fetch("http://www.zxpzz.top:8081/users/"+ e,{
                method:"DELETE",
              })
             let index= abc1.value.findIndex(abc1=>abc1.id==e)
                abc1.value.splice(index,1)
          }
          // return{
          //   abc,acc
          // }
          function ccc(){
              fetch("http://www.zxpzz.top:8081/users/",{
                method:"POST",
                headers:{'Content-Type': 'application/json'},body:JSON.stringify(
                  ooo.value
                  ),
              })
                .then(resp => resp.json()) 
                        .then(posts=> {
                            abc1.value.push(posts)
                            console.log(posts)
                        })
          }

          function huo(le){
            fetch("http://www.zxpzz.top:8081/users/",{
                method:"PUT",
                headers:{'Content-Type': 'application/json'},body:JSON.stringify(
                  zhang.value
                  ),
              })
              .then(resp=> resp.json())
              .then(posts=>{
                let index=abc1.value.findIndex(abc1=>abc1.id==le)
                  abc1.value.splice(index,1,zhang.value)
              })
              
             
          }
          
          


</script>





<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>

<template>
    <div class="bg-color">
    <div class="box">
    <div class="title">关于我们</div>
    <div class="small-box">
        <div class="name">崔  博</div>
        <div class="name">张佳兴</div>
        <div class="name">朱宇轩</div>
    </div>
    <div class="double-s-box">
        <img src="/src/components/1.png" class="image"/>
        <img src="/src/components/2.jpg" class="image"/>
        <img src="/src/components/3.jpg" class="image"/>
    </div>
    <div class="double-s-box">
        <el-button size="large" round  @click="happen">显示贡献值</el-button>
    </div>
    <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="80%" color=#987cb9 SIZE=3>
    <div class="text">《重要声明》</div>
    <div class="little-text">
        <p>-本音乐播放器由银河战舰工作室倾情出品-</p>
        <p>-此播放器涉及到的所有内容均用于学习-</p>
        <p>-未经作者允许禁止搬运-</p>
    </div>
    </div>
    </div>
    </template>
    
    <script>
    export default {
        methods:{
            happen(){
                alert("张佳兴贡献项目：40%\n崔   博贡献项目：30%\n朱宇轩贡献项目：30%");
            }
        }
    }
    </script>
    
    <style scoped>
    .box{
        display: flex;
        flex-direction: column;
    }
    .small-box{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 2%;
    }
    .double-s-box{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 1%;
        margin-bottom: 2%;
    }
    .title{
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        text-decoration: underline;
    }
    .name{
        font-size: 20px;
        border: solid 2px;
        border-radius: 15%;
    }
    .image{
        display: flex;
        flex-wrap: wrap;
        width: 20%;
        border-radius: 5%;
    }
    .bg-color{
        background: linear-gradient(to top left,#D9A7C7,#FFFCDC);
        height: 80vmax;
    }
    .text{
        text-align: center;
        font-size: 15px;
    }
    .little-text{
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        margin-top: 1%;
        line-height: 2px;
    }
    </style>
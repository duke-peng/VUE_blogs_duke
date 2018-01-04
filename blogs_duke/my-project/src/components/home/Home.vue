

<template>
  <div class="home">
    <div class="banner"></div>
    <div class="home_nav">
      <ul>
        <li v-for='(item,key) in nav_list'>{{item}}</li>
      </ul>
    </div>
    <div class="home_main_bg">
        <div class="home_main">
          <div class="home_main_left">
          <img :src="../../assets/img/home1.jpg">
          </div>
          <div class="home_main_rght"></div>
        </div>
    </div>













  </div>
</template>
<script>
import home1 from '../../assets/img/home1.jpg'

  export default{
      name: 'banner',
  data () {
    return {
        nav_list:['热点','奇趣','影视']
    }
  }
  }
</script>

<style scoped>
.banner {
    height: 500px;
    background: url('../../assets/img/banner.jpg') center center;
    background-size: 100% 100%;
}

.home_nav ul li{
  float: left;
  margin-right:60px;
  line-height: 79px
}
.home_nav ul{
width: 1300px;
height:79px ;
margin: 0 auto;
}
.home_main_bg{
 background: #f7f8f9;
 min-height:500px ;
}
.home_main{
  width: 1300px;
  margin: 0 auto;
  min-height:500px ;
}
.home_main_left{
  width: 900px;
  float: left;
}
</style>

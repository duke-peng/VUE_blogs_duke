<template>
  <div class="hello">
    <div class="header">
     <div class="login">登录</div>
    </div>
    <div class="nav">
      <div class="logo">
        <h1>
          <a href="#">my</a>
        </h1>
      </div>
      <div class="nav_list">
        <ul>
          <li  v-for="(item,key) in nav_list">
            <router-link :to=item.Router> {{item.title}} </router-link>


          </li>
        </ul>
      </div>
    </div>

    <div class="mian"><router-view/></div>


  </div>
</template>

<script>

export default {

  data () {
    return {
      nav_list: [
          {title:"主页",Router:"/"},
          {title:"游记",Router:"/travel"},
          {title:"作品",Router:"/show"},
          {title:"美文",Router:"/beautiful"},
          {title:"技术",Router:"/skill"},

        ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import '../assets/css/index.css'
</style>

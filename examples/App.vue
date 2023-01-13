<template>
  <div id="app">
    <m-demo>nihao</m-demo>
    <m-card
        imgSrc="https://ts1.cn.mm.bing.net/th/id/R-C.b2e918c27d7c87f933524a567948c4a4?rik=KzCM4e4CQyYllw&riu=http%3a%2f%2fpic.ntimg.cn%2f20110116%2f6614812_161513252000_2.jpg&ehk=CucnumxpTzAZWP44nihTq%2b3%2b4NEY%2f0aTD6vyFyntpnA%3d&risl=&pid=ImgRaw&r=0"
        summary="123"></m-card>
  </div>
</template>
<script>
    import mDemo from "../components/lib/demo/src/mian";
    import mCard from "../components/lib/card/src/main";
    export default {
        name: 'App',
        components: {
            mDemo,
            mCard
        }
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

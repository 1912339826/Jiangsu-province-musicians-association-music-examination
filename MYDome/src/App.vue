<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created(){
  },
  watch: {
  },
};
</script>

<style lang="less">
// less外部文件的使用
// @import url('./assets/less/index');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app { 
  pre {
    white-space: pre-wrap; /* css3.0 */
    white-space: -moz-pre-wrap; /* Firefox */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }
}
</style>

<template>
  <div id="box">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar v-model="active" active-color="#535353" inactive-color="#a3a3a3" @change="change">
      <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="recommend" icon="orders-o">推荐教材</van-tabbar-item>
      <van-tabbar-item name="my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "box",
  components: {},
  props: {},
  data() {
    return {
      active: "home",
      tab: ["home", "recommend", "my"]
    };
  },
  created() {
    // this.$router.push({ name: this.active });
    
    this.active = this.$route.name;
  },
  mounted() {
    
  },
  activated() {},
  update() {},
  methods: {
    change(e) {
      this.$router.push({ name: e });
    }
  },
  filter: {},
  computed: {},
  watch: {
  }
};
</script>

<style lang="less" scoped>
#box {
}
</style>

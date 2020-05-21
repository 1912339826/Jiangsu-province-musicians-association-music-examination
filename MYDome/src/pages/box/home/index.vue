<template>
  <div id="home">
    <div @click="click(item.url)" v-for="(item, index) in lis" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {
      lis: [
        { name: "音乐资讯", url: "information" },
        { name: "考试须知", url: "TestInstructions" },
        { name: "考试流程", url: "FlowPath" }
      ]
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    click(url) {
      this.$router.push({ name: url });
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#home {
  div{
    font-size: 0.5rem;
  }
}
</style>

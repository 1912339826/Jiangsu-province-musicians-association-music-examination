<template>
  <div class="NavBar">
    <van-icon name="arrow-left" @click="onclick" style="font-size:0.6rem;" />
    <div id="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    goback: {
      type: String,
      default: "recommend"
    }
  },
  data() {
    return {
      title: ""
    };
  },
  created() {
    this.title = this.$route.meta.title;
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    onclick() {
      this.Mysetback();
      this.$router.go(-1);
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
.NavBar {
  width: 100%;
  height: 15vw;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  background-color: white;
  #title {
    width: 75%;
    font-size: 0.4rem;
    font-weight: 700;
    padding-left: 8vw;
    text-align: center;
  }
}
</style>

<template>
  <div class="NavBar">
    <van-icon name="arrow-left" @click="onclick"/>
    <div id="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: "默认值"
    },
    goback:{
      type:String,
      default:"recommend"
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
      onclick(){
          this.$router.push({name:this.goback})
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
  #title{
      width: 75%;
      font-size: 0.5rem;
      font-weight: 700;
      text-align: center;
  }
}
</style>

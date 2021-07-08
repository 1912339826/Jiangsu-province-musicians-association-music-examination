<template>
  <div id="TestInstructions">
    <!-- <NavBar style="position: fixed;top:0;"/> -->
    <section class="box">
      <!-- <p style="text-align: center;font-size: 0.28rem;padding-top: 3vw;margin-top: 3vw;">{{title}}</p> -->
      <pre v-html="test"></pre>
      
    </section>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";
export default {
  name: "TestInstructions",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      test: ``,
      title: ``
    };
  },
  watch: {
  },
  created() {
    document.title = this.$route.meta.title;
    this.getNotes();
  },
  mounted() {
  },
  methods: {
    // 获取考试须知
    async getNotes() {
      let res = await this.$req(window.api.getNotes, {});
      let test = '';
      test = res.data.result[0].content;
      this.title = res.data.result[0].title;
      // this.test = test.replace(/\s/g,"")
      this.test = test;
    }
  },
  watch: {},
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
#TestInstructions {
  .box {
    // margin-top: 15vw;
    background-color: #ffffff;
    border-top: 1px solid #f6f7fb;
    // height: 90vh;

    pre {
      padding-top: 2vw;
      padding-right: 3vw;
      padding-left: 3vw;
      font-size: 0.25rem;
      line-height: 8vw;
      // padding-bottom: 10vw;
      /deep/ p {
        // text-indent:0.5rem;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

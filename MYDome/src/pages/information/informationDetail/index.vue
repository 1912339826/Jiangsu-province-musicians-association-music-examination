<template>
  <div id="informationDetail">
    <!-- <NavBar style="position: fixed;top:0;"/> -->
    <section class="box">
      <pre v-html="IsinformationInfo"></pre>
    </section>
  </div>
</template>

<script>
import NavBar from '../../../components/NavBar'
export default {
  name: "informationDetail",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      IsinformationInfo: ""
    };
  },
  created() {
    document.title = this.$route.meta.title
    this.informationInfo(this.$route.query.id);
  },
  mounted() {},
  activated() {
    this.informationInfo(this.$route.query.id);
  },
  update() {},
  methods: {
    async informationInfo(id) {
      this.IsinformationInfo = "";
      let res = await this.$req(window.api.informationInfo, {
        id: id
      });
      this.IsinformationInfo = res.data.result.content;
    }
  },
  computed: {},
  watch: {},
  beforeDestroy(){
  }
};
</script>

<style lang="less" scoped>
#informationDetail {
  background-color: rgb(251, 251, 251);
  .box {
    border-top: 1px solid #f6f7fb;
    // margin-top: 15vw;
    pre {
      margin-top: 5vw;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      /deep/.ql-align-justify{
        font-size: 0.35rem;
        line-height: 8vw;
        width: 100%;
        img {
          padding-left: 0.35rem;
          width: 100%;
        }
      }
      /deep/p{
        font-size: 0.35rem;
        line-height: 8vw;
        width: 100%;
        img {
          padding-left: 0.35rem;
          width: 100%;
        }
      }
    }
  }
}
</style>

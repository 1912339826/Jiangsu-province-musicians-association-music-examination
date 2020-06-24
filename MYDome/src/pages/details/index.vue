<template>
  <div id="details">
    <NavBar style="position: fixed;top:0;" />
    <section class="box">
      <div class="top">
        <img :src="Isinfo.pics" alt />
      </div>
      <div class="message">
        <div>
          <img src="../../../static/images/教材详情_作者.png" alt />
          <span>作者</span>
          <span>{{Isinfo.author}}</span>
        </div>
        <div>
          <img src="../../../static/images/教材详情_类型.png" alt />
          <span>类型</span>
          <span>{{Isinfo.type}}</span>
        </div>
        <div>
          <img src="../../../static/images/教材详情_版本.png" alt />
          <span>版本</span>
          <span>{{Isinfo.version}}</span>
        </div>
      </div>
      <div class="content">
        <pre v-html="Isinfo.content"></pre>
      </div>
    </section>
    <div class="Isbottom">
      <div @click="goback">
        <img src="../../../static/images/链接_03.png" alt />
        <span>购买链接</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";
export default {
  name: "detail",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      Isinfo: {
        author: "",
        type: "",
        version: "",
        link: "",
        pics: `http://img0.imgtn.bdimg.com/it/u=3869576267,4119045947&fm=15&gp=0.jpg`,
        content: ""
      }
    };
  },
  created() {
    document.title = this.$route.meta.title;
    this.info(this.$route.query.id);
    // this.info(`6545daf382c0433eaf260635833e5422`);
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    // 详情
    async info(id) {
      let obj = {};
      let res = await this.$req(window.api.info, {
        id: id
      });
      obj = res.data.result;
      this.Isinfo = obj;
    },
    goback() {
      window.location.href = this.Isinfo.link;
    }
  },
  filter: {},
  computed: {},
  watch: {},
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
#details {
  margin-top: 15vw;
  .box {
    padding-left: 2vw;
    padding-right: 2vw;
    .content {
      margin-top: 3vw;
      padding-bottom: 15vw;
      pre {
        white-space: pre-wrap; /* css3.0 */
        white-space: -moz-pre-wrap; /* Firefox */
        white-space: -pre-wrap; /* Opera 4-6 */
        white-space: -o-pre-wrap; /* Opera 7 */
        word-wrap: break-word; /* Internet Explorer 5.5+ */
        font-size: 0.3rem;
      }
    }
    .message {
      margin-top: 12vw;
      padding-bottom: 5vw;
      padding-left: 2vw;
      border-bottom: 1px dotted #e2e2e2;
      div {
        display: flex;
        align-items: center;
        margin-top: 3vw;
      }
      img {
        height: 5vw;
        margin-right: 2vw;
      }
      span {
        margin-right: 2vw;
      }
      font-size: 0.3rem;
    }
    .top {
      display: flex;
      justify-content: center;
      padding-top: 5vw;
      img {
        width: 30vw;
        height: 40vw;
      }
    }
  }
  .Isbottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: 0.3rem;
    color: #fffff8;
    height: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    -moz-box-shadow: 0px -1vw 2px #eeeeee;
    -webkit-box-shadow: 0px -1vw 2px #eeeeee;
    box-shadow: 0px -1vw 2px #eeeeee;
    background-color: #ffffff;
    img {
      width: 5vw;
      margin-right: 2vw;
    }
    div {
      width: 80%;
      height: 8vw;
      background-image: linear-gradient(#0bb908, #119c0f);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3.5vw;
    }
  }
}
</style>

<template>
  <div id="FlowPathDetail">
    <div v-for="(item, index) in IsgetProcessInfo" :key="index" class="list">
      <p ref="isp">{{item.content}}</p>
      <div>
        <img :src="item.pic" alt ref="imgs" @load="Imgload(item)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlowPathDetail",
  components: {},
  props: {},
  data() {
    return {
      IsgetProcessInfo: [
        {
          content: "1.1 考生在APP首页点击视频考级图标，进入考试报名页面。",
          examProcessId: "24a954b83e9b4e50a732a2dd2daff82c",
          id: "4d406dab2a0a49d0a6cbbec0ad33b59b",
          order: 1,
          pic: "http://dev.qiahaochaoshi.com/web/pic/报名1.jpg"
        }
      ]
    };
  },
  created() {
    this.getProcessInfo(this.$route.query.id);
  },
  mounted() {},
  activated() {
    // this.getProcessInfo(this.$route.query.id);
  },
  update() {},
  methods: {
    async getProcessInfo(id) {
      this.IsgetProcessInfo = [];
      let IsgetProcessInfo = [];
      let res = await this.$req(window.api.getProcessInfo, {
        id: id
      });
      IsgetProcessInfo = res.data.result;
      this.IsgetProcessInfo = IsgetProcessInfo.sort(this.sortBy("order"));
    },
    // 排序
    sortBy(field) {
      return (x, y) => {
        return x[field] - y[field];
      };
    },
    Imgload(e) {
      // 图片加载成功时能够执行的方法
      if (e.order == this.IsgetProcessInfo.length) {
        for (let index = 0; index < this.$refs.imgs.length; index++) {
          let width = this.$refs.imgs[index].width;
          let height = this.$refs.imgs[index].height;
          let scrollWidth = this.$refs.isp[0].scrollWidth;
          this.$refs.imgs[index].height = (height * scrollWidth) / width;
        }
      }
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#FlowPathDetail {
  padding: 5vw;
  .list {
    margin-bottom: 10vw;
    p {
      font-size: 0.4rem;
      line-height: 10vw;
      margin-bottom: 5vw;
    }
    div {
      display: flex;
      justify-content: center;
      /deep/img {
        // width: 80%;
        // width: 288px;
        // height: 162px;
      }
    }
  }
}
</style>

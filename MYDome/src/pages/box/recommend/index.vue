<template>
  <div id="recommend">
    <section class="box">
      <van-tabs
        sticky
        v-model="active"
        animated
        swipeable
        background="#fafafa"
        title-inactive-color="#999999"
        @click="tabClick"
        title-active-color="#232323"
        color="#b98442"
        swipe-threshold="'6'"
      >
        <van-tab
          v-for="index in IscatList"
          :title="index.name"
          :key="index.id"
          title-style="font-weight: 600;"
        >
          <div id="content" v-if="loading" style="height:93vh;overflow: scroll;">
            <div class="content_box">
              <div
                v-for="(item, index) in Islist"
                :key="index"
                class="list"
                @click="defaultClick(item.id)"
              >
                <!-- <router-link :to="{name: 'defaults', params: {id: item.id ,org:org}}"> -->
                <img :src="item.pics" alt />
                <span>{{item.title}}</span>
                <!-- </router-link> -->
              </div>
            </div>

            <div class="content_bottom">没有更多了</div>
          </div>
          <div
            v-if="!loading"
            style="width:100%;height:93vh;display: flex;
    justify-content: center; align-items: center;"
          >
            <van-loading size="20vw" />
          </div>
          <!-- <div style="height:13vh"></div> -->
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>
<script>
export default {
  name: "recommend",
  components: {},
  data() {
    return {
      loading: false,
      active: 0,
      IscatList: [{ id: "1", name: "" }],
      Islist: [
        {
          id: "",
          pics: "",
          title: ""
        }
      ],
      org: ""
    };
  },
  methods: {
    tabClick(e) {},
    defaultClick(e) {
      this.$router.push({
        path: "/defaults",
        query: {
          id: e,
          org: this.$route.query.org
        }
      });
    },
    // 获取类别列表
    async catList(active) {
      let res = await this.$req(window.api.catList, {});
      this.IscatList = res.data.result;
      this.list(active);
    },
    // 获取列表
    async list(active) {
      let res = await this.$req(window.api.list, {
        catId: this.IscatList[active].id
      });
      this.Islist = res.data.result.data;
    }
  },
  created() {
    document.title = this.$route.meta.title;
    this.catList(0);
    this.loading = false;
    setTimeout(() => {
      this.loading = true;
    }, 300);
  },
  mounted() {},
  activated() {},
  update() {},
  filter: {},
  computed: {},
  watch: {
    active(news) {
      this.list(news);
      this.loading = false;
      setTimeout(() => {
        this.loading = true;
      }, 300);
    }
  },
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
#recommend {
  width: 100%;
  .box {
    // padding-bottom: 10vw;
    #content {
      .content_box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .list {
          background-color: white;
          width: 45.5%;
          height: 64vw;
          margin-left: 3%;
          margin-right: 3%;
          margin-top: 2.5vw;
          color: #000;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
          padding-top: 3vw;
          padding-bottom: 3vw;
          &:nth-child(even) {
            margin-left: 0%;
          }
          a {
            // color: #000;
            // display: flex;
            // justify-content: space-between;
            // flex-direction: column;
            // align-items: center;
          }
          img {
            width: 70%;
          }
          span {
            display: block;
            width: 95%;
            line-height: 5.5vw;
            margin-top: 3vw;
            font-size: 0.3rem;
          }
        }
      }
      .content_bottom {
        color: #969799;
        text-align: center;
        font-size: 0.3rem;
        height: 10vw;
        line-height: 10vw;
        margin-top: 3vw;
      }
    }
  }
}
</style>

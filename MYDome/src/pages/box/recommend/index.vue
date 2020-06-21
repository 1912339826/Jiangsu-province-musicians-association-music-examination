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
            <div v-for="(item, index) in Islist" :key="index">
              <router-link :to="{path: '/defaults', query: {id: item.id }}">
              <!-- <a :href="'web/#/defaults?id='+item.id"> -->
                <img :src="item.pics" alt />
                <span>{{item.title}}</span>
              <!-- </a> -->
              </router-link>
            </div>
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
// import a from '../../details/index'
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
          pics:
            "http://img0.imgtn.bdimg.com/it/u=3869576267,4119045947&fm=15&gp=0.jpg",
          title: ""
        },
        {
          id: "",
          pics:
            "http://img4.imgtn.bdimg.com/it/u=2697916822,1858746706&fm=26&gp=0.jpg",
          title: ""
        },
        {
          id: "",
          pics:
            "http://img0.imgtn.bdimg.com/it/u=3869576267,4119045947&fm=15&gp=0.jpg",
          title: ""
        },
        {
          id: "",
          pics:
            "http://img0.imgtn.bdimg.com/it/u=3869576267,4119045947&fm=15&gp=0.jpg",
          title: ""
        },
        {
          id: "",
          pics:
            "http://img0.imgtn.bdimg.com/it/u=3869576267,4119045947&fm=15&gp=0.jpg",
          title: ""
        }
      ]
    };
  },
  methods: {
    tabClick(e) {},
    defaultClick(e) {
      this.$router.push({
        path: "/defaults",
        query: {
          id: e
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
      this.loading = false;
      let res = await this.$req(window.api.list, {
        catId: this.IscatList[active].id
      });
      this.Islist = res.data.result.data;
      setTimeout(() => {
        this.loading = true;
      }, 300);
    }
  },
  created() {
    console.log(
      window.BASE_URLA + "/defaults?id=48150061895045b286f9e1fc44bdd091"
    );
    document.title = this.$route.meta.title;
    this.catList(0);
  },
  mounted() {},
  activated() {},
  update() {},
  filter: {},
  computed: {},
  watch: {
    active(news) {
      // this.list(news);
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
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      div {
        background-color: white;
        width: 45.5%;
        height: 64vw;
        margin-left: 3%;
        margin-right: 3%;
        margin-top: 2.5vw;

        padding-top: 3vw;
        padding-bottom: 3vw;
        &:nth-child(even) {
          margin-left: 0%;
        }
        a {
          color: #000;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
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
  }
}
</style>

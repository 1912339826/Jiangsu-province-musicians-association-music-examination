<template>
  <div id="information">
    <!-- <NavBar style="position: fixed;top:0;" /> -->
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
        swipe-threshold="'4'"
      >
        <van-tab
          v-for="index in IsinformationCategory"
          :title="index.name"
          :key="index.name"
          title-style="font-weight: 600;"
        >
          <div v-if="loading" style="height:85vh;overflow: scroll;">
            <van-list
              v-model="loadinglist"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <div
                class="list"
                v-for="(item, index) in ISinformationList"
                :key="index"
                @click="detail(item.id)"
              >
                <!-- <img :src="item.pic" alt='' v-if="item.pic" /> -->
                <img :src="item.pic" alt :class="item.pic?'':'no'" />
                <div :class="item.pic?'right fark':'right'">
                  <div class="content">
                    <pre v-html="item.title"></pre>
                  </div>
                  <div class="bottom">
                    <span>来源:</span>
                    <span>{{item.source}}</span>
                    <span style="margin-left:3vw;">时间:</span>
                    <span>{{Fortime(item.createTime)}}</span>
                  </div>
                </div>
              </div>
            </van-list>
          </div>
          <div
            v-if="!loading"
            style="width:100%;height:75vh;display: flex;
    justify-content: center; align-items: center;"
          >
            <van-loading size="20vw" />
          </div>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";
export default {
  name: "Information",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      Ispage: 1,
      loading: false,
      active: 0,
      loadinglist: false,
      finished: false,
      IsinformationCategory: [
        { name: "新闻中心", id: "" },
        { name: "考试信息", id: "" },
        { name: "通知公告", id: "" },
        { name: "其他", id: "" }
      ],
      ISinformationList: [
        {
          id: "b803870d5f1449a7b8decb1c5e40f037",
          title: "测试",
          pic: null,
          content: "测试",
          source: "测试",
          catId: "1",
          createTime: 1588843567000
        }
      ]
    };
  },
  created() {
    document.title = this.$route.meta.title
    this.IsinformationCategory = [];
    this.ISinformationList = [];
    this.informationCategory();
    this.informationList(1, "1");
    setTimeout(() => {
      this.loading = true;
    }, 300);
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    tabClick(e) {
      this.loading = false;
      setTimeout(() => {
        this.loading = true;
      }, 300);
    },
    detail(id) {
      this.$router.push({ path: "/informationDetail", query: { id: id } });
    },
    onLoad() {
      this.Ispage++;
      this.informationList(
        this.Ispage,
        this.IsinformationCategory[this.active]["id"]
      );
    },
    // 资讯类别列表
    async informationCategory() {
      let res = await this.$req(window.api.informationCategory, {});
      this.IsinformationCategory = res.data.result;
    },
    // 资讯列表
    async informationList(index, id) {
      let res = await this.$req(window.api.informationList, {
        pageNo: index,
        pageSize: 10,
        catId: id
      });
      for (let index = 0; index < res.data.result.data.length; index++) {
        const element = res.data.result.data[index];
        this.ISinformationList.push(element);
      }
      // 加载状态结束
      this.loadinglist = false;
      // 数据全部加载完成
      if (this.ISinformationList.length >= res.data.result.totalCount) {
        this.finished = true;
      }
    },
    Fortime(time) {
      let date = new Date(time);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    }
  },
  watch: {
    active(news) {
      this.loading = false;
      this.ISinformationList = [];
      this.Ispage = 1;
      this.loadinglist = true;
      this.finished = false;
      this.informationList(this.Ispage, this.IsinformationCategory[news]["id"]);
      setTimeout(() => {
        this.loading = true;
      }, 300);
    }
  },
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
#information {
  .box {
    // margin-top: 15vw;
    .list {
      padding-right: 3vw;
      padding-left: 3vw;
      height: 30vw;
      display: flex;
      align-items: center;
      background-color: #ffffff;
      margin-bottom: 1px;
      img {
        width: 32vw;
        height: 20vw;
        margin-right: 2vw;
      }
      .no {
        display: none;
      }
      .fark {
        width: 62vw;
      }
      .right {
        padding-right: 1.5vw;
        height: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .content {
          font-size: 0.3rem;
          pre {
            white-space: pre-wrap; /* css3.0 */
            white-space: -moz-pre-wrap; /* Firefox */
            white-space: -pre-wrap; /* Opera 4-6 */
            white-space: -o-pre-wrap; /* Opera 7 */
            word-wrap: break-word; /* Internet Explorer 5.5+ */
          }
        }
        .bottom {
          font-size: 0.1rem;
          color: #9c9c9c;
        }
      }
    }
  }
}
</style>

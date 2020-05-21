<template>
  <div id="FlowPath">
    <section class="box">
      <fieldset>
        <legend>报考步骤</legend>
      </fieldset>
      <div class="probably">
        <template v-for="(item, index) in probably">
          <div class="list" :key="index">
            <i>{{index+1}}</i>
            <span>{{item.content}}</span>
          </div>
          <img
            src="../../../static/images/考试流程箭头_03.png"
            alt
            v-if="probably.length!=index+1"
            :key="item.content"
          />
        </template>
      </div>
      <div class="example">
        <div class="list" style="background-color: #fafafa;">
          <img src="../../../static/images/考试流程(完整)3_03.png" alt />
          <div class="pendant"></div>
          <div class="side">
            <div class="top">{{example[0].title}}</div>
            <pre>{{example[0].content}}</pre>
            <div class="button">查看详情</div>
          </div>
        </div>
        <img src="../../../static/images/考试流程(完整)1_03.png" alt />
        <div class="list">
          <div class="side">
            <div class="top">{{example[1].title}}</div>
            <pre>{{example[1].content}}</pre>
            <div class="button">查看详情</div>
          </div>
          <div class="pendant"></div>
          <img src="../../../static/images/考试流程(完整)4_03.png" alt />
        </div>
        <img src="../../../static/images/考试流程(完整)2_03.png" alt />
        <div class="list">
          <img src="../../../static/images/考试流程(完整)5_03.png" alt />
          <div class="pendant"></div>
          <div class="side">
            <div class="top">{{example[2].title}}</div>
            <pre>{{example[2].content}}</pre>
            <div class="button">查看详情</div>
          </div>
        </div>
        <img src="../../../static/images/考试流程(完整)1_03.png" alt />
        <div class="list">
          <div class="side">
            <div class="top">{{example[3].title}}</div>
            <pre>{{example[3].content}}</pre>
            <div class="button">查看详情</div>
          </div>
          <div class="pendant"></div>
          <img src="../../../static/images/考试流程(完整)6_03.png" alt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FlowPath",
  components: {
  },
  props: {},
  data() {
    return {
      IsgetProcess: [{ id: "", title: "", content: "", type: 0 }],
      probably: [
        { id: "", title: "", content: "填写信息", type: 0 },
        { id: "", title: "", content: "拍摄考试视频", type: 0 },
        { id: "", title: "", content: "支付费用", type: 0 },
        { id: "", title: "", content: "上传视频", type: 0 }
      ],
      example: [
        { id: "", title: "", content: "填写信息", type: 0 },
        { id: "", title: "", content: "拍摄考试视频", type: 0 },
        { id: "", title: "", content: "支付费用", type: 0 },
        { id: "", title: "", content: "上传视频", type: 0 }
      ]
    };
  },
  created() {
    this.getProcess();
  },
  mounted() {},
  activated() {
    this.getProcess();
  },
  update() {},
  methods: {
    // 获取考试流程
    async getProcess() {
      let probably = [];
      let example = [];
      let res = await this.$req(window.api.getProcess, {});
      this.IsgetProcess = res.data.result;
      for (let index = 0; index < res.data.result.length; index++) {
        const element = res.data.result[index];
        if (element.type == 0) {
          probably.push(element);
          this.probably = probably;
        } else if (element.type == 1) {
          example.push(element);
          this.example = example;
        }
      }
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#FlowPath {
  .box {
    padding-bottom: 20vw;
    background-color: #fefefe;
    padding-top: 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .example {
      margin-top: 4vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      .list {
        padding: 7vw;
        background-color: #f8f8f8;
        width: 80vw;
        height: 50vw;
        display: flex;
        align-items: center;
        border-radius: 3vw;
        .pendant {
          width: 5vw;
        }
        img {
          height: 30vw;
        }
        .side {
          color: #787878;
          font-size: 0.3rem;
          height: 28vw;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .button {
            font-size: 0.25rem;
            color: #fffcfd;
            background-color: #f09c39;
            width: 20vw;
            text-align: center;
            line-height: 7vw;
            border-radius: 3vw;
          }
        }
      }
      img {
        height: 10vw;
        margin-top: 0.5vw;
        margin-bottom: 0.5vw;
      }
    }
    fieldset {
      padding: 0;
      border-bottom: none;
      border-left: none;
      border-right: none;
      border-top: 1px dotted #dddddd;
      width: 80vw;
      legend {
        padding-right: 3vw;
        padding-left: 3vw;
        color: #818994;
        font-size: 0.25rem;
        text-align: center;
      }
    }
    .probably {
      width: 100%;
      margin-top: 3vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-left: 5vw;
      img {
        height: 1vw;
        width: 3vw;
        margin-right: 0.5vw;
        margin-left: 0.5vw;
      }
      .list {
        display: flex;
        align-items: center;
        // img {
        //   height: 3vw;
        //   width: 3vw;
        //   margin-right: 1vw;
        // }
        span {
          color: #f49b35;
          font-size: 0.25rem;
        }
        i {
          font-weight: 700;
          margin-right: 1vw;
          height: 3vw;
          line-height: 3vw;
          width: 3vw;
          color: #f49b35;
          text-align: center;
          font-size: 0.1rem;
          border: 1px solid #f49b35;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>

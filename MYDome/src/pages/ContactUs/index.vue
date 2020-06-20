<template>
  <div id="ContactUs">
    <NavBar style="position: fixed;top:0;"/>
    <div style="padding-top: 3vw;">
      <span>地址:</span>
      <span>{{Iscontact.address}}</span>
    </div>
    <div>
      <span>电话:</span>
      <span>
        <a :href="'tel:' + Iscontact.phone">{{Iscontact.phone}}</a>
      </span>
    </div>
    <div>
      <span>传真:</span>
      <span>{{Iscontact.fax}}</span>
    </div>
    <div>
      <span>邮箱:</span>
      <span>
        <a :href="'mailto:' + Iscontact.mailbox">{{Iscontact.mailbox}}</a>
      </span>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
export default {
  name: "ContactUs",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      Iscontact: {}
    };
  },
  created() {
    this.contact();
  },
  mounted() {},
  activated() {
    this.contact();
  },
  update() {},
  methods: {
    // 联系我们
    async contact() {
      let res = await this.$req(window.api.contact, {});
      this.Iscontact = res.data.result[0];
    }
  },
  filters: {},
  computed: {},
  watch: {},
  beforeDestroy(){
  }
};
</script>

<style lang="less" scoped>
#ContactUs {
  font-size: 0.4rem;
  margin-top: 15vw ;
  div {
    line-height: 10vw;
    padding-right: 3vw;
    padding-left: 3vw;
  }
  a {
    text-decoration: underline;
  }
}
</style>

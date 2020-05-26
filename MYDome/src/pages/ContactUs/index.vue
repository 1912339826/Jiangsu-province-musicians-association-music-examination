<template>
  <div id="ContactUs">
    <div>
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
export default {
  name: "ContactUs",
  components: {},
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
  watch: {}
};
</script>

<style lang="less" scoped>
#ContactUs {
  font-size: 0.4rem;
  padding: 3vw;
  div {
    line-height: 10vw;
  }
  a {
    text-decoration: underline;
  }
}
</style>

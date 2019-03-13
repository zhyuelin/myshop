<template>
  <Row type="flex" align="middle" justify="space-between">
    <Icon :style="{margin: '0 20px'}" type="md-arrow-back" size="0"></Icon>
    <h3>{{username}} {{identity}}</h3>
    <a href="javascript:void(0)" @click="handleLogout">退出</a>
  </Row>
</template>

<script>
import { mapState } from "vuex";

export default {
  inject:['reload'],
  computed: {
    // ... {}
    ...mapState("user", {
      // 下面两种写法都可以获取store的值
      username: "username",
      identity: "identity" //state => state.identity
    })
  },
  methods: {

    handleLogout() {
      // 退出操作
      this.$store.dispatch("user/logout", () => {
                
      });
      // this.$router.go(0);
      this.$router.push("/admin");
      this.reload();
    }
  }
};
</script>

<style>
h3 {
  font-size: 20px;
}
</style>

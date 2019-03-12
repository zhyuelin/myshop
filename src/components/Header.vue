<template>
  <Row type="flex" align="middle" justify="space-between">
    <Icon :style="{margin: '0 20px'}" type="md-arrow-back" size="24" @click="handleToggle"></Icon>
  </Row>
</template>

<script>
export default {
  methods: {
    handleToggle() {
      this.$emit("toggle");
    }
  }
};
</script>

<style>
.ivu-layout-header {
  padding: 0 15px;
}
.ivu-layout-header {
  background: #fff;
  text-align: left;
}
.icon-back {
  cursor: pointer;
  font-size: 24px;
}
</style>

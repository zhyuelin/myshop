<template>
  <Layout>
    <Sider hide-trigger>
      <app-aside></app-aside>
    </Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <router-view></router-view>
    </Layout>
  </Layout>
</template>

<script>
// 导入aside组件
import Aside from "../components/Aside";
export default {
  components: {
    "app-aside": Aside
  }
};
</script>

<style>
html,body{
    height: 100%;
}
.ivu-layout.ivu-layout-has-sider {
  height: 100%;
}
.ivu-layout-sider {
  background: #32446c;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Sider width="auto">
        <app-aside hide-trigger></app-aside>
      </Sider>
      <Layout>
        <Header>
          <app-header></app-header>
        </Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
// 导入aside组件
import Aside from "../components/Aside";
// 导入header组件
import Header from "../components/Header";

export default {
  name: "app",
  // 组件
  components: {
    "app-aside": Aside,
    "app-header": Header
  },

    
};
</script>

<style>
html,
body {
  height: 100%;
}
.layout {
  height: 100%;
}
.ivu-layout.ivu-layout-has-sider {
  height: 100%;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Sider width="auto">
        <app-aside :collapsible="collapsible" v-model="collapsible" hide-trigger></app-aside>
      </Sider>
      <Layout>
        <Header>
          <app-header @toggle="handleToggleMenu"></app-header>
        </Header>
        <Content>
          <breadcrumb :dataSource="breadcrumb"></breadcrumb>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
// 导入aside组件
import Aside from "../components/Aside";
// 导入header组件
import Header from "../components/Header";
// 导入breadcrumb组件
import BreadCrumb from "../components/BreadCrumb"

export default {
  name: "app",
  // 组件
  components: {
    "app-aside": Aside,
    "app-header": Header,
    "breadcrumb":BreadCrumb,
  },
  data() {
    return {
      collapsible: false
    };
  },
  methods: {
    handleToggleMenu() {
      collapsible = !collapsible;
    }
  },
  computed:{
    breadcrumb(){
       const {matched} = this.$route;
      return matched.map(v => {
          return {
              name: v.meta,
              path: v.path
          }
      });
      
    }
  }
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
.mt{
  margin-top: 20px;
}
</style>

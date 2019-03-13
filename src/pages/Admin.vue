<template>
  <div class="layout">
    <app-login></app-login>

    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <app-aside></app-aside>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <app-header></app-header>
      </Header>

      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}" >
          <app-breadcrumb></app-breadcrumb>
        </Breadcrumb>
        <Card>
          <div style="height: 600px">
            <router-view></router-view>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
// 导入aside组件
import Aside from "../components/Aside";
// 导入header组件
import Header from "../components/Header";
// 导入breadcrumb组件
import BreadCrumb from "../components/BreadCrumb";

//袁
import Login from "../pages/Login";
import { setTimeout } from "timers";

export default {
  name: "app",
  // 组件
  components: {
    "app-aside": Aside,
    "app-header": Header,
    "app-breadcrumb": BreadCrumb,

    "app-login": Login
  },
  data() {
    return {};
  }
};
</script>

<style>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

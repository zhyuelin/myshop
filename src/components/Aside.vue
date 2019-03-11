<template>
  <Menu active-name="1-2" :open-names="['1']" class="aside_container">
    <div class="app-aside"></div>
    <Submenu v-for="(item,index) in meaus" :key="index" :name="`${index+1}`">
      <template slot="title">
        <Icon :type="item.icon"/>
        {{item.tile}}
      </template>
      <MenuGroup title="Item 1">
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "购物商城",
          path: "/admin",
          icon: "ios-analytic",
          group: [
            {
              path: "/goods-list",
              title: "商品管理"
            },
            {
              path: "/category-list",
              title: "栏目管理"
            },
            {
              path: "/comment-list",
              title: "评论管理"
            }
          ]
        },
        {
          title: "会员管理",
          path: "/admin",
          icon: "ios-filing",
          group: [
            {
              path: "/account-list",
              title: "会员列表"
            }
          ]
        },
        {
          title: "商城订单",
          path: "/admin",
          icon: "ios-cog",
          group: [
            {
              path: "/order-list",
              title: "订单管理"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
.app-aside {
  height: 64px;
}
.aside_container {
  height: 100%;
  width: 200px !important;
  background: #001529;
  color: #fff;
}
</style>

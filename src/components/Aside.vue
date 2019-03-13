<template>
  <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
    <div class="app-aside"></div>
    <Submenu v-for="(item,index) in menus" :key="index" :name="`${index+1}`">
      <template slot="title">
        <Icon :type="item.icon"/>
        {{item.title}}
      </template>

      <MenuGroup class="menugroup">
        <router-link
          v-for="(subItem,subIndex) in item.group"
          :key="subIndex"
          :to="`${item.path}${subItem.path}`"
        >
          <MenuItem :name="`${index}-${subIndex}+1`">{{subItem.title}}</MenuItem>
        </router-link>
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
          icon: "md-apps",
          group: [
            {
              path: "",
              title: "商品管理"
            },
            {
              path: "",
              title: "栏目管理"
            },
            {
              path: "",
              title: "评论管理"
            }
          ]
        },
        {
          title: "会员管理",
          path: "/admin",
          icon: "md-contacts",
          group: [
            {
              path: "",
              title: "会员列表"
            }
          ]
        },
        {
          title: "商城订单",
          path: "/admin",
          icon: "md-reorder",
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
.ivu-menu-vertical .ivu-menu-item-group-title {
  height: 0;
}
</style>

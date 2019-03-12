<template>
  <Menu 
  active-name="1-2" 
  :open-names="['1']" 
  class="aside_container"
  v-model="collapsible"
  >
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
        :to="`${item.path}${subItem.path}`">
          <MenuItem :name="`${index}-${subIndex}+1`">
          {{subItem.title}}
          </MenuItem>
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
          icon: "md-contacts",
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
  },
props:{
  collapsible:{
    default:false,
    type:Boolean
  },
  
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
.ivu-menu-vertical .ivu-menu-item-group-title {
  height: 0;
}
</style>

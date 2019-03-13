<template>
  <Breadcrumb class="mt">
    <BreadcrumbItem
      v-for="(item,index) in routeInfo"
      :key="index"
      :to="{ path: item.src }"
    >{{ item.title }}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    //监听路由变化
    routeInfo: function() {
      //获取路由的地址和meta信息
      const matched = this.$route.matched;

      const newArr = matched.map(v => {
        return {
          src: v.path,
          title: v.meta
        };
      });
      // console.log(newArr);

      return newArr;
    }
  }
};
</script>

<style>
.ivu-breadcrumb {
  text-align: left;
  padding-left: 20px;
}
</style>

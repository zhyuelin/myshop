<template>
  <Breadcrumb class="mt">
    <BreadcrumbItem
      v-for="(item,index) in dataSource"
      :key="index"
      to="{path:item.path}"
    >{{item.name}}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    dataSource: {
      type: Array,
      default: []
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

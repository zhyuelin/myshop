<template>
<div class="admin_container">
<app-aside></app-aside>
<router-view></router-view>
</div>
</template>

<script>
// 导入aside组件
import Aside from "../components/Aside";
export default {
components:{
    "app-aside": Aside,

}
}
</script>

<style>
.admin_container{
    height: 100%;
}
</style>

<template>
  <div>
    <Row>
      <Col span="6" offset="12">
        <Select
          v-model="model1"
          size="large"
          clearable
          @on-change="selectChange"
          @on-clear="selectClear"
        >
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col span="6">
        <Input search @on-search="inputSearch" enter-button placeholder="会员名称"/>
      </Col>
    </Row>

    <Table ref="selection" :columns="columns12" :data="data6" class="mt20">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <!-- <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button> -->
        <app-drawer :row=row :index=index @onchang="getorderlist"></app-drawer>
      </template>
    </Table>
    <Page
      @on-change="pagechange"
      @on-page-size-change="pageSizeChange"
      class="mt20"
      :total="totalcount"
      :page-size="pageSize"
      :current="pageIndex"
      :page-size-opts="pageSizeOpts"
      show-total
      show-sizer
      show-elevator
    />
  </div>
</template>

<script>
// 导入Drawer组件
import Drawer from "../../components/Drawer";

export default {
  name: "orderList",
  components: {
    "app-drawer": Drawer,
  },
  data() {
    return {
      columns12: [
        {
          title: "订单id",
          key: "id",
          align: "center"
        },
        {
          title: "会员名称",
          key: "user_name",
          align: "center"
        },
        {
          title: "地址",
          key: "address",
          width: 150
        },
        {
          title: "快递",
          key: "expressTitle"
        },
        {
          title: "状态",
          key: "statusName"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data6: [],
      pageIndex: 1,
      pageSize: 5,
      totalcount: 0,
      vipname: "",
      orderstatus: "",
      pageSizeOpts: [5, 10, 15, 20],
      cityList: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "1",
          label: "待付款"
        },
        {
          value: "2",
          label: "已付款"
        },
        {
          value: "3",
          label: "已发货"
        },
        {
          value: "4",
          label: "已签收"
        },
        {
          value: "5",
          label: "已取消"
        }
      ],
      model1: "",
      
    };
  },
  methods: {
    getorderlist() {
      this.$Loading.start();
      this.$axios({
        url: `/admin/order/getorderlist?orderstatus=${
          this.orderstatus
        }&vipname=${this.vipname}&pageIndex=${this.pageIndex}&pageSize=${
          this.pageSize
        }`
      }).then(res => {
        // console.log(res);
        
        let { message, pageIndex, pageSize, status, totalcount } = res.data;
        if (status === 0) {
          this.data6 = message;
          this.pageIndex = pageIndex;
          this.pageSize = pageSize;
          this.totalcount = totalcount;
        }
        this.$Loading.finish();
      });
    },
    pagechange(pagenum) {
      // console.log(pagenum);
      this.pageIndex = pagenum;
      this.getorderlist();
    },
    pageSizeChange(pagesize) {
      // console.log(pagesize);
      this.pageSize = pagesize;
      this.getorderlist();
    },
    selectChange(val) {
      this.orderstatus = val;
      this.getorderlist();
    },
    selectClear() {
      this.orderstatus = "";
      this.getorderlist();
    },
    inputSearch(query) {
      this.vipname = query;
      this.getorderlist();
    }
  },
  mounted() {
    this.getorderlist();

    //获取是否有登录
    let username = localStorage.getItem("username");   
    if (username) {
      
    }else {
      //没有登录过跳转到首页
      this.$router.push("/admin");
      // console.log(1);
    }
  }
};
</script>

<style>

</style>

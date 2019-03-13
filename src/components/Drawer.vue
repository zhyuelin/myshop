<template>
  <div>
    <Button @click="show(row,index)" type="primary" size="small" style="margin-right: 5px">编辑</Button>

    <Button type="error" size="small" @click="detail(row,index)">查看</Button>

    <Drawer title="编辑订单" v-model="drawerShow" width="720" :mask-closable="true" :styles="styles">
      <Form :model="formData">
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="订单id">
              <div class="orderid">{{orderId}}</div>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="快递单号" label-position="top">
              <Input type="text" v-model="formData.express_no"/>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="快递费用" label-position="top">
              <Input type="text" v-model="formData.express_fee" number/>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="收件人" label-position="top">
              <Input type="text" v-model="formData.accept_name"/>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="收货手机" label-position="top">
              <Input type="text" v-model="formData.mobile"/>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="收货邮箱" label-position="top">
              <Input type="email" v-model="formData.email"/>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="收货地区" label-position="top">
              <Input type="text" v-model="formData.area"/>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="收货地址" label-position="top">
          <Input type="textarea" v-model="formData.address" :rows="2" placeholder="地址..."/>
        </FormItem>
        <FormItem label="收货备注" label-position="top">
          <Input type="textarea" v-model="formData.message" :rows="2" placeholder="备注..."/>
        </FormItem>

        <FormItem>
          <Steps :current="Ordersstaus">
            <Step title="取消订单" status="error" v-if="formData.orderstatus==5"></Step>
            <Step title="待付款" icon="ios-person"></Step>
            <Step title="已付款" icon="logo-usd"></Step>
            <Step title="已发货" icon="ios-mail"></Step>
            <Step title="已签收" icon="md-thumbs-up"></Step>
          </Steps>
        </FormItem>

        <Row :gutter="32">
          <Col span="12">
            <FormItem label="订单状态" label-position="top" prop="status">
              <Select v-model="formData.orderstatus" @on-change="handleChange">
                <Option value="1">待付款</Option>
                <Option value="2">已付款</Option>
                <Option value="3">已发货</Option>
                <Option value="4">已签收</Option>
                <Option value="5">取消订单</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="总金额">
              <Input type="text" v-model="formData.order_amount" number/>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="drawerShow = false">取消</Button>
        <Button type="primary" @click="saveInfo">保存修改</Button>
      </div>
    </Drawer>
    <Drawer title="订单详情" v-model="detailShow" width="750" :closable="false" :styles="styles">
      <Badge :count="goodsCount" type="success">
        <Button @click="twoLevel = true" type="primary">商品列表</Button>
      </Badge>
      <p :style="pStyle" class="mt20">订单明细</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">订单id: {{orderId}}</Col>
          <Col span="12">会员名称: {{formData.user_name}}</Col>
        </Row>
        <Row>
          <Col span="12">地址: {{formData.area}}</Col>
          <Col span="12">快递: {{formData.expressTitle}}</Col>
        </Row>
        <Row>
          <Col span="12">状态: {{goodsOrderStatus}}</Col>
          <Col span="12">购买时间: {{formData.complete_time}}</Col>
        </Row>
      </div>
    </Drawer>
    <Drawer title="订单商品列表" :closable="false" v-model="twoLevel" width="600">
      <Table stripe :columns="columns1" :data="data1"></Table>
    </Drawer>
  </div>
</template>

<script>
export default {
  props: ["row", "index"],
  data() {
    return {
      drawerShow: false,
      detailShow: false,
      twoLevel: false,
      styles: {
        height: "calc(100% - 55px)",
        overflow: "auto",
        paddingBottom: "53px",
        position: "static"
      },
      pStyle: {
        fontSize: "16px",
        color: "rgba(0,0,0,0.85)",
        fontWeight: "bold",
        lineHeight: "24px",
        display: "block",
        marginBottom: "16px"
      },
      formData: {},
      goodsData: {},
      orderId: 0,
      Ordersstaus: 0,
      goodsOrderStatus: "",
      columns1: [
        {
          title: "商品",
          key: "goods_title"
        },
        {
          title: "类型",
          key: "goods_no"
        },
        {
          title: "价格",
          key: "goods_price"
        }
      ],
      data1: [],
      goodsCount: 0,
    };
  },
  methods: {
    show(row, index) {
      //   console.log(row, index);
      this.drawerShow = true;
      this.orderId = row.id;
      this.$axios({
        url: `/admin/order/getorderdetial/${this.orderId}`
      }).then(res => {
        let { message, status } = res.data;
        console.log(message.orderinfo);
        if (status == 0) {
          this.formData = message.orderinfo;
          if (this.formData.orderstatus == 5) {
            this.Ordersstaus = 0;
          } else {
            this.Ordersstaus = this.formData.orderstatus - 1;
          }

          console.log(this.formData);
        }
      });
    },
    detail(row, index) {
      this.detailShow = true;
      this.orderId = row.id;
      this.$axios({
        url: `/admin/order/getorderdetial/${this.orderId}`
      }).then(res => {
        let { message, status } = res.data;
        if (status == 0) {
          this.goodsData = message.goodslist;
          this.data1 = message.goodslist;
          this.formData = message.orderinfo;
          let { orderstatus } = this.formData;
          console.log(this.goodsData);
          this.goodsCount = this.goodsData.length;
          switch (+orderstatus) {
            case 1:
              this.goodsOrderStatus = "待付款";
              break;
            case 2:
              this.goodsOrderStatus = "已付款";
              break;
            case 3:
              this.goodsOrderStatus = "已发货";
              break;
            case 4:
              this.goodsOrderStatus = "已签收";
              break;
            case 5:
              this.goodsOrderStatus = "取消订单";
              break;
            default:
              break;
          }
        }
      });
    },
    saveInfo() {
      this.$axios({
        method: "post",
        url: "/admin/order/updateorder",
        data: { orderinfo: this.formData },
        withCredentials: true
      }).then(res => {
        // this.show(this.row, this.index);
        this.$Message.success("修改成功");
        console.log(res);
      });
      setTimeout(() => {
        this.drawerShow = false;
        this.$emit("onchang");
      }, 1000);
    },
    handleChange(val) {
      console.log(val);
      if (val == 5) {
        this.Ordersstaus = 0;
      } else {
        this.Ordersstaus = val - 1;
      }
    }
  }
};
</script>

<style>
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
.demo-drawer-profile {
  font-size: 14px;
}
.demo-drawer-profile .ivu-col {
  margin-bottom: 12px;
}
</style>

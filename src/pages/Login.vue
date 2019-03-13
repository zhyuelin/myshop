<template>
  <div>
    <!-- <Button @click="modal = true">Custom header and footer</Button> -->
    <Modal
      v-model="modal"
      width="360"
      :mask-closable="false"
      :closable="false"
      class-name="vertical-center-modal"
    >
      <p slot="header" style="color:#f60;text-align:center;font-size:18px">
        <Icon type="ios-contact"></Icon>
        <span>登录</span>
      </p>
      <div style="text-align:center">
        <!-- 登录表单内容  开始 -->
        <Form ref="formInline" :model="formInline" inline>
          <FormItem prop="uname">
            <Input type="text" v-model="formInline.uname" placeholder="请输入用户名">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="upwd">
            <Input type="password" v-model="formInline.upwd" placeholder="请输入密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" long :loading="modal_loading" @click="handleSubmit">登录</Button>
          </FormItem>
        </Form>
        <!-- 登录表单内容  结束 -->
      </div>
      <div slot="footer">
        <!-- <Button type="error"  long @click="del">Delete</Button> -->
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: true,
      modal_loading: false,

      //登录表单
      formInline: {
        uname: "",
        upwd: ""
      }
    };
  },
  methods: {
    //登录按钮
    handleSubmit() {
      this.modal_loading = true;
      //访问登录接口
      // this.$axios({
      //   method: "POST",
      //   url: "/admin/account/login",
      //   data: this.formInline,
      //   //处理跨域
      //   withCredentials: true
      // }).then(res => {
      //   // console.log(res);
      //   const { message, status } = res.data;

      //   if (status == 0) {
      //     //登录成功
      //     this.$Message.success("登录成功！");
      //     this.modal = false;
      //   } else if (status == 1) {
      //     //登录失败
      //     this.$Message.error(message);
      //   }
      // });

      this.$store.dispatch("user/login", this.formInline).then(res => {
        // this.$router.back();
        // console.log(res);
        if (res.status == 0) {
          this.$Message.success("登录成功！");
          this.modal = false;
        } else if (res.status == 1) {
          this.$Message.error(res.message);
        }
      });

      this.modal_loading = false;
    }
  },

  mounted() {
    let username = localStorage.getItem("username");

    // console.log(username);
    if (username) {
      this.modal = false;
    } 
  }
};
</script>

<style>
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ivu-modal {
  top: 0;
}

.ivu-form-inline .ivu-form-item {
  display: block;
}
</style>
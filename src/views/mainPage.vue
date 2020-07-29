<template>
  <div style="overflow: auto">
    <div
      class="content"
      :style="$route.path=='/homePage'?'border-bottom:1px solid #f1f1f3':'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16)'"
    >
      <div class="header">
        <router-link class="logo" to="/homePage">
          <img src="../assets/images/logo.png" alt />
          <span>财富链</span>
        </router-link>
        <ul v-if="!phoneShow">
          <li>
            <router-link :class="route=='homePage'?'activeHeader':''" to="/homePage">首页</router-link>
          </li>
          <li>
            <router-link :class="route=='changePage'?'activeHeader':''" to="/changePage">置换</router-link>
          </li>
          <li>
            <router-link :class="route=='myWallet'?'activeHeader':''" to="/myWallet">我的钱包</router-link>
          </li>
          <li>
            <router-link :class="route=='companyPart'?'activeHeader':''" to="/companyPart">企业合作</router-link>
          </li>
          <li>
            <router-link :class="route=='personCenter'?'activeHeader':''" to="/personCenter">个人中心</router-link>
          </li>
        </ul>
        <div class="to-login" v-if="!phoneShow">
          <el-button
            type="primary"
            size="small"
            style="line-height: 26px;padding: 0 15px;"
            v-if="!login"
            @click="$router.push('/login')"
          >登录</el-button>
          <el-button
            type="primary"
            size="small"
            style="line-height: 26px;padding: 0 15px;"
            v-else
            plain
            @click="loginout"
          >退出登录</el-button>
          <el-button
            type="primary"
            size="small"
            style="line-height: 26px;padding: 0 15px;"
            plain
            @click="$router.push('/register')"
          >注册</el-button>
          <!--<span style="color: #333;">English</span>-->
        </div>
        <i class="iconfont icon-daohangshouqi-" v-if="phoneShow" @click="showList = !showList"></i>
      </div>
    </div>
    <div class="phone-nav">
      <el-collapse-transition>
        <div v-show="showList" style="padding: 20px 0;" @click="showList=false">
          <ul>
            <li>
              <router-link :class="route=='homePage'?'activeHeader':''" to="/homePage">首页</router-link>
            </li>
            <li>
              <router-link :class="route=='changePage'?'activeHeader':''" to="/changePage">置换</router-link>
            </li>
            <li>
              <router-link :class="route=='myWallet'?'activeHeader':''" to="/myWallet">我的钱包</router-link>
            </li>
            <li>
              <router-link :class="route=='companyPart'?'activeHeader':''" to="/companyPart">企业合作</router-link>
            </li>
            <li>
              <router-link :class="route=='personCenter'?'activeHeader':''" to="/personCenter">个人中心</router-link>
            </li>
            <li v-if="!login">
              <router-link :class="route=='Login'?'activeHeader':''" to="/login">登录</router-link>
            </li>
            <li v-else @click="loginout">
              <router-link :class="route=='Login'?'activeHeader':''" to>退出登录</router-link>
            </li>
            <li>
              <router-link :class="route=='Register'?'activeHeader':''" to="/register">注册</router-link>
            </li>
          </ul>
          <ul class="navbar-nav clear" v-if="$route.path=='/homePage'">
            <li>
              <a href="#" @click="handleNav($event,'#cfljs')">财富链介绍</a>
              <a href="#" @click="handleNav($event,'#jzmd')">价值锚定</a>
              <a href="#" @click="handleNav($event,'#scjz')">TOKEN生成机制</a>
            </li>
            <li>
              <a href="#" @click="handleNav($event,'#yyjg')">运营架构</a>
              <a href="#" @click="handleNav($event,'#jljz')">激励机制</a>
              <a href="#" @click="handleNav($event,'#jsys')">技术优势</a>
            </li>
            <li>
              <a href="#" @click="handleNav($event,'#sjxg')">数据效果</a>
              <a href="#" @click="handleNav($event,'#hghfx')">合规合法性</a>
            </li>
          </ul>
        </div>
      </el-collapse-transition>
    </div>
    <!-- <div class="suspension1">
      <div class="erwerma">
        <div class="app_erweima" v-show="orShowApp">
          <img :src="qr_code" alt />
        </div>
        <div class="gzh_erweima" v-show="orShowGzh">
          <img src="../assets/images/gzhImg.jpg" alt />
        </div>
      </div>
      <div class="suspension">
        <div class="app" @mouseover="mouseOver('0')" @mouseleave="mouseLeave('0')" :style="active">
          <img src="../assets/images/app.png" alt />
          <div>APP</div>
        </div>
        <div class="gzh" @mouseover="mouseOver('1')" @mouseleave="mouseLeave('1')" :style="active1">
          <img src="../assets/images/gzh.png" alt />
          <div>公众号</div>
        </div>
        <div
          class="xiaoxi"
          :style="active2"
          @mouseover="mouseOver('2')"
          @mouseleave="mouseLeave('2')"
          @click="messageList"
        >
          <img src="../assets/images/message.png" alt />
          <div>消息</div>
        </div>
        <div
          class="feedback"
          :style="active3"
          @mouseover="mouseOver('3')"
          @mouseleave="mouseLeave('3')"
          @click="feedback"
        >
          <img src="../assets/images/edit.png" alt />
          <div>反馈</div>
        </div>
      </div>
    </div> -->

    <div @click="showList=false">
      <router-view ref="router-view" :style="'min-height:' + clientHeight + 'px'" />
    </div>
    <div class="footer">
      <div class="footer-content clear">
        <div class="left">
          <p>联系我们</p>
          <p>合作伙伴</p>
        </div>
        <ul>
          <li>
            <a href="http://www.fortunechain.one" target="_blank">
              <i class="lni-website"></i>
              <p>官方网站</p>
              <p class="small">http://www.fortunechain.one</p>
            </a>
          </li>
          <li>
            <a href="mailto:fortunechain008@gmail.com">
              <i class="lni-envelope"></i>
              <p>电子邮箱</p>
              <p class="small">fortunechain008@gmail.com</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/fortunechain" target="_blank">
              <i class="lni-github"></i>
              <p>开源代码地址</p>
              <p class="small">https://github.com/fortunechain</p>
            </a>
          </li>
          <li>
            <a href="https://redd.it/ayargy" target="_blank">
              <h5>Reddit</h5>
              <p class="small">https://redd.it/ayargy</p>
            </a>
            <div class="a">
              <h5>Telegram</h5>
              <p class="small">Telegram.me/fortunechain008</p>
            </div>
          </li>
          <li>
            <a href="twitter.com/fortunechain2" target="_blank" style="width: 160px;">
              <h5>Twitter</h5>
              <p class="small">twitter.com/fortunechain2</p>
            </a>
            <a href="https://steemit.com/@fortunechain008" target="_blank">
              <h5>Steemit</h5>
              <p class="small">https://steemit.com/@fortunechain008</p>
            </a>
          </li>
        </ul>
        <router-link class="logo" to="/homePage">
          <img src="../assets/images/logo_bottom.png" alt />
          <span>财富链</span>
        </router-link>
      </div>
    </div>

    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <div class="messageItems">
        <div class="msgItem">
          <div class="msg_left">
            <!-- <img src="../assets/images/bankCard.png" alt=""> -->
          </div>
          <div class="msg_right">
            <h4>aaaa</h4>
            <el-badge is-dot class="item">数据查询</el-badge>
            <div class="messageDetail">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          </div>
        </div>
        <div class="msgItem">
          <h4>aaaa</h4>
          <div class="messageDetail">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
        <div class="msgItem">
          <h4>aaaa</h4>
          <div class="messageDetail">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
        <div class="msgItem">
          <h4>aaaa</h4>
          <div class="messageDetail">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
      </div>
    </el-drawer>
    <el-drawer title="意见反馈" :visible.sync="drawer1" :with-header="false">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="反馈内容" prop="name">
          <el-input
            v-model="ruleForm.name"
            type="textarea"
            placeholder="请在这里直接填写你遇到的问题或意见建议，你的意见是我们前进的动力~"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="联系方式" prop="region">
          <el-input v-model="ruleForm.region" placeholder="请留下联系方式，以便我们将处理结果及时告知你~"></el-input>
        </el-form-item>-->
        <el-form-item label="图片上传" prop="uploadImg">
          <el-upload
            class="upload-demo"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            multiple
            :limit="30"
            :on-preview="handlePreview"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  name: "mainPage",
  data() {
    return {
      phoneShow: false,
      showList: false,
      clientHeight: "",
      centerRoute: "",
      route: "",
      login: false,
      active: "",
      active1: "",
      active2: "",
      active3: "",
      orShowApp: false,
      orShowGzh: false,
      qr_code: "",
      drawer: false,
      "is-dot": false,
      drawer1: false,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入反馈内容", trigger: "blur" },
          {
            min: 0,
            max: 200,
            message: "长度在 0 到 200 个字符",
            trigger: "blur"
          }
        ],
        region: [
          { required: true, message: "请输入联系方式", trigger: "change" }
        ]
      },
      fileList: [],
      uploadUrl: "",
      img1: "",
      imgArr: [],
      token: ""
    };
  },
  watch: {
    "$route.path"(to, from) {
      this.routeChange(to);
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize, true);
    this.handleResize();
    this.routeChange();
    this.getApp();
    this.uploadUrl = process.env.UPLOAD_URL;
    this.token = sessionStorage.getItem("token");
    //console.log(this.token, "ss");
  },
  // beforeDestroy() {
  //   sessionStorage.removeItem("user");
  //   sessionStorage.removeItem("token");
  // },
  methods: {
    handlePreview(file) {
      //console.log(file);
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    handleAvatarSuccess(res, file) {
      this.img1 = process.env.BASE_URL + res.data.path;
      // //console.log(this.img1, "ss")
      this.imgArr.push(process.env.BASE_URL + res.data.path);
      //console.log(this.imgArr);
    },
    beforeAvatarUpload(file) {
      // const isLt5M = file.size / 1024 / 1024 < 5;
      // if (!isLt5M) {
      //   this.$message.error("上传头像图片大小不能超过 5MB!");
      // }
      // return isLt5M;
    },
    submitForm(formName) {
      var that = this;
      this.$refs[formName].validate(valid => {
        // if (valid) {
        var obj = {
          token: this.token,
          content: this.ruleForm.name,
          pic: this.imgArr.join()
        };
        this.$axios.post("feedback/add", obj).then(res => {
          if (res.data.sta == 401) {
            this.$message.error("请重新登录！");
            this.$router.push("/login");
          }
          if (res.data.sta == 200) {
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            that.drawer1 = false;
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
            that.drawer1 = false;
          }
        });
        // } else {
        //   //console.log("error submit!!");
        //   return false;
        // }
      });
    },
    messageList() {
//    this.drawer = true;
    },
    feedback() {
//    this.drawer1 = true;
    },
    getApp() {
      this.$axios
        .get("app", {
          // coupon: this.num,
          // token: sessionStorage.getItem("token")
        })
        .then(res => {
          if (res.data.sta == 401) {
            this.$message.error("请重新登录！");
            this.$router.push("/login");
          } else if (res.data.sta == 200) {
            this.qr_code = res.data.data.qr_code;
          } else {
            // this.$message.error(res.data.msg);
          }
          if (res.data.sta == 1) {
            // this.pass = true;
            // this.resData = res.data.data;
          } else {
          }
        });
    },
    mouseOver(val) {
      if (val == "0") {
        this.orShowApp = true;
        this.active = "background-color:#EC7100";
      } else if (val == "1") {
        this.orShowGzh = true;
        this.active1 = "background-color:#EC7100";
      } else if (val == "2") {
        this.active2 = "background-color:#EC7100";
      } else {
        this.active3 = "background-color:#EC7100";
      }
    },
    mouseLeave(val) {
      this.active = "background-color:#fff";
      this.active1 = "background-color:#fff";
      this.active2 = "background-color:#fff";
      this.active3 = "background-color:#fff";
      this.orShowApp = false;
      this.orShowGzh = false;
    },
    routeChange(val) {
      //判断用户是否已登录
      if (sessionStorage.getItem("user")) {
        this.login = true;
      } else {
        this.login = false;
      }
      //路由切换页面回到顶部
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      //获取当前路由，来控制tab的相应样式
      var to = val;
      if (!to) {
        to = this.$route.path;
      }
      if (to == "/homePage" || to == "/noticeList" || to == "/noticeDetail") {
        this.route = "homePage";
      } else if (
        to == "/changePage" ||
        to == "/changeList" ||
        to == "/changeSure" ||
        to == "changeSuccess"
      ) {
        this.route = "changePage";
      } else if (to == "/myWallet") {
        this.route = "myWallet";
      } else if (
        to == "/personCenter" ||
        to == "/divideAgreement" ||
        to == "/kyc1" ||
        to == "/kyc2" ||
        to == "/personApply" ||
        to == "/companyApply"
      ) {
        this.route = "personCenter";
      } else if (to == "/companyPart") {
        this.route = "companyPart";
      }
    },
    handleResize() {
      var clientWidth = document.body.clientWidth;
      if (clientWidth <= 850) {
        this.phoneShow = true;
      } else {
        this.phoneShow = false;
        this.showList = false;
      }
      if (this.$route.path == "/changePage") {
        this.$refs["router-view"].lineChart();
        this.$refs["router-view"].barChart();
      }
      //获取底部高度
      if (document.body.clientHeight) {
        this.clientHeight =
          document.body.clientHeight - $(".footer").height() - 40;
      } else {
        this.clientHeight =
          document.documentElement.clientHeight - $(".footer").height() - 40;
      }
    },
    handleNav(e, id) {
      this.$refs["router-view"].scrollTop(e, id);
    },
    loginout() {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      this.login = false;
      this.$router.push("/login");
    },
    getList() {
      this.$axios.get("message/getList", { p: this.page }).then(res => {
        if (res.data.data) {
          this.noticeList = res.data.data.list;
          this.total = res.data.data.totalPage;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/line-icons.css";

.el-drawer {
  padding-top:200px;
  box-sizing: border-box
}
.suspension1 {
  position: fixed;
  width: 200px;
  right: 15px;
  top: 48%;
  z-index: 999;
  .erwerma {
    position: fixed;
    right: 80px;
  }
  .app_erweima,
  .gzh_erweima {
    width: 140px;
    height: 140px;
    background: url("../assets/images/erweima_bg.png") no-repeat center center;
    background-size: 100% 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 10px 15px 10px 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .app_erweima {
    position: fixed;
    top: 20%;
    top: 47%;
    right: 86px;
  }
  .gzh_erweima {
    position: fixed;
    top: 65%;
    right: 86px;
  }
}

.suspension {
  position: fixed;
  background: #fff;
  width: 68px;
  top: 48%;
  right: 15px;
  transform: translate(0 -50%);
  z-index: 99;
  background: #fff;
  -webkit-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.05);
  border-radius: 0px 8px 8px 8px;
  text-align: center;
  padding: 20px 0 20px 0;
  box-sizing: border-box;
  .app {
    margin-bottom: 25px;
  }

  .app,
  .gzh,
  .xiaoxi,
  .feedback {
    height: 100px;
    padding-top: 19px;
    box-sizing: border-box;
    img {
      width: 24px;
      height: 30px;
    }
    span {
      font-size: 39px;
      font-family: PingFang;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
  }
}

.content {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2000;
  background: #fff;
  .header {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1140px;
    line-height: 52px;
    .logo {
      float: left;
      display: inline-block;
      line-height: 52px;
      margin-left: 20px;
    }
    img {
      vertical-align: middle;
      width: 30px;
      height: 30px;
    }
    span {
      color: #f07e1b;
      font-size: 20px;
    }
    .icon-daohangshouqi- {
      float: right;
      margin: 10px 20px 0 0;
      width: 50px;
      line-height: 35px;
      font-size: 24px;
      color: #fff;
      background: #f07e1b;
      text-align: center;
      cursor: pointer;
    }
    ul {
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      li {
        float: left;
        margin-right: 50px;
        line-height: 28px;
        &:last-of-type {
          margin-right: 0;
        }
        a::after {
          content: "";
          display: block;
          height: 2px;
          width: 0;
          background: #f07e1b;
        }
        a:hover::after {
          content: "";
          display: block;
          height: 2px;
          width: 50%;
          background: #f07e1b;
          transition: 0.2s all linear;
        }
        .activeHeader::after {
          width: 50%;
          transition: 0.2s all linear;
        }
      }
    }
    .to-login {
      float: right;
    }
  }
}

.phone-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 55px;
  z-index: 99999;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
  background: #fff;
  ul {
    li {
      text-align: center;
      line-height: 30px;
      background: #fff;
    }
  }
  .navbar-nav {
    ul {
      border-top: 1px solid #f1f1f3;
    }
    li {
      text-align: left;
      padding-left: 20px;
      a {
        display: inline-block;
        width: 30%;
        color: #999;
        &:hover {
          color: #f07e1b;
        }
      }
    }
  }
  .activeHeader {
    display: block;
    background: #f1f1f3;
    color: #f07e1b;
  }
}

.footer {
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  .footer-content {
    position: relative;
    margin: 0 auto;
    max-width: 1110px;
    i {
      font-size: 26px;
    }
    p {
      color: #999 !important;
      line-height: 20px;
      word-wrap: break-word;
      word-break: break-all;
    }
    .left {
      float: left;
      margin: 50px 40px 0 20px;
      transform: translateY(-50%);
      p {
        line-height: 26px;
      }
    }
    ul {
      float: left;
      li {
        float: left;
        margin: 10px 10px 0;
        &:last-of-type {
          margin-right: 0;
        }
        a {
          display: block;
          width: 140px;
          color: #999;
          h5 {
            margin: 0;
            font-size: 14px;
          }
        }
        .a {
          margin-top: 10px;
          width: 180px;
          h5 {
            margin: 0;
            font-size: 14px;
          }
        }
        h5 {
          color: #999;
        }
        .small {
          font-size: 12px;
        }
      }
    }
    .logo {
      float: left;
      margin: 35px 10px 0;
      color: #999;
      font-size: 20px;
      font-weight: 700;
      img {
        vertical-align: middle;
        width: 30px;
        height: 30px;
      }
    }
  }
}

.messageItems {
  .msgItem {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    // text-align: center;
    padding: 10px 20px 10px 20px;
    box-sizing: border-box;
    h4 {
      font-size: 16px;
      color: #333;
    }
    .messageDetail {
      font-size: 14px;
      color: #333;
      // padding: 10 20px 0 20px;
      box-sizing: border-box;
    }
  }
}
// .el-drawer__body{
//   width:100%;
//  padding: 50px 0 0 0;
//       box-sizing: border-box;
// }
</style>
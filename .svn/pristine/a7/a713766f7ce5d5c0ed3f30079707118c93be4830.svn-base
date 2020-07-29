<template>
  <div style="overflow: auto">
    <div class="content" :style="$route.path=='/homePage'?'border-bottom:1px solid #f1f1f3':'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16)'">
      <div class="header">
          <router-link class="logo" to="/homePage">
          <img src="../assets/images/logo.png" alt="">
          <span>财富链</span>
        </router-link>
        <ul v-if="!phoneShow">
          <li><router-link :class="route=='homePage'?'activeHeader':''" to="/homePage">首页</router-link></li>
          <li><router-link :class="route=='changePage'?'activeHeader':''" to="/changePage">置换</router-link></li>
          <li><router-link :class="route=='myWallet'?'activeHeader':''" to="/myWallet">我的钱包</router-link></li>
          <li><router-link :class="route=='companyPart'?'activeHeader':''" to="/companyPart">企业合作</router-link></li>
          <li><router-link :class="route=='personCenter'?'activeHeader':''" to="/personCenter">个人中心</router-link></li>
        </ul>
        <div class="to-login" v-if="!phoneShow">
          <el-button type="primary" size="small" style="line-height: 26px;padding: 0 15px;"  v-if="!login" @click="$router.push('/login')">登录</el-button>
          <el-button type="primary" size="small" style="line-height: 26px;padding: 0 15px;" v-else plain @click="loginout">退出登录</el-button>
          <el-button type="primary" size="small" style="line-height: 26px;padding: 0 15px;" plain @click="$router.push('/register')">注册</el-button>
          <!--<span style="color: #333;">English</span>-->
        </div>
          <i class="iconfont icon-daohangshouqi-" v-if="phoneShow" @click="showList = !showList"></i>
      </div>
    </div>
      <div class="phone-nav">
          <el-collapse-transition>
              <div v-show="showList" style="padding: 20px 0;" @click="showList=false">
                  <ul>
                      <li><router-link :class="route=='homePage'?'activeHeader':''" to="/homePage">首页</router-link></li>
                      <li><router-link :class="route=='changePage'?'activeHeader':''" to="/changePage">置换</router-link></li>
                      <li><router-link :class="route=='myWallet'?'activeHeader':''" to="/myWallet">我的钱包</router-link></li>
                      <li><router-link :class="route=='companyPart'?'activeHeader':''" to="/companyPart">企业合作</router-link></li>
                      <li><router-link :class="route=='personCenter'?'activeHeader':''" to="/personCenter">个人中心</router-link></li>
                      <li v-if='!login'><router-link :class="route=='Login'?'activeHeader':''" to="/login">登录</router-link></li>
                      <li v-else @click="loginout"><router-link :class="route=='Login'?'activeHeader':''" to="">退出登录</router-link></li>
                      <li><router-link :class="route=='Register'?'activeHeader':''" to="/register">注册</router-link></li>
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
    <div @click="showList=false">
      <router-view ref="router-view" :style="'min-height:' + clientHeight + 'px'"/>
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
          <img src="../assets/images/logo_bottom.png" alt="">
          <span>财富链</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import router from '../router/index'
    export default {
        name: "mainPage",
        data() {
            return {
                phoneShow:false,
                showList:false,
                clientHeight:'',
                centerRoute:'',
                route:'',
                login:false
            }
        },
        watch: {
            '$route.path'(to,from) {
                this.routeChange(to)
            }
        },
        mounted() {
            window.addEventListener('resize',this.handleResize,true)
            this.handleResize();
            this.routeChange();
        },
        beforeDestroy() {
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('token')
        },
        methods: {
            routeChange(val) {
              //判断用户是否已登录
                if(sessionStorage.getItem('user')) {
                  this.login = true;
                }else {
                  this.login = false
                } 
                //路由切换页面回到顶部
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;

                //获取当前路由，来控制tab的相应样式
                var to = val;
                if(!to) {
                    to = this.$route.path;
                }
                if(to == '/homePage' || to == '/noticeList' || to == '/noticeDetail') {
                    this.route = 'homePage'
                }else if(to == '/changePage' || to == '/changeList' || to == '/changeSure' || to == 'changeSuccess') {
                    this.route = 'changePage'
                }else if(to == '/myWallet') {
                    this.route = 'myWallet'
                }else if(to == '/personCenter' || to == '/divideAgreement' || to == '/kyc1' || to == '/kyc2' || to == '/personApply' || to == '/companyApply') {
                    this.route = 'personCenter'
                }else if(to == '/companyPart') {
                    this.route = 'companyPart'
                }
            },
            handleResize() {
                var clientWidth = document.body.clientWidth;
                if(clientWidth<=850) {
                    this.phoneShow = true;
                }else {
                    this.phoneShow = false;
                    this.showList = false;
                }
                if(this.$route.path == '/changePage') {
                    this.$refs['router-view'].lineChart()
                    this.$refs['router-view'].barChart()
                }
                //获取底部高度
                if(document.body.clientHeight) {
                    this.clientHeight = document.body.clientHeight - $('.footer').height() - 40;
                }else {
                    this.clientHeight = document.documentElement.clientHeight - $('.footer').height() - 40;
                }

            },
            handleNav(e,id) {
                this.$refs['router-view'].scrollTop(e,id)
            },
            loginout() {
              sessionStorage.removeItem('user');
              sessionStorage.removeItem('token');
              this.login = false;
              this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/style/line-icons.css";

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
            margin:10px 20px 0 0;
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
            content:"";
            display: block;
            height: 2px;
            width: 0;
            background: #f07e1b;
          }
          a:hover::after{
            content:"";
            display: block;
            height: 2px;
            width: 50%;
            background: #f07e1b;
            transition: .2s all linear;
          }
          .activeHeader::after {
            width: 50%;
            transition: .2s all linear;
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
                  };
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
    background: rgba(0,0,0,.8);
    .footer-content {
      position: relative;
      margin: 0 auto;
      max-width: 1110px;
      i {
        font-size: 26px ;
      }
      p {
        color: #999!important;
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
        font-size: 20px ;
        font-weight: 700;
        img {
          vertical-align: middle;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
</style>

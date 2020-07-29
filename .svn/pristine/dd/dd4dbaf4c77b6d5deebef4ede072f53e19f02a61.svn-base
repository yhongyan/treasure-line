<template>
    <div class="login clear">
        <img src="../assets/images/login_bg.jpg" v-if="bigImg" style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt=""/>
        <img src="../assets/images/login_bg.png" v-else style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt=""/>
        <div class="form">
            <div class="radio">
                <el-radio-group v-model="radio">
                    <el-radio-button label="eos账号用户登录"></el-radio-button>
                    <el-radio-button label="手机号用户登录"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="form-content" v-if="radio == 'eos账号用户登录'">
                <h3>登录</h3>
                <p class="title">邀请好友注册获得100红股</p>
                <div class="phone">
                    <el-input v-model="formData.eos" placeholder="请输入您的用户名（EOS账号）"></el-input>
                </div>
                <div class="pwd">
                    <el-input v-model="formData.pwd" placeholder="请输入密码，至少8位" show-password></el-input>
                </div>
                <router-link to="/forgetPassword" class="forget">忘记密码？</router-link>
                <el-button type="primary" style="width: 100%;margin: 30px 0 0;" @click="subLogin">登录</el-button>
                <router-link to="/register" class="forget">还没有财富链账号？去注册</router-link>
            </div>
            <div class="form-content" v-else>
                <h3>登录</h3>
                <p class="title">邀请好友注册获得100红股</p>
                <div class="phone">
                    <el-input v-model="formData1.mobile" placeholder="请输入您的用户名（手机号）"></el-input>
                </div>
                <div class="pwd">
                    <el-input v-model="formData1.password" placeholder="请输入密码，至少8位" show-password></el-input>
                </div>
                <router-link to="/forgetPasswordTest" class="forget">忘记密码？</router-link>
                <el-button type="primary" style="width: 100%;margin: 30px 0 0;" @click="subLoginTest">登录</el-button>
                <router-link to="/registerTest" class="forget">还没有财富链账号？去注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                formData:{

                },
                bigImg:true,
                radio:'手机号用户登录',
                formData1:{}
            }
        },
        watch: {
            radio(val) {
                if(val == 'eos账号用户登录') {
                    this.$router.push({path:'/login',query:{type:2}})
                }else {
                    this.$router.push({path:'/login',query:{type:1}})
                }
            }
        },
        mounted() {
            if(this.$route.query.type == 2) {
                this.radio = 'eos账号用户登录'
            }
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('token');
            window.addEventListener('resize',this.handleResize,true)
            this.handleResize();
        },
        methods: {
            handleResize() {
                var clientWidth = document.body.clientWidth;
                if(clientWidth<=850) {
                    this.bigImg = false;
                }else {
                    this.bigImg = true;
                }
            },
            subLogin() {
                if(!this.formData.eos) {
                    this.$message.error('请输入用户名！');
                }else if(!this.formData.pwd || this.formData.pwd.length < 8) {
                    this.$message.error('请输入正确的密码格式！');
                }else {
                    var params = {
                        username:this.formData.eos,
                        password:this.formData.pwd
                    }
                    this.$axios.post('tourist/login',params).then(res => {
                        if(res.data.sta == 1) {
                            this.$message({
                                message: '登录成功！',
                                type: 'success',
                                showClose: true
                            });
                            sessionStorage.setItem('user',JSON.stringify(res.data.user))
                            sessionStorage.setItem('token',res.data.user.token)
                            sessionStorage.setItem('loginLabel','eosLogin')
                            setTimeout(() => {
                                this.$router.push('/homePage')
                            },200)
                        }else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });
                        }
                    })
                }
            },
            subLoginTest() {
                if(!this.formData1.mobile) {
                    this.$message.error('请输入手机号！');
                }else if(!this.formData1.password || this.formData1.password.length < 8) {
                    this.$message.error('请输入正确的密码格式！');
                }else {
                    this.$axios.post('login/mobileLogin',{...this.formData1}).then(res => {
                        if(res.data.sta == 200) {
                            this.$message({
                                message: '登录成功！',
                                type: 'success',
                                showClose: true
                            });
                            sessionStorage.setItem('user',JSON.stringify(res.data.data))
                            sessionStorage.setItem('token',res.data.data.token)
                              sessionStorage.setItem('loginLabel','phoneLogin')
                            // console.log(JSON.stringify(res.data.data))
                            setTimeout(() => {
                                this.$router.push('/homePage')
                            },200)
                        }else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        padding-top: 56px;
        /*position: relative;*/
        /*height: 600px;*/
        .radio {
            /*margin: 70px 0 30px;*/
            text-align: center;
        }
        .form {
            /*<!--clear: both;-->*/
            /*<!--position: absolute;-->*/
            /*<!--top: 130px;-->*/
            /*<!--left: 50%;-->*/
            /*<!--transform: translateX(-50%);-->*/
            max-width: 480px;
            min-width: 320px;
            margin: 70px auto 20px;
            padding: 10px 0 20px;
            background: #fff;
            border-radius: 3px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
            .form-content {
                width: 90%;
                margin: 20px auto 90px;
                text-align: center;
                h3 {
                    margin: 0 0 10px;
                    font-size: 30px;
                    color: #303133;
                }
                .title {
                    font-size: 18px;
                    color: #f07e1b;
                }
                .phone {
                    margin: 30px 0 20px;
                }
                .forget {
                    font-size: 14px;
                    color: #409eff;
                    float: right;
                    margin-top: 20px;
                }
            }
        }
    }
</style>
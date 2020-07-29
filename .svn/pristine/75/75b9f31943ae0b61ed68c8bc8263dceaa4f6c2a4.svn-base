<template>
    <div class="login clear">
        <img src="../assets/images/login_bg.jpg" v-if="bigImg" style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt=""/>
        <img src="../assets/images/login_bg.png" v-else style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt=""/>
        <div class="form">
            <div class="form-content">
                <h3>重置密码</h3>
                <el-steps :active="active" finish-status="success" simple style="margin: 40px auto;width: 90%;">
                    <el-step title="1、验证手机号" ></el-step>
                    <el-step title="2、重置密码" ></el-step>
                </el-steps>
                <div class="check-phone" v-if="active==0">
                    <el-input v-model="formData.mobile" placeholder="请输入您的注册手机号"></el-input>
                    <div style="margin: 10px 0;overflow: hidden">
                        <el-input v-model="formData.code" style="width: 60%;float:left;" placeholder="请输入验证码"></el-input>
                        <el-button style="width: 35%;float: right" v-if="second != 0">{{second}}s后重新获取</el-button>
                        <el-button style="width: 35%;float: right" @click="getCode" v-else>获取验证码</el-button>
                    </div>
                    <div style="margin: 30px 0 0">
                        <el-button type="primary" style="width: 100%" @click="next">下一步</el-button>
                    </div>
                    <router-link to="/register" class="forget">还没有财富链账号？去注册</router-link>
                </div>
                <div style="max-width: 400px;margin: 0 auto;" v-else>
                    <el-input v-model="formData.newpassword" style="margin-bottom:20px" placeholder="请输入新的登录密码，至少8位" show-password></el-input>
                    <el-button type="primary" style="width: 100%;margin: 30px 0 0;" @click="changePwd">重置并重新登陆</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import phoneList from '../assets/json/phone'
    export default {
        name: "login",
        data() {
            return {
                formData:{
                    // phone_befor:'+86'
                },
                options:[],
                active:0,
                bigImg:true,
                second:0,
                code:''
            }
        },
        mounted() {
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
            getCode() {
                var reg = new RegExp(/^\d{11,11}$/);
                if(!reg.test(this.formData.mobile)) {
                    this.$message.error('输入的手机号格式不正确！');
                }else {
                    this.second = 60;
                    this.timeOut()
                    this.$axios.get('register/code',{mobile:this.formData.mobile}).then(res => {
                        if(res.data.sta == 200) {
                            this.code = res.data.data;
                        }else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            timeOut() {
                setTimeout(() => {
                    this.second--;
                    if(this.second > 0) {
                        this.timeOut()
                    }
                },1000)
            },
            next() {
                if(!this.formData.code) {
                    this.$message.error('请先获取验证码！');
                }else if(this.formData.code != this.code) {
                    this.$message.error('验证码不正确！');
                }else {
                    this.active = 1
                }
            },
            changePwd() {
                if(!this.formData.newpassword || this.formData.newpassword.length < 8) {
                    this.$message.error('请输入正确的登录密码格式！');
                }else {
                    this.$axios.post('login/resetPassword',{...this.formData}).then(res => {
                        if(res.data.sta == 200) {
                            this.$message({
                                message: '修改成功，请重新登录！',
                                type: 'success'
                            });
                            sessionStorage.removeItem('user')
                            setTimeout(() => {
                                this.$router.push({path:'/login',query:{type:1}})
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
        .form {
            /*<!--clear: both;-->*/
            /*<!--position: absolute;-->*/
            /*<!--top: 130px;-->*/
            /*<!--left: 50%;-->*/
            /*<!--transform: translateX(-50%);-->*/
            max-width: 680px;
            margin: 70px auto 20px;
            padding: 10px 0 20px;
            /*min-width: 320px;*/
            background: #fff;
            border-radius: 3px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
            .form-content {
                width: 90%;
                margin: 40px auto 90px;
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
                .check-phone {
                    max-width: 400px;
                    margin: 0 auto;
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
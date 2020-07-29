<template>
    <div class="login clear">
        <img src="../assets/images/login_bg.jpg" v-if="bigImg" style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt=""/>
        <img src="../assets/images/login_bg.png" v-else style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt=""/>
        <div class="form">
            <div class="form-content">
                <h3>绑定eos账号</h3>
                <p class="title">邀请好友获得更多</p>
                <div class="phone">
                    <el-input v-model="formData.username" placeholder="请输入常用EOS账号作为您的用户名"></el-input>
                </div>
<!--                <div style="margin-bottom: 10px;">-->
<!--                    <el-input v-model="formData.fyaoqingma" placeholder="请输入邀请码（必填）"></el-input>-->
<!--                </div>-->
                <div style="margin-bottom: 10px;">
                    <el-input v-model="formData.paypassword" placeholder="请设定您的资金密码，至少6位数字" show-password></el-input>
                </div>
                <el-button type="primary" style="width: 100%;margin: 10px 0 0;" @click="register">绑定</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "login",
        data() {
            return {
                formData:{
                    yaoqing:''
                },
                checked:true,
                honggu:'',
                bigImg:true
            }
        },
        mounted() {
            if(this.$route.query.i) {
                this.formData.yaoqing = this.$route.query.i;
            }
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
            register() {
                if(!this.checked) {
                    this.$message({
                        message: '请阅读用户注册协议并同意！',
                        type: 'warning'
                    });
                    return
                }
                var reg = new RegExp(/^\d{6,}$/);
                if(!this.formData.username) {
                    this.$message.error('请输入EOS账号！');
                }else if(this.formData.username.length != 12) {
                    this.$message.error('输入的EOS账号格式不正确！');
                }else if(!reg.test(this.formData.paypassword)) {
                    this.$message.error('请输入正确的资金密码格式！');
                }else {
                    this.$axios.get('tourist/iseos',{eoscode:this.formData.username}).then(res => {
                        if(res.data.errno ==0 && res.data.data.tokens.length != 0) {
                            this.sureRegister()
                        }else {
                            this.$message.error('输入的EOS账号错误或不存在！');
                        }
                    })
                
                }
            },
            sureRegister() {
                var params = {
                    username:this.formData.username,
                    paypassword:this.formData.paypassword,
                    token:sessionStorage.getItem('token')
                }
                this.$axios.post('register/upgrade',params).then(res => {
                    if(res.data.sta == 200) {
                        this.$message({
                            message: '绑定成功！',
                            type: 'success'
                        });
                        sessionStorage.removeItem('user');
                        sessionStorage.removeItem('token');
                        setTimeout(() => {
                            this.$router.push('/login')
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
            max-width: 480px;
            min-width: 320px;
            margin: 70px auto 20px;
            padding: 10px 0 20px;
            background: #fff;
            border-radius: 3px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
            .form-content {
                width: 80%;
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
                .phone {
                    margin: 30px 0 10px;
                }
                .forget {
                    font-size: 14px;
                    color: #409eff;
                    float: right;
                    margin-top: 20px;
                }
                .test {
                    font-size: 14px;
                    color: #409eff;
                    float: left;
                    margin-top: 20px;
                }
                .rule {
                    text-align: left;
                    a {
                        color: #409eff;
                    }
                }
            }
        }
    }
</style>
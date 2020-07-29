<template>
    <div class="login clear">
        <img src="../assets/images/login_bg.jpg" v-if="bigImg" style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt=""/>
        <img src="../assets/images/login_bg.png" v-else style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt=""/>
        <div class="form">
            <div class="form-content">
                <h3>重置密码</h3>
                <el-steps :active="active" finish-status="success" simple style="margin: 40px auto;width: 90%;">
                    <el-step title="1、验证邮箱" ></el-step>
                    <el-step title="2、重置密码" ></el-step>
                </el-steps>
                <div class="check-phone" v-if="active==0">
                    <el-input v-model="formData.email" placeholder="请输入您的注册邮箱"></el-input>
                    <el-button type="primary" style="width: 100%;margin: 30px 0 0;" @click="sureEmail">打开邮箱验证</el-button>
                    <router-link to="/register" class="forget">还没有财富链账号？去注册</router-link>
                </div>
                <div style="max-width: 400px;margin: 0 auto;" v-else>
                    <el-input v-model="formData.pwd" style="margin-bottom:20px" placeholder="请输入新的登录密码，至少8位" show-password></el-input>
                    <el-input v-model="formData.payPwd" placeholder="请输入新的交易密码，至少6位数字" show-password></el-input>
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
                bigImg:true
            }
        },
        mounted() {
            this.options = phoneList;
            if(this.$route.query.email && this.$route.query.unid) {
                this.active = 1
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
            sureEmail() {
                if(this.checkEmail()) {
                     this.$axios.get('tourist/findpwd',{email:this.formData.email}).then(res => {
                        if(res.data.sta == 1) {
                            this.$message({
                                message: '发送成功，请前往邮箱验证！',
                                type: 'success'
                            });
                        }else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });
                        }
                    })
                }
            },
            checkEmail() {
            　　var myemail=this.formData.email;
            　　var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
            
            　　if(myReg.test(myemail)){
            　　　　return true;
            　　}else{
                    this.$message.error('输入的邮箱格式不正确！')
            　　　　return false;
                }
            },
            changePwd() {
                 var reg = new RegExp(/^\d{6,}$/);
                if(!this.formData.pwd || this.formData.pwd.length < 8) {
                    this.$message.error('请输入正确的登录密码格式！');
                } else if(!reg.test(this.formData.payPwd)) {
                    this.$message.error('请输入正确的交易密码格式！');
                } else {
                    var params = {
                        password:this.formData.pwd,
                        paypassword:this.formData.payPwd,
                        email:this.formData.email
                    }
                    this.$axios.post('tourist/editpwd',params).then(res => {
                        if(res.data.sta == 1) {
                            this.$message({
                                message: '修改成功，请重新登录！',
                                type: 'success'
                            });
                            sessionStorage.removeItem('user')
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
<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/personCenter">个人中心</router-link> > <router-link to="">申请志愿者</router-link></p>
        </div>
        <div class="list">
            <h4>志愿者申请表</h4>
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                    <div class="row">
                        <div class="col-lg-6 cold--md-6 col-sm-12">
                            <el-form-item label="姓名" prop="name">
                                <el-input placeholder="请输入姓名" v-model="ruleForm.name"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-lg-5 cold--md-5 col-sm-12">
                            <el-form-item label="手机号" prop="tel">
                                <el-input placeholder="请输入手机号码" v-model="ruleForm.tel"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 cold--md-6 col-sm-12">
                            <el-form-item label="微信" prop="weixin">
                                <el-input placeholder="请输入微信" v-model="ruleForm.weixin"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-lg-5 cold--md-5 col-sm-12">
                            <el-form-item label="邀请码" prop="yaoqingma">
                                <el-input placeholder="请输入邀请码" v-model="ruleForm.yaoqingma" :disabled="true"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 cold--md-6 col-sm-12">
                            <el-form-item label="推广码" prop="tuiguangma">
                                <el-input placeholder="请输入推广码" v-model="ruleForm.tuiguangma" :disabled="true"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-lg-5 cold--md-5 col-sm-12">
<!--                            <p style="margin-left: 20px;">（如果无推广码，可填写通用推广码cfl12345）</p>-->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 cold--md-12 col-sm-12">
                            <el-form-item label="邮箱" prop="email">
                                <el-input placeholder="请输入邮箱" v-model="ruleForm.email"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="haxi">
                        <p>接收奖励TITT账户地址</p>
                        <el-form-item label="" prop="link" style="margin-left: -12px;">
                            <el-input placeholder="请输入接收奖励TITT地址" v-model="ruleForm.link"></el-input>
                        </el-form-item>
                    </div>
                    <div class="two-code">
                        <p class="title">接收奖励TITT地址二维码</p>
                        <div class="upload clear">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess1"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="img1" :src="img1" alt=""/>
                                <div class="label" v-else>
                                    <i class="iconfont icon-jia"></i>
                                    <span>点击上传二维码</span>
                                </div>
                            </el-upload>
                            <div class="text">
                                <p>*可上传jpg、jpeg、png格式。</p>
                                <p>*照片容量不得超过5M.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="upload-img col-lg-6 col-md-6 col-sm-12">
                            <p>个人身份证正面照片</p>
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess2"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="img2" :src="img2" alt=""/>
                                <img v-else src="../assets/images/shenfenzheng-1.jpg" alt=""/>
                            </el-upload>
                        </div>
                        <div class="upload-text clear col-lg-6 col-md-6 col-sm-12">
                            <div class="text">
                                <p>*可上传jpg、jpeg、png格式。</p>
                                <p>*照片容量不得超过5M.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 20px;">
                        <div class="upload-img col-lg-6 col-md-6 col-sm-12">
                            <p>个人身份证背面照片</p>
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess3"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="img3" :src="img3" alt=""/>
                                <img v-else src="../assets/images/shenfenzheng-2.jpg" alt=""/>
                            </el-upload>
                        </div>
                        <div class="upload-text clear col-lg-6 col-md-6 col-sm-12">
                            <div class="text">
                                <p>*可上传jpg、jpeg、png格式。</p>
                                <p>*照片容量不得超过5M.</p>
                            </div>
                        </div>
                    </div>
                    <div style="text-align: center;margin-top: 30px;">
                        <el-button type="primary" style="width: 220px;" @click="subApply">提交申请</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "notice-list",
        data() {
            return {
                ruleForm:{
                    yaoqingma:'',
                    tuiguangma:''
                },
                rules: {
                    name: [
                        { required: true, message : '请输入姓名', trigger: 'blur' }
                    ],
                    tel: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                    weixin: [
                        { required: true, message: '请输入微信号', trigger: 'blur' },
                    ],
                    yaoqingma: [
                        { required: true, message: '请输入您的邀请码', trigger: 'blur' },
                    ],
                    tuiguangma: [
                        { required: true, message: '请输入您的推广码', trigger: 'blur' },
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    ],
                    link: [
                        { message: '请输入接收奖励TITT地址', trigger: 'blur' },
                    ]
                },
                img1:'',
                img2:'',
                img3:'',
                uploadUrl:''
            }
        },
        mounted() {
            this.uploadUrl = process.env.UPLOAD_URL;
            if(sessionStorage.getItem('token')) {
                this.getCode()
            }
        },
        methods: {
            getCode() {
                this.$axios.get('userinfo/getUserinfo',{token:sessionStorage.getItem('token')}).then(res => {
                    if(res.data.data) {
                        res.data
                        this.ruleForm.yaoqingma = res.data.data.fyaoqingma;
                        this.ruleForm.tuiguangma = res.data.data.ftuiguangma
                    }
                })
            },
            handleAvatarSuccess1(res, file) {
                this.img1 = process.env.BASE_URL + res.data.path;
            },
            handleAvatarSuccess2(res, file) {
                this.img2 = process.env.BASE_URL + res.data.path;
            },
            handleAvatarSuccess3(res, file) {
                this.img3 = process.env.BASE_URL + res.data.path;
            },
            beforeAvatarUpload(file) {
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.$message.error('上传头像图片大小不能超过 5MB!');
                }
                return isLt5M;
            },
            subApply() {
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        if(!this.img1 || !this.img2 || !this.img3) {
                            this.$message({
                                message: '请上传相关图片！',
                                type: 'error'
                            });
                        }else {
                            var params = {...this.ruleForm};
                            params.card2 = this.img3
                            params.erweima = this.img1;
                            params.card1 = this.img2;
                            params.token = sessionStorage.getItem('token');
                            this.$axios.post('user/zhiyuanzhe',params).then(res => {
                                if(res.data.sta == 401) {
                                    this.$message.error("请重新登录！");
                                    this.$router.push('/login')
                                }
                                if(res.data.sta == 1) {
                                    this.$message({
                                        message: '提交成功！',
                                        type: 'success'
                                    });
                                    this.$router.push('/personCenter')
                                }else {
                                    this.$message({
                                        message: res.data.msg,
                                        type: 'error'
                                    });
                                }
                            })
                        }
                    } else {
                        this.$message({
                            message: '请输入正确信息',
                            type: 'error'
                        });
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notice-list {
        margin: 75px auto 20px;
        max-width: 960px;
        .nav-top {
            p {
                float: right;
                font-size: 14px;
                a {
                    color: #409eff;
                }
            }
        }
        .list {
            margin: 20px auto;
            padding: 34px 0 40px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
            border-radius: 3px;
            h4 {
                margin: 40px 0 60px;
                font-size: 30px;
                color: #303133;
                text-align: center;
            }
            .form {
                width: 90%;
                margin: 0 auto;
                .col-sm-12 .short-input {
                    width: 90%;
                }
                .two-code {
                    margin-bottom: 20px;
                    padding-left: 14px;
                    .title {
                        color: #606266;
                    }
                    .upload {
                        position: relative;
                        img {
                            float: left;
                            width: 180px;
                            height: 180px;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                        .avatar-uploader {
                            float: left;
                            margin-top: 10px;
                            width: 180px;
                            height: 180px;
                            border: 1px solid #d9d9d9;
                            border-radius: 5px;
                            background: #ecf5ff;
                            text-align: center;
                            cursor: pointer;
                            .label {
                                margin-top: 50px;
                            }
                            i {
                                font-size: 30px;
                            }
                            span {
                                display: block;
                                margin-top: 20px;
                                color: #909399;
                                font-size: 14px;
                            }
                        }
                        .text {
                            position: absolute;
                            left: 200px;
                            top: 50%;
                            transform: translateY(-50%);
                            p {
                                color: #c2c7ce;
                                word-wrap: break-word;
                            }
                        }
                    }
                }
                .haxi {
                    padding-left: 14px;
                    margin-bottom: 20px;
                    p {
                        float: left;
                        width: 68px;
                        line-height: 20px;
                        color: #606266;
                    }
                }
                .rule {
                    text-align: center;
                    a {
                        color: #409eff;
                    }
                }
                .upload-img {
                    margin-left: 15px;
                    p {
                        margin-bottom: 10px;
                    }
                    img {
                        width: 276px;
                        height: 180px;
                        cursor: pointer;
                    }
                }
                .upload-text {
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .text {
                        p {
                            font-size: 14px;
                            color: #c2c7c1;
                        }
                    }
                }
            }

        }
    }
</style>
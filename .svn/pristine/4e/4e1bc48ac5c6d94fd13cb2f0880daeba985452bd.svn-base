<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/personCenter">个人中心</router-link> > <router-link to="/personApply">个人抵押TITT申请表</router-link></p>
        </div>
        <div class="list">
            <h4>个人抵押TITT申请表</h4>
            <p style="margin: 0px auto 20px;text-align: center;color: #f07e1b;" v-if="show">（如需提交申请，请先注册登录）</p>
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                    <div class="row">
                        <div class="col-lg-6 cold--md-6 col-sm-12">
                            <el-form-item label="活动名称">
                                <el-input placeholder="请输入活动名称" v-model="name" :disabled="true"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 cold--md-6 col-sm-12">
                            <el-form-item label="活动日期">
                                <el-date-picker
                                        style="width: 100%;"
                                        v-model="date"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :disabled="true">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-9 cold--md-9 col-sm-12">
                            <el-form-item label="抵押数量" prop="num">
                                <el-input placeholder="请输入您的抵押数量" style="max-width: 337px" v-model="ruleForm.num" :disabled="true"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-9 cold--md-9 col-sm-12">
                            <el-form-item label="抵押期限" prop="qixian">
                                <el-input placeholder="请输入您的抵押期限" class="short-input" style="max-width: 337px;" v-model="diyaqixian" :disabled="true"></el-input>
                                <span style="font-size: 14px;">月</span>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 cold--md-12 col-sm-12">
                            <el-form-item label="抵押奖励" prop="id_code" style="width: 100%;float: left;">
                                <el-input placeholder="请输入内容" class="short-input" style="max-width: 337px;width: 80%;" v-model="yuejiangli" :disabled="true"></el-input>
                                <span style="font-size: 14px;">贡献值</span>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="haxi" style="margin-bottom: 40px;">
                        <p>接收抵押官方TITT账号</p>
                        <span>fortunetitt3</span>
                    </div>
                    <div class="two-code">
                        <p class="title">接收抵押官方TITT二维码</p>
                        <div class="upload clear">
                            <img src="../assets/images/paytitt.png" alt=""/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 cold--md-6 col-sm-12">
                            <el-form-item label="memo" prop="memo">
                                <el-input placeholder="请输入6位数标签数字" v-model="ruleForm.memo"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 cold--md-6 col-sm-12">
                            <el-form-item label="参与账号" prop="canyuzhanghao">
                                <el-input placeholder="请输入参与账号" v-model="ruleForm.canyuzhanghao"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="two-code">
                        <p class="title">参与抵押TITT的账号收款二维码</p>
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
                                    <span>点击上传账号二维码截图</span>
                                </div>
                            </el-upload>
                            <div class="text">
                                <p>*可上传jpg、jpeg、png格式。</p>
                                <p>*照片容量不得超过5M.</p>
                            </div>
                        </div>
                    </div>
                    <div class="haxi">
                        <p>转账TITT交易哈希号</p>
                        <el-form-item label="" prop="haxihao">
                            <el-input placeholder="请输入转账TITT交易哈希号" v-model="ruleForm.haxihao" style="max-width: 337px"></el-input>
                        </el-form-item>
                    </div>
                    <div class="two-code">
                        <p class="title">交易号截图</p>
                        <div class="upload clear">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess2"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="img2" :src="img2" alt=""/>
                                <div class="label" v-else>
                                    <i class="iconfont icon-jia"></i>
                                    <span>点击上传交易号截图</span>
                                </div>
                            </el-upload>
                            <div class="text">
                                <p>*可上传jpg、jpeg、png格式。</p>
                                <p>*照片容量不得超过5M.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 cold--md-6 col-sm-12">
                            <el-form-item label="邀请码" prop="yaoqingma">
                                <el-input placeholder="请输入邀请码" v-model="ruleForm.yaoqingma" :disabled="true"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-lg-5 cold--md-5 col-sm-12">
                            <el-form-item label="推广码" prop="tuiguangma">
                                <el-input placeholder="请输入推广码" v-model="ruleForm.tuiguangma" :disabled="true"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <p class="rule">
                        <el-checkbox v-model="checked"></el-checkbox>
                        我已阅读并同意
                        <router-link to="/divideAgreement?type=person" target="_blank">《个人用户抵押说明文件》</router-link>
                    </p>
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
                    tuiguangma:'',
                    num:''
                },
                name:'20190403第一抵押分红活动',
                date:['2019-05-06','2020-03-06'],
                diyaqixian:'6',
                yuejiangli:'12',
                nianjiangli:'8',
                yuejiesuo:'12',
                nianjiesuo:'8',
                rules: {
                    canyuzhanghao: [
                        { required: true, message : '请输入参与账号', trigger: 'blur' }
                    ],
                    memo: [
                        { required: true, message : '请输入6位数标签数字', trigger: 'blur' },
                        { min: 6, max: 6, message: '请输入6位数标签数字', trigger: 'blur' }
                    ],
                    haxihao: [
                        { required: true, message: '请输入您的哈希号', trigger: 'blur' }
                    ],
                    yaoqingma: [
                        { required: true, message: '请输入您的邀请码', trigger: 'blur' },
                    ],
                    tuiguangma: [
                        { required: true, message: '请输入推广码', trigger: 'blur' },
                    ]
                },
                checked:true,
                img1:'',
                img2:'',
                show:true,
                uploadUrl:''
            }
        },
        mounted() {
            this.uploadUrl = process.env.UPLOAD_URL;
            if(sessionStorage.getItem('user')) {
                this.show = false
                this.getCode()
            }else {
                this.show = true
            }
            this.getHuodongInfo()
        },
        methods: {
            getCode() {
                this.$axios.get('userinfo/getUserinfo',{token:sessionStorage.getItem('token')}).then(res => {
                    if(res.data.data) {
                        this.ruleForm.yaoqingma = res.data.data.fyaoqingma;
                        this.ruleForm.tuiguangma = res.data.data.ftuiguangma
                    }
                })
            },
            timeTrans(val) {
                function add0(m){return m<10?'0'+m:m };
                if(val) {
                    var time = new Date(val*1000);
                    var y = time.getFullYear();
                    var m = time.getMonth()+1;
                    var d = time.getDate();
                    var h = time.getHours();
                    var mm = time.getMinutes();
                    var s = time.getSeconds();
                    return y+'-'+add0(m)+'-'+add0(d);
                }
            },
            getHuodongInfo() {
                if(this.$route.query.detail) {
                    var detail = JSON.parse(this.$route.query.detail);
                    console.log(detail);
                    this.name = detail.title;
                    this.date = [ this.timeTrans(detail.time1),this.timeTrans(detail.time2)];
                    this.yuejiangli = detail.jiangliyue;
                    this.nianjiangli = detail.jianglitian;
                    this.diyaqixian = detail.qixian;
                    this.yuejiesuo = detail.jiesuoyue;
                    this.nianjiesuo = detail.jiesuotian;
                    this.ruleForm.num = detail.maxtitt + 'TITT';

                }
            },
            handleAvatarSuccess1(res, file) {
                this.img1 = process.env.BASE_URL + res.data.path;
            },
            handleAvatarSuccess2(res, file) {
                this.img2 = process.env.BASE_URL + res.data.path;
            },
            beforeAvatarUpload(file) {
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.$message.error('上传头像图片大小不能超过 5MB!');
                }
                return isLt5M;
            },
            subApply() {
                if(!sessionStorage.getItem('user')) {
                    this.$message({
                        message: '请先登录！',
                        error: 'info'
                    });
                    this.$router.push('/login');
                    return false
                }
                if(!this.checked) {
                    this.$message({
                        message: '请阅读抵押协议并同意！',
                        type: 'warning'
                    });
                }else{
                    this.$refs['ruleForm'].validate((valid) => {
                        if (valid) {
                            if(!this.img1 || !this.img2) {
                                this.$message({
                                    message: '请上传相关截图！',
                                    type: 'error'
                                });
                            }else {
                                var params = {...this.ruleForm};
                                params.huodongid = JSON.parse(sessionStorage.getItem('user')).username;
                                params.fenhong = JSON.parse(this.$route.query.detail).id;
                                params.canyuerweima = this.img1;
                                params.jiaoyihaojietu = this.img2;
                                params.qixian = this.diyaqixian;
                                params.f = 1;
                                params.token = sessionStorage.getItem('token');
                                this.$axios.post('Huodong/setHuoDong',params).then(res => {
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
                margin: 40px 0 20px;
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
                        width: 80px;
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
            }

        }
    }
</style>
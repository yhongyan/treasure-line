<template>
    <div class="notice-list kyc">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/personCenter">个人中心</router-link> > <router-link to="/kyc2">KYC2认证</router-link></p>
        </div>
        <div class="list">
            <h4>
                <span class="img">
                    <img src="../assets/images/kyc2.png" alt=""/>
                    <span class="img-text">KYC2认证</span>
                </span>
                <span>KYC2认证</span>
            </h4>

            <el-steps :active="active" finish-status="success" simple style="margin: 40px auto;width: 90%;">
                <el-step title="1、选择国家" ></el-step>
                <el-step title="2、上传证件" ></el-step>
                <el-step title="3、校验" ></el-step>
            </el-steps>
            <!--第一步-->
            <template v-if="active == 0">
                <el-form :model="ruleForm" label-width="80px" class="demo-ruleForm" style="max-width: 400px;margin: 60px auto 40px;">
                    <el-form-item label="选择国家" prop="phone">
                        <el-select v-model="ruleForm.country" placeholder="请选择您的国家" style="width: 100%;">
                            <el-option v-for="(item,index) in phoneList" :key="index" :label="item.area + item.phone" :value="item.area"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div style="text-align: center">
                    <el-button type="primary" style="width: 220px;" @click="nextStep(0)">下一步</el-button>
                </div>
            </template>

            <!--第二步-->
            <template v-else-if="active == 1">
                <div class="row">
                    <div class="upload-img col-lg-6 col-md-6 col-sm-12">
                        <p>个人身份证正面照片</p>
                        <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess1"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="img1" :src="img1" alt=""/>
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
                <div class="row">
                    <div class="upload-img col-lg-6 col-md-6 col-sm-12">
                        <p>个人身份证背面照片</p>
                        <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess2"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="img2" :src="img2" alt=""/>
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
                <div class="row">
                    <div class="upload-img col-lg-6 col-md-6 col-sm-12">
                        <p>手持身份证正面照片</p>
                        <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess3"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="img3" :src="img3" alt=""/>
                            <img v-else src="../assets/images/shenfenzheng-3.jpg" alt=""/>
                        </el-upload>
                    </div>
                    <div class="upload-text clear col-lg-6 col-md-6 col-sm-12">
                        <div class="text">
                            <p>*可上传jpg、jpeg、png格式。</p>
                            <p>*照片容量不得超过5M.</p>
                        </div>
                    </div>
                </div>
                <div style="text-align: center;margin-top: 40px;">
                    <el-button type="info" @click="nextStep('back')" style="width: 220px;margin: 10px 10px 0 0;">上一步</el-button>
                    <el-button type="primary" style="width: 220px;margin: 10px 10px 0 0;" @click="saveData">下一步</el-button>
                </div>
            </template>

            <!--第三步-->
            <template v-else-if="active == 2">
                <p style="font-size: 18px;color: #f07e1b;text-align: center;margin: 100px 0 120px;">请等待公司审核，一般会在2～5个工作日内审核完成。请留意本页更新。</p>
                <div style="text-align: center">
                    <el-button type="primary" @click="$router.push('/personCenter')" style="width: 220px;">确定</el-button>
                </div>
            </template>

            <!--第四步 审核通过-->
            <template v-else-if="active == 3">
                <p style="font-size: 18px;color: #f07e1b;text-align: center;margin: 100px 0 120px;">您的认证已通过</p>
                <div style="text-align: center">
                    <el-button type="primary" @click="$router.push('/personCenter')" style="width: 220px;">确定</el-button>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import phone from '../assets/json/phone'
    export default {
        name: "notice-list",
        data() {
            return {
                active:0,
                page:1,
                size:10,
                phoneList:[],
                img1:'',
                img2:'',
                img3:'',
                ruleForm:{
                    country:'中国大陆'
                },
                uploadUrl:''
            }
        },
        mounted() {
            this.uploadUrl = process.env.UPLOAD_URL;
            this.getInfo()
            this.phoneList = phone;
        },
        methods: {
            getInfo() {
                this.$axios.get('user/userinfo',{token:sessionStorage.getItem('token')}).then(res => {
                    if(res.data.sta == 401) {
                        sessionStorage.removeItem('user')
                        sessionStorage.removeItem('token')
                        return
                    }
                    if(res.data.kyc2 == '1') {
                        this.active = 3
                    }else if(res.data.kyc2 == '2') {
                        this.active = 2
                    }else if(res.data.kyc2 == '3' ||res.data.kyc2 == '4') {
                        this.active = 0
                    }
                })
            },
            nextStep(step) {
                //状态切换页面回到顶部
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;

                if(step == 0 || step == 'back') {
                    this.active = 1
                }else if(step == 1) {
                    this.active = 2
                }
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
            saveData() {
                var params = {
                    country:this.ruleForm.country,
                    card1:this.img1,
                    card2:this.img2,
                    card3:this.img3,
                    token:sessionStorage.getItem('token')
                }
                this.$axios.post('user/kyc2renzheng',params).then(res => {
                    if(res.data.sta == 401) {
                        this.$message.error("请重新登录！");
                        this.$router.push('/login')
                    }
                    if(res.data.sta == 1) {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.active = 2;
                        if(sessionStorage.getItem('user')) {
                            var user = JSON.parse(sessionStorage.getItem('user'))
                            user.kyc2 = 2;
                            sessionStorage.setItem('user',JSON.stringify(user))
                        }
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
            margin-top: 20px;
            padding: 34px 0 40px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
            border-radius: 3px;
            h4 {
                margin: 20px 0;
                font-size: 22px;
                color: #303133;
                text-align: center;
                .img {
                    position: relative;
                    .img-text {
                        position: absolute;
                        width: 30px;
                        left: 8px;
                        top: 5px;
                        font-size: 10px;
                        color: #fefffe;
                        line-height: 12px;
                        font-weight: 100;
                    }
                }
            }
            .row {
                max-width: 600px;
                margin: 0 auto 20px;
                .upload-img {
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
<template>
    <div style="padding-top: 56px;">
        <img src="../assets/images/qiyehezuo.jpg" v-if="bigImg" style="width: 100%;" alt=""/>
        <img src="../assets/images/qiyehezuo.png" v-else style="width: 100%;" alt=""/>
        <div class="apply">
            <h3>企业合作申请表</h3>
            <p style="margin: 0px auto 20px;text-align: center;color: #f07e1b;" v-if="show">（如需提交申请，请先注册登录）</p>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm part" style="width: 90%;margin: 0 auto;">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name" style="max-width: 300px" placeholder="请输入您的姓名"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="tel">
                    <el-input v-model="ruleForm.tel" style="max-width: 300px;" placeholder="请输入您的手机号"></el-input>
                </el-form-item>
                <el-form-item label="微信" prop="weixin">
                    <el-input v-model="ruleForm.weixin" style="max-width: 300px;" placeholder="请输入您的微信号"></el-input>
                </el-form-item>
                <el-form-item label="公司" prop="gongsi">
                    <el-input v-model="ruleForm.gongsi" style="width:100% ;" placeholder="请输入您的公司全称"></el-input>
                </el-form-item>
                <el-form-item label="法人代表" prop="faren">
                    <el-input v-model="ruleForm.faren" style="max-width: 300px;" placeholder="请输入法人代表姓名"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="ruleForm.address" style="width:100% ;" placeholder="请输入您的办公地址"></el-input>
                </el-form-item>
                <el-form-item label="座机" prop="zuoji">
                    <el-input v-model="ruleForm.zuoji" style="max-width: 300px;" placeholder="请输入您的公司座机"></el-input>
                </el-form-item>
                <el-form-item label="意向合作领域选项" prop="lingyu">
                    <el-checkbox-group v-model="ruleForm.lingyu">
                        <el-checkbox label="超级节点" value="超级节点"></el-checkbox>
                        <el-checkbox label="电子商城" value="电子商城"></el-checkbox>
                        <el-checkbox label="合作供货" value="合作供货"></el-checkbox>
                        <el-checkbox label="DAPP开发合作" value="DAPP开发合作"></el-checkbox>
                        <el-checkbox label="去中心化交易所" value="去中心化交易所"></el-checkbox>
                        <el-checkbox label="托管中心" value="托管中心"></el-checkbox>
                        <el-checkbox label="备选节点" value="备选节点"></el-checkbox>
                        <el-checkbox label="其他合作" value="其他合作"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div class="upload clear">
                <div class="upload-img">
                    <p>企业执照的照片</p>
                    <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess1"
                            :before-upload="beforeAvatarUpload">
                        <div class="label">
                            <img v-if="ruleForm.qyzz" :src="ruleForm.qyzz" alt=""/>
                            <p v-else>
                                <i class="iconfont icon-jia"></i>
                                <span>点击上传图片</span>
                            </p>
                        </div>
                    </el-upload>
                </div>
                <div class="upload-text">
                    <div class="text">
                        <p>*可上传jpg、jpeg、png格式。</p>
                        <p>*照片容量不得超过5M.</p>
                    </div>
                </div>
            </div>
            <div class="upload clear">
                <div class="upload-img">
                    <p>门头招牌的照片</p>
                    <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess2"
                            :before-upload="beforeAvatarUpload">
                        <div class="label">
                            <img v-if="ruleForm.mtzp" :src="ruleForm.mtzp" alt=""/>
                            <p v-else>
                                <i class="iconfont icon-jia"></i>
                                <span>点击上传图片</span>
                            </p>
                        </div>
                    </el-upload>
                </div>
                <div class="upload-text">
                    <div class="text">
                        <p>*可上传jpg、jpeg、png格式。</p>
                        <p>*照片容量不得超过5M.</p>
                    </div>
                </div>
            </div>
            <div class="upload clear">
                <div class="upload-img">
                    <p>企业外景的照片</p>
                    <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess3"
                            :before-upload="beforeAvatarUpload">
                        <div class="label">
                            <img v-if="ruleForm.qywj" :src="ruleForm.qywj" alt=""/>
                            <p v-else>
                                <i class="iconfont icon-jia"></i>
                                <span>点击上传图片</span>
                            </p>
                        </div>
                    </el-upload>
                </div>
                <div class="upload-text">
                    <div class="text">
                        <p>*可上传jpg、jpeg、png格式。</p>
                        <p>*照片容量不得超过5M.</p>
                    </div>
                </div>
            </div>
            <div class="upload clear">
                <div class="upload-img">
                    <p>企业内景的照片</p>
                    <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess4"
                            :before-upload="beforeAvatarUpload">
                        <div class="label">
                            <img v-if="ruleForm.qynj" :src="ruleForm.qynj" alt=""/>
                            <p v-else>
                                <i class="iconfont icon-jia"></i>
                                <span>点击上传图片</span>
                            </p>
                        </div>
                    </el-upload>
                </div>
                <div class="upload-text">
                    <div class="text">
                        <p>*可上传jpg、jpeg、png格式。</p>
                        <p>*照片容量不得超过5M.</p>
                    </div>
                </div>
            </div>
            <div class="upload clear">
                <div class="upload-img">
                    <p>企业荣誉的照片</p>
                    <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess5"
                            :before-upload="beforeAvatarUpload">
                        <div class="label">
                            <img v-if="ruleForm.qyry" :src="ruleForm.qyry" alt=""/>
                            <p v-else>
                                <i class="iconfont icon-jia"></i>
                                <span>点击上传图片</span>
                            </p>
                        </div>
                    </el-upload>
                </div>
                <div class="upload-text">
                    <div class="text">
                        <p>*可上传jpg、jpeg、png格式。</p>
                        <p>*照片容量不得超过5M.</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center">
                <el-button type="primary" style="width: 220px;" @click="subData">提交申请</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "company-part",
        data() {
            return {
                rules: {
                    name: [
                        { required: true, message: '请输入您的姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                    tel: [
                        { required: true, message : '请输入手机号', trigger: 'blur' },
                        { pattern: /^\d{11,11}$/, message: '请输入正确的手机格式', trigger: 'blur'}
                    ],
                    weixin: [
                        { required: true, message: '请输入您的微信号', trigger: 'blur' }
                    ],
                    gongsi: [
                        { required: true, message: '请输入您所在公司全称', trigger: 'blur' },
                    ],
                    faren: [
                        { required: true, message: '请输入您所在公司法人代表名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入公司所在地址', trigger: 'blur' },
                    ],
                    zuoji: [
                        { required: true, message: '请输入公司座机', trigger: 'blur' },
                        { pattern: /^\d{1,}$/, message: '请输入正确格式', trigger: 'blur' }
                    ],
                    lingyu: [
                        { required: true, message: '请选择您的意向合作领域', trigger: 'change' }
                    ],
                },
                ruleForm:{
                    lingyu:[],
                    qyzz:'',
                    mtzp:'',
                    qywj:'',
                    qynj:'',
                    qyry:''
                },
                imgList:[],
                show:true,
                bigImg:true,
                uploadUrl:''
            }
        },
        mounted() {
            this.uploadUrl = process.env.UPLOAD_URL;
            if(sessionStorage.getItem('user')) {
                this.show = false
            }else {
                this.show = true
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
            handleAvatarSuccess1(res, file) {
                this.ruleForm.qyzz = process.env.BASE_URL + res.data.path;
            },
            handleAvatarSuccess2(res, file) {
                this.ruleForm.mtzp = process.env.BASE_URL + res.data.path;
            },
            handleAvatarSuccess3(res, file) {
                this.ruleForm.qywj = process.env.BASE_URL + res.data.path;
            },
            handleAvatarSuccess4(res, file) {
                this.ruleForm.qynj = process.env.BASE_URL + res.data.path;
            },
            handleAvatarSuccess5(res, file) {
                this.ruleForm.qyry = process.env.BASE_URL + res.data.path;
            },
            beforeAvatarUpload(file) {
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.$message.error('上传头像图片大小不能超过 5MB!');
                }
                return isLt5M;
            },
            subData() {
                if(!sessionStorage.getItem('user')) {
                    this.$message({
                        message: '请先登录！',
                        type: 'info'
                    });
                    this.$router.push('/login')
                    return
                }
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        if(this.ruleForm.qyzz && this.ruleForm.mtzp && this.ruleForm.qywj && this.ruleForm.qynj && this.ruleForm.qyry) {
                            var params = {...this.ruleForm};
                            params.pics = this.imgList;
                            params.lingyu = params.lingyu.join(',');
                            params.token = sessionStorage.getItem('token');
                            this.$axios.post('user/qiyehezuo',params).then(res => {
                                if(res.data.sta == 401) {
                                    this.$message.error("请重新登录！");
                                    this.$router.push('/login')
                                }
                                if(res.data.sta == 1) {
                                    this.$message({
                                        message: '提交成功！',
                                        type: 'success'
                                    });
                                    this.$router.push('/homePage')
                                }else {
                                    this.$message({
                                        message: res.data.msg,
                                        type: 'error'
                                    });
                                }
                            })
                        }else {
                            this.$message({
                                message: '请上传公司相关照片！',
                                type: 'error'
                            });
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
    .apply {
        padding: 60px 0;
        max-width: 960px;
        margin: 20px auto;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
        border-radius: 3px;
        h3 {
            font-size: 30px;
            color: #303133;
            margin-bottom: 20px;
            text-align: center;
        }
        .upload {
            width: 90%;
            margin: 40px auto;
            .upload-img {
                .avatar-uploader {
                    float: left;
                    margin-top: 10px;
                    width: 276px;
                    height: 180px;
                    border: 1px solid #d9d9d9;
                    border-radius: 5px;
                    background: #ecf5ff;
                    text-align: center;
                    cursor: pointer;
                    .label {
                        width: 276px;
                        height: 180px;
                    }
                    p {
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
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .upload-text {
                float: left;
                margin-top: 30px;
                color: #c2c7ce;
                .text {
                    margin-top: 20px;
                    margin-left: 30px;
                }
            }
            .img-list {
                width: 276px;
                height: 180px;
                float: left;
                margin:10px 10px 0 0;
            }
        }
    }
</style>
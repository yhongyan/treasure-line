<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/personCenter">个人中心</router-link> > <router-link to="/personApply">个人抵押TITT申请表</router-link></p>
        </div>
        <div class="list">
            <h4>会员卡充值抵押申请表</h4>
            <img :src="cardDetail.wenjian" alt=""/>
            <div class="info">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 info-row">
                        <span>会员卡：</span>
                        <el-input v-model="cardDetail.type" style="width: 200px;" :disabled="true"></el-input>
                        <span style="opacity: 0;">占位</span>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 info-row">
                        <span>有效期限：</span>
                        <el-input v-model="cardDetail.effective_day" style="width: 200px;" placeholder="默认有效期限" :disabled="true"></el-input>
                        <span>天</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 info-row">
                        <span>抵押奖励：</span>
                        <el-input v-model="cardDetail.contribution_num" style="width: 200px;" placeholder="默认抵押奖励" :disabled="true"></el-input>
                        <span>贡献值</span>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 info-row">
                        <span>持有数量：</span>
                        <el-input v-model="cardDetail.limit_num" style="width: 200px;" placeholder="默认持有数量" :disabled="true"></el-input>
                        <span>个</span>
                    </div>
                </div>
            </div>
            <p class="divide">请填写下方申请资料：</p>
            <div class="pay">
                <el-radio-group v-model="form.mortgage_type">
                    <el-radio label="1">使用TITT进行充值抵押</el-radio>
                    <el-radio label="2">使用红股进行充值抵押</el-radio>
                </el-radio-group>
                <div class="honggu" v-if="form.mortgage_type == 2">
                    <p>需要
                        <el-input v-model="honggu.carBonus" :disabled="true" style="width: 200px;"></el-input>
                        红股开通{{cardDetail.type}}</p>
                    <p style="margin: 10px 0;">目前已解锁红股数量：{{honggu.useBonus}} 红股</p>
                    <p v-if="honggu.status==2">还需要补充红股数量：{{honggu.diffBonus}} 红股（您的红股数量尚未到达所需数量，请努力积累红股哦！）</p>
                </div>
                <div class="eos" v-else>
                    <p>接受充值的官方账号：<span>fortunetitt1</span></p>
                    <p>接受TITT充值的官方收款二维码：</p>
                    <div class="two-wallet">
                        <div class="wallet">
                            <span>TP钱包充值</span>
                            <img src="../assets/images/shoukuanerweima.jpg" alt=""/>
                        </div>
                        <div class="wallet">
                            <span>imtoken钱包充值</span>
                            <img src="../assets/images/imtoken.jpg" alt=""/>
                        </div>
                    </div>
                    <p>
                        已充值转账回单交易号：
                        <el-input v-model="form.transactionid" style="width: 250px;" placeholder="请输入充值TITT回单交易号"></el-input>
                    </p>
                    <p class="divide">到期返还接受TITT的账号：</p>
                    <el-radio-group v-model="form.type">
                        <el-radio label="1">EOS账号</el-radio>
                        <el-radio label="2">币威钱包账号</el-radio>
                    </el-radio-group>
                    <p v-if="form.type == 1">EOS账号：<el-input v-model="form.receive_number" style="width: 250px;" placeholder="请输入EOS账号"></el-input></p>
                    <p v-if="form.type == 2">到期返还titt账号：<el-input v-model="form.receive_number" style="width: 250px;" placeholder="请输入到期返还titt账号"></el-input></p>
                    <p v-if="form.type == 2">memo：<el-input v-model="form.memo" style="width: 250px;" placeholder="请输入6位数标签数字"></el-input></p>
                </div>
            </div>
            <div class="bottom-btn">
                <el-button class="btn" type="primary" @click="submit">提交申请</el-button>
                <el-button class="btn" type="primary" @click="$router.go(-1)">取消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "notice-list",
        data() {
            return {
                cardDetail:{},
                form:{
                    mortgage_type: '1',
                    type:'1'
                },
                honggu:'',
                eos:'未绑定eos账号'
            }
        },
        watch: {
            'form.mortgage_type'(val) {
                if(val == 2) {
                    this.getCardDetail(2)
                }
            }
        },
        mounted() {
            this.getCardDetail();
            this.getHonggu();
            if(JSON.parse(sessionStorage.getItem('user')).eos) {
                this.eos = JSON.parse(sessionStorage.getItem('user')).eos;
            }
        },
        methods: {
            getCardDetail(type) {
                var params = {
                    caidid:this.$route.query.id,
                    type:1
                }
                if(type) {
                    params.type = 2
                }
                this.$axios.get('card/getDetail',params).then(res => {
                    if(res.data) {
                        this.cardDetail = res.data.data;
                    }
                })
            },
            getHonggu() {
                this.$axios.get('card/getCardBonus',{cardid:this.$route.query.id,token:sessionStorage.getItem('token')}).then(res => {
                    if(res.data) {
                        this.honggu = res.data.data;
                    }
                })
            },
            submit() {
                var params = {
                    ...this.form,
                    cardid:this.$route.query.id,
                    token:sessionStorage.getItem('token')
                }
                if(this.form.mortgage_type == 1) {
                    if(!this.form.transactionid) {
                        this.$message.error("请先输入充值TITT回单交易号！");
                        return false
                    }
                    if(this.form.type == '1') {
                        delete this.form.memo
                        if(!this.form.receive_number) {
                            this.$message.error("请先输入eos账号！");
                            return false
                        }
                    }else {
                        delete this.form.receive_number
                        if(!this.form.memo) {
                            this.$message.error("请先输入memo！");
                            return false
                        }
                    }
                }else {
                    params = {
                        cardid:this.$route.query.id,
                        token:sessionStorage.getItem('token'),
                        mortgage_type:this.form.mortgage_type
                    }
                }
                this.$axios.post('card/joinCard',params).then(res => {
                    if(res.data.sta == 401) {
                        this.$message.error("请重新登录！");
                        this.$router.push('/login')
                    }
                    if(res.data.sta == 200) {
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
            text-align: center;
            h4 {
                margin: 40px 0 20px;
                font-size: 30px;
                color: #303133;
                text-align: center;
            }
            img {
                width: 320px;
                height: 200px;
            }
            .info {
                .info-row {
                    margin-top: 15px;
                    span {
                        display: inline-block;
                        width: 80px;
                        text-align: right;
                        &:last-of-type {
                            width: 50px;
                            text-align: left;
                        }
                    }
                }
            }
            .two-wallet {
                overflow: hidden;
                .wallet {
                    float: left;
                    margin-right: 15px;
                    span {
                        text-align: center;
                        display: block;
                    }
                }
            }
            .divide {
                margin: 30px 0;
                padding: 15px 20px;
                text-align: left;
                border-top: 1px solid #f1f1f3;
                border-bottom: 1px solid #f1f1f3;
            }
            .honggu {
                margin-top: 40px;
                p {
                    padding:0 15%;
                    text-align: left;
                }
            }
            .eos {
                text-align: left;
                padding: 0 20px;
                p {
                    margin: 15px 0;

                }
                img {
                    width: 180px;
                }
            }
            .bottom-btn {
                margin: 40px 0;
                .btn {
                    width: 150px;
                }
            }
        }
    }
</style>
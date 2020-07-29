<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/personCenter">个人中心</router-link> > <router-link to="">红股置换</router-link></p>
        </div>
        <h3>红股兑换TITT</h3>
        <div class="list">
            <div class="row info">
                <div class="col-lg-6 col-md-6 col-sm-12 info-row">
                    <span>您的星级：</span>
                    <el-input v-model="info.grade" style="width: 200px;" placeholder="默认星级" :disabled="true"></el-input>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 info-row">
                    <span>个人贡献值：</span>
                    <el-input v-model="info.contribute" style="width: 200px;" placeholder="默认贡献值" :disabled="true"></el-input>
                </div>
            </div>
            <div class="row info">
                <div class="col-lg-6 col-md-6 col-sm-12 info-row">
                    <span>默认比例：</span>
                    <el-input v-model="info.ratio" style="width: 200px;" placeholder="默认比例" :disabled="true"></el-input>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 info-row">
                    <span>手续费率：</span>
                    <el-input v-model="info.proces_ratio" style="width: 200px;" placeholder="默认手续费率" :disabled="true"></el-input>
                </div>
            </div>
            <div class="change">
                <div class="can-change">
                    <p>当前可兑换红股数量</p>
                    <p>{{hongguyijiesuo}}</p>
                </div>
                <div class="input">
                    <div class="top">
                        <el-input v-model="hongguNum" style="width: 200px;" placeholder="请输入想兑换的红股数量" @change="getTitt"></el-input>
                        <span>可兑换</span>
                        <span>{{tittNum}}TITT</span>
                    </div>
                    <div class="middle">
                        <el-input v-model="titt.mobile" style="width: 200px;" placeholder="默认电话" :disabled="true"></el-input>
                    </div>
                    <div class="middle">
                        <el-input v-model="titt.eos" style="width: 200px;" placeholder="请输入接收TITT账号" :disabled="true"></el-input>
                        <span>（审核通过后，工作人员会发放到您的账户，请注意查收）</span>
                    </div>
                    <div class="bottom">
                        <el-button type="primary" style="width: 200px;" @click="applyChange">申请兑换</el-button>
                    </div>
                </div>
            </div>
            <h5>兑换记录</h5>
            <div class="change-list">
                <el-row class="item-title">
                    <el-col :span="6">日期</el-col>
                    <el-col :span="6">置换红股数量</el-col>
                    <el-col :span="6">手续费（百分比）</el-col>
                    <el-col :span="6">最终TITT收益</el-col>
                </el-row>
                <el-row class="list-item" v-for="(item,index) in changeList" :key="index">
                    <el-col :span="6">{{item.createtime}}</el-col>
                    <el-col :span="6">{{item.honggu}}</el-col>
                    <el-col :span="6">{{item.cost_ratio}}</el-col>
                    <el-col :span="6">{{item.titt_num}}</el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "notice-list",
        data() {
            return {
                page:1,
                size:10,
                total:0,
                changeList:[],
                hongguNum:'',
                titt:'',
                tittNum:0,
                hongguyijiesuo:'',
                sta:{},
                info:{}
            }
        },
        watch: {
            hongguNum(val) {
                if(val > this.hongguyijiesuo) {
                    this.hongguNum = this.hongguyijiesuo
                }
            }
        },
        mounted() {
            this.getWeekList();
            this.getHonggu()
            this.getInfo()
            if(sessionStorage.getItem('user')) {
                this.titt = JSON.parse(sessionStorage.getItem('user'));
            }
        },
        methods: {
            getTitt(val) {
                if(val) {
                    this.$axios.get('bonus/getExchangeTitt',{token:sessionStorage.getItem('token'),num:val}).then(res => {
                        if(res.data.sta == 200) {
                            this.tittNum = res.data.data;
                        }else {
                            this.hongguNum = '';
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            handleSizeChange(size) {
                this.size = size;
            },
            handleCurrentChange(page) {
                this.page = page;
                this.getWeekList()
            },
            getInfo() {
                this.$axios.get('bonus/getBonusRate',{token:sessionStorage.getItem('token')}).then(res => {
                    if(res.data.sta == 401) {
                        this.$message.error("请重新登录！");
                        this.$router.push('/login')
                    }
                    if(res.data.data) {
                        this.info = res.data.data;
                    }
                })
            },
            getWeekList() {
                this.$axios.get('user/applytotitt',{token:sessionStorage.getItem('token')}).then(res => {
                    if(res.data.sta == 401) {
                        this.$message.error("请重新登录！");
                        this.$router.push('/login')
                    }
                    if(res.data.data) {
                        this.changeList = res.data.data;
                    }
                })
            },
            getHonggu() {
                this.$axios.get('user/userinfo',{token:sessionStorage.getItem('token')}).then(res => {
                    if(res.data.sta == 401) {
                        this.$message.error("请重新登录！");
                        this.$router.push('/login')
                    }
                    if(res.data) {
                        this.hongguyijiesuo = res.data.hongguyijiesuo;
                    }
                })
            },
            applyChange() {
                if(!this.hongguNum) {
                    this.$message.error('请输入要兑换的红股数量！');
                }else if(!this.titt) {
                    this.$message.error('请输入titt账号！');
                }else {
                    this.$axios.post('user/honggutotitt', { num: this.hongguNum, titt: this.titt.username, token:sessionStorage.getItem('token') }).then(res => {
                        if(res.data.sta == 401) {
                            this.$message.error("请重新登录！");
                            this.$router.push('/login')
                        }
                        if(res.data.sta == 1) {
                            this.$message({
                                message: res.data.msg,
                                type: 'success'
                            });

                            this.hongguNum = '';
                            this.getWeekList();
                            this.getHonggu();
                        }else {
                            this.$message.error(res.data.msg);
                        }
                    })
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
        h3 {
            font-size: 30px;
            color: #303133;
            text-align: center;
            margin: 20px 0;
        }
        .list {
            padding: 20px 0 20px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
            border-radius: 3px;
            .info {
                text-align: center;
                span {
                    display: inline-block;
                    width: 100px;
                    text-align: right;
                }
                .info-row {
                    margin: 20px 0;
                }
            }
            .list-title {
                padding: 0 20px 10px;
                border-bottom: 1px solid #ddd;
                h4 {
                    margin: 0;
                    font-size: 16px;
                }
                p {
                    font-size: 12px;
                }
            }
            h5 {
                margin: 20px 20px 0;
                padding-bottom: 10px;
                padding-left: 20px;
                font-size: 24px;
                font-weight: 500;
                color: #333;
                border-bottom: 1px solid #a3a6b4;
            }
            .change {
                width: 90%;
                margin: 0 auto;
                overflow: hidden;
                .can-change {
                    margin-right: 11px;
                    float: left;
                    p {
                        &:last-of-type {
                            margin: 10px 0 20px;
                            font-size: 36px;
                            font-weight: 700;
                            color: #f07e1b;
                        }
                    }
                }
                .input {
                    float: left;
                    .top {
                        span {
                            &:first-of-type {
                                display: inline-block;
                                margin: 0 15px;
                            }
                            &:last-of-type {
                                color: #f07e1b;
                            }
                        }
                    }
                    .middle {
                        margin: 15px 0;
                        span {
                            &:last-of-type {
                                color: #f07e1b;
                            }
                        }
                    }
                    .bottom {
                        text-align: center;
                    }
                }
            }
            .change-list {
                padding: 10px 20px;
                word-wrap: break-word;
                .item-title {
                    margin: 10px 0;
                    text-align: center;
                    color: #999;
                    font-size: 12px;
                }
                .list-item {
                    font-size: 12px;
                    color: #5d6b6e;
                    text-align: center;
                    margin: 8px 0;
                }
            }
            .block {
                text-align: center;
                margin-top: 10px;
            }
        }
    }
</style>
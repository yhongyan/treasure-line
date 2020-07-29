<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/personCenter">个人中心</router-link> > <router-link to="/chicangList">持仓交易列表</router-link> > <router-link to="">持仓交易详情</router-link></p>
        </div>
        <h3>交易记录</h3>
        <div class="list">
            <div class="change-list">
                <el-row class="list-item">
                    <el-col :span="12"><span>日期</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.createdtime | timeTrans}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>打入EOS数量</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.eosnum}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>EOS置换TITT比率</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.eostittsc}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>持仓TITT数量</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.tittnum}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>奖励数量</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.jianglinum}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>奖励比例</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.jianglisc}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>收款地址</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.inaddr}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>付款地址</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.payaddr}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>交易号</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.jiaoyihao}}</el-col>
                </el-row>
                <el-row class="list-item">
                    <el-col :span="12"><span>区块</span></el-col>
                    <el-col :span="12" style="text-align: left;color: #5d6b6e;">{{detail.block}}</el-col>
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
                detail:{}
            }
        },
        mounted() {
            this.getDetail()
        },
        methods: {
            getDetail() {
                this.$axios.get('user/chicangdetail',{ id:this.$route.query.id,token:sessionStorage.getItem('token') }).then(res => {
                    if(res.data.sta == 401) {
                        this.$message.error("请重新登录！");
                        this.$router.push('/login')
                    }
                    if(res.data.data) {
                        this.detail = res.data.data;
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
                    color: #333;
                    text-align: center;
                    margin: 8px 0;
                    span {
                        display: inline-block;
                        width: 100px;
                        text-align: left;
                    }
                }
            }
            .block {
                text-align: center;
                margin-top: 10px;
            }
        }
    }
</style>
<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/changePage">置换</router-link> > <router-link to="/changeSure">置换对账单</router-link></p>
        </div>
        <div class="list">
            <h4>置换确认</h4>
            <!--<p style="text-align: center">此汇率为当前参考汇率，实际汇率为执行bancor合约时的汇率</p>-->
            <p style="text-align: center">用户使用第三方钱包参与TITT和EOS置换，请务必再三核对置换转账的智能合约账户tittbancor14，和转账EOS或TITT账户地址信息。如果出现账户地址错误，一旦完成转账不可撤销。</p>
            <div class="main">
                <!--<el-row style="max-width: 500px;margin: 0 auto;">-->
                    <!--<el-col :span="6" style="font-size: 14px;color: #606266;line-height: 54px;">使用</el-col>-->
                    <!--<el-col :span="18" style="font-size: 36px;color: #f07e1b;font-weight: 700;text-align: left">-->
                        <!--<span v-if="$route.query.fangxiang">{{$route.query.eos}} eos</span>-->
                        <!--<span v-else>{{$route.query.titt}} titt</span>-->
                    <!--</el-col>-->
                <!--</el-row>-->
                <!--<el-row style="max-width: 500px;margin: 0 auto;">-->
                    <!--<el-col :span="6" style="font-size: 14px;color: #606266;line-height: 54px;">置换</el-col>-->
                    <!--<el-col :span="18" style="font-size: 36px;color: #0084b4;font-weight: 700;text-align: left">-->
                        <!--<span v-if="$route.query.fangxiang">{{$route.query.titt}} titt</span>-->
                        <!--<span v-else>{{$route.query.eos}} eos</span>-->
                    <!--</el-col>-->
                <!--</el-row>-->
                <!--<p style="margin: 30px 0 40px;color: #67c23a;">汇率  ≈200</p>-->
                <!--<div style="border-top: 1px dashed #409eff;border-bottom: 1px dashed #409eff;height: 6px;"></div>-->
                <el-row style="max-width: 500px;margin: 40px auto 20px;">
                    <p>请扫码进行置换</p>
                    <img style="width: 200px;height: 200px;" src="../assets/images/jiaoyierweima.png" alt=""/>
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
                codeTitle:'点击获取验证码',
                num:0
            }
        },
        mounted() {

        },
        methods: {
            getCode() {
                this.num = 60;
                var timer = setInterval(() => {
                    this.num--;
                    if(this.num<=0) {
                        clearInterval(timer)
                    }
                },1000)
            },
            changeNow() {
                this.$message({
                    message: '置换成功！',
                    type: 'success'
                });
                this.$router.push('/changeSuccess')
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
                margin: 20px 0 40px;
                font-size: 30px;
                color: #303133;
                text-align: center;
            }
            .main {
                max-width: 640px;
                margin: 0 auto;
                text-align: center;
            }
        }
    }
</style>
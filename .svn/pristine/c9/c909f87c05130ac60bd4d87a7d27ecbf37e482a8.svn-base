<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/changePage">置换</router-link> > <router-link to="/changeSuccess">置换对账单</router-link></p>
        </div>
        <div class="list">
            <h4><img src="../assets/images/deal.jpg" alt=""/>成交</h4>
            <div class="main">
                <el-row style="max-width: 500px;margin: 0 auto;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;line-height: 54px;text-align: left">置换金额</el-col>
                    <el-col :span="18" style="font-size: 36px;color: #303133;text-align: left">
                        1000.0000 eos
                    </el-col>
                </el-row>
                <el-row style="max-width: 500px;margin: 0 auto;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">收款地址</el-col>
                    <el-col :span="18" style="font-size: 36px;color: #303133;text-align: left">
                        <p>fortunechain</p>
                        <p style="color: #909399;">EOS-Wallet-1</p>
                    </el-col>
                </el-row>
                <el-row style="max-width: 500px;margin: 10px auto;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">付款地址</el-col>
                    <el-col :span="18" style="font-size: 14px;color: #303133;text-align: left">gehongf12345</el-col>
                </el-row>
                <el-row style="max-width: 500px;margin: 10px auto 20px;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">汇率</el-col>
                    <el-col :span="18" style="font-size: 14px;color: #303133;text-align: left">≈240.9334</el-col>
                </el-row>
                <div style="border-top: 1px dashed #409eff;border-bottom: 1px dashed #409eff;height: 6px;"></div>
                <el-row style="max-width: 500px;margin: 20px auto 10px;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">TITT</el-col>
                    <el-col :span="18" style="font-size: 14px;color: #f07e1b;text-align: left">-9999</el-col>
                </el-row>
                <el-row style="max-width: 500px;margin: 10px auto 20px;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">EOS</el-col>
                    <el-col :span="18" style="font-size: 14px;color: #0084B4;text-align: left">+400</el-col>
                </el-row>
                <div style="border-top: 1px dashed #409eff;border-bottom: 1px dashed #409eff;height: 6px;"></div>
                <el-row style="max-width: 500px;margin: 20px auto 10px;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">置换时间</el-col>
                    <el-col :span="18" style="font-size: 14px;color: #303133;text-align: left">2019-04-14 09:53</el-col>
                </el-row>
                <el-row style="max-width: 500px;margin: 10px auto;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">交易单号</el-col>
                    <el-col :span="18" style="font-size: 14px;color: #303133;text-align: left">a7d6f8f388f9g9g</el-col>
                </el-row>
                <el-row style="max-width: 500px;margin: 10px auto;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">区块</el-col>
                    <el-col :span="18" style="font-size: 14px;color: #303133;text-align: left">23435466</el-col>
                </el-row>
                <el-row style="max-width: 500px;margin: 10px auto;">
                    <el-col :span="6" style="font-size: 14px;color: #606266;text-align: left">对订单有疑问</el-col>
                    <el-col :span="18" style="font-size: 14px;color: #303133;text-align: left">
                        请发送邮件至 <span style="color: #909399;">fortunechain008@gmail.com</span>
                        <i class="iconfont icon-fuzhi copy" data-clipboard-text="fortunechain008@gmail.com" @click="copy()"></i>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import Clipboard from 'clipboard'
    export default {
        name: "notice-list",
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            copy() {
                var clipboard = new Clipboard('.copy');
                var that = this;
                clipboard.on('success', function(e) {
                    that.$message({
                        message: '复制成功！',
                        type: 'success'
                    });
                    e.clearSelection();
                    clipboard.on('error', function(e) {
                        that.$message.error('复制失败！');
                    });
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
                padding: 0 10px;
                .icon-fuzhi {
                    color: #409eff;
                    cursor: pointer;
                }
            }
        }
    }
</style>
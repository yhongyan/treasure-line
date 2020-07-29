<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/personCenter">个人中心</router-link> > <router-link to="">红股兑换</router-link></p>
        </div>
        <h3>使用红股兑换码</h3>
        <div class="list">
            <div class="change-list">
                <p>输入兑换码获得红股奖励，红股可兑换TITT。</p>
                <p>未注册用户需要注册后才可获得红股兑换奖励。</p>
                <el-input v-model="num" style="max-width: 500px;margin: 50px 0 10px;" placeholder="输入21位红股兑换码查询或兑换"></el-input>
                <p v-if="pass" style="margin: 0 0 30px;">该兑换码可兑换<span>{{resData.honggunum}}</span>红股，相当于<span>{{resData.tittnum}}</span>TITT。</p>
                <el-button v-if="!pass" type="primary" style="width: 200px;display: block;margin: 20px auto 0;" @click="applyChange">查询兑换码</el-button>
                <el-button v-else type="primary" style="width: 200px;margin: 20px auto 0;" @click="sureChange">使用兑换码</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "notice-list",
        data() {
            return {
                num:'',
                pass:false,
                resData:{},
            }
        },
        mounted() {

        },
        methods: {
            applyChange() {
                if(!this.num ||this.num.length != 21) {
                    this.$message.error('请输入正确格式的红股兑换码！');
                }else {
                    this.$axios.get('user/usecoupon1',{coupon:this.num,token:sessionStorage.getItem('token')}).then(res => {
                        if(res.data.sta == 401) {
                            this.$message.error("请重新登录！");
                            this.$router.push('/login')
                        }
                        if(res.data.sta == 1) {
                            this.pass = true;
                            this.resData = res.data.data;
                        }else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            sureChange() {
                this.$axios.post('user/usecoupon2',{num:this.num,token:sessionStorage.getItem('token')}).then(res => {
                    if(res.data.sta == 401) {
                        this.$message.error("请重新登录！");
                        this.$router.push('/login')
                    }
                    if(res.data.sta == 1) {
                        this.pass = false;
                        this.num = '';
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                    }else {
                        this.$message.error(res.data.msg);
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
            .change-list {
                padding: 10px 20px;
                word-wrap: break-word;
                text-align: center;
                span {
                    display: inline-block;
                    margin: 0 10px;
                    color: #f07e1b;
                }
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
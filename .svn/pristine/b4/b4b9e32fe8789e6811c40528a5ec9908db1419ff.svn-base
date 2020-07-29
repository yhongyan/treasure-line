<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/homePage">首页</router-link> > <router-link to="/noticeList">公告</router-link> > <router-link to="/noticeDetail">详情</router-link></p>
        </div>
        <div class="list">
            <h4>{{detail.title}}</h4>
            <div class="author">
                <el-row>
                    <el-col :span="12">发布时间：{{detail.createtime}}</el-col>
                    <el-col :span="12">发布人：{{detail.zuozhe}}</el-col>
                </el-row>
            </div>
            <div class="content-text">
                <div v-html="detail.content"></div>
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
                this.$axios.get('index/newsdetail',{id:this.$route.query.id}).then(res => {
                    if(res.data.data) {
                        this.detail = res.data.data
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
            }
            .author {
                width: 90%;
                margin: 0 auto;
                padding: 10px 0;
                background: #ecf5ff;
                text-align: center;
                font-size: 13px;
                color: #909399;
            }
            .content-text {
                margin: 30px auto 0;
                font-size: 13px;
                color: #696266;
                line-height: 24px;
                width: 90%;
                text-indent: 2em;
                p {
                    margin-top: 30px;
                }
            }
        }
    }
</style>
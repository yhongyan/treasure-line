<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/homePage">首页</router-link> > <router-link to="/noticeList">公告</router-link></p>
        </div>
        <h3>公告</h3>
        <div class="list">
            <router-link :to="'/noticeDetail?id='+item.id" class="item clear" v-for="(item,index) in noticeList" :key="index">
                <p><span v-if="item.isyidu==1">【已读】</span><span v-if="item.isyidu==2">【未读】</span>{{item.title}}</p>
                <p>{{item.createtime | timeTrans}}</p>
            </router-link>
            <div class="block">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="page"
                        :page-size="size"
                        layout="total, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
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
                noticeList:[],
                total:0
            }
        },
        filters: {
            timeTrans:function(val) {
                if(val) {
                    function add0(m){return m<10?'0'+m:m }

                    var time = new Date(val*1000);
                    var y = time.getFullYear();
                    var m = time.getMonth()+1;
                    var d = time.getDate();
                    var h = time.getHours();
                    var mm = time.getMinutes();
                    var s = time.getSeconds();
                    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
                }
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            handleSizeChange(size) {
                this.size = size;
            },
            handleCurrentChange(page) {
                this.page = page;
                this.getList()
            },
            getList() {
                this.$axios.get('index/gonggao',{p:this.page}).then(res => {
                    if(res.data.data) {
                        this.noticeList = res.data.data.list;
                        this.total = res.data.data.totalPage;
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
            padding: 34px 0 20px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
            border-radius: 3px;
            .item {
                display: block;
                margin: 0 auto;
                padding: 10px 0;
                width: 90%;
                border-bottom: 1px dashed #ddd;
                p {
                    font-size: 14px;
                    color: #5d6b6e;
                    &:first-of-type {
                        float: left;
                    }
                    &:last-of-type {
                        float: right;
                    }
                }
            }
            .block {
                text-align: center;
                margin-top: 20px;
            }
        }
    }
</style>
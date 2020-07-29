<template>
    <div class="notice-list">
        <div class="nav-top clear">
            <el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
            <p>当前位置：<router-link to="/personCenter">个人中心</router-link> > <router-link to="">二级好友列表</router-link></p>
        </div>
        <h3>二级好友列表</h3>
        <div class="list">
            <div class="change-list">
                <!--<el-row class="item-title">
                    <el-col :span="4">ID名称</el-col>
                    <el-col :span="4">KYC1认证</el-col>
                    <el-col :span="4">KYC2认证</el-col>
                    <el-col :span="4">是否申请志愿者</el-col>
                    <el-col :span="4">是否绑定EOS账户</el-col>
                    <el-col :span="4">他邀请人数</el-col>
                </el-row>
                <el-row class="list-item" v-for="(item,index) in changeList" :key="index">
                    <el-col :span="4">{{item.show_id}}</el-col>
                    <el-col :span="4">{{item.kyc1 | kycFilter}}</el-col>
                    <el-col :span="4">{{item.kyc2 | kycFilter}}</el-col>
                    <el-col :span="4">{{item.tuiguangma | isNull}}</el-col>
                    <el-col :span="4">{{item.type | typeFilter}}</el-col>
                    <el-col :span="4" class="number">{{item.x_hy_gs}}</el-col>
                </el-row>-->
                <el-table :data="changeList" height="" border style="width: 100%">
					<el-table-column align='center' prop="show_id" label="ID名称" width="">
					</el-table-column>
					<el-table-column align='center' prop="kyc1" label="KYC1认证" width="">
					</el-table-column>
					<el-table-column align='center' prop="kyc2" label="KYC2认证" width="">
					</el-table-column>
					<el-table-column align='center' prop="tuiguangma" label="是否申请志愿者" width="">
					</el-table-column>
					<el-table-column align='center' prop="type" label="是否绑定EOS账户" width="">
					</el-table-column>
					<el-table-column align='center' prop="x_hy_gs" label="他邀请人数" width="">
					</el-table-column>
				</el-table>
            </div>
            <div class="block">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="page"
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
                total:0,
                changeList:[],
            }
        },
        filters:{
            kycFilter:function(val) {
               if(val) {
                   if(val == 1) {
                       return "已认证"
                   }else if(val == 2) {
                       return "待审核"
                   }else if(val == 3) {
                       return "未认证"
                   }else if(val == 4) {
                       return "拒绝"
                   }
               }
           },
            isNull:function(val) {
                if(val) {
                    return "是"
                }else {
                    return "否"
                }
            },
            typeFilter:function(val) {
                if(val == 1) {
                    return "是"
                }else if(val == 2) {
                    return "否"
                }
            }
        },
        mounted() {
            this.getWeekList()
        },
        methods: {
            handleSizeChange(size) {
                this.size = size;
            },
            handleCurrentChange(page) {
                this.page = page;
                this.getWeekList()
            },
            getWeekList() {
                this.$axios.get('friend/getDirectFriend',{page:this.page,userid:this.$route.query.id}).then(res => {
                    if(res.data.sta == 401) {
                        this.$message.error("请重新登录！");
                        this.$router.push('/login')
                    }
                    if(res.data.data) {
                    	for(let i = 0; i < res.data.data.data.length; i++) {
							var resItem = res.data.data.data[i]
							resItem.kyc1 == 1 ? resItem.kyc1 = '已认证' : resItem.kyc1 == 2 ? resItem.kyc1 = '待审核' : resItem.kyc1 ==3?resItem.kyc1 ='未认证':resItem.kyc1 ='拒绝'
							resItem.kyc2 == 1 ? resItem.kyc2 = '已认证' : resItem.kyc2 == 2 ? resItem.kyc2 = '待审核' : resItem.kyc2 ==3?resItem.kyc2='未认证':resItem.kyc2='拒绝'
							resItem.tuiguangma != '' ? resItem.tuiguangma = '是' : resItem.tuiguangma = '否'
							resItem.type == 1 ? resItem.type = '是' : resItem.type = '否'
						}
                        this.changeList = res.data.data.data;
                        this.total = res.data.data.total
                    }
                })
            },
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
                    line-height: 40px;
                    .number {
                        color: #f1a90a;
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
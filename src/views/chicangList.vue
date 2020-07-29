<template>
	<div class="notice-list">
		<div class="nav-top clear">
			<el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
			<p>当前位置：
				<router-link to="/personCenter">个人中心</router-link> >
				<router-link to="">持仓交易列表</router-link>
			</p>
		</div>
		<h3>持仓交易列表</h3>
		<div class="list">
			<div class="change-list">
				<!--<el-row class="item-title">
                    <el-col :span="8">日期</el-col>
                    <el-col :span="8">持仓TITT数量</el-col>
                    <el-col :span="8">详细信息</el-col>
                </el-row>
                <el-row class="list-item" v-for="(item,index) in changeList" :key="index">
                    <el-col :span="8">{{item.createdtime}}</el-col>
                    <el-col :span="8">{{item.tittnum}}</el-col>
                    <el-col :span="8">
                        <el-button type="text" size="small" @click="$router.push({ path:'/chicangDetail',query:{ id:item.id } })">详情</el-button>
                    </el-col>
                </el-row>-->
				<el-table :data="changeList" height="" border style="width: 100%">
					<el-table-column align='center' prop="createdtime" label="日期" width="250">
					</el-table-column>
					<el-table-column align='center' prop="tittnum" label="持仓TITT数量" width="250">
					</el-table-column>
					<el-table-column align='center' fixed="right" label="详情" width="">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="$router.push({ path:'/chicangDetail',query:{ id:item.id } })">详情</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "notice-list",
		data() {
			return {
				page: 1,
				size: 10,
				total: 0,
				changeList: [],
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
				this.$axios.get('user/chicang', {
					name: 'more',
					token: sessionStorage.getItem('token')
				}).then(res => {
					if(res.data.sta == 401) {
						this.$message.error("请重新登录！");
						this.$router.push('/login')
					}
					if(res.data.data) {
						this.changeList = res.data.data;
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
					border-top: 1px solid #DCDFE6;
				}
			}
			.block {
				text-align: center;
				margin-top: 10px;
			}
		}
	}
</style>
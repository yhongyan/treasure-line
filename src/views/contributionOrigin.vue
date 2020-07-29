<template>
	<div class="notice-list">
		<div class="nav-top clear">
			<el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
			<p>
				当前位置：
				<router-link to="/personCenter">个人中心</router-link>>
				<router-link to>个人贡献值来源</router-link>
			</p>
		</div>
		<h3>个人贡献值来源列表</h3>
		<div class="list">
			<div class="change-list">
				<el-table :data="changeList" height="" border >
					<el-table-column align='center' prop="createtime" label="获得时间" width="">
					</el-table-column>
					<el-table-column align='center' prop="num" label="获得数量" width="">
					</el-table-column>
					<el-table-column align='center' prop="reason" label="获得来源" width="">
					</el-table-column>
				</el-table>
			</div>
			<div class="block">
				<el-pagination @current-change="handleCurrentChange" :current-page="page" layout="total, prev, pager, next, jumper" :total="total"></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				page: 1,
				size: 10,
				total: 0,
				changeList: [],
			};
		},
		mounted() {
			this.getWeekList();
		},
		methods: {
			handleSizeChange(size) {
				this.size = size;
			},
			handleCurrentChange(page) {
				this.page = page;
				this.getWeekList();
			},
			getWeekList() {
				this.$axios
					.get("contribute/getList", {
						page: this.page,
						token: sessionStorage.getItem("token")
					})
					.then(res => {
						if(res.data.sta == 401) {
							this.$message.error("请重新登录！");
							this.$router.push("/login");
						}
						this.changeList = res.data.data.data;
						this.total = res.data.data.total;
					});
			},
		}
	};
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
					line-height: 40px;
					margin: 10px 0 0 0;
					text-align: center;
					color: #999;
					font-size: 12px;
				}
				.list-item {
					font-size: 12px;
					color: #5d6b6e;
					text-align: center;
					// margin: 8px 0;
					line-height: 40px;
					border-top: 1px solid #dcdfe6;
					.number {
						color: #f1a90a;
						cursor: pointer;
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
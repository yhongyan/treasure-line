<template>
	<div class="notice-list">
		<div class="nav-top clear">
			<el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
			<p>
				当前位置：
				<router-link to="/personCenter">个人中心</router-link>>
				<router-link to>领取红股列表</router-link>
			</p>
		</div>
		<h3>领取红股列表</h3>
		<div class="list">
			<div class="list_total">
				<span>好友助力解锁总量：</span>
				<span>{{parseFloat(jiesuoTotal).toFixed(2)}}</span>
				<span>红股</span>
				<!--<span class="allLingqu">全部领取</span>-->
			</div>
			<div class="change-list">
				<!--<el-row class="item-title">
					<el-col :span="4">助力时间</el-col>
					<el-col :span="3">助力ID</el-col>
					<el-col :span="3">会员卡等级</el-col>
					<el-col :span="3">解锁来源</el-col>
					<el-col :span="4">比例</el-col>
					<el-col :span="4">助力数量</el-col>
					<el-col :span="3">操作</el-col>
				</el-row>
				<el-row class="list-item" v-for="(item,index) in changeList" :key="index">
					<el-col :span="4">{{item.createtime}}</el-col>
					<el-col :span="3">{{item.show_id}}</el-col>
					<el-col :span="3">{{item.cardname}}</el-col>
					<el-col :span="3">{{item.source}}</el-col>
					<el-col :span="4">{{item.ratio}}</el-col>
					<el-col :span="4">{{item.nums}}</el-col>
					<el-col :span="3" class="number">
						<el-button type="text" v-if='item.status == 2' @click='itemLingqu({id:item.id,num:item.nums})'>领取</el-button>
						<el-button type="text" v-else>领取成功</el-button>
					</el-col>
				</el-row>-->
				<el-table :data="changeList" height="250" border style="width: 100%">
					<el-table-column prop="createtime" label="助力时间" width="180" align='center'>
					</el-table-column>
					<el-table-column prop="show_id" label="助力ID" width="180" align='center'>
					</el-table-column>
					<el-table-column prop="cardname" label="会员卡等级" width="180" align='center'>
					</el-table-column>
					<el-table-column prop="source" label="解锁来源" width="180" align='center'>
					</el-table-column>
					<el-table-column prop="ratio" label="比例" width="180" align='center'>
					</el-table-column>
					<el-table-column prop="nums" label="助力数量" width="180" align='center'>
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="100" align='center'>
						<template slot-scope="scope">
							<!--<el-button v-if='scope.row.status == 2' type="text" size="small" @click='itemLingqu({id:scope.row.id,num:scope.row.nums})'>领取</el-button>
							<el-button type="text" v-else>领取成功</el-button>-->
							<el-button type="text" size="small" @click='itemLingqu({id:scope.row.id,num:scope.row.nums})'>领取</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="block">
				<el-pagination @current-change="handleCurrentChange" :current-page="page" layout="total, prev, pager, next, jumper" :total="total"></el-pagination>
			</div>
			<div class="queryRecord" @click='searchAllRecord'>查询所有记录>></div>
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
				jiesuoTotal: '',
				lingquStatus: 1
			};
		},

		mounted() {
			this.getList();
		},
		methods: {
			handleSizeChange(size) {
				this.size = size;
			},
			handleCurrentChange(page) {
				this.page = page;
				this.getList();
			},
			searchAllRecord() {
				this.$router.push('/unlockList')
			},
			getList() {
				this.$axios
					.get("help/getList", {
						page: this.page,
						token: sessionStorage.getItem("token")
					})
					.then(res => {
						if(res.data.sta == 401) {
							this.$message.error("请重新登录！");
							this.$router.push("/login");
						}
						if(res.data.data) {
							for(let i = 0; i < res.data.data.data.length; i++) {
								res.data.data.data[i].nums = parseFloat(res.data.data.data[i].nums).toFixed(2)
							}
							this.changeList = res.data.data.data;
							this.total = res.data.data.total;
							this.jiesuoTotal = res.data.count_bonus
						}
					});
			},
			itemLingqu(val) {
				//				console.log(val, 'val')
				var that = this
				that.$axios.post('help/unlockBonus', {
					id: val.id,
					num: val.num,
					token: sessionStorage.getItem("token")
				}).then(res => {

					if(res.data.sta == 200) {
						that.getList()
//						that.$router.go(0)
						that.$message({
							message: '领取成功',
							type: 'success'
						});
//						that.getList()
					} else {
						that.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				})
			}
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
			.list_total {
				border-bottom: 1px solid #e4e7ed;
				padding: 0 44px 20px 40px;
				box-sizing: border-box;
				span {
					font-size: 20px;
					color: #333;
					font-weight: bold;
				}
				.allLingqu {
					float: right;
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
			.queryRecord {
				float: right;
				color: #aaa;
				font-size: 12px;
				font-weight: 500;
				margin: -25px 30px 0 0;
				cursor: pointer;
			}
		}
	}
</style>
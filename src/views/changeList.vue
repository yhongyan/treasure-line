<template>
	<div class="notice-list">
		<div class="nav-top clear">
			<el-button type="primary" plain size="small" icon="el-icon-back" style="float: left;" @click="$router.go(-1)">返回</el-button>
			<p>当前位置：
				<router-link to="/changePage">置换</router-link> >
				<router-link to="/changeList">交易记录</router-link>
			</p>
		</div>
		<h3>交易记录</h3>
		<div class="list">
			<div class="list-title">
				<h4>最近一周的置换记录</h4>
			</div>
			<div class="change-list">
				<!--<el-row class="item-title">
					<el-col :span="4">时间</el-col>
					<el-col :span="3">交易对</el-col>
					<el-col :span="3">方向</el-col>
					<el-col :span="3">成交价格</el-col>
					<el-col :span="4">成交数量(TITT)</el-col>
					<el-col :span="4">成交数量(EOS)</el-col>
					<el-col :span="3">TxID</el-col>
				</el-row>
				<el-row class="list-item" v-for="(item,index) in changeList" :key="index">
					<el-col :span="4">{{item.createtime}}</el-col>
					<el-col :span="3">{{item.jiaoyidui}}</el-col>
					<el-col :span="3">{{item.fangxiang}}</el-col>
					<el-col :span="3" style="color: #f07e1b;">{{item.price}}</el-col>
					<el-col :span="4">{{item.titt}}</el-col>
					<el-col :span="4">{{item.eos}}</el-col>
					<el-col :span="3" style="color: #f07e1b;">{{item.trx_id | sixLength}}</el-col>
				</el-row>-->

				<el-table :data="changeList" height="" border style="width: 100%" :cell-style="cellStyle">
					<el-table-column prop="createtime" label="时间" width="155" align='center'>
					</el-table-column>
					<el-table-column prop="jiaoyidui" label="交易对" width="130" align='center'>
					</el-table-column>
					<el-table-column prop="fangxiang" label="方向" align='center' width="124">
					</el-table-column>
					<el-table-column prop="price" label="成交价格" align='center' width="130">
					</el-table-column>
					<el-table-column prop="titt" label="成交数量(TITT)" align='center' width="130">
					</el-table-column>
					<el-table-column prop="eos" label="成交数量(EOS)" align='center' width="130">
					</el-table-column>
					<el-table-column prop="trx_id" label="TxID" align='center' width="120">
						<template slot-scope="scope">
							<el-button type="text" size="small">{{scope.row.trx_id.substring(0, 5)}}</el-button>
						</template>
					</el-table-column>
					<!--<el-table-column  label="TxID"  prop="trx_id" align='center' width="120">
							<template slot-scope="scope">
								<el-button @click="checkDetail(scope.row.trx_id)" type="text" size="small">{{scope.row.trx_id.substring(0, 5)}}</el-button>
							</template>
						</el-table-column>-->
				</el-table>
			</div>
			<!--<div class="block">-->
			<!--<el-pagination-->
			<!--@size-change="handleSizeChange"-->
			<!--@current-change="handleCurrentChange"-->
			<!--:current-page="page"-->
			<!--:page-size="size"-->
			<!--layout="total, prev, pager, next, jumper"-->
			<!--:total="total">-->
			<!--</el-pagination>-->
			<!--</div>-->
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
			cellStyle({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				console.log(columnIndex)
				if(columnIndex === 3) { //指定坐标
					return 'color:rgb(240, 126, 27)'
				} else {
					return ''
				}
			},
			handleSizeChange(size) {
				this.size = size;
			},
			handleCurrentChange(page) {
				this.page = page;
				this.getWeekList()
			},
			getWeekList() {
				this.$axios.get('displace/getrecordweek', {
					type: 2,
					token: sessionStorage.getItem('token')
				}).then(res => {
					if(res.data.sta == 401) {
						sessionStorage.removeItem('user')
						sessionStorage.removeItem('token')
						return
					}
					if(res.data.data) {
						this.changeList = res.data.data.list;
						// this.total = res.data.data.totalPage;
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.el-button--text {
		color: rgb(240, 126, 27);
	}
	
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
				}
			}
			.block {
				text-align: center;
				margin-top: 10px;
			}
		}
	}
</style>
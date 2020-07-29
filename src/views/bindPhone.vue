<template>
	<div class="login clear">
		<img src="../assets/images/login_bg.jpg" v-if="bigImg" style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt="" />
		<img src="../assets/images/login_bg.png" v-else style="width: 100%;position: absolute;top: 56px;z-index: -1;" alt="" />
		<div class="form">
			<div class="form-content">
				<h3>绑定手机号</h3>
				<div class="phone">
					<el-input v-model="formData.mobile" placeholder="请输入常用手机号"></el-input>
				</div>
				<div style="margin-bottom: 10px;overflow: hidden">
					<el-input v-model="formData.code" style="width: 60%;float:left;" placeholder="请输入验证码"></el-input>
					<el-button style="width: 35%;float: right" v-if="second != 0">{{second}}s后重新获取</el-button>
					<el-button style="width: 35%;float: right" @click="getCode" v-else>获取验证码</el-button>
				</div>
				<!--<div style="margin-bottom: 10px">
                    <el-input v-model="formData.fyaoqingma" placeholder="请输入邀请码（必填）" :disabled="disabled"></el-input>
                </div>
                <div style="margin-bottom: 10px;">
                    <el-input v-model="formData.password" placeholder="请设定您的登录密码，至少8位" show-password></el-input>
                </div>-->
				<!--<div style="margin-bottom: 10px;">
                    <el-input v-model="formData.password" placeholder="请输入您的登录密码，至少8位" show-password></el-input>
                </div>-->
				<el-button type="primary" style="width: 100%;margin: 10px 0 0;" @click="register" :loading="loading">完成</el-button>
				<!--<el-button type="primary" style="width: 100%;margin: 10px 0 0;" @click="register" :loading="loading">GO!领取{{honggu}}红股</el-button>-->
				<!--<router-link to="/login?type=1" class="forget">已有财富链账号？去登录</router-link>-->
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "login",
		data() {
			return {
				formData: {
					mobile: '',
					code: '',
					password: '',
					fyaoqingma: ''
				},
				checked: true,
				honggu: '',
				bigImg: true,
				second: 0,
				radio: '手机号用户注册',
				loading: false,
				disabled: false
			}
		},
		mounted() {
			window.addEventListener('resize', this.handleResize, true)
			this.handleResize();
},
		methods: {
			handleResize() {
				var clientWidth = document.body.clientWidth;
				if(clientWidth <= 850) {
					this.bigImg = false;
				} else {
					this.bigImg = true;
				}
			},
			register() {
				var that = this
				var reg = new RegExp(/^\d{11,11}$/);
				if(!this.formData.mobile) {
					this.$message.error('请输入手机号！');
				} else if(!this.formData.code) {
					this.$message.error('请先获取验证码！');
				} else {
					this.loading = true;
					this.$axios.post('register/bindphone', {
						token: sessionStorage.getItem("token"),
						mobile: that.formData.mobile,
						code: that.formData.code
					}).then(res => {
						this.loading = false;
						if(res.data.sta == 200) {
							that.$message({
								message: '绑定手机号成功！',
								type: 'success'
							});
							that.$router.push({
								path: '/personCenter'
							})
						} else {
							that.$message.error(res.data.msg);
						}
					})
				}
			},
			getCode() {
				if(!this.formData.mobile) {
					this.$message.error('请先输入手机号！');
				} else {
					this.second = 60;
					this.timeOut()
					this.$axios.get('register/code', {
						mobile: this.formData.mobile
					}).then(res => {
						if(res.data.sta == 200) {
							this.code = res.data.data;
//							console.log(this.code, "code");
						} else {
							this.$message.error(res.data.msg);

						}
					})
				}
			},
			timeOut() {
				setTimeout(() => {
					this.second--;
					if(this.second > 0) {
						this.timeOut()
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		padding-top: 56px;
		/*position: relative;*/
		/*height: 600px;*/
		.form {
			/*<!--clear: both;-->*/
			/*<!--position: absolute;-->*/
			/*<!--top: 130px;-->*/
			/*<!--left: 50%;-->*/
			/*<!--transform: translateX(-50%);-->*/
			max-width: 480px;
			min-width: 320px;
			margin: 70px auto 20px;
			padding: 10px 0 20px;
			background: #fff;
			border-radius: 3px;
			box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
			.form-content {
				width: 80%;
				margin: 40px auto 90px;
				text-align: center;
				h3 {
					margin: 0 0 10px;
					font-size: 30px;
					color: #303133;
				}
				.title {
					font-size: 18px;
					color: #f07e1b;
				}
				.phone {
					margin: 30px 0 10px;
				}
				.forget {
					font-size: 14px;
					color: #409eff;
					float: right;
					margin-top: 20px;
				}
				.test {
					font-size: 14px;
					color: #409eff;
					float: left;
					margin-top: 20px;
				}
				.rule {
					text-align: left;
					a {
						color: #409eff;
					}
				}
			}
		}
	}
</style>
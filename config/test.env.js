'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"test"',
	API: '"http://admin.clb528.cn/index/"',
	BASE_URL: '"http://admin.clb528.cn"',
	UPLOAD_URL: '"http://admin.clb528.cn/index/index/uploadimg"'

	//	API: '"http://admin.fortunechain.org/index/"',
	//	BASE_URL: '"http://admin.fortunechain.org"',
	//	UPLOAD_URL: '"http://admin.fortunechain.org/index/index/uploadimg"'
})
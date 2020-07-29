<template>
    <div class="wallet-container">
        <img src="../assets/images/wallet-bg.jpg" style="width: 100%;" v-if="bigImg" alt=""/>
        <img src="../assets/images/wallet-bg-little.jpg" style="width: 100%;" v-else alt=""/>
        <p style="margin: 20px 0 ;color: #999;text-align: center">财富链主网上线前指定合作钱包，推荐使用以下钱包转账和存储TITT</p>
        <div class="use-wallet row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="item">
                    <img class="logo" src="../assets/images/pocket.png" alt=""/>
                    <a href="https://www.tokenpocket.pro/zh/download/android" target="_blank">
                        <img src="../assets/images/anzhuo.png" alt=""/>
                        <span>Android下载</span>
                    </a>
                    <a href="https://www.tokenpocket.pro/zh/download/ios" target="_blank">
                        <img src="../assets/images/ios.png" alt=""/>
                        <span>IOS下载</span>
                    </a>
                    <a href="https://www.tokenpocket.pro/zh/download/pc" target="_blank">
                  
                        <img src="../assets/images/windows.png" alt=""/>
                        <span>桌面版下载</span>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="item">
                    <img class="logo" src="../assets/images/im.png" alt=""/>
                    <a href="https://www.tokenpocket.pro/zh/download/android" target="_blank">
                        <img src="../assets/images/anzhuo.png" alt=""/>
                        <span>Android下载</span>
                    </a>
                    <!-- <a href="https://www.tokenpocket.pro/zh/download/ios" target="_blank"> -->
                    <a href="https://testflight.apple.com/join/3vLqIqvJ" target="_blank">
                        <img src="../assets/images/ios.png" alt=""/>
                        <span>IOS下载</span>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="item">
                    <img class="logo" src="../assets/images/biwei.png" alt=""/>
                    <img class="erweima" src="../assets/images/baiwei_download.png" alt=""/>
                    <p>扫码下载</p>
                </div>
            </div>
        </div>
        <div class="info">
            <p>1.用户参与置换，只能用Itoken钱包和TP钱包的EOS账户。不能使用币威钱包。</p>
            <p>2.币威钱包只能用于收发红包，或者对TITT进行转账收款。</p>
            <p>3.用户使用第三方钱包参与TITT和EOS置换，请务必再三核对置换转账的智能合约账户<span style="color: #000;font-weight: 700">tittbancor14</span>，和转账EOS或TITT账户地址信息。如果出现账户地址错误，一旦完成转账不可撤销。</p>
            <p>4.使用币威钱包转账TITT，暂时有0.01EOS的手续费。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-wallet",
        data() {
            return {
                bigImg:true
            }
        },
        mounted() {
            window.addEventListener('resize',this.handleResize,true)
            this.handleResize();
        },
        methods: {
            handleResize() {
                var clientWidth = document.body.clientWidth;
                if(clientWidth<=850) {
                    this.bigImg = false;
                }else {
                    this.bigImg = true;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wallet-container {
        padding-top: 56px;
        .use-wallet {
            max-width: 1110px;
            margin: 0 auto;
            .item {
                width: 220px;
                height: 338px;
                margin: 0 auto 30px;
                border: 1px solid #ccc;
                text-align: center;
                .logo {
                    margin-bottom: 30px;
                }
                a {
                    display: block;
                    width: 140px;
                    margin: 10px auto;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 6px;
                    color: #333;
                    line-height: 27px;
                    img {
                        float: left;
                        width: 30px;
                        height: 30px;
                    }
                }
                .erweima {
                    width: 128px;
                    height: 128px;
                }
                p {
                    margin-top: 10px;
                }
            }
        }
        .info {
            padding-top: 20px;
            margin: 30px auto;
            border-top: 2px solid #f07e1b;
            width: 75%;
        }
    }
</style>
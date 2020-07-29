<template>
    <div>
        <header id="slider-area">
            <nav class="navbar navbar-expand-md scrolling-navbar bg-white"
                 style="position: fixed;left: 0;right: 0;top: 52px;overflow: hidden;" v-if="phoneShow">
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto w-100 justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#" @click="scrollTop($event,'#cfljs')">财富链介绍</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#" @click="scrollTop($event,'#jzmd')">价值锚定</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#"
                                   @click="scrollTop($event,'#scjz')">TOKEN生成机制</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#" @click="scrollTop($event,'#yyjg')">运营架构</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#" @click="scrollTop($event,'#jljz')">激励机制</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#" @click="scrollTop($event,'#jsys')">技术优势</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#" @click="scrollTop($event,'#sjxg')">数据效果</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#" @click="scrollTop($event,'#hghfx')">合规合法性</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Banner -->
            <div id="carousel-area">
                <div id="carousel-slider" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src="../assets/images/bg.jpg" class="bg_img" :style="phoneShow?'margin-top:96px;':'margin-top:56px'" alt="">
                            <div class="carousel-caption text-center">
                                <h3 class="wow fadeInDown" data-wow-delay="0.3s">FORTUNE CHAIN</h3>
                                <h2 class="wow bounceIn" data-wow-delay="0.6s">财富链</h2>
                                <h4 class="wow fadeInUp" data-wow-delay="0.9s">以珠宝行业为入口，打造全球区块链应用的底层价值锚</h4>
                                <a href="./static/wp_cn.pdf" class="btn btn-lg btn-common btn-effect wow fadeInUp"
                                   data-wow-delay="1.2s" target="_blank" download="白皮书">点击下载白皮书</a>
                                   <!-- 置换输入 -->
                                <div class="change">
                                    <el-row class="row">
                                        <el-col :span="9" class="col-lg-4 col-md-6 col-sm-6">
                                            <img class="img" v-if="select1 == 'EOS'" style="float: left;" src="../assets/images/u80.png" alt="">
                                            <img class="img" v-else style="float: left;" src="../assets/images/logo.png" alt="">
                                            <div style="float: left;margin: 5px 10px 0;">
                                                <span>使用...支付</span>
                                                <div class="select">
                                                    <el-select v-model="select1" size="small" style="width: 60px;">
                                                        <el-option label="EOS" value="EOS"></el-option>
                                                        <el-option label="TITT" value="TITT"></el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <el-input v-model="ConvertData.eosValue" style="float: left;width: 45%;margin-top: 5px;" @blur="computed" @keyup.enter.native="computed"
                                                    placeholder="输入数量"></el-input>
                                        </el-col>
                                        <el-col :span="1" style="text-align: center;" class="col-lg-1 col-md-1 col-sm-1">
                                            <i class="iconfont icon-change" style="display: inline-block;margin-top: 10px;color: #67c23a;font-size: 18px"></i>
                                        </el-col>
                                        <el-col :span="9" class="col-lg-4 col-md-6 col-sm-6">
                                            <img class="img" v-if="select2 == 'TITT'" src="../assets/images/logo.png" alt="">
                                            <img class="img" v-else src="../assets/images/u80.png" alt="">
                                            <div style="float: left;margin: 5px 10px 0;">
                                                <span>接收</span>
                                                <div class="select">
                                                    <el-select v-model="select2" size="small" style="width: 60px;">
                                                        <el-option label="EOS" value="EOS"></el-option>
                                                        <el-option label="TITT" value="TITT"></el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <el-input v-model="ConvertData.tittValue" style="float: left;width: 48%;margin-top: 5px;" placeholder="输入数量" :disabled="true"></el-input>
                                        </el-col>
                                        <el-col :span="5" class="col-lg-3 col-md-5 col-sm-5">
                                            <el-button style="width: 100%;margin: 5px 0 0 0;" type="primary" @click="convert"><i
                                                    class="iconfont icon-change"></i> 置换
                                            </el-button>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!--公告-->
        <div class="news clear" v-if="noticeList.length != 0">
            <i class="iconfont icon-laba"></i>
            <div class="swiper-container" v-swiperText>
                <p v-for="item in noticeList" :key="item.id" @click="$router.push({path:'/noticeDetail',query:{id:item.id}})">{{item.title}}</p>
            </div>
        </div>

        <section id="cfljs" class="section scrollColor">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">财富链介绍</h2>
                    <p class="section-subtitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财富链是基于人工智能+区块链技术的垂直行业公有链，致力于解决收藏级高端珠宝古玩的防伪痛点和变现刚需。其珍藏宝（TITT）通证是全球首款“智能图像式”token，本身即有防伪和收藏等多种价值。为了充分发挥社区的作用，在财富链主网上线前，通过EOS主网发布TITT根通证，采用bancor算法dapp构建市场化价格发现机制。以利于更好的落地各地的珠宝古玩商家超级节点，更快的建设各行各业的财富链通证经济新生态。</p>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section class="call-action section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="cta-trial text-center">
                            <h3 style="color:#f07e1b;">TITT介绍</h3>
                            <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TITT（Treasure in treasure
                                token）是全球首款“智能图像式”token，具备“去中心化”、“价值流通”、“人机对话”和“社区共识”等特点。本身分为“无色根通证”和“染色通证”两种形态，“染色通证”只能由“无色根通证”通过人工智能设备采集实物信息进行上链生成。财富链秉持“流通产生价值”的核心理念，让珠宝古玩实物和通证价值相分离。从而形成线上线下防伪连接和价值映射的有机整体。财富链TITT本身作为有成本和有价值的token，持有用户可以享受收藏级珠宝古玩的多重权益。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section id="jzmd" class="section scrollColor">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">价值锚定</h2>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
                                <div class="icon color-1">
                                    <i class="lni-direction-alt"></i>
                                </div>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，区块链通证发行缺乏价值锚定，导致空气币泛滥。<br><br></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
                                <div class="icon color-2">
                                    <i class="lni-dropbox"></i>
                                </div>
                                <P>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为缺乏价值锚定，导致落地实体经济成为一句空话。导致没有有效应用场景的区块链应用3.0项目。</P>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
                                <div class="icon color-3">
                                    <i class="lni-dollar"></i>
                                </div>
                                <p><br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历史上，布雷顿森林体系规定美元锚定黄金，其他货币锚定美元。以此构建全球货币体系。<br><br>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
                                <div class="icon color-4">
                                    <i class="lni-target-revenue"></i>
                                </div>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们通过先天性去中心化的有价值资产上链，构建区块链通证发行的底层价值锚定。让空气币成为历史，让每一个经济实体组织都能应用区块链技术，发行自己的有价值通证，建立自己的通证经济系统。从而创造全新的增量市场，推动区块链经济时代的繁荣。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">区块链项目的三大核心问题</h2>
                    <div class="sdhx col-lg-8 col-md-8 col-sm-12" style="margin:0 auto; float:none; padding:20px 0;">
                        <img src="../assets/images/sdhxwt.jpg" style="width:100%">
                    </div>
                    <div class="hxwtms">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比特币作为一种货币，其流通和储值属性的矛盾讨论一直存在着，随着通证经济概念的提出，人们都愿意通过流通来兑换更多的权益，与此同时却不得不承担Token增值的风险，绝大部分区块链项目因此搁浅，这是基因决定的。虽然稳定币的出现使这一问题得到缓解，却无法从根本上解决这一问题。
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section id="services" class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">珠宝古玩行业痛点</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
                            <div class="icon color-1">
                                <i class="lni-zoom-in"></i>
                            </div>
                            <h4>防伪/防赝品</h4>
                            <p>防伪是珠宝古玩消费的第一痛点；防赝品是珠宝古玩价值流转的第一痛点。<br><br>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.4s">
                            <div class="icon color-2">
                                <i class="lni-stats-down"></i>
                            </div>
                            <h4>变现/再变现</h4>
                            <p>珠宝行业变现困难且形式单一，典当行折价比例高；拍卖会鉴定与拍卖中间费高达35%，流拍费用高达3%，且有各种缴费陷阱。
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.6s">
                            <div class="icon color-3">
                                <i class="lni-emoji-sad"></i>
                            </div>
                            <h4>企业融资</h4>
                            <p>企业估值难，银行无法授信。银行信用等级最低，很难得到贷款支持。<br><br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section id="scjz" class="section scrollColor">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Token生成机制</h2>
                    <p class="section-subtitle">
                    <h5 class="sc_bt">珍藏宝（TITT）</h5>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每一个通证，都对应唯一的一个实物珠宝古玩，而且是携带个性化实物珠宝古玩信息的，不可篡改的，可以防伪防赝品的，具备可追溯可公开查询的特性的通证，这有效的防止了通证发行过程中可能出现的口头承诺，凭空捏造。每一个通证都是有实体经济支撑的，这无疑是最有说服力的，最具公信力的。</p>
                </div>
                <div>
                    <div style="text-align: center">
                        <img style="width: 100%;max-width: 888px" src="../assets/images/tongzheng.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title">Token发行总量</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 text-center">
                        每个Token对应所上链的珠宝实物
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 text-center">
                        完成以上条件，财富链将发行第二批10亿Token
                    </div>
                </div>
                <div class="w-100 text-center">
                    <img src="../assets/images/token_zl.png" style="width:80%; margin:10px 0;">
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12 text-center">
                        1.财富链将首先发行首批10亿无色通证。
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 text-center">
                        2.Token对应珠宝实物的比例完成40%。
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 text-center">
                        3.继续进行首次循环，发行批次越多，有色token的比例越无限接近100%。公信力越强。
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <div id="subscribe" class="section">
            <div class="section-header">
                <h2 class="section-title">珠宝企业自融资</h2>
            </div>
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img src="../assets/images/zrz.jpg" style="width:100%;">
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="sub-item-box">
                            <div class="icon-box">
                                <i class="lni-diamond"></i>
                            </div>
                            <div class="text-box">
                                <h4>珠宝企业</h4>
                                <p>实现自融资。原价卖出，去消费者签订智能合约，规定期限内消费者可原价变现，并得到商家支付的20~30%的Token利息。此外，实物上链可获得链外收益。</p>
                            </div>
                        </div>
                        <div class="sub-item-box">
                            <div class="icon-box">
                                <i class="lni-users"></i>
                            </div>
                            <div class="text-box">
                                <h4>消费者</h4>
                                <p>实现零风险消费。与商家签订智能合约，规定期限内可原价于商家处变现，并获得20~30%的Token利息，实现链外收益。</p>
                            </div>
                        </div>
                        <div class="sub-item-box">
                            <div class="icon-box">
                                <i class="lni-investment"></i>
                            </div>
                            <div class="text-box">
                                <h4>财富链</h4>
                                <p>实现应用快速落地。Token应用越多，TITT升值预期越强。与更多实物对应，价值锚定越稳定。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End -->

        <!-- Start -->
        <section id="yyjg" class="section scrollColor">
            <div id="yyjg" class="section">
                <div class="w-100 bg_static">
                    <div class="section-header">
                        <h2 class="section-title">运营架构</h2>
                    </div>
                    <div class="container">
                        <div class="col-lg-8 col-md-8 col-sm-12" style="margin:0 auto; float:none;">
                            <img src="../assets/images/yyjg.png" width="100%">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title">去中心化和中心化关系逻辑图</h2>
            </div>
            <div class="container">
                <div class="w-100 text-center">
                    <img src="../assets/images/zxh.jpg" style="width:90%; margin:10px 0;">
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section id="jljz" class="section scrollColor">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Token激励机制</h2>
                    <p class="section-subtitle text-center">财富链设计了六种激励机制用于维护生态系统。后续将推出更多激励机制。
                    </p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="featured-box">
                            <div class="featured-icon">
                                <i class="lni-wallet"></i>
                            </div>
                            <div class="featured-content">
                                <div class="icon-o"><i class="lni-wallet"></i></div>
                                <h4>金钱激励</h4>
                                <p>以无色Token的形式给予生态激励，帮助解决节点上链，验证等核心问题。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="featured-box">
                            <div class="featured-icon">
                                <i class="lni-star"></i>
                            </div>
                            <div class="featured-content">
                                <div class="icon-o"><i class="lni-star"></i></div>
                                <h4>信用激励</h4>
                                <p>设置信用分体系，让信任作为交易的核心要素。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="featured-box">
                            <div class="featured-icon">
                                <i class="lni-crown"></i>
                            </div>
                            <div class="featured-content">
                                <div class="icon-o"><i class="lni-crown"></i></div>
                                <h4>权益激励</h4>
                                <p>给予节点更多的权益奖励，比如投票选举等。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="featured-box">
                            <div class="featured-icon">
                                <i class="lni-rocket"></i>
                            </div>
                            <div class="featured-content">
                                <div class="icon-o"><i class="lni-rocket"></i></div>
                                <h4>效果激励</h4>
                                <p>通过提高对节点的服务效果等方式激励生态。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="featured-box">
                            <div class="featured-icon">
                                <i class="lni-cup"></i>
                            </div>
                            <div class="featured-content">
                                <div class="icon-o"><i class="lni-cup"></i></div>
                                <h4>口碑激励</h4>
                                <p>给予节点更多的口碑累积作为激励方式。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="featured-box">
                            <div class="featured-icon">
                                <i class="lni-grow"></i>
                            </div>
                            <div class="featured-content">
                                <div class="icon-o"><i class="lni-grow"></i></div>
                                <h4>体验激励</h4>
                                <p>可体验到更多的服务以及功能。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section id="jsys" class="section scrollColor">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">主网DAG底层技术优势</h2>
                    <div class="row" style="padding-top:20px;">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <img src="../assets/images/jsys_1.jpg" style="width:100%;">
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <img src="../assets/images/jsys_2.jpg" style="width:100%;">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section id="sjxg" class="section scrollColor">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Token数据效果</h2>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 blog-item">
                        <div class="blog-item-wrapper">
                            <div class="blog-item-img">
                                <video width="100%" height="auto" controls>
                                    <source src="../assets/media/media_1.mp4" type="video/mp4">
                                    您的浏览器不支持 video 标签。
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 blog-item">
                        <div class="blog-item-wrapper">
                            <div class="blog-item-img">
                                <video width="100%" height="auto" controls>
                                    <source src="../assets/media/media_2.mp4" type="video/mp4">
                                    您的浏览器不支持 video 标签。
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 blog-item">
                        <div class="blog-item-wrapper">
                            <div class="blog-item-img">
                                <video width="100%" height="auto" controls>
                                    <source src="../assets/media/media_3.mp4" type="video/mp4">
                                    您的浏览器不支持 video 标签。
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 blog-item">
                        <div class="blog-item-wrapper">
                            <div class="blog-item-img">
                                <video width="100%" height="auto" controls>
                                    <source src="../assets/media/media_4.mp4" type="video/mp4">
                                    您的浏览器不支持 video 标签。
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section id="hghfx" class="section scrollColor">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">合规合法性</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
                            <div class="icon color-1">
                                <i class="lni-ticket-alt"></i>
                            </div>
                            <h4>线下应用</h4>
                            <p align="left">1、bancor算法预发行，只有申请才能得到携带实物信息的通证。<br>
                                2、点对点买卖转让，去中心化买卖转让。<br>
                                3、指定地址（个人流通），便于监管
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.4s">
                            <div class="icon color-2">
                                <i class="lni-world"></i>
                            </div>
                            <h4>全球发行</h4>
                            <p align="left">1、去中心化发行。<br>
                                2、结合实体机经济应用的，本身自带价值的通证。<br>
                                3、通过实物资产上链标准化，实现有效监管。<br><br>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="item-boxes services-item wow fadeInDown" data-wow-delay="0.6s">
                            <div class="icon color-3">
                                <i class="lni-bookmark-alt"></i>
                            </div>
                            <h4>实物上链</h4>
                            <p align="left">1、实物价格和通证价格相分离。<br>
                                2、上链成本和链外收益，共同构成通证价格基础。<br>
                                3、线下节点通过数字贸易得到无色通证，持有无色通证才能上链。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Start -->
        <section class="call-action section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="cta-trial text-center">
                            <h3 style="color:#f07e1b;">团队介绍</h3>
                            <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财富链创始团队，是由珠宝金融管理专家牵头，国际区块链极客和人工智能芯片开发领域领军人物组成的专业项目团队。<br>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以徐卫国为主的团队主体架构，具备十多年的珠宝古玩行业从业经验和珠宝金融资产证券化项目经验。2016年进入区块链积分项目的专业研究领域，对于资产通证化、标准化等行业痛点和区块链落地应用具有独特的视角和丰富的实践。<br>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以Risky
                                Lau为首的区块链公有链主链开发骨干，在对等计算、区块链开发、分片技术、有向无环图（DAG）技术、抗量子加密技术等领域专业研究多年。他本人博士学历，有4部专著，在国际权威专业期刊发表论文几十篇。团队骨干成员均具有十年以上丰富的项目开发经验和攻关实践。<br>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以peter
                                wu为首的人工智能芯片开发骨干，曾经领导团队在区块链矿机芯片开发领域取得优异的成绩，所开发的以太坊矿机出块速度高居全球最前沿。他本人北航硕士学历，有十几年的芯片开发经验。带领科研团队为财富链的人工智能上链设备研发做出了很大贡献。<br>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;综合来说，财富链创始团队能力互补性强，战略层次分明，区块链落地应用焦点明确，解决民生刚需强劲有力，是一支脚踏实地的，富有创造力的高科技项目团队。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Go To Top Link -->
        <a href="#" class="back-to-top" @click="goTop($event)">
            <i class="lni-arrow-up"></i>
        </a>

        <!--<div id="loader">-->
        <!--<div class="spinner">-->
        <!--<div class="double-bounce1"></div>-->
        <!--<div class="double-bounce2"></div>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import $ from "jquery"

    import Scatterutil from "../../util/scatterutil";
    import {JsonRpc} from 'eosjs';

    export default {
        name: "home-page",
        data() {
            return {
                ConvertData: {
                    eosValue: "",
                    tittValue: ""
                },
                select1: 'EOS',
                select2: 'TITT',
                isChange:true,
                noticeList:[],
                precent:0.005,
                phoneShow:true
            }
        },
        watch: {
            select1(val) {
                this.ConvertData.eosValue = '';
                this.ConvertData.tittValue = ''
                if(val == 'EOS') {
                    this.select2 = 'TITT'
                }else {
                    this.select2 = 'EOS'
                }
            },
            select2(val) {
                this.ConvertData.eosValue = '';
                this.ConvertData.tittValue = ''
                if(val == 'EOS') {
                    this.select1 = 'TITT'
                }else {
                    this.select1 = 'EOS'
                }
            }
        },
        mounted() {
            // this.$nextTick(() => {
            //   $(window).on('load',function() {
            //     "use strict";
            //     $('#loader').fadeOut();
            //   });
            // });
            window.addEventListener('resize',this.handleResize,true)
            this.handleResize();
            window.addEventListener('scroll', this.handleScroll, true);
            this.getNoticeList();
            this.getLineList();
            // this.$nextTick(() => {
            //     this.init()
            // })
        },
        directives: {
            swiperText: {
                inserted(el) {
                    let sText = document.querySelectorAll(".swiper-container p");
                    let sUl = document.querySelector(".swiper-container");
                    let sTop = 0;
                    if(sText.length > 0) {
                        setInterval(() => {
                            sTop += 56;
                            if(sTop >= sText.length*56){
                                sUl.style.transition = "none";
                                sTop = 0;
                            }else {
                                sUl.style.transition = "all linear .5s"
                            }
                            sUl.style.marginTop = -sTop + "px";
                        },2500)
                    }
                }
            }
        },
        methods: {
            handleResize() {
                var clientWidth = document.body.clientWidth;
                if(clientWidth<=850) {
                    this.phoneShow = false;
                }else {
                    this.phoneShow = true;
                }
            },
            getNoticeList() {
                this.$axios.get('index/gonggao').then(res => {
                    if(res.data.data) {
                        if(res.data.data.list.length < 5) {
                            this.noticeList = res.data.data.list;
                        }else {
                            this.noticeList = res.data.data.list.slice(0,4);
                        }
                    }
                })
            },
            getLineList() {
                this.$axios.get('displace/getRecord').then(res => {
                    if(res.data) {
                        this.precent = res.data.replacement.titt__eos;
                    }
                })
            },
            handleScroll() {
                if ($(this).scrollTop() > 200) {
                    $('.back-to-top').fadeIn(400);
                } else {
                    $('.back-to-top').fadeOut(400);
                }

                //滚动到相应标题内容时，标题出现相应样式
                var nodeList = document.querySelectorAll('.nav-link');
                nodeList.forEach(item => {
                    item.classList.remove('active')
                })
                $('.scrollColor').each(function (index, element) {
                    var dom = $(this);
                    var scrollTop = $(window).scrollTop();
                    var domHeight = dom.height();
                    var offsetTop = dom.offset().top;
                    if (scrollTop <= offsetTop + domHeight - 100 && scrollTop > offsetTop - 100) {
                        var nodeList = document.querySelectorAll('.nav-link');
                        nodeList.forEach(item => {
                            nodeList[index].classList.add('active')
                        })
                    }
                })
            },
            goTop(event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 600);
                return false;
            },
            scrollTop(event, id) {
                console.log($('body').scrollTop(),$(id).offset().top);
                // event.preventDefault();
                $('html, body').animate({
                    scrollTop: $('body').scrollTop() + $(id).offset().top - 80
                }, 800);
                // console.log($(document).scrollTop());

            },
            computed() {
                if(this.select1 == 'EOS') {
                    if(this.ConvertData.eosValue.trim()) {
                        if(isNaN(this.ConvertData.eosValue)) {
                            alert('请输入数字！');
                            return false;
                        }
                        this.ConvertData.tittValue = (this.ConvertData.eosValue/this.precent).toFixed(2)
                    }
                }else {
                    if(this.ConvertData.eosValue.trim()) {
                        if(isNaN(this.ConvertData.eosValue)) {
                            alert('请输入数字！');
                            return false;
                        }
                        this.ConvertData.tittValue = (this.ConvertData.eosValue*this.precent).toFixed(2)
                    }
                }
            },
            //置换交易
            async init() {
                let data = await Scatterutil.init();
                console.log(`data is: ${data}`);
                if(data == true) {
                    alert("初始化成功！");
                }
            },
            //点击进行兑换
            async convert() {
                if(!sessionStorage.getItem('user')) {
                    this.$message({
                        message: '请先登录！',
                        type: 'info'
                    });
                    this.$router.push('/login')
                    return
                }

                var input = 0;  // 左边输入的数值
                var memo = "eos"; // 读取是兑换 eos 还是 inve
                if(this.isChange) { //左边图标为 eos
                    input = this.ConvertData.eosValue;
                    memo = 'eos';
                }else { //左边图标为 inve
                    input = this.ConvertData.tittValue;
                    memo = 'titt';
                }
                var num = formatNum(input);

                if(num == false) {
                    alert('请输入正确格式的兑换数量！');
                    return false;
                }

                this.computed()

                this.$router.push({ path:'/changeSure',query:{eos:this.ConvertData.eosValue,titt:this.ConvertData.tittValue,fangxiang:this.isChange} })

                // console.log(`${memo} amount to exchange is: ${num}`);
                //
                // //转化为小数点后两位精度
                // let result = await Scatterutil.transfer(num, memo);
                // if(result == true) {
                //     this.changeDone()
                // }
            },
            changeDone() {
                var params = {
                    status:1,
                    eos:this.ConvertData.eosValue
                }
                if(this.isChange) {
                    params.fangxiang = 2;
                }else {
                    params.fangxiang = 1;
                }
                this.$axios.post('user/zhihuan',params).then(res => {
                    if(res.data.sta == 1) {
                        this.$message({
                            message: '置换成功！',
                            type: 'success'
                        });
                    }
                })
            }
        }
    }
    //对兑换数量进行格式化
    function formatNum(num) {
        var f = parseFloat(num);
        if(isNaN(f)) {
            return false;
        }
        var f = Math.round(num * 100)/100;
        var s = f.toString();
        var rs = s.indexOf('.');
        if(rs < 0) {
            rs = s.length;
            s += '.';
        }
        while(s.length <= rs+2) {
            s += '0';
        }
        return s;
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/main.css";
    @import "../assets/style/line-icons.css";
    /*@import "../assets/style/owl.carousel.css";*/
    /*@import "../assets/style/owl.theme.css";*/
    @import "../assets/style/nivo-lightbox.css";
    @import "../assets/style/magnific-popup.css";
    @import "../assets/style/animate.css";
    @import "../assets/style/menu_sideslide.css";
    @import "../assets/style/responsive.css";
    @import "../assets/style/color-switcher.css";
    @import "../assets/style/css.css";

    .change {
        padding: 10px 15px;
        margin: 30px auto 0;
        max-width: 1110px;
        background: #f1f1f3;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.16);
        border-radius: 5px;
        color:#999;
        .img {
            float: left;
            margin: auto 0;
            vertical-align: middle;
            width: 50px;
            height: 50px;
        }
        .change-left {
            float: left;
            overflow: hidden;
        }
        .change-right {
            float: left;
            overflow: hidden;
        }
    }

    .news {
        padding: 0 20px;
        margin: 20px auto 0;
        max-width: 1110px;
        height: 56px;
        overflow: hidden;
        background: #f1f1f3;
        border-radius: 5px;
        i {
            float: left;
            margin-top: 15px;
            font-size: 18px;
            color: #f07e1b;
        }
        .swiper-container {
            float: left;
            margin-left: 20px;
            height: 56px;
        }
        p {
            line-height: 56px;
            cursor: pointer;
            &:last-of-type {
                margin-right: 0;
            }
        }
    }
    .bg_static {
        background:url(../assets/images/cont_bg.jpg) no-repeat center; 
        padding:30px 0;
    }
</style>

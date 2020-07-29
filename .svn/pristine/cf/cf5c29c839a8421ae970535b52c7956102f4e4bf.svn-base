//加载scatter
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';

import { Api, JsonRpc, } from 'eosjs';

//初始化对象（使用eosj 或者scattereth，或者scattertron）
ScatterJS.plugins(new ScatterEOS());

let scatter = null;
let eosapi;

const network = {
    blockchain: 'eos',
    host: 'eos.greymass.com',
    port: 443,
    protocol: 'https',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
};

const rpc = new JsonRpc('https://eos.greymass.com:443');

const requiredFields = { accounts: [network] };

//export命令定义了模块的对外接口
export default class Scatterutil {

    static async init() {
        //ES6 Promise
        return new Promise(async resolve => {
            ScatterJS.scatter.connect("caifulian").then(connected => {
                // console.log(connected,"connected");
                if (!connected) {
                    resolve("false");
                    return false;
                }
                scatter = ScatterJS.scatter;
                // console.log(scatter,"hhhh");
                //
                eosapi = scatter.eos(network, Api, { rpc, beta3: true });
                // console.log(eosapi,"eosapi1");
                // 必须清空对象防止泄露对象。
                window.scatter = null;
                // console.log('我走到这了，在init')
                resolve("true");
            })
        });
    }

    //进行兑换：
    //|-- num：兑换数量
    //|-- memo：兑换品种 eos|inve
    static async transfer(num, memo) {
        if (scatter == null) {
            alert("只有打开scatter钱包才能完成兑换，若没有请安装！");
            return false;
        }
        
        //验证兑换数量是否符合要求
        if(!isValidAmount(num)) {
            alert("兑换金额不符合格式要求！");
            return false;
        }

        var token = "";
        var tokenAccount = "";
        switch(memo) {
            case "eos":
                token = " EOS";
                tokenAccount = "eosio.token";
                break;
            case "titt":
                token = " TITT";
                tokenAccount = "riskyrisky14";
                break;
            default:
                alert("只能兑换 EOS 或者 TITT！");
                return false;
        }
        var numStr = num + token;
        // console.log(scatter,"scatter");
        // console.log(scatter.identity,"scatter.identity");
        // console.log(scatter.identity.accounts,"scatter.identity.accounts");
        console.log(scatter,"jjj");
        return new Promise(async resolve => {
            scatter.getIdentity(requiredFields).then(() => {
                // console.log(scatter,"scatter");
                // console.log(scatter.identity,"scatter.identity");
                // console.log(scatter.identity.accounts,"scatter.identity.accounts");
                const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
                const transactionOptions = { authorization: [`${account.name}@${account.authority}`] };

                eosapi.transact(
                    {
                        actions: [{
                            account: tokenAccount,
                            name: 'transfer',
                            authorization: [{
                                actor: account.name,
                                permission: account.authority,
                            }],
                            data: {
                                from: account.name,
                                to: 'tittbancor14',
                                quantity: numStr,
                                memo: ''
                            },
                        }]
                    }, 
                    {
                        blocksBehind: 3,
                        expireSeconds: 30,
                    }
                ).then(result => {
                    // console.log(` Transaction ID: ${result.transaction_id}`);
                    resolve("true");
                }).catch(error => {
                    console.log(error);
                });

            }).catch(error => {
                console.error(error);
                resolve("false");
            });
        });
    };
}

//验证是否为精确到小数点后 4 位的浮点数
function isValidAmount(num) {
    var reg = /^\d+(\.\d{2})?$/;
    if(reg.test(num)) {
        return true;
    }else {
        return false;
    } 
}

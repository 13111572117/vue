import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import LoginDl from "../components/login-dl";
import LoginZhc from "../components/login-zhc";
import Tuijianzuozhe from "../components/tuijianzuozhe";
import Write from "../components/write";
import Xinjianwenji from "../components/child-components/child-write/xinjianwenji";
import Rijiben from "../components/child-components/child-write/rijiben";
import Suibi from "../components/child-components/child-write/suibi";
import HomeW from "../components/xinjianCont/HomeW";
import Content from "../components/xinjianCont/content";
import Fenxiang from "../components/xinjianCont/fenxiang";
import Pinglun from "../components/xinjianCont/pinglun";
import Dibu from "../components/xinjianCont/dibu";
import Jianxinleft from "../components/xiaoxi/jianxinleft";
import JxCont1 from "../components/xiaoxi/jianxinrightCont1";
import JxCont2 from "../components/xiaoxi/jianxinrightCont2";
import JxCont3 from "../components/xiaoxi/jianxinrightCont3";
import JxCont4 from "../components/xiaoxi/jianxinrightCont4";
import JxCont5 from "../components/xiaoxi/jianxinrightCont5";
import JxCont6 from "../components/xiaoxi/jianxinrightCont6";
import JxCont7 from "../components/xiaoxi/jianxinrightCont7";

import ZuozheC from "../components/zuozheNav/zuozheC";
import MyC from "../components/users/MyC";
import Xihuan from "../components/users/xihuan";
import Scgz from "../components/users/scgz";
import Shoucang from "../components/shoucangNav/shoucang";
import Mysetting from "../components/setting/mysetting";
import Setting1 from "../components/setting/Setting1";
import Setting2 from "../components/setting/Setting2";
import Setting3 from "../components/setting/Setting3";
import Setting4 from "../components/setting/Setting4";
import Setting5 from "../components/setting/Setting5";
import MyGuanzhu from "../components/guanzhu/myGuanzhu";
import myGuanzhu1 from "../components/guanzhu/myGuanzhu1.vue"
import myGuanzhu2 from "../components/guanzhu/myGuanzhu2.vue"
// import AllTableft1 from "../components/guanzhu/allTableft1";
// import AllTableft2 from "../components/guanzhu/allTableft2";
import AllTableft3 from "../components/guanzhu/allTableft3";
import AllTableft4 from "../components/guanzhu/allTableft4";
import AllTableft5 from "../components/guanzhu/allTableft5";
// import Rightcont from "../components/guanzhu/Rightcont";
import Rightcot1 from "../components/guanzhu/rightcot1";
import Rightcot2 from "../components/guanzhu/rightcot2";
import Rightcot3 from "../components/guanzhu/rightcot3";
import Rightcot4 from "../components/guanzhu/rightcot4";
import Rightcot5 from "../components/guanzhu/rightcot5";
import Rightcot6 from "../components/guanzhu/rightcot6";
import BangzhuCont from "../components/bangzhucont/bangzhuCont";
import Yigouneirong from "../components/yigouneirong/yigouneirong";
import Qianbao from "../components/myqianbao/qianbao";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        // {
        //     path:'/',
        //     redirect:'/Home'
        // },
        {
            path: "/",
            component: Home
        },
        {
            path: "/login-dl",
            component: LoginDl
        },
        {
            path: "/login-zhc",
            component: LoginZhc
        },
        {
            path: "/write",
            component: Write,
            children: [
                {
                    path: "/",
                    component: Xinjianwenji
                },
                {
                    path: "/rijiben",
                    component: Rijiben
                },
                {
                    path: "/suibi",
                    component: Suibi
                }
            ]
        },
        {
            path: "/tuijianzuozhe",
            component: Tuijianzuozhe
        },

        {
            path: "/HomeW",
            component: HomeW,
            children: [
                {
                    path: "",
                    component: Content,
                    children: [
                        {
                            path: "",
                            component: Fenxiang,
                            children: [
                                {
                                    path: "",
                                    component: Pinglun,
                                    children: [
                                        {
                                            path: "",
                                            component: Dibu
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        // 作者
        {
            path: "/zuozheC",
            component: ZuozheC
        },
        // 消息
        {
            path: "/jianxinleft",
            component: Jianxinleft,
            children:[
                {
                    path:'/',
                    component:JxCont1
                },
                {
                    path:'/jxCont2',
                    component:JxCont2
                },
                {
                    path:'/jxCont3',
                    component:JxCont3
                },
                {
                    path:'/jxCont4',
                    component:JxCont4
                },
                {
                    path:'/jxCont5',
                    component:JxCont5
                },
                {
                    path:'/jxCont6',
                    component:JxCont6
                },
                {
                    path:'/jxCont7',
                    component:JxCont7
                }
            ]
        },
        {
            path: "/MyC",
            component: MyC
        },
        {
            path: "/xihuan",
            component: Xihuan
        },
        {
            path: "/scgz",
            component: Scgz
        },
        // 收藏
        {
            path: "/shoucang",
            component: Shoucang
        },
        // 设置
        {
            path: "/mysetting",
            component: Mysetting,
            children: [
                // 基础设置
                {
                    path: "/",
                    component: Setting1
                },
                // 个人资料
                {
                    path: "/Setting2",
                    component: Setting2
                },
                // 黑名单
                {
                    path: "/Setting3",
                    component: Setting3
                },
                // 赞赏管理
                {
                    path: "/Setting4",
                    component: Setting4
                },
                // 账号管理
                {
                    path: "/Setting5",
                    component: Setting5
                }
            ]
        },
        // {
        //     path: "/allTableft2",
        //     component: AllTableft2,
        //     children: [
        //         // 全部关注默认
        //         {
        //             path: "",
        //             component: AllTableft1
        //         },
        //         // 只看作者
        //         {
        //             path: "allTableft2",
        //             component: AllTableft2
        //         },
        //         // 只看专题
        //         {
        //             path: "allTableft3",
        //             component: AllTableft3,
        //             children: [
        //                 {
        //                     path: "/myGuanzhu/allTableft3/Rightcont1",
        //                     component: Rightcot1
        //                 }
        //             ]
        //         },
        //         // 只看文集
        //         {
        //             path: "allTableft4",
        //             component: AllTableft4
        //         },
        //         // 只看推送更新
        //         {
        //             path: "allTableft5",
        //             component: AllTableft5
        //         }
        //     ]
        // },
        // 只看专题
        {
            path: "/allTableft3",
            component: AllTableft3,
            children: [
                {
                    path: "/myGuanzhu/allTableft3/Rightcont1",
                    component: Rightcot1
                }
            ]
        },
        // 只看文集
        {
            path: "/allTableft4",
            component: AllTableft4
        },
        // 只看推送更新
        {
            path: "/allTableft5",
            component: AllTableft5
        },






        // 关注left
        {
            path: "/myGuanzhu",
            component: MyGuanzhu,
            children: [
                {
                    path: "/",
                    component: Rightcot1
                },
                {
                    path: 'Rightcot2',
                    component: Rightcot2
                },
                {
                    path: 'Rightcot3',
                    component: Rightcot3
                },
                {
                    path: 'Rightcot4',
                    component: Rightcot4
                },
                {
                    path: 'Rightcot5',
                    component: Rightcot5
                },
                {
                    path: 'Rightcot6',
                    component: Rightcot6
                },
            ]
        },
        {
            path: "/myGuanzhu1",
            component: myGuanzhu1,
            children: [
                {
                    path: "/",
                    component: Rightcot1
                },
                {
                    path: 'Rightcot2',
                    component: Rightcot2
                },
                {
                    path: 'Rightcot3',
                    component: Rightcot3
                }
            ]
        },
        {
            path: "/myGuanzhu2",
            component: myGuanzhu2,
            children: [
                {
                    path: "/",
                    component: Rightcot1
                },
                {
                    path: 'Rightcot2',
                    component: Rightcot2
                },
                {
                    path: 'Rightcot3',
                    component: Rightcot3
                }
            ]
        },
        // 关注right
        // {
        //     path: "/Rightcont",
        //     componen: Rightcont,
        //     children: [
        //         {
        //             path: "/",
        //             component: Rightcot1
        //         }
        //     ]
        // },
        // 帮助与反馈
        {
            path: "/bangzhuCont",
            component: BangzhuCont
        },
        // 已购内容
        {
            path: "/yigouneirong",
            component: Yigouneirong
        },
        // 钱包
        {
            path: "/qianbao",
            component: Qianbao
        }
    ]
});

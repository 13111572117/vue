<template>
<!--最外层大的div-->
    <div class="conterL">
        <!--左侧内容-->
        <div class="neirongL">
            <!--头部内容-->
            <div class="header">
                <el-row>
                    <el-col :span="4"><div class="yuantu"><img src="../../assets/xynyuantu.png" alt=""></div></el-col>
                    <el-col :span="11"><div class="dierlie ">
                      <!--第一行-->
                      <el-row>
                        <el-col :span="24"><div class="diyihang"><p>老沈1</p></div></el-col>
                      </el-row>
                      <!--第二行-->
                      <el-row gutter="40" class="titleSpan">
                        <el-col :span="4"><div class="dierhang" style="border-right:1px solid #969696;"><span>123</span><a>关注></a></div></el-col>
                        <el-col :span="4"><div class="dierhang" style="border-right:1px solid #969696;"><span>5160</span><a>粉丝></a></div></el-col>
                        <el-col :span="4"><div class="dierhang" style="border-right:1px solid #969696;"><span>525</span><a>文章></a></div></el-col>
                        <el-col :span="4"><div class="dierhang" style="border-right:1px solid #969696;"><span>920</span><a>字数</a></div></el-col>
                        <el-col :span="4"><div class="dierhang" style="border-right:1px solid #969696;padding-left: 5px"><span>588</span><a>收获喜欢</a></div></el-col>
                        <!-- <el-col :span="3"><div class="dierhang"><span>123</span><a>简书钻></a></div></el-col> -->
                        <el-col :span="4"><div class="dierhang" style=";padding-left: 5px"><span>325</span><a>简书钻</a></div></el-col>
                      </el-row>
                      <!--第三行-->
                          <!-- <el-row>
                            <el-col :span="5"><div class="disanhang"> <span>328</span><p>简书钻</p></div></el-col>
                        </el-row> -->
                      </div> 
                    </el-col>
                    <el-col :span="8"><div class="disanlie">
                       <el-button round>发简信</el-button>
                       <el-button type="success" round>+关注</el-button>
                      </div></el-col>
                </el-row>
            </div>
            <!--导航内容-->
            <div class="daohang">
                <el-row>
                     <el-col :span="24">
                         <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane name="first" ><span slot="label"><i class="el-icon-s-order">文章</i></span>
                                <!-- 测试模块1 -->
                                 <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
              <!--模块-->
            <div class="zhongjian" >
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
              <!--模块-->
            <div class="zhongjian" >
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
              <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
              <!--模块-->
            <div class="zhongjian" >
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
                                </el-tab-pane>







                                <!--第二个-->
                                <el-tab-pane name="second" ><span slot="label"><i class="el-icon-s-help">动态</i></span>
                                
                                <!-- 测试模块2 -->
                                
                                
                                                 <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(七)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 郑星野连夜回到上海已是第二天上午。他看到石路联络站的一刻浑身冰凉、如坠深渊</p>
                     <p> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>



                             <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>


                             <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
            
                                
                                
                                
                                </el-tab-pane>
                                <el-tab-pane name="third" ><span slot="label"><i class="el-icon-s-comment">最新评论</i></span>
                                
                                
                                <!-- 测试模块3 -->
                              <!--第三个-->
                                                 <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
                             <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(八)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、你的名字无人知晓 你的功勋永垂不朽 ——摘自北京西山无名英雄广场碑</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
                             <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
             <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
             <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
                                
                                
                                
                                <!--第四个-->
                                
                                </el-tab-pane>
                                <el-tab-pane name="fourth" ><span slot="label"><i class="el-icon-message-solid">热门</i></span>
                                <!-- 测试模块4 -->
                               

                                                 <!--模块-->
            <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(十)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
             <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
             <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
             <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
             <div class="zhongjian">
                <div class="diyi">
                    <el-row>
                        <el-col :span="1"><div class="xiaotu"><img src="../../assets/xyn000.png" alt=""></div></el-col>
                        <el-col :span="7"><div class="laoshen"><a href="">老沈1</a><span>发表了评论2019</span></div></el-col>
                   </el-row>
                </div>
                <!-- <div class="comment">
                  <el-row>
                        <el-col :span="2"><div class="commentL"><a href="">@任真</a></div></el-col>
                        <el-col :span="4"><div class="commentR"><a>嗯到时候试试</a></div></el-col>
                   </el-row>
                </div> -->
                <div class="dier" style="margin-top:10px">
                  <el-row>
                     <el-col :span="3"><div class="zhinian"><a href="">执念(六)</a></div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24"><div class="wenzi">
                      <p>六、 真是“野火烧不尽，春风吹又生。”祝弘元道。 祝先生、李先生听烦了吧。 郑星野说道。</p>
                     <p style=""> 李世群感慨道，所谓世事难料，我以前也参加过共。cha...</p>
                     </div></el-col>
                  </el-row>

                 <div class="disan" >
                  <el-row>
                    <el-col :span="2"><div class="aaa"><a href="">老沈1</a></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-view">44</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-chat-square">22</i></div></el-col>
                    <el-col :span="2"><div class="tubiao"><i class="el-icon-headset">2</i></div></el-col>
                  </el-row>
                   </div>
                   <el-divider></el-divider>
                </div>
            </div>
            

            
                                
                                
                                </el-tab-pane>
                        </el-tabs>   
                     </el-col>
                </el-row>
            </div>
           





























        </div> 
    </div>
</template>
<script>
    export default ({
        name: "conterL",

        data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      // handleClick(tab, event) {
      //   console.log(tab, event);
      // }
    }
  });
    
</script>
<style scoped>
   .conterL{
       text-align: center;
       width:65%;
       height: auto;
       /* border:1px solid red; */
       float: left;
       /* margin-top: 25px; */
   }
   .neirongL{
       width: 80%;
       height: auto;
       /* border:1px solid red; */
       float:right;
   }
   
   .el-tabs__item.is-active {
    color: #646464;
   }
   .el-tabs__item {
       color:#969696;
   }
   .yuantu img{
     width: 65px;
     height: 65px;
     border-radius:33px;
     border:solid rgb(100,100,100) 1px;
     margin-left: -21px;
   }
   .xiaotu img{
       float: left;
       width:30px;
        height:30px;
        border-radius:20px;
        border:solid rgb(100,100,100) 1px;
   }
   .diyihang{
     text-align: left;
   }
   .diyihang p{
     margin: 0px 0 15px 0;
     font-size: 21px;
    font-weight: 700;
   }
   .dierhang{
     /* text-align: center; */
     margin-top:-15px;
     width: 62px;
     margin-left: -30px;
  
   }
   .dierhang a{
     display: block;
    width: 100%;
    font-size: 15px;
    color: #969696;
    font-size: 12px;
    /* margin-left:13px; */


   }
  .dierhang span{
    color:#333;
    font-size: 15px;
    /* margin:0px 0px -10px; */


   }
   .disan{
     margin-top: -10px;
     
   }
   .disanhang{
     border:1px solid red;
     margin-top: 10px;
   }
   .disanhang span{
     margin-top: -3px;
    font-size: 15px;
    color: red;
   }
   .disanhang p{
     display: block;
     color:red;
   
   }



   .laoshen a{
     text-decoration:none;
     font-size: 13px;
     margin-left: -6px;
    
    
   }
    /* .titleSpan { */
     /* margin-left: 12px; */
     /* color: write; */
     /* font-size: 13px; */
   /* } */
   /* .commentL a{
     color:#3194D0;
   }
   .commentR a{
     font-size: 16px;
     color:#333333;
     margin:0px 0px 10px;
   } */
   .zhongjain{

   }
   .zhinian a{
     margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color:#333333;
   }
   .wenzi p{
     /* display: block; */
     font-size:13px;
     color:#969696;
     /*margin-left: -49px;*/
   }
  .wenzi p:nth-child(2){
    margin: 5px 0 20px 0;
      padding-right: 180px
  }
   .tubiao i{
     color:#B4B4B4;
     margin-left: 13px;
    
   }
   .aaa a{
    font-size: 13px;
    color:#969696;
     text-decoration:none;
     margin-left: -4px;
     color:red;
   }
   .disan{
     margin-top: -30px;
   }
   .el-button.is-round 
   {
     border-radius: 20px;
    padding: 11px 21px;
}
.disanlie{
  margin-top: 30px;
}
  
  




































































   /* .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    margin-top: 40px;
    border-radius: 4px;
    min-height: 46px;
  } */
  /* .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } */
</style>
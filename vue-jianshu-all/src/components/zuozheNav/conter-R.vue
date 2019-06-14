<template>
<!--右侧内容-->
    <div class="conterR">
        <!--第一块内容-->
        <div class="diyikuai">
               <el-row style="margin-top:-11px">
                    <el-col :span="20">
                    <el-row>
                        <el-col :span="2"><div class="diyikuai1"><img src="../../assets/xyn111.png" alt=""></div></el-col>
                        <el-col :span="12"><div class="diyikuai1"><a href="">简书小说家</a></div></el-col>
                    </el-row>
                    </el-col>
                </el-row>
                <el-row style="margin-top:-11px">
                    <el-col :span="20">
                    <el-row>
                        <el-col :span="2"><div class="diyikuai1"><img src="../../assets/xyn222.png" alt=""></div></el-col>
                        <el-col :span="12"><div class="diyikuai1"><a href="">简书版权</a></div></el-col>
                    </el-row>
                    </el-col>
                </el-row>
                <el-row style="margin-top:-11px">
                    <el-col :span="20">
                    <el-row>
                        <el-col :span="2"><div class="diyikuai1"><img src="../../assets/xyn333.png" alt=""></div></el-col>
                        <el-col :span="14"><div class="diyikuai1"><a href="">简书签约作者</a></div></el-col>
                    </el-row>
                    </el-col>
                </el-row>
                <div style="margin-top:-30px;width:80%">
                    <el-divider></el-divider>
                </div>
        </div>
        <!--第二块内容-->
        <div class="dierkuai" style="height:100px;margin-top:-20px;">
                <el-row>
                    <el-col :span="10" style="margin-bottom:10px"><div class=""><p>暂无个人介绍</p></div></el-col>
                </el-row>
                <div class="aaa" style="margin-top:-28px;width:80%">
                    <el-divider></el-divider>
                </div>
        </div>
        <!--第三块内容-->
        <div class="disankuai">
                        <el-row>
                               <el-col :span="24">
                                   <div class=""  style="">
                                        <el-row>
                                            <el-col :span="20">
                                                <el-row>
                                                    <el-col :span="2"><div class="disankuai1"> <i class="el-icon-menu"></i></div></el-col>
                                                    <el-col :span="12"><div class="disankuai2"><a href="">他关注的文章/文集/连载</a></div></el-col>
                                                </el-row>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                         </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class=" " style="margin-top:7px">
                                    <el-row>
                                        <el-col :span="20">
                                            <el-row>
                                                <el-col :span="2"><div class="disankuai1"> <i class="el-icon-video-pause"></i></div></el-col>
                                                <el-col :span="7"><div class="disankuai2"><a href="">他喜欢的文章 </a></div></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                <div style="width:80%">
                    <el-divider></el-divider>
                </div>
        </div>
        <!--第四块内容-->
        <div class="disikuai">
                <el-row>
                    <el-col :span="4"><div class="disikuai1"><p>他的文集</p></div></el-col>
                </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class=" " style="margin-top:-11px">
                                    <el-row>
                                        <el-col :span="20">
                                            <el-row>
                                                <el-col :span="2"><div class="disankuai1"> <i class="el-icon-s-order"></i></div></el-col>
                                                <el-col :span="3"><div class="disankuai2"><a href="">文2 </a></div></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                <el-row>
                            <el-col :span="24">
                                <div class=" " style="margin-top:-11px">
                                    <el-row>
                                        <el-col :span="20">
                                            <el-row>
                                                <el-col :span="2"><div class="disankuai1"> <i class="el-icon-s-order"></i></div></el-col>
                                                <el-col :span="3"><div class="disankuai2"><a href="">随笔 </a></div></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                <el-row>
                            <el-col :span="24">
                                <div class=" " style="margin-top:-11px">
                                    <el-row>
                                        <el-col :span="20">
                                            <el-row>
                                                <el-col :span="2"><div class="disankuai1"> <i class="el-icon-s-order"></i></div></el-col>
                                                <el-col :span="3"><div class="disankuai2"><a href="">执念 </a></div></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                <el-row>
                            <el-col :span="24">
                                <div class=" " style="margin-top:-11px">
                                    <el-row>
                                        <el-col :span="20">
                                            <el-row>
                                                <el-col :span="2"><div class="disankuai1"> <i class="el-icon-s-order"></i></div></el-col>
                                                <el-col :span="5"><div class="disankuai2"><a href="">上海刺客 </a></div></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                <div style="width:80%">
                    <el-divider></el-divider>
                </div>
        </div>   
    </div>
</template>
<script scoped>
    export default {
        name: "conterR"
    }
</script>
<style scoped>
.conterR{
    text-align: center;
    width: 34%;
    height: auto;
    border:0px solid red;
    float:right;
}
.diyikuai1 a{
    margin-left: 15px;
    text-align: center;
    text-decoration:none;
    font-size: 14px;
    line-height: 47px;
    color:#333;
    margin-left: -89px;
}
.diyikuai1 img{
    width:20px;
    height: 20px;
    margin-top: 11px;
}
.dierkuai{
    height: 50px;

}
.dierkuai p{
    margin-left: -55px;
    color:#969696;
    margin-top: -1px;
}
.disankuai{
    /* border:1px solid red; */
    margin-top:-40px;
    height:114px; 
        
}

.disankuai1 i{
    margin-top:3px;
}
.disankuai2 a{
    text-decoration:none;
    color:#333;
    font-size: 13px;    
   

}
.disikuai1{
    height:35px;
}
.disikuai1 p{
    color: #969696;
    font-size: 14px;

}
 .el-row {
    margin-bottom: 5px;
  }
  .el-col {
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
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
</style>
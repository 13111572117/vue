<template>
  <!--最外层div-->
  <div class="conter">
    <!--头部-->
    <Head/>
    <div class="header">
      <div class="toubu">
        <el-row :gutter="15">
          <el-col :span="4">
            <div class="headerL">
              <i class="el-icon-collection-tag"></i>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="headerR">
              <p>收藏的文章</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="neirong">
        <div class="zhongjian" style="margin-top:50px;">
          <!--列表1-->
          <div class="diyi" style="margin-top:10px;">
            <div class="youce">
              <el-row :gutter="5">
                <el-col :span="19">
                  <div class>
                    <el-row>
                      <el-col :span="9">
                        <div class="diyihang">
                          <p>聊聊VUE组件化编程</p>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <div class="wenzi">
                          <p>这篇文章是同事Awe，vue插件小王子写的，现在转过来，原文只有md，不知道网上链接。前</p>
                          <p style="margin-top:-7px;">端开发的现状随着互联网设备和硬件的发展cha...</p>
                        </div>
                      </el-col>
                    </el-row>
                    <div class="diyi">
                      <el-row>
                        <el-col :span="2">
                          <div class="aaa">
                            <a href>乖小鬼</a>
                          </div>
                        </el-col>
                        <el-col :span="2">
                          <div class="tubiao">
                            <i class="el-icon-view">44</i>
                          </div>
                        </el-col>
                        <el-col :span="2">
                          <div class="tubiao">
                            <i class="el-icon-chat-square">22</i>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="tupian">
                    <img src="../../assets/xyn1.png" alt>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--分割线-->
            <el-divider style="margin-top:50px;"></el-divider>
          </div>
          <!--列表2-->
          <div class="dier" style="margin-top:10px;">
            <div class="youce">
              <el-row :gutter="5">
                <el-col :span="19">
                  <div class>
                    <el-row>
                      <el-col :span="6">
                        <div class="diyihang">
                          <p>日期选择组件</p>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <div class="wenzi">
                          <p>前言：授人以鱼不如授人以渔，与其寻寻觅觅找一个适合自己的ul的选择器控件，不如自己动手</p>
                          <p style="margin-top:-7px;">尝试一下，如果你还不会Vue.js 那么请移步Vue...</p>
                        </div>
                      </el-col>
                    </el-row>
                    <div class="dier">
                      <el-row>
                        <el-col :span="1">
                          <div class="tubiaote">
                            <i class="layui-icon layui-icon-diamond">0.1</i>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div style="margin-left: 25px" class="aaaa">
                            <a href>乖小鬼</a>
                          </div>
                        </el-col>
                        <el-col :span="2">
                          <div class="tubiao" style="margin-left:-40px;">
                            <i class="el-icon-view">37</i>
                          </div>
                        </el-col>
                        <el-col :span="2">
                          <div class="tubiao" style="margin-left:-40px;">
                            <i class="el-icon-chat-square">18</i>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="tupian">
                    <img src="../../assets/xyn2.png" alt>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--分割线-->
            <el-divider></el-divider>
          </div>
          <!--列表3-->
          <div class="disan" style="margin-top:10px;">
            <div class="youce">
              <el-row :gutter="5">
                <el-col :span="19">
                  <div class>
                    <el-row>
                      <el-col :span="22">
                        <div class="diyihang">
                          <p>thinkphp5.0简单的删除数据表中一条数据学习笔记</p>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <div class="wenzi">
                          <p>在user.php中增加如下代码用于打开编写的函数为del()；编写delete()函数是用于删除指定</p>
                          <p style="margin-top:-7px;">主键值得数据记录；往往我们要注意一些...</p>
                        </div>
                      </el-col>
                    </el-row>
                    <div class="dier">
                      <el-row>
                        <el-col :span="2">
                          <div class="aaa">
                            <a href>乖小鬼</a>
                          </div>
                        </el-col>
                        <el-col :span="2">
                          <div class="tubiao">
                            <i class="el-icon-view">12</i>
                          </div>
                        </el-col>
                        <el-col :span="2">
                          <div class="tubiao">
                            <i class="el-icon-chat-square">8</i>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="tupian">
                    <img src="../../assets/xyn3.png" alt>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--分割线-->
            <el-divider></el-divider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '../Head'
export default ({
  name: "conter",
  components:{
    Head
  }
});
</script>


<style scope>
.conter {
  margin-top: 80px;
  margin-left: 20%;
  margin-right: 20%;
  height: auto;
  /* border:1px solid red; */
}
.header {
  width: 100%;
  height: 100px;
  background: #e89986;
  border-radius: 10px;
}
.headerL i {
  font-size: 44px;
  color: white;
  padding-top: 26px;
  padding-left: 50px;
}
.headerR p {
  padding-top: 23px;
  padding-left: 5px;
  color: white;
  font-size: 33px;
  margin: 0 auto;
}

.diyihang {
    text-align: left;
  margin:10px 0 20px 0
}

.diyihang p {
  font-weight: 600;
  text-decoration: none;
  font-size: 23px;
}
.wenzi {
  /* margin-top: -23px; */
}
.wenzi p {
  text-align: left;
  color: #999;
  font-size: 14px;
  margin:10px 0 20px 0;
}
.aaaa a {
  display: block;
  margin-top: -2px;
  font-size: 13px;
  color: #969696;
  text-decoration: none;
  /*margin-left: -16px;*/
}
.aaa a {
  display: block;
  margin-top: -2px;
  font-size: 13px;
  color: #969696;
  text-decoration: none;
}
.tubiao i {
  color: #b4b4b4;
  margin-left: 4px;
}
.tubiaote{
  margin-top: -3px;
}
.tubiaote i {
  color: red;
}

.tupian img {
  margin-top: 21px;
  margin-right: 3px;
  width: 120px;
  height: 120px;
  float: right;
}
</style>

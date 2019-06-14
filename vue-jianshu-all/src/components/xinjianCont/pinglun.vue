<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <div>
            <div class="new-comment">
              <!-- <a href="">
                        <img src="..\assets\10.png" alt="">
                    </a>
                    <div class="deng">

              </div>-->
              <el-row :gutter="20">
                <el-col :span="2">
                  <div class="grid-content bg-purple">
                    <a href>
                      <img src="../../assets/ContNavimg/10.png" alt>
                    </a>
                  </div>
                </el-col>
                <el-col :span="22" style="background:hsla(0,0%,71%,.1);border:1px solid #dcdcdc;">
                  <div class="btn grid-content bg-purple">
                    <div class="btn-1">
                      <el-button type="primary" size="mini" round>登录</el-button>
                      <span>后发表评论</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="top-title">
                  <p>4条评论</p>
              </div>
              <el-divider></el-divider>
              <div>
                <el-row>
                  <el-col :span="2">
                    <div class="grid-content bg-purple-light">
                      <img
                        style="height: 30px;width: 30px;border-radius: 500px;"
                        src="../../assets/ContNavimg/3.jpg"
                        alt
                      >
                    </div>
                  </el-col>
                  <el-col :span="22">
                    <div class="qian grid-content bg-purple-light">
                      <a href style="margin-left:5px;">Skyd188</a>
                      <div class="zuozhe-r">
                        <span>5楼 · 2019.05.14 17:26</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <div class="top-title-1">李哥牛皮！</div>
                <div class="top-title-2">
                  <a href>
                    <i class="el-icon-thumb">赞</i>
                  </a>
                  <a href>
                    <i class="el-icon-chat-square" style="margin-left:20px;">回复</i>
                  </a>
                </div>
              </div>
              <el-divider></el-divider>
              <div>
                <el-row>
                  <el-col :span="2">
                    <div class="grid-content bg-purple-light">
                      <img
                        style="height: 30px;width: 30px;border-radius: 500px;"
                        src="../../assets/ContNavimg/4.jpg"
                        alt
                      >
                    </div>
                  </el-col>
                  <el-col :span="22">
                    <div class="qian grid-content bg-purple-light">
                      <a href style="margin-left:5px;">夕雅y</a>
                      <div class="zuozhe-r">
                        <span>5楼 · 2019.05.14 17:26</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <div class="top-title-1">🌷🍁</div>
                <div class="top-title-2">
                  <a href>
                    <i class="el-icon-thumb">赞</i>
                  </a>
                  <a href>
                    <i class="el-icon-chat-square" style="margin-left:20px;">回复</i>
                  </a>
                </div>
              </div>
              <el-divider></el-divider>
              <div>
                <el-row>
                  <el-col :span="2">
                    <div class="grid-content bg-purple-light">
                      <img
                        style="height: 30px;width: 30px;border-radius: 500px;"
                        src="../../assets/ContNavimg/5.jpg"
                        alt
                      >
                    </div>
                  </el-col>
                  <el-col :span="22">
                    <div class="qian grid-content bg-purple-light">
                      <a href style="margin-left:5px;">大猪大猪</a>
                      <div class="zuozhe-r">
                        <span>5楼 · 2019.05.14 17:26</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <div class="top-title-1">被吸引了</div>
                <div class="top-title-2">
                  <a href>
                    <i class="el-icon-thumb">赞</i>
                  </a>
                  <a href>
                    <i class="el-icon-chat-square" style="margin-left:20px;">回复</i>
                  </a>
                </div>
              </div>
              <el-divider></el-divider>
              <div>
                <el-row>
                  <el-col :span="2">
                    <div class="grid-content bg-purple-light">
                      <img
                        style="height: 30px;width: 30px;border-radius: 500px;"
                        src="../../assets/ContNavimg/6.jpg"
                        alt
                      >
                    </div>
                  </el-col>
                  <el-col :span="22">
                    <div class="qian grid-content bg-purple-light">
                      <a href style="margin-left:5px;">近半生少年</a>
                      <div class="zuozhe-r">
                        <span>5楼 · 2019.05.14 17:26</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <div class="top-title-1">把mybatis当hibernate用</div>
                <div class="top-title-2">
                  <a href>
                    <i class="el-icon-thumb">赞</i>
                  </a>
                  <a href>
                    <i class="el-icon-chat-square" style="margin-left:20px;">回复</i>
                  </a>
                </div>
              </div>
              <el-divider></el-divider>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
} */
/* .bg-purple {
  background: #d3dce6;
} */
/* .bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.new-comment {
  margin-top: 70px;
}
.new-comment img {
  height: 38px;
  width: 38px;
  border-radius: 500px;
  border: 1px solid #dcdcdc;
}
.btn {
  height: 90px;
  text-align: center;
  margin: 0 auto;
}
.btn-1 {
  margin-top: 45px;
}
.btn-1 span {
  font-size: 14px;

  padding-left: 5px;
}
.top-title-1 {
  margin-top: 5px;
}
.top-title-2 {
  margin-top: 15px;
}
.top-title-2 a{
    color: #969696;
    font-size: 14px;
}
.top-title p{
font-weight: bold;
color: #333333;
}
</style>
<template>
  <div id="appW">
    <Head/>
    <h3>使用tk.mybatis快速开发curd</h3>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <div class="zuozhe">
            <el-row>
              <el-col :span="2">
                <div class="grid-content bg-purple-light">
                  <img
                    style="height: 48px;width: 48px;border-radius: 500px;"
                    src="../../assets/ContNavimg/1.jpg"
                    alt
                  >
                </div>
              </el-col>
              <el-col :span="22">
                <div class="qian grid-content bg-purple-light">
                  <a href>千峰IT</a>
                  <el-button type="success"  size="mini" round style="height:28px; margin-left:5px;width:60px;"
                  >+关注</el-button>
                  <div class="zuozhe-r">
                    <span style="color:#ea6f5a!important;">3.1</span>
                    <span>2019.04.01 15:47</span>
                    <span>字数 677</span>
                    <span>阅读 532</span>
                    <span>评论 4</span>
                    <span>喜欢 14</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
  import Head from "../Head"
export default {
  components:{
    Head
  }
};
</script>


<style scoped>
  #appW{
    margin-top: 70px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #appW h3{
    margin: 100px 0 60px -335px;
    text-align: center;
    font-size: 34px;
  }
/* 布局样式 */
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
} */
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  height: 48px;
  /* background: #e5e9f2; */
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  /* background-color: #f9fafc; */
}

.qian a {
  color: black;
  text-decoration: none;
}
.zuozhe-r span {
  color: #969696;
  font-size: 12px;
  padding: 5px;
}
</style>

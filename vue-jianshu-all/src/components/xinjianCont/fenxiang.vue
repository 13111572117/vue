<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <div class="jishu">
            <div class="show-foot">
              <a href>
                <i class="el-icon-document-copy"></i>技术分享
              </a>
              <div class="copyright">
                <el-popover
                  placement="top"
                  width="400px;"
                  trigger="hover"
                  content="转载请联系联系作者获得授权，并标注“简书作者”。"
                >
                  <span slot="reference">© 著作权归作者所有</span>
                </el-popover>
              </div>
              <div class="modal-wrap">
                <a href>举报文章</a>
              </div>
            </div>
          </div>
          <div class="content-1">
            <div class="info">
              <el-row :gutter="5">
                <el-col :span="2">
                  <div class="grid-content bg-purple">
                    <a href>
                      <img
                        style="height: 47px;width: 47px;border-radius: 500px;border: 1px solid #e1e1e1;"
                        src="../../assets/ContNavimg/1.jpg"
                        alt
                      >
                    </a>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple">
                    <div class="info-1">
                      <a href>千峰</a>
                      <p>写了 975563 字，被 725 人关注，获得了 4104 个喜欢</p>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple">
                    <el-button type="success" size="medium" round style="width:100%;">+关注</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <div class="qwe">千锋教育</div>
            </div>
          </div>
          <!-- <div class="content-2">
            <el-popover placement="top" width="200" trigger="click">
              <el-table :data="gridData">
                <el-table-column width="200" property="name"></el-table-column>
              </el-table>
              <el-button slot="reference">更多分享</el-button>
            </el-popover>
          </div> -->
        </div>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridData: [
        {
          name: "分享到QQ空间"
        },
        {
          name: "分享到twitter"
        },
        {
          name: "分享到facebook"
        },
        {
          name: "分享到google+"
        },
        {
          name: "分享到豆瓣"
        }
      ]
    };
  }
};
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
.content-1 {
  margin-top: 20px;
  height: 147px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
}
.content-1 .info {
  position: relative;
  top: 15px;
  margin-left: 24px;
  width: 95%;
  height: 47px;
}
.info-1 a {
  color: black;
  text-decoration: none;
}
.info-1 p {
  margin-bottom: 0;
  color: #969696;
  font-size: 12px;
}
.qwe {
  float: left;
  font-size: 12px;
  color: #969696;
}
.content-2 {
  float: right;
  margin-top: 50px;
}
</style>
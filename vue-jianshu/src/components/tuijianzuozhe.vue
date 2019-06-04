<template>
  <div class="hello">
    <Head/>
    <div class="qianyue" onclick="window.location='';">
      <img src="../assets/images/zuozhe.png" alt="">
      <p :style="qianYue">
        <i class="el-icon-question">如何成为签约者</i>
      </p>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="content-1">
        <el-row :gutter="34">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/1.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">
                  穿着prada挤地铁
                  <i class="el-icon-female" style="color:#ea6f5a;margin-left:10px;"></i>
                </a>
              </div>
              <div class="jieshao">
                <a href="">只写好玩的都是生活,版权合作事宜请联系简...</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">好好利用邮件的自动回复automatic reply功能！</a>
                <a href="">病假、事假、年假...你会用英文和老板请假吗？</a>
                <a href="">20个你必须要知道的财务英语词汇</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/2.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">老沈1</a>
              </div>
              <div class="jieshao"></div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">执念(六)</a>
                <a href="">执念(四)</a>
                <a href="">执念(三)</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/3.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">吴晓布</a>
              </div>
              <div class="jieshao">
                <a href="">简书签约作者，商业管理优秀作者，视觉优秀作...</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">《认知:所谓成长就是认知升级》签名版赠书活动</a>
                <a href="">关于读书日</a>
                <a href="">书出版了，我想和你们聊聊这些</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="content-1">
        <el-row :gutter="34">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/4.png" alt>
              </div>
              <div class="zuozhe">
                <a href="">茶点故事</a>
              </div>
              <div class="jieshao">
                <a href="">简书上的好故事，我！承！包！了！</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">茶点有毒：不用在意别人怎么看你</a>
                <a href="">送外卖，让我见识了世间百态</a>
                <a href="">简圈冷笑话：不要把鸡蛋放在同一个篮子里</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/5.png" alt>
              </div>
              <div class="zuozhe">
                <a href="">简书大学堂</a>
              </div>
              <div class="jieshao">
                <a href="">简书APP直接听课请在主页点击「他的文...</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">写作，是普通人加速蜕变的必备技能</a>
                <a href="">一次大胆的尝试，让你我与大师相遇</a>
                <a href="">「春日活动」获奖名单公布</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/6.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">
                  梅拾璎
                  <i class="el-icon-female" style="color:#ea6f5a;margin-left:10px;"></i>
                </a>
              </div>
              <div class="jieshao">
                <a href="">打马跃青山，长河扬其波 。 爱皎月清风...</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">小学，能遇上这样一位校长的孩子真幸运</a>
                <a href="">涵养对美的虔诚</a>
                <a href="">雨后，到树林里走走</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="content-1">
        <el-row :gutter="34">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/7.png" alt>
              </div>
              <div class="zuozhe">
                <a href="">
                  行距版君
                  <i class="el-icon-female" style="color:#ea6f5a;margin-left:10px;"></i>
                </a>
              </div>
              <div class="jieshao">
                <a href="">给我发简信前请先看完我的简介</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">写小说如何将人物「写活」？</a>
                <a href="">活着已经不易，所以没力气读经典了？</a>
                <a href="">写作课能别提日更、打卡、裂变吗？</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/8.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">lostdays</a>
              </div>
              <div class="jieshao">
                <a href="">Happy unbirthday.</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">2019-05-31</a>
                <a href="">兽城 五</a>
                <a href="">朴先生辞典 1</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/9.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">
                  无限猴子
                  <i class="el-icon-female" style="color:#ea6f5a;margin-left:10px;"></i>
                </a>
              </div>
              <div class="jieshao">
                <a href="">一只有限写作的无限猴子~</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">圣诞快乐，船长先生！（14.2）</a>
                <a href="">圣诞快乐，船长先生！（14.1）</a>
                <a href="">圣诞快乐，船长先生！（13.2）</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="content-1">
        <el-row :gutter="34">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/10.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">
                  小万PPT
                  <i class="el-icon-female" style="color:#ea6f5a;margin-left:10px;"></i>
                </a>
              </div>
              <div class="jieshao">
                <a href="">专注分享PPT思维。</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">人为什么会发生争论？</a>
                <a href="">职场新人都应明白的“蘑菇管理定律”</a>
                <a href="">到底是什么左右着你的情绪？</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/11.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">汪波_偶遇科学</a>
              </div>
              <div class="jieshao">
                <a href="">偶遇科学，携手人文。</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">线下活动 2019-05-31 上海陆家嘴图书馆</a>
                <a href="">4.8 调和男孩与女孩：传统历法</a>
                <a href="">清明时节真的雨纷纷吗？</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="logo">
                <img src="../assets/tuijianzuozhe/12.jpg" alt>
              </div>
              <div class="zuozhe">
                <a href="">
                  王老师八卦美术史
                  <i class="el-icon-female" style="color:#ea6f5a;margin-left:10px;"></i>
                </a>
              </div>
              <div class="jieshao">
                <a href="">一枚假装学术，正经八卦的艺术学硕...</a>
              </div>
              <div class="guanzhu">
                <el-button type="success" round>+关注</el-button>
              </div>
              <div class="xin">
                <p>最近更新</p>
                <div class="xian"></div>
              </div>
              <div class="new">
                <a href="">绘画中的101种死亡方式——她的故事与颜宁之问</a>
                <a href="">追光的光之画师应为</a>
                <a href="">绘画中的十万个为什么-大卫大卫，你的头为什么那么大？</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="di">
        <el-button type="info" round style="width:36%;">加载更多</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from "./Head"
export default {
  name: "Index",
  data(){
    return{
      qianYue:{
        position:'fixed',
        top:'140px',
        zIndex:'5',
        right:'20%',
        transform:'translateX(-20%)'
      }
    }
  },
  components:{
    Head
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qianyue {
  width: 65%;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
}
.qianyue img{
  margin-top: 30px;
  width: 960px;
  height: 110px;
}
.content {
  height: 150px;
  width: 64%;
  text-align: center;
  margin: 10px auto;
}
.content-1 {
  margin-top: 80px;
}
.content a {
  text-decoration: none;
  color: #333;
}

/* 内容布局样式 */
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
  background: #e6e6e6;
}
.bg-purple {
  background: #e6e6e6;
  height: 320px;
}
.bg-purple-light {
  background: #e6e6e6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.logo {
  height: 65px;
}
.logo img {
  margin-top: -40px;
  height: 80px;
  width: 80px;
  border-radius: 500px;
}
.zuozhe {
  width: 70%;
  height: 34px;
  text-align: content;
  margin: 0 auto;
}
.zuozhe a {
  font-size: 21px;
  color: #333;
}
.jieshao {
  height: 50px;
  width: 55%;
  text-align: content;
  margin: 0 auto;
}
.jieshao a {
  font-size: 13px;
  overflow: hidden;
}
.guanzhu {
  height: 39px;
}
.xin p {
  color: #969696;
  font-size: 12px;
  float: left;
  margin-left: 15px;
  margin-top: -8px;
}
.xian {
  border: 0;
  border-top: 2px solid #eaeaea;
  width: 65%;
  margin-top: 15px;
  margin-left: 85px;
}
.new {
  width: 85%;
  margin-top: 20px;
  height: 80px;
  margin-left: 15px;
}
.new a {
  text-align: center;
  margin: 0 auto;
  font-size: 13px;
  padding: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
.new a:hover {
  text-decoration: underline;
  color: black;
}
.di {
  margin-top: 50px;
  height: 150px;
}
</style>

<template>
  <div class="quanbu">
     <div class="wenti">
      <el-row>
        <el-col :span="24">
          <div class="wenzi">
            <h1>热门问题</h1>
          </div>
        </el-col>
      </el-row>
      <div class="wenben">
        <div class="wenbenA wenben1">
          <p>
            <a class="five" href="/index.html" target="_blank">2019.5.12 关于发布文章后内容消失的问题的公告</a>
          </p>
          
          <p>
            <a class="five" href="/index.html" target="_blank">为什么文章会被锁定？</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">如果你被封号了？</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">如何更换绑定的手机号，原有手机号不用了怎么办？</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">简书钻「减少」了怎么办？</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">简书钻和简书贝的常见问题</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">如何注销简书账号</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">简书账号绑定解绑相关问题汇总</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">iOS充值问题（余额、使用、异常问题）</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">简书收入结算与提现常见问题</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">我该如何发表一篇付费文章？</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">文章列表处的缩略图不显示怎么办？</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">关于文章投稿次数的有关说明</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">简书官方专题投稿指南大全</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">公告：简书关注和涨粉的一些说明</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">关于举报“抄袭类文章”的说明</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">文章字数统计有问题怎么办</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">如何在简书进行创作</a>
          </p>
          <div class="xian"/>
          <p>
            <a class="five" href="/index.html" target="_blank">删除的文章如何找回，有回收站吗？</a>
          </p>
        </div>
      </div>
    </div>
    
    <div class="wenti">
      <el-row>
        <el-col :span="24">
          <div class="wenzi">
            <h1>如何玩转简书</h1>
          </div>
        </el-col>
      </el-row>
      <div class="wenben">
        <div class="wenben1">
           <p>
            <a class="five" href="/index.html" target="_blank" v-for="(item, key) in items" v-show="key<num">{{item}}</a>
          </p>
          <span @click="showMore">{{txt}}</span>
          
        </div>
      </div>
    </div>
    <div class="wenti">
      <el-row>
        <el-col :span="24">
          <div class="wenzi">
            <h1>简书账号问题</h1>
          </div>
        </el-col>
      </el-row>
      <div class="wenben">
        <div class="wenben1">
           <p>
            <a class="five" href="/index.html" target="_blank" v-for="(aaa, key) in aaas" v-show="key<num2">{{aaa}}</a>
          </p>
          <span @click="showMore2">{{txt2}}</span>
          
        </div>
      </div>
    </div>
     <div class="wenti">
      <el-row>
        <el-col :span="24">
          <div class="wenzi">
            <h1>身份认证</h1>
          </div>
        </el-col>
      </el-row>
      <div class="wenben">
        <div class="wenben1">
          <p>
            <a style="display:block;margin-bottom:15px" class="five" href="/index.html" target="_blank">简书新浪微博联合认证说明</a>
          </p>
        </div>
      </div>
    </div>
    <div class="wenti">
      <el-row>
        <el-col :span="24">
          <div class="wenzi">
            <h1>简书帮助中心</h1>
          </div>
        </el-col>
      </el-row>
      <div class="wenben">
        <div class="wenben1">
           <p>
            <a class="five" href="/index.html" target="_blank" v-for="(bbb, key) in bbbs" v-show="key<num3">{{bbb}}</a>
          </p>
          <span @click="showMore3">{{txt3}}</span>
          
        </div>
      </div>
    </div>
    <div class="wenti">
      <el-row>
        <el-col :span="24">
          <div class="wenzi">
            <h1>有关简书文章的一切</h1>
          </div>
        </el-col>
      </el-row>
      <div class="wenben">
        <div class="wenben1">
           <p>
            <a class="five" href="/index.html" target="_blank" v-for="(ccc, key) in cccs" v-show="key<num4">{{ccc}}</a>
          </p>
          <span @click="showMore4">{{txt4}}</span>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import collapse from "../collapse";
// export default {
//  data() {
//   return {
//    isActive: false
//   };
//  },
//  components: {
//   collapse
//  }
// };
export default {
  data() {
    return {
      items: [
        "怎么关闭评论",
        "如何在简书进行创作",
        "发现页热门文章使用指南",
        "如何让更多的人看到自己的文章",
        "公告：关于首页投稿专题密集投稿相关问题",
        "简书诚邀您开通付费权限",
        "参与“分享有奖计划”，赏金拿到手软！",
        "招募 | 宝玉社群运营培训生",
        "终于等到你，还好我没放弃"
      ],
      aaas: [
        "为什么文章会被锁定？",
        "如果你被封号了？",
        "简书账号绑定解绑相关问题汇总",
        "我记得简书的昵称，忘记了登录方式怎么办",
        "如何注销简书账号",
        "如何绑定和解绑手机号/邮箱",
        "如果你发现自己帐号里的文章/钱包金额都没了",
        "无法接收短信验证码",
        "多个账号支持合并吗？",
        "绑定账号的时候提示被占用怎么办？",
        "如何更换绑定的手机号，原有手机号不用了怎么办？"
      ],
      bbbs: [
        "为什么文章会被锁定？",
        "如果你被封号了？",
        "简书账号绑定解绑相关问题汇总",
        "我记得简书的昵称，忘记了登录方式怎么办",
        "如何注销简书账号",
        "如何绑定和解绑手机号/邮箱",
        "如果你发现自己帐号里的文章/钱包金额都没了",
        "无法接收短信验证码",
        "多个账号支持合并吗？",
        "绑定账号的时候提示被占用怎么办？",
        "如何更换绑定的手机号，原有手机号不用了怎么办？"
      ],
      cccs: [
        "为什么文章会被锁定？",
        "如果你被封号了？",
        "简书账号绑定解绑相关问题汇总",
        "我记得简书的昵称，忘记了登录方式怎么办",
        "如何注销简书账号",
        "如何绑定和解绑手机号/邮箱",
        "如果你发现自己帐号里的文章/钱包金额都没了",
        "无法接收短信验证码",
        "多个账号支持合并吗？",
        "绑定账号的时候提示被占用怎么办？",
        "如何更换绑定的手机号，原有手机号不用了怎么办？"
      ],
      isShow: true,
      isShow2: true,
      isShow3: true,
      isShow4: true,
      num: 3,
      txt: "展开全部 ∨",
      num2: 3,
      txt2: "展开全部 ∨",
      num3: 3,
      txt3: "展开全部 ∨",
      num4: 3,
      txt4: "展开全部 ∨",
      
    };
  },
  methods: {
    showMore() {
      console.log("1",   this.isShow);
      this.isShow = !this.isShow;
      console.log("2", this.isShow);
      this.num = this.isShow ? 3 : this.items.length;
      this.txt = this.isShow ? "展开全部∨" : "";
    },
    showMore2() {
      console.log("1", this.isShow2);
      this.isShow2 = !this.isShow2;
      console.log("2", this.isShow2);
      this.num2 = this.isShow2 ? 3 : this.items.length;
      this.txt2 = this.isShow2 ? "展开全部∨" : "";
    },
    showMore3() {
      console.log("1", this.isShow3);
      this.isShow3 = !this.isShow3;
      console.log("2", this.isShow3);
      this.num3 = this.isShow3 ? 3 : this.items.length;
      this.txt3 = this.isShow3 ? "展开全部∨" : "";
    },
    showMore4() {
      console.log("1", this.isShow4);
      this.isShow4 = !this.isShow4;
      console.log("2", this.isShow4);
      this.num4 = this.isShow4 ? 3 : this.items.length;
      this.txt4 = this.isShow4 ? "展开全部∨" : "";
    }
  }
};
</script>

<style scoped>
.quanbu {
  width: 100%;
  /* height:100%; */
}
.wenzi {
  border-left: 5px solid #ea6f5a;
  padding-left:20px;
  margin: 20px 0 20px 0
}
.wenzi h1 {
  font-size: 17px;
}
.wenben {
  padding-bottom: 15px;
  height: 100%;
  border: 1px solid rgb(127, 144, 178);
  border-radius: 1%;
}
.wenben a {
  
  font-size: 15px;
  padding-bottom:15px;
  padding-top:10px;
   border-bottom: 1px solid #d5d5d5;
}
.wenbenA a{
  border: 0;
}
.wenben1 {
  margin-left: 40px;
  margin-right: 40px;
}
.wenben1 p:nth-of-type(1) a{
  display: block;
  margin: 15px 0 15px 0;
  border-bottom: 1px solid #d5d5d5;
}
a.five:link {
  color: #3194d0;
  text-decoration: none;
}
a.five:visited {
  color: #3194d0;
  text-decoration: none;
}
a.five:hover {
  text-decoration: underline;
}
.xian{
  margin: 15px 0 15px 0;
  border-bottom: 1px solid #c4c4c4
}
  .wenti:nth-of-type(6){
    margin-bottom: 50px;
  }
</style>
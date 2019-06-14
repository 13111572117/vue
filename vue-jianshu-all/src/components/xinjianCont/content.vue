<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <div class="content">
            <p>使用mybatis已经是可以快速开发程序了，对于单表的curd似乎是一种可抽象的结果，下面介绍tk.mybatis的使用方式</p>
            <p>maven引用</p>
            <img src="../../assets/ContNavimg/2.png" alt>
            <p>我使用的是这个版本，所以相关功能介绍也是这个版本。</p>
            <p>使用where条件</p>
            <p></p>
            <p>
              当使用查询条件的时候，我们可以使用mybatis的方式写sql来解决，很多情况下，写sql并不是一个特别简单的情况，
              尤其是字段多的时候，需要针对每个字段进行判断是否为空等等，写起来是相当的多。
            </p>
            <p>tk.mybatis提供了一套api，可以帮助我们省去很多操作。</p>
            <img src="../../assets/ContNavimg/3.png" alt>
            <p>首先需要创建example和criteria。Example的参数是对应表的类。criteria才是我们关注的对象，他有丰富的条件。</p>
            <p>例如且等于</p>
            <img src="../../assets/ContNavimg/4.png" alt>
            <p>例如且等于</p>
            <img src="../../assets/ContNavimg/5.png" alt>
            <p>还有一些我们常见的操作</p>
            <p>in操作和between操作</p>
            <img src="../../assets/ContNavimg/6.png" alt>
            <p>通过以上的方法，我们基本已经可以满足对单表的条件比对操作了。</p>
            <p>排序操作</p>
            <p>排序操作设计的比较奇特，并不在criteria里，而是在example里。</p>
            <img src="../../assets/ContNavimg/7.png" alt>
            <p>排序的sql语句就写在setOrderByClause中就可以了。</p>
            <p>无论是增删改查，调用的都是ByExample的方法。</p>
            <p>坑点</p>
            <p>
              我们在插入和查询的时候都会使用对象来作为条件，但是如果对象里有null值，那么其实他不是我们想插入
              的字段，我们只想插入非null的。tk.mybatis默认没有对insert等方法做处理，而是单独开辟了一个insertSelective
              的方法。这个刚开始使用特别不舒服，一般都是insert包含了过滤，但是没有需要专门使用insertSelective。其
              他的方法也类型。
            </p>
            <p>使用查询条件的时候，使用的是对象的字段名，而不是表的列名。这个刚开始很容易抓混，不知道应该使用哪个。</p>
            <img src="../../assets/ContNavimg/8.png" alt>
            <p>
              当查询条件特别多的时候，请写sql。条件特别多的时候写代码特别容易抓混，而且由于条件特别多，不需要的
              部分太多了，例如criteria.andGreaterThan。这些最后都会成为干扰项，这种情况写sql是清晰的方式。
            </p>
            <img src="../../assets/ContNavimg/9.png" alt>
            <p>
              没有连表操作，这算是他的一个功能不足的情况，我们可以使用mybatis的连表操作，但是他确实不是一
              个好的写法。这里也建议直接写sql。
            </p>
          </div>
          <div class="btn">
            <p>小礼物走一走，来简书关注我</p>
            <el-button type="danger" round>赞赏支持</el-button>
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

.content p {
  text-indent: 2em;
  color: #2f2f2f;
  font-size: 16px;
  margin-top: 25px;
}
.content img {
  width: 100%;
  margin-right: 15px;
}
.btn {
  text-align: center;
}
.btn p {
  font-weight: bold;
  font-size: 17px;
  color: #969696;
}
.show-foot a {
  padding-left: 10px;
  font-size: 12px;
  color: #c8c8c8;
  text-decoration: none;
}
.show-foot {
  margin-top: 50px;
}
.copyright {
  margin-top: 2px;
  float: right;
  font-size: 12px;
  line-height: 1.7;
  color: #c8c8c8;
  text-decoration: none;
}
.modal-wrap {
  margin-top: 2px;
  float: right;
  font-size: 12px;
  line-height: 1.7;
  color: #c8c8c8;
  margin-right: 15px;
  text-decoration: none;
}
</style>



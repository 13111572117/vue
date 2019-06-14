<template>
  <div id="allTableft1">
    <ul>
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="{ path: item.path }"
      >
        <li>
          <el-row>
            <el-col :span="6"><img :src="item.Imgs" alt=""/></el-col>
            <el-col :span="15"
              ><p>{{ item.title }}</p></el-col
            >
            <el-col :span="3"
              ><p>{{ item.numbers }}</p></el-col
            >
          </el-row>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "allTableft1",
  data() {
    return {
      list: [
        {
          path: "/myGuanzhu/",
          Imgs: require("../../assets/tianjiaguanzhu.png"),
          title: "添加关注",
          numbers: ""
        },
        {
          path: "/myGuanzhu/Rightcot2",
          Imgs: require("../../assets/sheying.webp"),
          title: "摄影",
          numbers: ""
        },
        {
          path: "/myGuanzhu/Rightcot3",
          Imgs: require("../../assets/lvxing.webp"),
          title: "旅行·在路上",
          numbers: "100"
        },
        {
          path: "/myGuanzhu/Rightcot4",
          Imgs: require("../../assets/chengxunyuan.webp"),
          title: "程序员",
          numbers: "60"
        },
        {
          path: "/myGuanzhu/Rightcot5",
          Imgs: require("../../assets/sahngban.webp"),
          title: "上班这点事",
          numbers: "40"
        },
        {
          path: "/myGuanzhu/Rightcot6",
          Imgs: require("../../assets/guanggao.png"),
          title: "故事",
          numbers: "100"
        }
      ]
    };
  }
};
</script>

<style scoped>
#allTableft1 {
  width: 100%;
}
#allTableft1 li {
  line-height: 39px;
  padding: 10px 20px 10px 10px;
}
#allTableft1 li:hover {
  background-color: #eee;
}
#allTableft1 ul li img {
  border-radius: 5px;
  width: 40px;
  height: 40px;
}
#allTableft1 li .el-col-3 {
  text-align: right;
}
</style>

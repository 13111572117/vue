<template>
  <div id="allTableft3">
    <ul>
      <router-link v-for="(item, index) in list" :key="index" :to="{ path: item.path }">
        <li>
          <el-row>
            <el-col :span="6">
              <img :src="item.Imgs" alt>
            </el-col>
            <el-col :span="15">
              <p>{{ item.title }}</p>
            </el-col>
            <el-col :span="3">
              <p>{{ item.numbers }}</p>
            </el-col>
          </el-row>
        </li>
      </router-link>
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "allTableft3",
  data() {
    return {
      list: [
        {
          path: "/myGuanzhu2",
          Imgs: require("../../assets/tianjiaguanzhu.png"),
          title: "添加关注",
          numbers: ""
        },
        {
          path: "/myGuanzhu2/Rightcot2",
          Imgs: require("../../assets/sheying.webp"),
          title: "摄影",
          numbers: ""
        },
        {
          path: "/myGuanzhu2/Rightcot3",
          Imgs: require("../../assets/lvxing.webp"),
          title: "旅行·在路上",
          numbers: "100"
        }
      ]
    };
  }
};
</script>

<style scoped>
#allTableft3 {
  width: 100%;
}
#allTableft3 li {
  line-height: 39px;
  padding: 10px 20px 10px 10px;
}
#allTableft3 li:hover {
  background-color: #eee;
}
#allTableft3 ul li img {
  border-radius: 5px;
  width: 40px;
  height: 40px;
}
#allTableft3 li .el-col-3 {
  text-align: right;
}
</style>

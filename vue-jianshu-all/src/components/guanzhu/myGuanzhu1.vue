<template>
  <div id="myGuanzhu">
    <Head/>
    <el-row>
      <el-col :span="6" :style="allTabL">
        <div class="allTab">
          <el-popover placement="bottom" width="150" trigger="click">
            <router-link slot="reference" to>
              全部关注
              <i class="el-icon-caret-bottom"></i>
            </router-link>
            <ul class="isTitle">
              <router-link v-for="(item, index) in list" :key="index" :to="{ path: item.path }">
                <li>{{ item.title }}</li>
              </router-link>
            </ul>
          </el-popover>
        </div>
        <div>
          <alt2></alt2>
        </div>
      </el-col>
      <el-col :span="17" :offset="1">
      <router-view></router-view>
        <!-- <Rightcont/> -->
        <!-- <router-view class="view two" name="right"></router-view> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Head from "../Head";
// import Rightcont from "./Rightcont";
import alt2 from "./allTableft2.vue"

export default {
  name: "myGuanzhu",
  data() {
    return {
      list: [
        { path: "/myGuanzhu", title: "全部关注" },
        { path: "/myGuanzhu1", title: "只看作者" },
        { path: "/myGuanzhu2", title: "只看专题" },
        { path: "/myGuanzhu1", title: "只看文集" },
        { path: "/myGuanzhu", title: "只看推送更新" }
      ],
      allTabL: {
        // height:'80%',
        paddingBottom: "15%",
        borderRight: "1px solid #f0f0f0"
      }
    };
  },
  components: {
    Head,
    // Rightcont,
    alt2
  }
};
</script>

<style scoped>
#myGuanzhu {
  width: 60%;
  margin: 0 auto;
  padding-top: 80px;
}
.allTab {
  padding: 5px 15px 10px 20px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 15px;
}
.allTab a {
  color: #333333;
}
.allTab a > i {
  border-radius: 50%;
  background-color: #c8c8c8;
  color: #fff;
}
.isTitle li {
  text-align: center;
  padding: 10px 0 10px 0;
  font-size: 14px;
  color: #333333;
}
.isTitle li:hover {
  background-color: #c8c8c8;
}
</style>

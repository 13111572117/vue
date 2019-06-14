<template>
  <div id="rightcont1">

    <el-row style="border: 0">
      <el-col :span="16">
        <el-col :span="6" :style="Pstyle1">
          <img :style="Imgborder1" src="../../assets/lvxing.webp" alt="">
        </el-col>
        <el-col :span="18" :style="Pstyle3">
          <router-link to=""><h2 style="font-size: 21px">旅行·在路上</h2></router-link>
          <p :style="fontStyle1"><router-link to="" style="color: #2D93CA">简书</router-link> 编 · 收录了153270篇文章 · 3063179人关注</p>
        </el-col>
      </el-col>
      <el-col :span="8">
        <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
          投稿
        </el-button>
        <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
          专题主页<i class="el-icon-arrow-right"></i>
        </el-button>
      </el-col>
    </el-row>
    <div class="layui-tab layui-tab-brief tuijian">
      <ul class="layui-tab-title">
        <li class="layui-this"><b :style="tabTitle">全部推荐</b></li>
        <li><b :style="tabTitle"><i class="el-icon-s-custom"></i>推荐作者</b></li>
        <li><b :style="tabTitle"><i class="el-icon-menu"></i>推荐专题</b></li>
      </ul>
      <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/lvxing.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>旅行·在路上</h2></router-link>
                <p :style="fontStyle">邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。 1....</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">153.2K篇文章 · 3063.1K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/chengxunyuan.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>程序员</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sahngban.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>上班这点事</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/gushi.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>故事</h2></router-link>
                <p :style="fontStyle">故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">196.1K篇文章 · 1712.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <button :style="readMore">阅读更多</button>
        </div>
        <div class="layui-tab-item">
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/lvxing.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>旅行·在路上</h2></router-link>
                <p :style="fontStyle">邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。 1....</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">153.2K篇文章 · 3063.1K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/chengxunyuan.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>程序员</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sahngban.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>上班这点事</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/gushi.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>故事</h2></router-link>
                <p :style="fontStyle">故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">196.1K篇文章 · 1712.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <button :style="readMore">阅读更多</button>

        </div>
        <div class="layui-tab-item">
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/chengxunyuan.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>程序员</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sahngban.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>上班这点事</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/lvxing.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>旅行·在路上</h2></router-link>
                <p :style="fontStyle">邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。 1....</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">153.2K篇文章 · 3063.1K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/gushi.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>故事</h2></router-link>
                <p :style="fontStyle">故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">196.1K篇文章 · 1712.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-col :span="24">
                <p :style="Pstyle2" class="layui-icon el-icon-s-opportunity"> 简书推荐专题</p>
              </el-col>
              <el-col :span="4" :style="Pstyle1">
                <img :style="Imgborder" src="../../assets/sheying.webp" alt="">
              </el-col>
              <el-col :span="20" :style="Pstyle">
                <router-link to=""><h2>摄影</h2></router-link>
                <p :style="fontStyle">生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
                <router-link to="" :style="fontStyle"><i class="el-icon-menu">116.3K篇文章 · 2363.7K人关注</i></router-link>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button style="border-radius: 50px;margin-top: 10px" type="success" plain>
                <i class="el-icon-check"></i>已关注
              </el-button>
            </el-col>
          </el-row>
          <button :style="readMore">阅读更多</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'rightcont1',
    data(){
      return{
        fontStyle:{
          fontSize:'12px',
          color:'#969696'
        },
        fontStyle1:{
          fontSize:'14px',
          color:'#969696'
        },
        Imgborder:{
          borderRadius:'5px',
          width:'52px',
          height:'52px'
        },
        Imgborder1:{
          borderRadius:'8px',
          width:'80px',
          height:'80px'
        },
        Pstyle:{
          lineHeight:'28px'
        },
        Pstyle3:{
          lineHeight:'40px'
        },
        Pstyle1:{
          lineHeight:'58px',
        },
        Pstyle2:{
          margin:'10px 0 10px 0',
          fontSize:'12px',
          color:'#ec6e56'
        },
        readMore:{
          width:'100%',
          backgroundColor:'#a5a5a5',
          color:'#fff',
          fontSize:'15px',
          border:'0',
          borderRadius:'50px',
          margin:'30px 0 30px 0',
          padding:' 8px 0 8px 0'
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  #rightcont1 .tuijian li{
    /*padding: 13px 20px;*/
    font-size: 15px;
    font-weight: 900;
    /*color: #969696;*/
    line-height: 25px;
  }
  #rightcont1 h2{
    color: #333333;
    font-size: 15px;
    font-weight: 700;
  }
  .el-row{
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }
</style>

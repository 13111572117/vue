<template>
    <div>
        <div>
            <div id="zxj-ak">
                个人介绍
            </div>
            <div id="zxj-al" style="float:right;">
                <el-popover placement="left-start"  width="230"  trigger="click">
                    <textarea id="zxj-ao" type="text" placeholder=""></textarea>
                    <button id="zxj-ap" style="">保存</button>
                    <button style="width:70px;height:30px;border-radius:40px;cursor:pointer;">取消</button>
                        <button slot="reference" type="button" class="layui-btn layui-btn-primary layui-btn-sm">
                           <i class="layui-icon layui-icon-edit"></i>编辑 
                        </button>
                </el-popover>
            </div>
        </div>
        <hr>
        <div id="zxj-am">
            <a href="/scgz"><i class="layui-icon layui-icon-app"><span>
                我关注的专题/文集/连载
            </span></i></a><br>
            <a href="/xihuan"><i class="layui-icon layui-icon-star"><span>
                我喜欢的文章
            </span></i></a>
        </div>
        <hr>
        <div>
            <div id="zxj-an" style="width:100%;color:#969696;float:left;margin-bottom:20px;">
                <span>我们创建的专题</span><a style="float:right;" href="">+新建专题</a>
            </div>
           
            <div style="margin-bottom:30px;">
                <a href=""><img style="width:32px;height:32px;
                border:1px solid #969696;border-radius:4px;margin-right:10px;"
                 src="../../assets/images/zxj4.webp" alt="">
                <span>
                    学习Vue    
                </span></a>
            </div>
            <hr>
        </div>
    </div>
</template>
<style scoped>
#zxj-ao{
    background-color:hsla(0,0%,71%,.1);
    width: 100%;
    height: 50px;
}
#zxj-ap{
    width:70px;
    height:30px;
    border-radius:40px;
    margin-right:10px;
    color:rgba(59,194,29,.7);
    cursor:pointer;
    border:1px solid rgba(59,194,29,.7);
}
#zxj-ap:hover{
    background-color:hsla(0,0%,71%,.1);
}
#zxj-ak{
    padding: 20px 0 ;
    font-size:16px;
    float: left;
    color:#969696;
    width:70px;

}
#zxj-al button{
    color: #969696;
    margin: 15px 0 ;
    border: none;
}
.layui-icon-app{
    width: 20px;
    height: 20px;
}
#zxj-am{
    line-height: 30px;
    padding: 10px 0;
}
#zxj-am span{
    margin-left: 20px;
    font-size: 14px;
}
#zxj-an a{
    color:#42c02e;
    float: right;

}
 


</style>
<script type="text/javascript" src="js/common/UILab/layui2.4.5/layui.js"></script>
<script>
layui.use('element', function(){
  var $ = layui.jquery;
  var element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
  element.on('tab(prev)', function(data){});
  element.on('tab(all)', function(data){
    if(data.index == 0){
      console.log("内容1");
    } else if(data.index == 1){
      console.log("内容2");
    }    
  });
});


</script>



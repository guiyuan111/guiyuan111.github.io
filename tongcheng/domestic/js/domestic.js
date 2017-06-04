/**
 * Created by JY on 2017/4/3.
 */

    //头部菜单开始
    //为li注册鼠标滑过箭头改变事件
    $(".menu>.w>ul>li:not(#guonei)").mouseenter(function(){
       $(this).css("backgroundColor","#fff");
        $(this).children("a").css("color","#000");
        $(this).find("b").addClass("show");
        $(".menu>.w>ul").find(".menu-btm").removeClass("show1");
        $(this).find(".menu-btm").addClass("show1");
    }).mouseleave(function(){
        $(this).css("backgroundColor","#4C5A65");
        $(this).children("a").css("color","#fff");
        $(this).find("b").removeClass("show");
        $(this).find(".menu-btm").removeClass("show1");
        $("#guonei").find(".menu-btm").addClass("show1");
    });

$(".menu-btm>ul>li>a").mouseenter(function(){
     $(this).css("color","red");
}).mouseleave(function(){
   $(this).css("color","#666");
});
    //头部菜单结束


//中部左侧列表开始

    //获取显示其他菜单的div
    var itemBox=my$("itemBox");
    //var dvObjs=my$("itemBox").children;

//获取li注册事件
var count=0;
 var list=my$("left").children[0].children;
 for(var i=0;i<list.length;i++){
     if(i%2==0){
         list[i].index=count;
         count++;
         list[i].onmouseenter=limouseoverHandle;
         list[i].onmouseleave=limouseoutHandle;
     }
 }
function limouseoverHandle(){
    this.style.backgroundColor="#FFF";
    //获取li中的上部的a标签
    var aObjs=this.children[2].children[0].children;
    for(var j=0;j<aObjs.length;j++){
        aObjs[j].style.color="#565B71";
    }
    var aObjs2=this.children[2].children[1].children;
    for(var k=0;k<aObjs2.length;k++){
        aObjs2[k].style.color="#000";
        aObjs2[k].style.cursor="pointer";

    }
    my$("left").style.borderRight="1px solid #FFF";
    //console.log(this.children[3]);
    this.children[3].style.display="block";
    this.children[3].style.zIndex=100;
    this.children[3].style.border=" 2px solid #565B71";
    this.children[3].style.borderLeft="";
    this.children[3].style.marginLeft="-2px";


}
function limouseoutHandle(){
    this.style.backgroundColor="#565B71";
    var aObjs=this.children[2].children[0].children;
    for(var j=0;j<aObjs.length;j++){
        aObjs[j].style.color="#FFF";
    }
    var aObjs2=this.children[2].children[1].children;
    for(var k=0;k<aObjs2.length;k++){
        aObjs2[k].style.color="#DCDCDC";
    }
    my$("left").style.borderRight=" 2px solid #565B71";
    this.children[3].style.display="none";
    //itemBox.className="itemBox";
    //dvObjs[this.index].className="hidden"
}
//中部左侧列表结束



//轮播图开始
  //获取相框
   var banner=my$("banner");
   var width=banner.offsetWidth;
  //获取要移动的ul以及里面的li
   var ulObj=my$("ul");
   var listimgs=my$("ul").children;
  //获取小方块
  var listBtns=my$("slider").children[0].children;
  //获取焦点
  var pages=my$("pages");
  var left=my$("pages").children[0];
  var right=my$("pages").children[1];
  var pic=0;
  //为小方块注册鼠标进入和离开事件
 for(i=0;i<listBtns.length;i++){
     listBtns[i].index=i;
     listBtns[i].style.cursor="pointer";
     listBtns[i].onmouseover=btnmouseoverHandle;
 }
  function btnmouseoverHandle(){
      for(var j=0;j<listBtns.length;j++){
          listBtns[j].className="";
      }
      this.className="current";
      pic=this.index;
      animate(ulObj,{"left":-(width*pic)});
  }


   //自动播放
   var timeId=setInterval(rightClickHandle,1000);


  //鼠标进入焦点出现
   banner.onmouseover=function(){
       animate(pages,{"opacity":"1"});
       clearInterval(timeId);
   };
   banner.onmouseout=function(){
       animate(pages,{"opacity":"0"});
       timeId=setInterval(rightClickHandle,1000);
   };
  //注册左右焦点事件
   //左
   left.onclick=function(){
      if(pic==0){
          pic=listimgs.length-1;
          ulObj.style.left=-(pic*width)+"px";
      }
       pic--;
       animate(ulObj,{"left":-(pic*width)});
       //移除小方块的样式
       for(var j=0;j<listBtns.length;j++){
           listBtns[j].className="";
       }
       listBtns[pic].className="current";
   };
  //右
   right.onclick=rightClickHandle;
   function rightClickHandle(){
    if(pic==listimgs.length-1){
        pic=0;
        ulObj.style.left=-(pic*width)+"px";
    }
    pic++;
    animate(ulObj,{"left":-(pic*width)});
    //移除小方块样式
    for(var j=0;j<listBtns.length;j++){
        listBtns[j].className="";
    }
    if(pic==listimgs.length-1){/*如果是最后一张，让第一个小按钮有样式*/
        listBtns[0].className="current";
    }else{
        listBtns[pic].className="current";
    }
};

//轮播图结束

//倒计时开始
  //获取显示时分秒的span
   var dayObj =my$("day");
   var hourObj =my$("hour");
   var minObj=my$("min");
   var secObj=my$("sec");
   //设置一个固定时间
  var endTime=new Date("2017/4/18 12:00:00");
  //不停的获取当前时间倒计时
  setInterval(function(){
      var nowTime=new Date();
      //计算时间差
      var subTime=(endTime.getTime()-nowTime.getTime())/1000;
      var d=parseInt(subTime/60/60/24%30);
      d=d<10?"0"+d:d;
      var h=parseInt(subTime/60/60%24);
      h=h<10?"0"+h:h;
      var m=parseInt(subTime/60%60);
      m=m<10?"0"+m:m;
      var s=parseInt(subTime%60);
      s=s<10?"0"+s:s;
      dayObj.innerHTML=d+"天";
      hourObj.innerHTML=h+"时";
      minObj.innerHTML=m+"分";
      secObj.innerHTML=s+"秒";
  },1000);
//倒计时结束

//跟团游开始--闭包
 function f1(contentId){
     return function(){
         var index1=0;
         $("#"+contentId+" .menublue>.menutab>li").mouseenter(function(){
              index1=$(this).index();
             $(this).addClass("current").siblings("li").removeClass("current");
             $("#"+contentId+" .contentlist .item:eq("+index1+")").fadeIn(200).siblings(".item").fadeOut(200);
             if(contentId==="content"){
                 $("#content .bg>ul:eq("+index1+")").siblings("ul").css("display","none");
                 $("#content .bg>ul:eq("+index1+")").fadeIn(500);
             }
         });
     }
 }

f1("content")();
f1("content2")();

//为第一个li注册鼠标进入事件
$(".introduce").mouseenter(function(){
    $(this).children("h4").css({"overflow":"visible"}).stop().animate({"height":"60px"},400);
}).mouseleave(function(){
    $(this).children("h4").css({"overflow":"hidden"}).stop().animate({"height":"40px"},400);
});

$(".contentlist .item").find("li").mouseenter(function(){
    $(this).css("boxShadow","0 3px 4px 3px #DDDDDD");
}).mouseleave(function(){
    $(this).css("boxShadow","0 0px 0px 0px #DDDDDD");
});
//跟团游结束














//主题游开始

 $(".zhutiyou li").mouseenter(function(){
    $(this).css({"boxShadow":"0 5px 6px 3px #DDDDDD"});
});
$(".zhutiyou li").mouseout(function(){
    $(this).css({"boxShadow":"0 0 0 #DDDDDD"});
});
//主题游结束


//攻略开始
$(".gonglue>.center li").mouseenter(function(){
    var index=$(this).index();
    $(".gonglue .zhezhao:eq("+index+")").stop().animate({"height":"0px"},1000);
});
$(".gonglue>.center li").mouseleave(function(){
    var index=$(this).index();
    $(".gonglue .zhezhao:eq("+index+")").stop().animate({"height":"110px"},1000);
});
//攻略结束
/**
 * Created by Huangxl on 2017/4/5.
 */

//轮播图开始
//先获取相框的元素
var slider=my$("slider");
//获取相框宽度
var imgWidth=slider.children[0].children[0].offsetWidth;
//获取想移动的ul标签
var ulObj=slider.children[0];
//获取ul中所有的li
var listImgObjs=ulObj.children;
//获取小方块
var listDian=slider.children[1].children[0].children;
var pic=0;
for(var i=0;i<listDian.length;i++){
    listDian[i].setAttribute("index",i);
    listDian[i].onmouseover= function () {
      for(var j=0;j<listDian.length;j++){
          listDian[j].removeAttribute("class");
      }
        this.className="current";
        pic=this.getAttribute("index");
        animate(ulObj,{"left":-pic*imgWidth});
    };
}
var timeId=setInterval(f1,1000);
function f1() {

    if (pic == listImgObjs.length-1) {
        pic=0;
        ulObj.style.left = -pic * imgWidth + "px";
    }
    pic++;
    animate(ulObj, {"left": -pic * imgWidth});
    for(var i=0;i<listDian.length;i++){
        listDian[i].removeAttribute("class");
    }
    if(pic==listImgObjs.length-1){
        listDian[0].className="current";
    }else{
        listDian[pic].className="current";
    }
}
my$("slider").onmouseover= function () {
    clearInterval(timeId);
};
my$("slider").onmouseout= function () {
    timeId=setInterval(f1,1000);
};



//左侧的菜单
var bannerUl=my$("ul-hotvisa");
//获取里面所有li
var bannerLi=bannerUl.children;
//获取详细菜单栏的div
var dvItem=my$("dvItem");
//获取里面所有的div菜单
var divItemObjs=dvItem.children;
//鼠标进入ul时显示装菜单的div
bannerUl.onmouseover= function () {
  dvItem.className="bannercurrent";
};
bannerUl.onmouseout= function () {
  dvItem.className="visahot";
};
for(var i=0;i<bannerLi.length;i++){
    bannerLi[i].setAttribute("index",i);
    bannerLi[i].onmouseover= function () {
      for(var j=0;j<divItemObjs.length;j++){
          divItemObjs[j].className="hide";
      }
       divItemObjs[this.getAttribute("index")].className="show";
    };
}
//轮播图结束




var listTop4 = my$("mSlider").children[0].children[0].children;


for (var i = 0; i < listTop4.length; i++) {
    listTop4[i].onmouseover = function () {
        animate(this.children[1], {"top": 0});
        //animate(this.children[2], {"top": -10});
    };
    listTop4[i].onmouseout = function () {
        animate(this.children[1], {"top": 180});
        //animate(this.children[2], {"top": 0});

    };
}



$(function () {
    //搜索框下拉菜单开始

    //点击向下箭头显示ul列表
    $("#jian").click(function () {
        $("#jian").hide();
        $("#visa_type").show();
        $("#sjian").show();
    });
    //点击向下箭头隐藏ul列表
    $("#sjian").click(function () {
        $("#jian").show();
        $("#visa_type").hide();
        $("#sjian").hide();
    });
    //搜索框下拉菜单结束

    $(".tab>li").click(function () {
        var index=$(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".products>div:eq("+index+")").addClass("selected").siblings("div").removeClass("selected");

    });

    //办理签证帮助
    $(".listdian>ul>li").click(function () {
        var index=$(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".questions>div:eq("+index+")").addClass("selected").siblings("div").removeClass("selected");

    });



    //搜索输入框
    $(".search-input").focus(function () {
        if($(this).css("color")=="rgb(153, 153, 153)"){
            $(this).val("").css("color","black");
        }
    }).blur(function () {
        if($(this).val().length==0){
            $(this).val("请输入您需要签证的国家/地区").css("color","rgb(153, 153, 153)");
        }
    });


    //最新签证预订滑动
    $('.myscroll').myScroll({
        speed: 40, //数值越大，速度越慢
        rowHeight: 56 //li的高度
    });


    $("#visa_type>li").mouseenter(function () {
        $(this).css({"backgroundColor":"#ccc","color":"#fff","fontFamily":"微软雅黑"});
    }).mouseleave(function () {
        $(this).css({"backgroundColor":"","color":"","fontFamily":"微软雅黑"});
    });


});

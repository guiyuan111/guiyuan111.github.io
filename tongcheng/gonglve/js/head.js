/**
 * Created by Administrator on 2017/3/30.
 */

//我的同程
//获取id为mytc的li，注册事件
my$("mytcli").onmouseover = function () {
    //获取我的同程里id为mytc的div
    animate(my$("mytc"), {"height": 114});
    my$("mytc").style.zIndex = 2;
};
my$("mytcli").onmouseout = function () {
    animate(my$("mytc"), {"height": 0});
    my$("mytc").style.zIndex = 1;
};

//手机同程
//获取id为sjtcli的li，注册事件
my$("sjtcli").onmouseover = function () {
    //获取手机同程里id为sjtc的div
    animate(my$("sjtc"), {"height": 235});
    my$("sjtc").style.zIndex = 2;
};
my$("sjtcli").onmouseout = function () {
    animate(my$("sjtc"), {"height": 0});
    my$("sjtc").style.zIndex = 1;
};

//微信
//获取id为weixinli的li，注册事件
my$("weixinli").onmouseover = function () {
    //获取微信里id为weixin的div
    animate(my$("weixin"), {"height": 154});
    my$("weixin").style.zIndex = 2;
};
my$("weixinli").onmouseout = function () {
    animate(my$("weixin"), {"height": 0});
    my$("weixin").style.zIndex = 1;
};

//电话
//获取id为dianhuali的li，注册事件
my$("dianhuali").onmouseover = function () {
    //获取微信里id为dianhua的div
    animate(my$("dianhua"), {"height": 58});
    my$("dianhua").style.zIndex = 2;
};
my$("dianhuali").onmouseout = function () {
    animate(my$("dianhua"), {"height": 0});
    my$("dianhua").style.zIndex = 1;
};

//客户服务
//获取id为kehuli的li，注册事件
my$("kehuli").onmouseover = function () {
    //获取微信里id为kehu的div
    animate(my$("kehu"), {"height": 98});
    my$("kehu").style.zIndex = 2;
};
my$("kehuli").onmouseout = function () {
    animate(my$("kehu"), {"height": 0});
    my$("kehu").style.zIndex = 1;
};

//合作中心
//获取id为hezuoli的li，注册事件
my$("hezuoli").onmouseover = function () {
    //获取微信里id为kehu的div
    animate(my$("hezuo"), {"height": 98});
    my$("hezuo").style.zIndex = 2;
};
my$("hezuoli").onmouseout = function () {
    animate(my$("hezuo"), {"height": 0});
    my$("hezuo").style.zIndex = 1;
};


//送至北京，地址显示
var address = [
    "北京",
    "上海",
    "天津",
    "重庆",
    "河北",
    "山西",
    "河南",
    "辽宁",
    "吉林",
    "黑龙江",
    "内蒙古",
    "江苏",
    "山东",
    "安徽",
    "浙江",
    "福建",
    "湖北",
    "湖南",
    "广东",
    "广西",
    "江西",
    "四川",
    "海南",
    "贵州",
    "云南",
    "西藏",
    "陕西",
    "甘肃",
    "青海",
    "宁夏",
    "新疆",
    "港澳",
    "台湾",
    "钓鱼岛",
    "海外"
];
//鼠标进入换箭头
//获取显示其他城市的div
var area = my$("sendTo").children[1].children[0];
my$("sendTo").onmouseover = function () {
    this.children[0].children[1].style.backgroundPosition = "-30px -10px";
    //有阴影效果
    this.children[0].style.boxShadow = "0 -6px 16px 0 #eee";

    //设置城市显示和隐藏效果
    area.style.display = "block";
};
my$("sendTo").onmouseout = function () {
    this.children[0].children[1].style.backgroundPosition = "-15px -10px";
    //无阴影效果
    this.children[0].style.boxShadow = "none";
    area.style.display = "none";
};
//用来存储html标签的字符串
var str = "";
var len = address.length;
for (var i = 0; i < len; i++) {
    str += "<div class='item'><a href='javascript:void(0);'>" + address[i] + "</a></div>";
}
area.innerHTML = str;
//获取北京a标签，设置样式
var divObjs = area.getElementsByTagName("div");
divObjs[0].children[0].id = "currentArea";


//首页部分
//获取所有li，注册鼠标事件
var list2 = my$("u2").children;
for (var i = 0; i < list2.length; i++) {
    //点击变背景颜色
    list2[i].onclick = function () {
        for (var k = 0; k < list2.length; k++) {
            list2[k].style.backgroundColor = "#4C5A65";
        }
        this.style.backgroundColor = "#50B400";
    };
    //鼠标进入
    list2[i].onmouseover = function () {
        //设置li字体
        this.children[0].style.fontWeight = "700";
    };
    //鼠标离开
    list2[i].onmouseout = function () {
        //设置li字体
        this.children[0].style.fontWeight = "400";
    };
    if (i != 0 && i != 3 && i != 4 && i != 10) {
        list2[i].onmouseover = function () {
            this.getElementsByClassName("home-small")[0].style.display = "block";
            //设置li字体
            this.children[0].style.fontWeight = "700";
            //为i标签注册事件
            this.children[0].children[0].style.backgroundPosition = "-37px 0";
            //为隐藏div注册事件
            this.children[2].style.display = "block";
        };
        list2[i].onmouseout = function () {
            this.getElementsByClassName("home-small")[0].style.display = "none";
            //设置li字体
            this.children[0].style.fontWeight = "400";
            //为i标签注册事件
            this.children[0].children[0].style.backgroundPosition = "-23px 0";
            //为隐藏div注册事件
            this.children[2].style.display = "none";
        };
    }
}
//获取首页li里隐藏div中，所有a标签，注册事件
var homeAs = my$("u2").getElementsByClassName("home-a");
for (var i = 0; i < homeAs.length; i++) {
    homeAs[i].onmouseover = function () {
        this.style.color = "#ED710C";
    };
    homeAs[i].onmouseout = function () {
        this.style.color = "#666";
    };
}


//banner上边部分
//获取绿色div下划线
var topBbanLine = my$("topbanline");
//获取所有li里的a标签，注册鼠标进入事件
var aObjs = my$("gonglue").getElementsByTagName("a");
for (var i = 0; i < aObjs.length; i++) {
    aObjs[i].setAttribute("index", i);
    aObjs[i].onmouseover = function () {
        animate(topBbanLine, {"left": this.getAttribute("index") * 86});
    };
}


//轮播图部分
//获取小方格
var fangGe = my$("u4").children;
//获取ul左侧距离
var ulLeft = my$("u3").offsetLeft;
//获取所有li
var list = my$("u3").children;
//获取li宽度
var liWidth = my$("u3").children[0].offsetWidth;

//自动轮播
var pic = 0;
var timeId = setInterval(lunBo, 1500);
for (var i = 0; i < fangGe.length; i++) {
    fangGe[i].setAttribute("index", i);
    fangGe[i].onmouseover = function () {
        //排他
        for (var j = 0; j < fangGe.length; j++) {
            fangGe[j].style.backgroundColor = "";
        }
        clearInterval(timeId);
        this.style.backgroundColor = "#fff";
        animate(my$("u3"), {"left": -this.getAttribute("index") * liWidth});
    };
    fangGe[i].onmouseout = function () {
        //继续轮播
      timeId = setInterval(lunBo,1500);
    };
}
my$("u3").onmouseover = function () {
  clearInterval(timeId);
};
my$("u3").onmouseout = function () {
    timeId = setInterval(lunBo, 1500);
};
function lunBo() {
    if (pic == list.length - 1) {
        pic = 0;
        my$("u3").style.left = -pic * liWidth + "px";
    }
    pic++;
    animate(my$("u3"), {"left": -(pic * liWidth)});
    //移除所有小方格样式
    for (var i = 0; i < fangGe.length; i++) {
        fangGe[i].style.backgroundColor = "";
    }
    if(pic == list.length-1) {
        fangGe[0].style.backgroundColor = "#fff";
    }else {
        fangGe[pic].style.backgroundColor = "#fff";
    }
}


//热门目的地
//下边导航部分
//获取所有隐藏的div
var yincangDiv = my$("remen-yincang").children;
//获取所有a标签
var guoneiNavAs = my$("nav-guonei").children;
//注册事件
for(var i=0;i<guoneiNavAs.length;i++) {
    guoneiNavAs[i].setAttribute("index",i);
    guoneiNavAs[i].onmouseover = function () {
      for(var j=0;j<guoneiNavAs.length;j++) {
          guoneiNavAs[j].className = "none";
          yincangDiv[j].style.display = "none";
      }
        yincangDiv[this.getAttribute("index")].style.display = "block";
        this.className = "nav-guonei-line";
    };
}

//当季值得去
//获取所有a标签
var navDangjiAs = my$("nav-dangji").getElementsByTagName("a");
//获取所有隐藏ul
var dangJiUls = my$("dangji-yinc").children;
//注册事件
for(var i=0;i<navDangjiAs.length;i++) {
    navDangjiAs[i].index = i;
    navDangjiAs[i].onmouseover = function () {
        //排他
        for(var j=0;j<navDangjiAs.length;j++) {
            navDangjiAs[j].className = "";
            dangJiUls[j].style.display = "none";
        }
      this.className = "nav-dangji-line";
        dangJiUls[this.index].style.display = "block";
    };
}
//下边图片列表部分
//获取所有li，注册事件
var dangJiList = my$("dangji-yinc").getElementsByTagName("li");
for(var i=0;i<dangJiList.length;i++) {
    dangJiList[i].onmouseover = function () {
        //排他
        for(var j=0;j<dangJiList.length;j++) {
            dangJiList[j].style.boxShadow = "";
        }
        this.style.boxShadow = "0 0 10px #666";
    };
}


//发现好去处开始
//获取li
var foundGoodLi = my$("found-good").children;
//获取隐藏的li
var foundGoodYc = my$("found-good-yc").children;
//为上边分类注册事件
for(var i=0;i<foundGoodLi.length;i++) {
    foundGoodLi[i].index = i;
    foundGoodLi[i].onmouseover = function () {
        for (var j=0;j<foundGoodLi.length;j++) {
            foundGoodLi[j].style.backgroundColor = "";
            foundGoodLi[j].className = "";
            foundGoodLi[j].style.color = "#000";
            foundGoodYc[j].style.display = "none";
        }
        this.style.backgroundColor = "#50B400";
        this.className = "foud-good-li";
        this.style.color = "#fff";
        foundGoodYc[this.index].style.display = "block";
    };
}

//获取每个图片盒子
var foundGoodYcBox = my$("found-good-yc").getElementsByClassName("yc-1");
//为每个盒子注册事件
for(var i=0;i<foundGoodYcBox.length;i++) {
    foundGoodYcBox[i].onmouseover = function () {
      for(var j=0;j<foundGoodYcBox.length;j++) {
          foundGoodYcBox[j].style.boxShadow = "";
      }
        this.style.boxShadow = "0 0 10px #666";
    };
}

//热门玩法与游记，轮播图部分
//获取要移动的ul
var hotUl = my$("hot-slider");
//获取所有li
var hotLi = hotUl.children;
//要移动的距离
var hotLiWidth = my$("hot-slider").children[0].offsetWidth;
//获取小方格，注册事件
var hotFangGeLi = my$("hot-fangge").children;
for(var i=0;i<hotFangGeLi.length;i++) {
    hotFangGeLi[i].index = i;
    //排他
    hotFangGeLi[i].onmouseover = function () {
            for(var j=0;j<hotFangGeLi.length;j++) {
                hotFangGeLi[j].style.backgroundColor = "";
            }
            this.style.backgroundColor = "#8C96A2";
            animate(hotUl,{"left":-this.index*hotLiWidth});
            clearInterval(hotTimeId);
    };
        flag = false;
        hotFangGeLi[i].onmouseout = function () {
            hotTimeId = setInterval(lunBoHot,1000);
        };
}
document.getElementsByClassName("hot-play-yc")[0].onmouseover = function () {
    clearInterval(hotTimeId);
};
document.getElementsByClassName("hot-play-yc")[0].onmouseout = function () {
    hotTimeId = setInterval(lunBoHot,1000);
};
//自动轮播
var pic2=0;
var hotTimeId = setInterval(lunBoHot,1000);
function lunBoHot() {
    if(pic2 == hotLi.length-1) {
        pic2 = 0;
        hotUl.style.left = -pic2*hotLiWidth+"px";
    }
    pic2++;
    animate(hotUl,{"left":-pic2*hotLiWidth});
    //移除所有小方格样式
    for(var i=0;i<hotFangGeLi.length;i++) {
        hotFangGeLi[i].style.backgroundColor = "";
    }
    if(pic2 == hotLi.length-1) {
        hotFangGeLi[0].style.backgroundColor = "#8C96A2";
    }else {
        hotFangGeLi[pic2].style.backgroundColor = "#8C96A2";
    }
}




$(function () {
    //热门玩法与游记
    $("#hot-slider>li>.hot-play-yc0>.ul-top>li").mouseenter(function () {
        $(this).css("boxShadow","0 0 10px #666");
    }).mouseleave(function () {
        $(this).css("boxShadow","");
    });
    $("#hot-slider>li>.hot-play-yc0>.ul-btm>li").mouseenter(function () {
        $(this).css("boxShadow","0 0 10px #666");
    }).mouseleave(function () {
        $(this).css("boxShadow","");
    });
    //右侧定位广告
    $("#uu-r .return-top").hide();

    $("#uu-r>li>a").mouseenter(function () {
        $(this).children().stop().animate({"right":"37px","opacity":"1","zIndex":10},300);
        $(this).children().css("display","block");
    });
    $("#uu-r>li>a").mouseleave(function () {
        $(this).children().stop().animate({"right":"67px","opacity":"0","zIndex":0},300);
        $(this).children().css("display","none");
    });
    //右侧定位广告TOP
    $("#uu-r .return-top").click(function () {
        $(document.body).animate({"scrollTop":0},500);
    });
    $(document).scroll(function () {
        if($(document).scrollTop() > 180) {
            $("#uu-r .return-top").show();
        }else {
            $("#uu-r .return-top").hide();
        }
    });
    var fixId =setTimeout(function () {
        $("#fix-l").animate({"left":0},500);
    },1000);
    var fixWidth = $("#fix-l").width();
    $("#fix-l-close").click(function () {
        $(this).hide(200);
        $("#fix-l .fix-l1").animate({"left":-fixWidth},500, function () {
            $("#fix-l2").animate({"left":0},500);
        });

    });

    $("#fix-l2").click(function () {
        $(this).animate({"left":"-164px"},500, function () {
            $("#fix-l .fix-l1").animate({"left":0},500);
            $("#fix-l-close").show(200);
        });
    });

    //顶部搜索框
    $("#weilei").focus(function () {
        if($(this).css("color") == "rgb(102, 102, 102)") {
            $(this).val("");
            $(this).css("color","black");
        }
    }).blur(function () {
        if($(this).val().length == 0) {
            $(this).val("味蕾复兴之旅");
            $(this).css("color","rgb(102, 102, 102)");
        }
    });

    //banner图搜索框
    $("#ban-input").focus(function () {
        if($(this).css("color") == "rgb(153, 153, 153)") {
            $(this).val("");
            $(this).css("color","black");
        }
    }).blur(function () {
        if($(this).val().length == 0) {
            $(this).val("搜索目的地/景点/关键字");
            $(this).css("color","rgb(153, 153, 153)");
        }
    });
});

/**
 * Created by Administrator on 2017/3/30.
 */

//window.onload=function (){

    //head开始
    (function (){
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

        //banner图部分
        //左侧列表部分，获取所有li注册点击事件
        var list3 = my$("jipiao").children[0].children;
        //获取所有隐藏div
        var qieHuanDiv = my$("qiehuan").getElementsByClassName("qiehuan");
        var num3 = 0;
        for (var i = 0; i < list3.length; i++) {
            list3[i].index = num3;
            num3++;
            list3[i].onclick = function () {
                for (var k = 0; k < list3.length; k++) {
                    qieHuanDiv[k].style.zIndex = 0;
                    list3[k].style.backgroundColor = "#38414C";
                    list3[k].children[0].style.color = "#FFf";
                }
                qieHuanDiv[this.index].style.zIndex = 1;
                this.style.backgroundColor = "#fff";
                this.children[0].style.color = "#FF7800";
            };
        }
        //左侧部分隐藏div国内机票部分
        var guonei = my$("guoneijipiao").children[0];
        var guoji = my$("guoneijipiao").children[1];
        //绿线距离左侧距离，自身宽度
        var lvLeft = my$("line-dv");
        var lvWidth = my$("line-dv").offsetWidth;
        guonei.onmouseover = function () {
            animate(my$("line-dv"), {"left": 10});
        };
        guoji.onmouseover = function () {
            animate(my$("line-dv"), {"left": 95});
        };
    })();

$(function () {
    var pic=0;
    //轮播图
    $("#fangge>ul>li").mouseenter(function () {
        clearInterval(setId);
        //大图
        $("#imgobj>li").fadeOut(200);
        $("#imgobj>li:eq("+$(this).index()+")").fadeIn(200);
        //小方格
        $(this).addClass("cls").siblings().removeClass("cls");
        //右侧小图
        $("#banner2-right>div").fadeOut(200);
        $("#banner2-right>div:eq("+$(this).index()+")").fadeIn(200);
        pic=$(this).index();
    }).mouseleave(function () {
        setId=setInterval(hahaha,1000);
    });

    //自动播放
    var setId=setInterval(hahaha,1000);
    function hahaha() {
        console.log(pic);
        if(pic==$("#fangge>ul>li").length) {
            pic = 0;
        }
        $("#fangge>ul>li:eq("+pic+")").addClass("cls").siblings().removeClass("cls");
        //大图
        $("#imgobj>li:eq("+pic+")").fadeIn(200).siblings().fadeOut(200);
        //右边小图
        $("#banner2-right>div:eq("+pic+")").fadeIn(200).siblings().fadeOut(200);
        pic++;
    }

    //鼠标进入文本框事件
    my$("intxt").onfocus=function(){
        if(getStyle(this,"color")=="rgb(102, 102, 102)"){
            this.value="";
            this.style.color="#000";
        }
    };
    my$("intxt").onblur=function(){
        if(this.value.length==0){
            this.value="味蕾复兴之旅";
            this.style.color="rgb(102, 102, 102)";
        }
    };




});


//模拟百度搜索框
var datas=[
    {"三亚": ["三亚一地", "娱支洲岛", "亚龙湾天堂公园", "三亚森林公园"]},
    {"北京": ["故宫","北京颐和园","八达岭长城","北京玉渊潭公园","北京后海","海底世界","北京欢乐谷"]}
];
    my$("intxt").onkeyup=function(){
        //判断存在div则清除
        if(my$("dv")){
            my$("inputbox").removeChild(my$("dv"));
        }
        var temp=[];
        var txt=this.value;
        for(var i=0;i<datas.length;i++){
            var dt=datas[i];
            if(dt[txt]){
                temp=dt[txt];
            }
        }
        //判断内容不为空，临时数组不为空则开始创建div
        //if(txt.length!=0&&temp.length!=0){
        //    var dvObj=document.createElement("div");
        //    dvObj.id="dv";
        //    dvObj.className="dv";
        //    var strr="";
        //    my$("inputbox").appendChild(dvObj);
        //    for(var j=0;j<temp.length;j++) {
        //        var pObj = document.createElement("p");
        //        strr += "<img src='images/huabei.png' /><a href='#'>" + temp[j] + "</a><a href='javascript:void(0)' style='float: right; color: red'>￥99起</a>";
        //        pObj.innerHTML = strr;
        //        dvObj.appendChild(pObj);
        //    }
        //
        //}
        var src=["huabei.png","lianghu.png","yungui.png","lianghu.png","huabei.png","yungui.png","lianghu.png","yungui.png","lianghu.png"]
        if(txt.length!=0&&temp.length!=0){
            var dvObj=document.createElement("div");
            dvObj.id="dv";
            dvObj.className="dv";
            my$("inputbox").appendChild(dvObj);
            for(var j=0;j<temp.length;j++){
                var pObj=document.createElement("p");
                var strr="<img src='images/"+src[j]+"'><a href='javascript:void(0)'>"+temp[j]+"</a><a href='javascript:void(0)' style='float:right;color:red '>￥99起</a>";
                pObj.innerHTML=strr;
                dvObj.appendChild(pObj);
                console.log(pObj.text);
                pObj.onclick=function(){
                    my$("intxt").value=this.children[1].innerText;
                    my$("inputbox").removeChild(dvObj);
                };
                pObj.onmouseenter=function(){
                    this.style.backgroundColor="#EEEEEE";
                };
                pObj.onmouseleave=function(){
                    this.style.backgroundColor="";
                }
            }
        }

    };






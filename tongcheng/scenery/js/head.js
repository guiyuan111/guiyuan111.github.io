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









       // //首页部分
       // //获取所有li，注册鼠标事件
        var list2 = document.getElementsByClassName("a-line");
        var selDivObj=document.getElementsByClassName("select");
        //获取鼠标悬停时每个ul列表
        //var selUlObj=selDivObj.children;
       // var count=1;
        for (var i = 0; i < list2.length; i++) {

            if(i!=0&&i!=3&&i!=4&&i!=5&&i!=10){
                list2[i].onmouseover=function (){
                    //var width=this.nextElementSibling.children[0].offsetWidth;
                    //console.log(width);
                    list2[5].nextElementSibling.children[0].className="list-none";
                    this.style.backgroundColor="white";
                    this.style.color="#666666";
                    //i标签变化
                    this.children[0].style.backgroundPosition = "-27px -9px";
                    this.nextElementSibling.children[0].className="home-se-uu1";
                    //selUlObj[count].className="home-se-uu1";
                    //this.nextElementSibling.style.width=width;


                };
                list2[i].onmouseout=function (){
                    list2[5].nextElementSibling.children[0].className="home-se-uu1";
                    this.style.backgroundColor="#4C5A65";
                    //a标签的颜色变为白色
                    this.style.color="white";
                    this.children[0].style.backgroundPosition = "-23px 0";
                    this.nextElementSibling.children[0].className="list-none";
                    //selUlObj[count].className="list-none";
                };

            }else if(i!=5){
                list2[i].onmouseover=function (){
                    this.style.backgroundColor="white";
                    this.style.color="#666666";
                    list2[5].nextElementSibling.children[0].className="home-se-uu1";

                };
                list2[i].onmouseout=function (){
                    this.style.backgroundColor="#4C5A65";
                    //a标签的颜色变为白色
                    this.style.color="white";
                };
            }
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

        //轮播图
        //获取小方格list
        //var fangGe = my$("fangge").children[0].children;
        //////获取轮播图外面的ul
        //var ulLunObj=my$("imgobj");
        ////获取轮播图所有li
        //var lunBo = ulLunObj.children;
        ////获取右侧所有隐藏盒子
        //var divObjRight = my$("banner2-right").children;
        //
        ////注册事件
        //var pic = 0;
        //var flag=true;
        //for (var i = 0; i < fangGe.length; i++) {
        //    fangGe[i].setAttribute("index",i);
        //    fangGe[i].onmouseover = function () {
        //        //console.log(123);
        //        if(flag){
        //
        //            flag=false;
        //            for (var j = 0; j < lunBo.length; j++) {
        //                lunBo[j].style.zIndex = 0;
        //                lunBo[j].style.opacity = 0;
        //            }
        //            for (var k = 0; k < divObjRight.length; k++) {
        //                divObjRight[k].style.zIndex = 0;
        //                divObjRight[k].style.opacity = 0;
        //            }
        //            for(var m=0;m<fangGe.length;m++){
        //                fangGe[m].className="cls-nom";
        //            }
        //            pic=parseInt(this.getAttribute("index"));
        //            this.className="cls";
        //            animate(lunBo[pic], {"opacity": 1, "zIndex": 1},function (){
        //                flag=true;
        //            });
        //            animate(divObjRight[pic], {"opacity": 1, "zIndex":1},function (){
        //                flag=true;
        //            });
        //            clearInterval(timeId);
        //        }
        //    };
        //    fangGe[i].onmouseout=function (){
        //        //clearInterval(timeId);
        //        timeId=setInterval(handle,1000);
        //        this.className="cls-nom";
        //        //flag=false;
        //    };
        //}
        ////自动播放轮播图
        //var timeId=null;
        //timeId=setInterval(handle,1000);
        //function handle(){
        //    //清理其他样式
        //    for (var j = 0; j < lunBo.length; j++) {
        //        lunBo[j].style.zIndex = 0;
        //        lunBo[j].style.opacity = 0;
        //    }
        //    for (var k = 0; k < divObjRight.length; k++) {
        //        divObjRight[k].style.zIndex = 0;
        //        divObjRight[k].style.opacity = 0;
        //    }
        //    if(pic==fangGe.length){
        //        pic=0;
        //        animate(lunBo[0], {"opacity": 1, "zIndex": 1});
        //        animate(divObjRight[0], {"opacity": 1, "zIndex": 1});
        //    }
        //    pic++;
        //
        //    animate(lunBo[pic], {"opacity": 1, "zIndex": 1});
        //    animate(divObjRight[pic], {"opacity": 1, "zIndex": 1});
        //
        //
        //    //移除方格的所有样式
        //    for(var i=0;i<fangGe.length;i++){
        //        fangGe[i].className="cls-nom";
        //    }
        //    if(pic==fangGe.length){
        //        fangGe[0].className="cls";
        //    }else {
        //        fangGe[pic].className="cls";
        //    }
        //
        //}



        //北京各个城市显示的鼠标进入和移出事件
        my$("search-boxl").onmouseover=function (){
            this.children[2].style.backgroundPosition="0 -32px";
            this.nextElementSibling.style.display="block";
        };
        my$("search-boxl").onmouseout=function (){
            this.children[2].style.backgroundPosition="0 0";
            this.nextElementSibling.style.display="none";
        };


        //搜索框右侧列表显示背景色
        var rightaObj=document.getElementsByClassName("search-boxm-righta");
        for(var i=0;i<rightaObj.length;i++){
            rightaObj[i].onmouseover=function (){
                this.style.backgroundColor=" #FFEEDE";
            };
            rightaObj[i].onmouseout=function (){
                this.style.backgroundColor="";
            };
        }

        //鼠标聚焦到文本框上时右侧列表消失，离开时显示
        var searchRight=document.getElementsByClassName("search-boxm-right")[0];
        var searchBox=document.getElementsByClassName("search-boxm")[0];
        var inputTxtObj=searchBox.children[1];
        inputTxtObj.onfocus=function (){
            searchRight.style.display="none";
            this.value="";
        };
        inputTxtObj.onblur=function (){
            searchRight.style.display="block";
            if(this.value.length==0||this.value=="春季大促"){
                this.value="春季大促";
            }
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










    });







//};
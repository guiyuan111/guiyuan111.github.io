/**
 * Created by Administrator on 2017/4/6 0006.
 */
window.onload=function(){
    /**
     * Created by lenovo on 2017/4/1.
     */

        //第二部分
    (function (){
        //获取所有的li
        var list=my$("slider2").children[0].children;
//获取左右焦点的div
        var pagesDiv=my$("slider2").children[1];
//获取左边的按钮
        var left=pagesDiv.children[0];
//获取右边的按钮
        var right=pagesDiv.children[1];
//获取相框的宽度
        var imgWidth=my$("slider").offsetWidth;
//获取要移动的div
        var divObj=my$("slider2").children[0];
        //console.log("11");
//鼠标点击图片移动
//点击右边按钮
        var pic1=0;//计数
        right.onclick=function(){
            if (pic1 == 5) {
                pic1 = 0;
                divObj.style.left = -pic1 * my$("yinCang").offsetWidth + "px";

            }
            pic1++;
            animate(my$("yinCang"),{"left":-(pic1*242)});
        };
//左边的按钮
        left.onclick=function(){
            pic1--;
            if (pic1 <0) {
                pic1 =0;
            }
            animate(my$("yinCang"),{"left":-(pic1*242)});
            //console.log(pic);
        };
//鼠标放上去显示 离开隐藏事件
        my$("slider2").onmouseover=function(){
            animate(pagesDiv,{"opacity":1});
        };
        my$("slider2").onmouseout=function(){
            animate(pagesDiv,{"opacity":0});
        };
//点击特惠和出境游
//获取到精选特惠
        var jingXuan=my$("current").children[0];
        //console.log(jingXuan);
//获取到出境游
        var chuJing=my$("current").children[1];
//点击出境游精选特惠隐藏
        chuJing.onclick=function(){
            my$("hiden").style.display="none";
            my$("hidenn").style.display="block";
            jingXuan.style.backgroundColor="";

            this.style.backgroundColor="#8c96a2";
            this.style.color="white";
            jingXuan.style.color="";

        };

        jingXuan.onclick=function(){
            my$("hiden").style.display="block";
            my$("hidenn").style.display="none";
            chuJing.style.backgroundColor="";

            this.style.backgroundColor="#8c96a2";
            this.style.color="white";
            chuJing.style.color="";

        };
    })();


//第二部分结束




    //第三部分开始
    (function (){
        //为顶部导航注册事件
        var topDiv=my$("top_left");
        var navUlObjs=topDiv.children[0];
        var aObjs=navUlObjs.getElementsByTagName("a");
        var linex=my$("linex");
        var btmObjs=my$("btm").children;
        for(var i=0;i<aObjs.length;i++){
            aObjs[i].setAttribute("index",i);
            aObjs[i].onclick=function(){
                for(var i=0;i<aObjs.length;i++){
                    aObjs[i].style.color="";
                    //btmObjs[i].className="clearfix";
                    btmObjs[i].style.display="none";

                }
                this.style.color="#50B400";
                //btmObjs[this.getAttribute("index")].className="bottom clearfix";
                btmObjs[this.getAttribute("index")].style.display="block";
                animate(linex,{"left":this.offsetLeft});
            };
        }

        //为图片li注册边框事件
        var  tab=my$("tab_list");
        var listObjs=tab.getElementsByTagName("li");
        //console.log(listObjs.length);
        //console.log(listObjs);
        //var listObjs=cityulObjs.children;
        for(var i=0;i<listObjs.length;i++){
            listObjs[i].onmouseover=limouseoverHandle;
            listObjs[i].onmouseout=limouseoutHandle;
        }
        function limouseoverHandle(){
            this.style.boxShadow="0 0 3px #CCC";
        }
        function limouseoutHandle(){
            this.style.boxShadow="0 0 0 #ccc";
        }

        //点击城市切换列表1
        var cityLists=my$("city").children[0].children;
        var ulObjs=my$("tab_list").children;
        //console.log(ulObjs);
        //console.log(cityLists);
        for(var i=0;i<cityLists.length;i++){
            cityLists[i].setAttribute("index",i);
            cityLists[i].onclick=cclickHandle;
        }
        function cclickHandle(){
            for(var j=0;j<cityLists.length;j++){
                cityLists[j].className="";
                ulObjs[j].removeAttribute("class");

            }
            this.className="current";

            ulObjs[this.getAttribute("index")].className="current";

        }

        var  tab2=my$("tab_list2");
        var listObjs2=tab.getElementsByTagName("li");
        //console.log(listObjs2.length);
        //console.log(listObjs2);
        //var listObjs=cityulObjs.children;
        for(var i=0;i<listObjs2.length;i++){
            listObjs2[i].onmouseover=limouseoverHandle2;
            listObjs2[i].onmouseout=limouseoutHandle2;
        }
        function limouseoverHandle2(){
            this.style.boxShadow="0 0 3px #CCC";
        }
        function limouseoutHandle2(){
            this.style.boxShadow="0 0 0 #ccc";
        }

        //点击城市切换列表2
        var cityLists2=my$("city2").children[0].children;
        var ulObjs2=my$("tab_list2").children;
        //console.log(ulObjs2);
        //console.log(cityLists2);
        for(var i=0;i<cityLists2.length;i++){
            cityLists2[i].setAttribute("index",i);
            cityLists2[i].onclick=cclickHandle2;
        }
        function cclickHandle2(){
            for(var j=0;j<cityLists2.length;j++){
                cityLists2[j].className="";
                ulObjs2[j].removeAttribute("class");

            }
            this.className="current";

            ulObjs2[this.getAttribute("index")].className="current";

        }

    })();

    //第三部分结束






    //第四部分开始
    (function (){
        var listTab1 = my$("tab_gn").children[0].children;
        listTab1[0].className="cls2";
        for(var i=0;i<listTab1.length-1;i++){
            listTab1[i].onclick=function(){
                for(var i=0;i<listTab1.length-1;i++){
                    listTab1[i].className="";
                }
                //console.log(this.innerText,"国内精选");
                if(this.innerText=="国内精选"){
                    my$("gn_innerL1").style.display="block";
                    my$("gn_innerL2").style.display="none";
                    console.log(1,this.innerText);
                    //console.log(2132);
                }else{
                    my$("gn_innerL2").style.display="block";
                    my$("gn_innerL1").style.display="none";
                    console.log(2,this.innerText);
                }
                this.className="cls1";
                animate(my$("hua"),{"left":this.offsetLeft});
            };
        }
        //==================================
        var listInner = my$("uu").children;
        for (var i = 1; i < listInner.length; i++) {
            listInner[i].onmouseover = function () {
                animate(this.firstElementChild.firstElementChild, {"width": 242, "height": 150});
            };
            listInner[i].onmouseout = function () {
                animate(this.firstElementChild.firstElementChild, {"width": 222, "height": 142});
            };
        }
        var listInner2 = my$("uu2").children;
        for (var i = 1; i < listInner2.length; i++) {
            listInner2[i].onmouseover = function () {
                animate(this.firstElementChild.firstElementChild, {"width": 242, "height": 150});
            };
            listInner2[i].onmouseout = function () {
                animate(this.firstElementChild.firstElementChild, {"width": 222, "height": 142});
            };
        }
        //===================================
        var rDvObj=my$("r_in").children;
        //console.log(rDvObj);
        for(var i=1;i<rDvObj.length;i++){
            rDvObj[i].onmouseover=function(){
                this.firstElementChild.firstElementChild.children[1].style.display="block";
            };
            rDvObj[i].onmouseout=function(){
                this.firstElementChild.firstElementChild.children[1].style.display="none";
            };
        }
        var listTab2 = my$("tab_chujing").children[0].children;
        listTab2[0].className="cls4";
        for(var i=0;i<listTab2.length-1;i++){

            listTab2[i].onclick=function(){
                for(var i=0;i<listTab2.length-1;i++){
                    listTab2[i].className="";
                };
                this.className="cls3";
                animate(my$("hua2"),{"left":this.offsetLeft});
            }
        }

        //==================================
        var listInner3 = my$("uu_chujing").children;
        for (var i = 1; i < listInner3.length; i++) {
            listInner3[i].onmouseover = function () {
                animate(this.firstElementChild.firstElementChild, {"width": 242, "height": 150});
            };
            listInner3[i].onmouseout = function () {
                animate(this.firstElementChild.firstElementChild, {"width": 222, "height": 142});
            };
        }
        //===================================
        var rDvObj2=my$("r_in_chujing").children;
        for(var i=1;i<rDvObj.length;i++){
            rDvObj2[i].onmouseover=function(){
                this.firstElementChild.firstElementChild.children[1].style.display="block";
            };
            rDvObj2[i].onmouseout=function(){
                this.firstElementChild.firstElementChild.children[1].style.display="none";
            };
        }
    })();

    //第四部分结束







    //第五部分开始
    (function (){
        // 图片部分 阴影显示
        //获取所有的li标签
        var lists = my$("top_jingdian").getElementsByTagName("li");
        //循环遍历li
        for (var i = 0; i < lists.length; i++) {

            //鼠标进入盒子出现阴影
            lists[i].onmouseover = function () {
                this.style.boxShadow = "0 0 5px #696969";

            };
            //鼠标离开盒子阴影消失
            lists[i].onmouseout = function () {
                this.style.boxShadow = "";
            };

        }
        //地点高亮显示
        var liObj = my$("r_ul").children;
        for (var i = 0; i < liObj.length; i++) {
            //鼠标进入  显示红色边框
            liObj[i].onmouseover = function () {
                this.style.border = "1px solid #696969";
                this.style.color = "red";

            };
            //鼠标离开 红色边框恢复原来
            liObj[i].onmouseout = function () {
                this.style.border = "1px solid #DDDDDD";
                this.style.color = "";
            };
        }
        //右侧固定位置
        //获取全部li
        var lists = my$("t_t_2").children;
        //获取所有的i标签
        var iObj = my$("t_t_2").getElementsByTagName("i");
        //循环遍历索的i����
        for (var i = 0; i < iObj.length; i++) {
            //鼠标进入
            iObj[i].onmouseover = function () {
                for (var j = 0; j < lists.length; j++) {
                    iObj[j].style.backgroundColor = "#333333";
                }
                this.style.backgroundColor = "#ff6600";
                this.children[0].className="blk";
                animate(this.children[0],{"margin-right":40});
            };

            //设置鼠标离开事件
            iObj[i].onmouseout = function () {

                this.style.backgroundColor = "";
                this.children[0].className="none";
                animate(this.children[0],{"margin-right":56});

            };
        }

        //固定栏上部图片显示和隐藏
        //获取鼠标进入元素
        var imgs1 = document.getElementsByClassName("f_1")[0];
        //显示的元素
        var imgs2 = document.getElementsByClassName("t_t_1")[0];
        //鼠标进入和离开事件
        imgs1.onmouseover = function () {
            imgs2.style.display="block";
        };
        imgs1.onmouseout = function () {
            imgs2.style.display="none";
        };
        imgs2.onmouseout = function () {
            imgs2.style.display="none";
        };

        //左侧固定栏显示
        window.onscroll = function () {
            //获取标志的父元素
            var lFixs = my$("l_fix").children[0];

            if (getScrollTop() >= my$("jing").offsetTop ) {
                my$("l_fix").className = "l_fix blk";
                //特惠
                if (getScrollTop() >= my$("jing").offsetTop && getScrollTop() <= my$("jing").offsetTop +my$("jing").offsetHeight+ my$("lie").offsetHeight+my$("hiden").offsetHeight) {
                    lFixs.children[0].style.backgroundColor = "#ff6600";
                    lFixs.children[0].children[0].style.color = "#ffffff";
                } else {
                    lFixs.children[0].style.backgroundColor = "#333333";
                    lFixs.children[0].children[0].style.color = "#ACACAC";
                }
                //周边
                if (getScrollTop() >= my$("three").offsetTop && getScrollTop() <= my$("three").offsetTop + my$("three").offsetHeight) {
                    lFixs.children[1].style.backgroundColor = "#ff6600";
                    lFixs.children[1].children[0].style.color = "#ffffff";
                } else {
                    lFixs.children[1].style.backgroundColor = "#333333";
                    lFixs.children[1].children[0].style.color = "#ACACAC";
                }
                //国内
                if (getScrollTop() >= my$("gn").offsetTop && getScrollTop() <= my$("gn").offsetTop + my$("gn").offsetHeight) {
                    lFixs.children[2].style.backgroundColor = "#ff6600";
                    lFixs.children[2].children[0].style.color = "#ffffff";
                } else {
                    lFixs.children[2].style.backgroundColor = "#333333";
                    lFixs.children[2].children[0].style.color = "#ACACAC";
                }
                //出境
                if (getScrollTop() >= my$("chujing").offsetTop && getScrollTop() <= my$("chujing").offsetTop + my$("chujing").offsetHeight) {
                    lFixs.children[3].style.backgroundColor = "#ff6600";
                    lFixs.children[3].children[0].style.color = "#ffffff";
                } else {
                    lFixs.children[3].style.backgroundColor = "#333333";
                    lFixs.children[3].children[0].style.color = "#ACACAC";
                }
                //景点
                if (getScrollTop() >= my$("jingdian").offsetTop && getScrollTop() <= my$("jingdian").offsetTop + my$("jingdian").offsetHeight) {
                    lFixs.children[4].style.backgroundColor = "#ff6600";
                    lFixs.children[4].children[0].style.color = "#ffffff";
                } else {
                    lFixs.children[4].style.backgroundColor = "#333333";
                    lFixs.children[4].children[0].style.color = "#ACACAC";
                }
                //游轮
                if (getScrollTop() >= my$("youlun").offsetTop && getScrollTop() <= my$("youlun").offsetTop + my$("youlun").offsetHeight) {
                    lFixs.children[5].style.backgroundColor = "#ff6600";
                    lFixs.children[5].children[0].style.color = "#ffffff";
                } else {
                    lFixs.children[5].style.backgroundColor = "#333333";
                    lFixs.children[5].children[0].style.color = "#ACACAC";
                }
                //酒店
                if (getScrollTop() >= my$("jiudian").offsetTop && getScrollTop() <= my$("jiudian").offsetTop + my$("jiudian").offsetHeight) {
                    lFixs.children[6].style.backgroundColor = "#ff6600";
                    lFixs.children[6].children[0].style.color = "#ffffff";

                } else {
                    lFixs.children[6].style.backgroundColor = "#333333";
                    lFixs.children[6].children[0].style.color = "#ACACAC";
                }
                //游玩攻略
                if (getScrollTop() >= my$("gonglue").offsetTop && getScrollTop() <= my$("gonglue").offsetTop + my$("gonglue").offsetHeight) {
                    lFixs.children[7].style.backgroundColor = "#ff6600";
                    lFixs.children[7].children[0].style.color = "#FFFFFF";
                } else {
                    lFixs.children[7].style.backgroundColor = "#333333";
                    lFixs.children[7].children[0].style.color = "#ACACAC";
                }
            } else {
                my$("l_fix").className = "l_fix hid";
            }
        };

    })();
    //第五部分结束





    //第六部分开始
    (function (){
        //鼠标进入图片放大
        var list = my$("big").getElementsByTagName("img");
        for (var i = 1; i < list.length-1; i++) {
            list[i].onmouseover = mouseoverHandle;
            list[i].onmouseout = mouseoutHandle;
        }
        function mouseoverHandle() {
            animate(this, {"width": 242, "height": 150});
        }
        function mouseoutHandle() {
            animate(this, {"width": 222, "height": 140,});
        }
        //滑块
        var spans = getSiblings(my$("huakuai"));
        spans[0].onclick = function () {
            for (var j = 0; j < spans.length - 1; j++) {
                spans[j].className = "";
            }
            this.className = "title";
            animate(my$("huakuai"), {"left": this.offsetLeft - 10});
            my$("big1").className = "youlun_left show";
            my$("big").className = "youlun_left hide";
        };
        spans[1].onclick = function () {
            for (var j = 0; j < spans.length - 1; j++) {
                spans[j].className = "";
            }
            this.className = "title";
            animate(my$("huakuai"), {"left": this.offsetLeft - 10});
            my$("big").className = "youlun_left show";
            my$("big1").className = "youlun_left hide";
        };
        //切换
        //图片高亮
        var imgs = my$("dl").getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onmouseover = function () {
                this.style.opacity = 0.8;
            };
            imgs[i].onmouseout = function () {
                this.style.opacity = 1;
            };
        }

        //鼠标进入图片放大
        var list1 = my$("big1").getElementsByTagName("img");
        for (var i = 1; i < list1.length-1; i++) {
            list1[i].onmouseover = mouseoverHandle;
            list1[i].onmouseout = mouseoutHandle;
        }
        function mouseoverHandle() {
            animate(this, {"width": 242, "height": 150});
        }
        function mouseoutHandle() {
            animate(this, {"width": 222, "height": 140,});
        }
    })();
    //第六部分结束






    //第七部分开始
    (function (){
        //点击国内国际酒店小三角及滑块滑动效果
        my$("hotelR").onclick=function (){
            my$("hotelL").style.color="#333333";
            my$("hotelL").style.fontWeight="100";
            animate(my$("dv-btm"),{"left":115});
            animate(my$("dv-sanjiao"),{"left":159});
            this.style.color="#FF6363";
            this.style.fontWeight="700";
            this.parentNode.parentNode.style.height="368px";
            my$("hotelcon1").className="hotelcontent-none";
            my$("hotelcon2").className="public-btmcon";
        };
        my$("hotelL").onclick=function (){
            my$("hotelR").style.color="#333333";
            my$("hotelR").style.fontWeight="100";
            animate(my$("dv-btm"),{"left":0});
            animate(my$("dv-sanjiao"),{"left":44});
            this.style.color="#FF6363";
            this.style.fontWeight="700";
            this.parentNode.parentNode.style.height="480px";
            my$("hotelcon2").className="methodcon";
            my$("hotelcon1").className="hotelcontent";
        };

        //点击攻略酒店小三角及滑块滑动效果 #50B400
        my$("methodR").onclick=function (){
            my$("methodL").style.color="#333333";
            my$("methodL").style.fontWeight="100";
            animate(my$("me-btm"),{"left":115});
            animate(my$("me-sanjiao"),{"left":159});
            this.style.color="#50B400";
            this.style.fontWeight="700";

            my$("method1").className="methodcon";
            my$("method2").className="public-btmcon";
        };
        my$("methodL").onclick=function (){
            my$("methodR").style.color="#333333";
            my$("methodR").style.fontWeight="100";
            animate(my$("me-btm"),{"left":0});
            animate(my$("me-sanjiao"),{"left":44});
            this.style.color="#50B400";
            this.style.fontWeight="700";


            my$("method1").className="public-btmcon";
            my$("method2").className="methodcon";
        };

        //鼠标悬停出现阴影
        var aHotelObjs=document.getElementsByClassName("hotel-btm1");
        for(var i=0;i<aHotelObjs.length;i++){
            aHotelObjs[i].onmouseover=function (){
                this.className="hotel-btm1 hotel-btm1-show";
            };
            aHotelObjs[i].onmouseout=function (){
                this.className="hotel-btm1";
            };
        }

        //鼠标悬停放大图片效果
        var aObjs=document.getElementsByClassName("public-btml-a");
        for(var i=0;i<aObjs.length;i++){
            aObjs[i].onmouseover=function (){
                animate(this.children[0],{"width":252,"height":170});

            };
            aObjs[i].nextElementSibling.onmouseover=function (){
                animate(this.previousElementSibling.children[0],{"width":252,"height":170});
            };
            aObjs[i].onmouseout=function (){
                animate(this.children[0],{"width":222,"height":140});
            };
        }

        var  liaHotelObj=my$("hotelm").children[0].getElementsByTagName("a");
        for(var i=0;i<liaHotelObj.length;i++){
            liaHotelObj[i].onclick=function (){
                for(var j=0;j<liaHotelObj.length;j++){
                    liaHotelObj[j].removeAttribute("class");
                }
                this.className="city";
                my$("more").innerText="更多"+this.innerText+"酒店>>";
            }
        }
    })();
    //第七部分结束





    //第八部分开始
    (function (){
        var timeIdFooter=null;
        timeIdFooter=setInterval(function (){
            if(my$("footer1").className=="footer-top w"){
                my$("footer2").className="footer-top w";
                my$("footer1").className="footer-top w  footer-top-none";
            }else {
                my$("footer1").className="footer-top w";
                my$("footer2").className="footer-top w  footer-top-none";
            }
        },1000);
    })();


















};
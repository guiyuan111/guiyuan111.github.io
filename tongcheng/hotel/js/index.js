/**
 * Created by Administrator on 2017/3/31 0031.
 */


//// 图片部分 阴影显示
//    //获取所有的li标签
//    var lists = my$("top_jingdian").getElementsByTagName("li");
//
//    //循环遍历li
//    for (var i = 0; i < lists.length; i++) {
//
//        //鼠标进入盒子出现阴影
//        lists[i].onmouseover = function () {
//            this.style.boxShadow = "0 0 5px red";
//
//        };
//        //鼠标离开盒子阴影消失
//        lists[i].onmouseout = function () {
//            this.style.boxShadow = "";
//        };
//
//    }
//
//
//    //地点高亮显示
//    var liObj = my$("r_ul").children;
//    for (var i = 0; i < liObj.length; i++) {
//        //鼠标进入  显示红色边框
//        liObj[i].onmouseover = function () {
//            this.style.border = "1px solid red"
//            this.style.color = "red";
//
//        };
//        //鼠标离开 红色边框恢复原来
//        liObj[i].onmouseout = function () {
//            this.style.border = "1px solid #DDDDDD";
//            this.style.color = "";
//        };
//    }


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
        };

        //设置鼠标离开事件
        iObj[i].onmouseout = function () {

            this.style.backgroundColor = "";
            this.children[0].className="none";

        };
    }




    //固定栏上部图片显示和隐藏
    //获取鼠标进入元素
    var imgs1 = document.getElementsByClassName("f_1")[0];
console.log(imgs1)
    //显示的元素
    var imgs2 = document.getElementsByClassName("t_t_1")[0];
    console.log(imgs2)
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





//
////左侧固定栏显示
//
//    window.onscroll = function () {
//
//        //获取标志的父元素
//        var lFixs = my$("l_fix").children[0];
//
//        if (getScrollTop() >= 900) {
//            my$("l_fix").className = "l_fix blk";
//            //特惠
//            if (getScrollTop() >= my$("tehui").offsetTop && getScrollTop() <= my$("tehui").offsetTop + my$("tehui").offsetHeight) {
//                lFixs.children[0].style.backgroundColor = "#ff6600";
//                lFixs.children[0].children[0].style.color = "#ffffff";
//            } else {
//                lFixs.children[0].style.backgroundColor = "#333333";
//                lFixs.children[0].children[0].style.color = "#ACACAC";
//            }
//            //周边
//            if (getScrollTop() >= my$("zhoubian").offsetTop && getScrollTop() <= my$("zhoubian").offsetTop + my$("zhoubian").offsetHeight) {
//                lFixs.children[1].style.backgroundColor = "#ff6600";
//                lFixs.children[1].children[0].style.color = "#ffffff";
//            } else {
//                lFixs.children[1].style.backgroundColor = "#333333";
//                lFixs.children[1].children[0].style.color = "#ACACAC";
//            }
//            //国内
//            if (getScrollTop() >= my$("guonei").offsetTop && getScrollTop() <= my$("guonei").offsetTop + my$("guonei").offsetHeight) {
//                lFixs.children[2].style.backgroundColor = "#ff6600";
//                lFixs.children[2].children[0].style.color = "#ffffff";
//            } else {
//                lFixs.children[2].style.backgroundColor = "#333333";
//                lFixs.children[2].children[0].style.color = "#ACACAC";
//            }
//            //出境
//            if (getScrollTop() >= my$("chujing").offsetTop && getScrollTop() <= my$("chujing").offsetTop + my$("chujing").offsetHeight) {
//                lFixs.children[3].style.backgroundColor = "#ff6600";
//                lFixs.children[3].children[0].style.color = "#ffffff";
//            } else {
//                lFixs.children[3].style.backgroundColor = "#333333";
//                lFixs.children[3].children[0].style.color = "#ACACAC";
//            }
//            //景点
//            if (getScrollTop() >= my$("jingdian").offsetTop && getScrollTop() <= my$("jingdian").offsetTop + my$("jingdian").offsetHeight) {
//                lFixs.children[4].style.backgroundColor = "#ff6600";
//                lFixs.children[4].children.style.color = "#ffffff";
//            } else {
//                lFixs.children[4].style.backgroundColor = "#333333";
//                lFixs.children[4].children[0].style.color = "#ACACAC";
//            }
//            //游轮
//            if (getScrollTop() >= my$("youlun").offsetTop && getScrollTop() <= my$("youlun").offsetTop + my$("youlun").offsetHeight) {
//                lFixs.children[5].style.backgroundColor = "#ff6600";
//                lFixs.children[5].children[0].style.color = "#ffffff";
//            } else {
//                lFixs.children[5].style.backgroundColor = "#333333";
//                lFixs.children[5].children[0].style.color = "#ACACAC";
//            }
//            //酒店
//            if (getScrollTop() >= my$("jiudian").offsetTop && getScrollTop() <= my$("jiudian").offsetTop + my$("jiudian").offsetHeight) {
//                lFixs.children[6].style.backgroundColor = "#ff6600";
//                lFixs.children[6].children.style.color = "#ffffff";
//
//            } else {
//                lFixs.children[6].style.backgroundColor = "#333333";
//                lFixs.children[6].children[0].style.color = "#ACACAC";
//            }
//            //游玩攻略
//            if (getScrollTop() >= my$("gonglue").offsetTop && getScrollTop() <= my$("gonglue").offsetTop + my$("gonglue").offsetHeight) {
//                lFixs.children[7].style.backgroundColor = "#ff6600";
//                lFixs.children[7].children.style.color = "#FFFFFF";
//            } else {
//                lFixs.children[7].style.backgroundColor = "#333333";
//                lFixs.children[7].children[0].style.color = "#ACACAC";
//            }
//        } else {
//            my$("l_fix").className = "l_fix hid";
//        }
//    };








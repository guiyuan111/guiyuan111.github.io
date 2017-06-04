/**
 * Created by Administrator on 2017/4/7 0007.
 */
window.onload=function (){
    //第三部分开始促销
    (function (){
        var concxObj=document.getElementsByClassName("concx-right-btm");
        spanHide(concxObj);
    })();



    //第三部分封装函数
    //鼠标悬停是隐藏的span标签出现
    function spanHide(obj){
        for(var i=0;i<obj.length;i++){

            obj[i].parentNode.onmouseover=function (){
                animate(this.children[1].children[1],{"height":40});
                if(this.parentNode.parentNode.parentNode.className=="conrm-right"){
                    this.parentNode.style.border="1px solid #CCC";
                }
                //console.log(this.parentNode.parentNode.parentNode);
            };
            obj[i].parentNode.onmouseout=function (){
                animate(this.children[1].children[1],{"height":0});
                if(this.parentNode.parentNode.parentNode.className=="conrm-right"){
                    this.parentNode.style.border="1px solid white";
                }
            };
        }
    }




    //第四部分热门目的地
    (function (){
        //鼠标悬停在目的地注册鼠标进入和离开事件
        var rmbBoxObj=document.getElementsByClassName("conrmbox")[0];
        var rmbDivObj=rmbBoxObj.children;
        //页面加载后为北京的左侧广告底部list添加事件
        moveObjHandle(rmbDivObj[0].children[0].children,rmbDivObj[0].children[1].children);
        //获取左侧广告底部ul列表
        var rmlist=my$("rmuu").children;
        //获取中间内容部分的ul列表
        var conUu=my$("conrm-right").children;
        for(var i=0;i<rmlist.length;i++){
            rmlist[i].setAttribute("index",i);
            rmlist[i].children[0].onmouseover=function (){
                var index=this.parentNode.getAttribute("index");
                for(var j=0;j<rmlist.length;j++){
                    rmlist[j].children[0].className="";
                    rmbDivObj[j].className="conrmdiv none";
                }
                this.className="acurrent";
                //console.log(index);
                //左侧广告底部的li列表
                rmbDivObj[index].className="conrmdiv";
                moveObjHandle(rmbDivObj[index].children[0].children,rmbDivObj[index].children[1].children);
                //中间内容列表切换
                divHandle(conUu,conUu[index]);
            };
            rmlist[i].children[0].onmouseout=function (){
                //this.className="";
            };
        }

        //第四部分封装函数
        //左侧广告底部的ul列表注册鼠标进入和离开事件函数
        function moveObjHandle(obj1,obj2){
            moveHandle(obj1);
            moveHandle(obj2);
        }
        function moveHandle(obj){
            for(var i=0;i<obj.length;i++){
                obj[i].onmouseover=function (){
                    animate(this,{"margin-top":8,"margin-bottom":10});
                };
                obj[i].onmouseout=function (){
                    animate(this,{"margin-top":18,"margin-bottom":0});
                };
            }
        }
        function divHandle(ulObj,obj){
            for(var i=0;i<ulObj.length;i++){
                ulObj[i].className="conrm-uu-hide";
                //ulObj[i].style.border="1px solid white";
            }
            obj.className="";
            //obj.style.border="1px solid #E4E4E4";
        }
    })();



    //底部
    (function () {
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

//jQuery方法
$(function () {
    //第五部分
    //官方合作和战略伙伴切换
    $("#coprtuu a").mouseenter(function (){
        console.log("第五");
        var index=$(this).parent().index();
        //console.log(index);
        $(this).addClass("currenta").parent().siblings().children("a").removeClass("currenta");
        $("#concopdiv div:eq("+index+")").show().siblings("div").hide();
    });
    //为每个Li设置鼠标进入事件
    $(".hzcon li").mouseenter(function () {
        $(this).addClass("currentli").siblings("li").removeClass("currentli");
    }).mouseleave(function () {
        $(this).removeClass("currentli");
    });


    //底部图片的鼠标进入事件
    //console.log($("#footuu"));
    $("#footuu li").width($(this).children("a").width());
    $("#footuu li").height($(this).children("a").height());
    $("#footuu li a").mouseenter(function () {

        $(this).parent("li").addClass("currentli").siblings("li").removeClass("currentli");

    }).mouseleave(function () {
        $(this).parent("li").removeClass("currentli");
    });



});










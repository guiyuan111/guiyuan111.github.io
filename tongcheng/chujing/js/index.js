$(function(){
    /**
     * Created by odin on 2017/4/2.
     */
    (function(){
        //左侧菜单单动态创建

        var arr1 = {0: ["香港", "台湾"], 1: ["海岛"], 2: ["日本"], 3: ["东南亚", "泰国"], 4: ["欧洲", "澳新"], 5: ["美洲", "中东非洲"]}
        var arr2 = {
            0: ["澳门", "香港"],
            1: ["巴厘岛", "马尔代夫"],
            2: ["东京", "北海道", "冲绳"],
            3: ["柬埔寨", "越南", "普吉岛"],
            4: ["俄罗斯", "希腊", "澳大利亚", "法国", "新西兰"],
            5: ["美国", "迪拜", "土耳其"]
        }
        for (var i = 0; i < 6; i++) {
            var dvBotSearch = document.createElement("div");
            dvBotSearch.className = "dvBotSearch";
            my$("bottomSearch").appendChild(dvBotSearch);
            var imBotSearchObj = document.createElement("img");
            imBotSearchObj.src = "images/icon" + i + ".png";
            imBotSearchObj.className = "imBotSearchObj";
            dvBotSearch.appendChild(imBotSearchObj)
            var dlBotSearchObj = document.createElement("dl");
            dvBotSearch.appendChild(dlBotSearchObj);
            var dtBotSearchObj = document.createElement("dt");
            var str = "";
            for (var j = 0; j < arr1[i].length; j++) {
                str += "<a href='javascript:void(0)'>" + arr1[i][j] + "</a>";
                dtBotSearchObj.innerHTML = str;
            }
            dlBotSearchObj.appendChild(dtBotSearchObj);
            var ddBotSearchObj = document.createElement("dd");
            var str2 = "";
            for (var j = 0; j < arr2[i].length; j++) {
                str2 += "<a href='javascript:void(0)'>" + arr2[i][j] + "</a>";
                ddBotSearchObj.innerHTML = str2;
            }
            dlBotSearchObj.appendChild(ddBotSearchObj);
            var rImg=document.createElement("div");
            rImg.className="rImg";
            rImg.innerHTML="<img src='images/"+(i+1)+".png' alt=''/>";
            dvBotSearch.appendChild(rImg);
            dvBotSearch.onmouseover=function(){
                this.style.backgroundColor="#50b400";
                this.style.backgroundColor="#fff";
                this.lastChild.style.display="block"
                this.lastChild.style.zIndex=10;
                this.style.borderBottom="1px solid #50b400";
            }
            dvBotSearch.onmouseout=function(){
                this.style.backgroundColor="";
                this.style.backgroundColor="";
                this.lastChild.style.display=""
                this.style.borderBottom=""
            }
        };

//轮播图开始
        var dian=my$("nav").children;
        var imWidth=840;
        for(var i=0;i<dian.length;i++){
            dian[i].onmouseover=function(){
                for(var j=0;j<dian.length;j++){
                    dian[j].style.backgroundColor="";
                }
                this.style.backgroundColor="red";
                var x=this.getAttribute("class");
                console.log(x)
                animate(my$("imgLun"),{"left":(-x)*imWidth})
            }
        }
        var listImg=my$("imgLun").children;
        var pic=0;
        function rightClick() {
            if (pic == listImg.length - 1) {
                pic = 0;
                my$("imgLun").style.left = -pic * imWidth + "px";
            }
            pic++;
            animate(my$("imgLun"), {"left": -pic * imWidth});
            for(var j=0;j<dian.length;j++){
                dian[j].style.backgroundColor="";
            }
            if (pic == listImg.length - 1) {
                dian[0].style.backgroundColor="red";
            } else {
                dian[pic].style.backgroundColor="red";
            }
        };
        var timeIdTL=null;
        timeIdTL=setInterval(rightClick,2000);
        my$("frame-Top").onmouseover=function(){
            clearInterval(timeIdTL)
        };
        my$("frame-Top").onmouseout=function(){
            timeIdTL=setInterval(rightClick,2000);
        }
        //底部轮播图
        var bottomLunBo=my$("bottomLunBo");
        var ulObjBl=bottomLunBo.children[0];
        var listBl=ulObjBl.children;
        var leftBtn=bottomLunBo.children[1];
        var rightBtn=bottomLunBo.children[2];
        var timeIdBL=null;
        timeIdBL=setInterval(rightBtnClick,2000);
        bottomLunBo.onmouseover=function(){
            leftBtn.style.display="block";
            rightBtn.style.display="block";
            clearInterval(timeIdBL)
        }
        bottomLunBo.onmouseout=function(){
            leftBtn.style.display="none";
            rightBtn.style.display="none";
            timeIdBL=setInterval(rightBtnClick,2000);
        }
        var indexBL=0;
        rightBtn.onclick=rightBtnClick;
        function rightBtnClick(){
            if(indexBL==listBl.length-4){
                indexBL=0;
                ulObjBl.style.left = -indexBL * 210 + "px";
            }

            indexBL++;
            animate(ulObjBl,{"left":-indexBL * 210 });
        }
        leftBtn.onclick=function(){
            if(indexBL==0){
                indexBL=4;
                ulObjBl.style.left = -indexBL * 210 + "px";
            }
            indexBL--;
            animate(ulObjBl,{"left":-indexBL * 210 });
        }


        //右侧固定导航栏
        var rSilder=my$("right-silder");
        var listRsilder=rSilder.children[0].children;
        var listRslider2=rSilder.children[1].children;
        function Lbox(list){
            for(var i=0;i<list.length;i++){
                list[i].onmouseover=function(){
                    this.style.backgroundColor="#f60";
                    this.children[1].style.display="block";
                    animate(this.children[1],{"right":40,"opacity":1})

                }
                list[i].onmouseout=function(){
                    this.style.backgroundColor="";
                    this.children[1].style.display="none";
                    animate(this.children[1],{"right":65,"opacity":0})

                }
            }
        }
        Lbox(listRsilder)
        Lbox(listRslider2)
        window.onscroll=function(){
            var tem=document.body.scrollTop;
            if(tem>0){
                my$("top").style.visibility="visible";
            }else{
                my$("top").style.visibility="hidden";
            }
        }
        $(".firstUu>li").mouseenter(function(){
            $(this).children(0).css("display","block")
            $(this).siblings("li").children(0).css("display","none")
        });
        $("#firstUl>li").mouseenter(function(){
            var index=$(this).index();
            $("#count>li:eq("+index+")").show().stop().siblings().hide();
        });
        $("#secUl>li").mouseenter(function(){
            var index=$(this).index();
            $("#count2>li:eq("+index+")").show().stop().siblings().hide();
        });
        $(".bot-right-nav>ul>li").mouseenter(function(){
            $(this).addClass("mouseon").siblings("li").removeClass("mouseon");
        }).mouseleave(function(){
            $(".bot-right-nav>ul>li").removeClass("mouseon");
        });
        $("#count>li:eq(0)").show().siblings("li").hide();
        $("#count2>li:eq(0)").show().siblings("li").hide();

    })()

});
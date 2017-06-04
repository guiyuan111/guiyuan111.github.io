/**
 * Created by Administrator on 2017/4/1.
 */
window.onload = function () {
    var banner = my$("banner");
    var imgs = my$("banner").getElementsByTagName("img");
    var list = my$("shuzi").children;
    var index = 0;

    /*�ֲ�ͼ*/
    var time = setInterval(auto, 2000);

    function auto() {
        if (index == list.length) {
            index = 0;
            my$("banner").style.left = 0;
        }
        index++;
        animate(my$("banner"), {"left": (-1920 + 250) * index});
        for (var j = 0; j < list.length; j++) {
            list[j].style.backgroundColor = "#38415F";
        }
        if (index == list.length) {
            list[0].style.backgroundColor = "#FF7800";
        } else {
            list[index].style.backgroundColor = "#FF7800";
        }
    }


    for (var i = 0; i < list.length; i++) {
        list[i].setAttribute("index", i);
        list[i].onmouseover = play;
    }
    function play() {
        for (var j = 0; j < list.length; j++) {
            list[j].style.backgroundColor = "#38415F";
        }
        this.style.backgroundColor = "#FF7800";
        index = this.getAttribute("index");
        animate(my$("banner"), {"left": (-1920 + 250) * index});
    }


    banner.onmouseover = function () {
        clearInterval(time);
    };
    banner.onmouseout = function () {
        time = setInterval(auto, 2000);
    };


    //��������

    (function () {
        my$("kaiguan").onclick = function () {
            if (my$("xiala").offsetHeight == 0) {
                animate(my$("xiala"), {"height": 180, "opacity": 1});
                my$("xiala").style.display = "block";
                //·������

            } else {
                animate(my$("xiala"), {"height": 0, "opacity": 0}, function () {
                    my$("xiala").style.overflow = "hidden";
                    my$("xiala").style.display = "none";
                });
            }
        };
    })();
    (function(){
        var dings = document.getElementsByClassName("query");
        var lis = my$("jiu").getElementsByTagName("li");
        console.log(dings);
        for(var i=0;i<lis.length;i++){
            lis[i].setAttribute("index",i);
            lis[i].onclick=function(){
                console.log(123);
                for(var j=0;j<lis.length;j++){
                    dings[j].style.display="none";
                }
                var index=this.getAttribute("index");
                animate(my$("huakuai"),{"left":index*145+30});
                dings[index].style.display="block";
            };
        }
    })();

    //�ϸ�����
    (function () {
        var infos = my$("info").getElementsByTagName("li");
        var divs = my$("info").getElementsByTagName("div");
        for (var i = 0; i < infos.length; i++) {
            infos[i].index = i;
            infos[i].onmouseover = function () {
                animate(divs[this.index], {"top": 180});
            };
            infos[i].onmouseout = function () {
                animate(divs[this.index], {"top": 210});
            };
        }
    })();


    //�����л�

    (function () {
        var list_city = my$("hotel_tab").getElementsByTagName("a");
        var city = my$("info_Main").children;
        for (var i = 1; i < city.length; i++) {
            city[i].style.display = "none";
        }
        for (var i = 0; i < list_city.length; i++) {
            list_city[i].index = i;
            list_city[i].onclick = function () {
                for (var j = 0; j < list_city.length; j++) {
                    list_city[j].removeAttribute("class");
                    city[j].style.display = "none";
                }
                this.className = "current";
                city[this.index].style.display = "block";
            };
        }
    })();


    //��������
    (function () {
        var arr = [
            {
                "name": "������������ش󷹵�",
                "price": "988",
                "des": "����ó����������·93�����㳡C����...",
            },
            {
                "name": "Zhotels���оƵ꣨�����������У�",
                "price": "278",
                "des": "���찲�š���������������������ְ���...",
            },
            {
                "name": "��������",
                "price": "698",
                "des": "���찲�š���������������������33��...",
            },
            {
                "name": "����ǬԪ�Ƶ�",
                "price": "767",
                "des": "����ֱ�š����塢Ӻ�͹���������ֱ����...",
            },
            {
                "name": "�����ļ���԰���ʴ�Ƶ�",
                "price": "350",
                "des": "���йش塢����ڡ��ϵز�ҵ԰��������...",
            },
            {
                "name": "������̳�ֱ�¥",
                "price": "228",
                "des": "��������/�����/ʯ��ɽ����԰��������...",
            },
        ];

        //ѡ��л�
        var tabList = my$("hotel_tab").getElementsByTagName("li");
        var as = my$("hotel_tab").getElementsByTagName("a");
        for (var i = 0; i < tabList.length; i++) {
            tabList[i].index = i;
            tabList[i].onmouseover = function () {
                this.style.border = "1px solid #FF7800";
                //as[this.index].style.color = "#FF7800";
            }
            tabList[i].onmouseout = function () {
                this.style.border = "";
                as[this.index].style.color = "";
            }
        }
    })();


    //ͼƬ����
    (function () {
        var holiday = document.getElementsByClassName("holiday")[0];
        var imgs = holiday.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onmouseover = function () {
                this.style.opacity = 0.7;
            };
            imgs[i].onmouseout = function () {
                this.style.opacity = 1;
            };
        }
    })();


    //��
    (function () {
        var white = my$("white").getElementsByTagName("li");
        var green = my$("green").getElementsByTagName("li");
        var before = 0;
        var jj = my$("jing_main").children;
        for (var i = 0; i < white.length; i++) {
            white[i].index = i;
            white[i].onclick = function () {
                animate(green[before], {"height": 0});
                green[before].style.display = "none";
                //Ϊʲô
                //animate(green[before], {"height": 0},function(){
                //    green[before].style.display="none";
                //});

                green[this.index].style.display = "block";
                animate(green[this.index], {"height": 60});
                before = this.index;

                for (var i = 1; i < jj.length; i++) {
                    jj[i].style.display = "none";
                }
                jj[this.index + 1].style.display = "block";
            };
        }


        var jings = document.getElementsByClassName("jing");
        for (var i = 0; i < jings.length; i++) {
            jings[i].style.display = "none";
        }
    })();


    //�ײ��ֲ�
    (function () {
        var uls = my$("gundong").getElementsByTagName("ul");

        var indexs = 0;
        var times = setInterval(function () {
            if (indexs == uls.length - 1) {
                indexs = 0;
                my$("gundong").style.left = 0;
            }
            indexs++;
            animate(my$("gundong"), {"left": -1200 * indexs});
        }, 2000);
    })();


    //ҡ��Ч��
    (function () {
        var xiao = my$("yaohuang").getElementsByTagName("img");
        for (var i = 0; i < xiao.length; i++) {
            xiao[i].onmouseover = function () {
                myAnimate(this);
            };
        }

    })();

    function myAnimate(element) {
        clearInterval(element.time)
        var i = 0;
        var current1 = 45;
        var current2 = -45;
        var fina = 45;
        var step = 15;
        //current��step���Ǳ�����ϵ
        element.time = setInterval(function () {
            i++;
            if (i % 2 == 0) {
                current1 -= step;
                fina = current1;
                element.style.transform = "rotate(" + current1 + "deg)";
            } else {
                current2 += step;
                fina = current2;
                element.style.transform = "rotate(" + current2 + "deg)";
            }
            if (fina == 0) {
                clearInterval(element.time);
            }

        }, 150);
    }

};

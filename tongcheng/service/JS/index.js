/**
 * Created by Administrator on 2017/4/4 0004.
 */



    //第一个文本框
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
my$("ipt1").onclick = function (e) {
    getNextElement(my$("ipt1")).className = "tkbox linelist ";
    this.value = "";
    e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }

};
document.onclick = function () {
    if (my$("ipt1").value.length == 0) {
        my$("ipt1").value = "目的地";
        getNextElement(my$("ipt1")).className = "tkbox linelist none";
    }
    if (my$("ipt6").value.length == 0) {
        my$("ipt6").value = "人均预算";
        getNextElement(my$("ipt6")).className = "tkbox checkModel none";
    }

};
var str = "";
for (var i = 0; i < address.length; i++) {
    str += "<div class='item'><a href='javascript:void(0)'>" + address[i] + "</a></div>";
}
my$("linelist").innerHTML = str;
//为里面所有的a标签注册鼠标进入和离开事件
var sendAdress = my$("linelist").getElementsByTagName("a");
var lengths = sendAdress.length;
for (var i = 0; i < lengths; i++) {
    sendAdress[i].onclick = function () {
        var sendAs = this.innerHTML;
        my$("ipt1").value = sendAs;
        getNextElement(my$("ipt1")).className = "tkbox linelist none";
        if (this.value.length == 0) {
            this.value = "目的地";
        }
    };
}



//第二个文本框
my$("ipt2").onfocus = function () {
    this.value = "";
    getPreviousElement(my$("ipt2")).style.color = "";
};
my$("ipt2").onblur = function () {
    var reg = /^\d{1}$/;
    if (reg.test(this.value)) {
        getPreviousElement(my$("ipt2")).style.color = "red";
    }
    if (this.value.length == 0) {
        this.value = "参团人数";
    }
};

//第三个文本框
my$("ipt3").onfocus = function () {
    this.value = "";
    getPreviousElement(my$("ipt3")).innerHTML="";

};
my$("ipt3").onblur = function () {

    if(!/^[\u4e00-\u9fa5]{2,6}$/.test(this.value)){

        getPreviousElement(my$("ipt3")).innerHTML="请输入正确姓名！";
        getPreviousElement(my$("ipt3")).style.color="red";
    }

    if (this.value.length == 0) {
        this.value = "联系人";
        getPreviousElement(my$("ipt3")).innerHTML="";
    }
};

//第五个文本框
my$("ipt5").onfocus = function () {
    this.value = "";
    getPreviousElement(my$("ipt5")).style.color = "";
};
my$("ipt5").onblur = function () {
    var reg = /^\d{11}$/;
    if (reg.test(this.value)) {
        getPreviousElement(my$("ipt5")).style.color = "";
    } else {
        getPreviousElement(my$("ipt5")).style.color = "red";
    }
    if (this.value.length == 0) {
        this.value = "联系人手机";
        getPreviousElement(my$("ipt5")).style.color = "";

    }
};

//第六个文本框
my$("ipt6").onclick = function (e) {
    var ipt6As = getNextElement(my$("ipt6")).children;
    getNextElement(this).className = "tkbox checkModel ";
    this.value = "";
    for (var i = 0; i < ipt6As.length; i++) {
        ipt6As[i].onclick = function () {
            var txt = this.innerHTML;
            my$("ipt6").value = txt;
            getNextElement(my$("ipt6")).className = "tkbox checkModel none";
        };

    }


    //取消冒泡兼容代码
    e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
};

//第四个日期显示
$(function () {


//日历的显示
    $("#ipt4").click(function () {
        $("#container").css({"display": "block"});
        $(".book4").css("zIndex", "10");
        $(this).val("");
        return false;

    });

    $("#container .sc-body .sc-days .sc-item").click(function () {
        var year = $(".sc-select-year").val();
        var month = $(".sc-select-month").val();
        var day = $(this).children(".day").text();
        //文本框获取日期
        $("#ipt4").val(year + "-" + month + "-" + day);

        //隐藏日历表
        if ($("#ipt4").val().length != 0) {
            $("#container").css({"display": "none"});
            $(".book4").css("zIndex", "1");
        }


    });
    $(document).click(function () {
        if($("#ipt4").val().length == 0){
           $("#ipt4").val("出游时间");
            $("#container").css({"display": "none"});
            $(".book4").css("zIndex", "1");
        }

    });







// 点击提交需求显示提交单


$("#submit").click(function () {


        if ($(".book input:eq(0)").val() == "目的地" || $(".book input:eq(1)").val() == "参团人数" || $(".book input:eq(2)").val() == "联系人" || $(".book input:eq(4)").val() == "联系人手机" || $(".book input:eq(5)").val() == "人均预算" || $(".book input:eq(3)").val() == "出游时间") {
            $("#tk2").removeClass("none").addClass("err");
            $("#tk2").css("zIndex", "100");
            return false;
        } else {
            $("#tk1").removeClass("none");
            $("#tk1").css("zIndex", "100");
             return false;
        }




});


//关闭提交单
$(".close").click(function () {
    $("#tk2").addClass("none");
    $("#tk1").addClass("none");
});




});




//旋转木马 top3
var flag = true;
var config = [
    {
        width: 300,
        height: 214,
        top: 88,
        left: 26,
        zIndex: 2
    },//0
    {
        width: 400,
        height: 260,
        top: 60,
        left: 70,
        zIndex: 3
    },//1
    {
        width: 670,
        height: 400,
        top: 10,
        left: 200,
        zIndex: 4
    },//2
    {
        width: 400,
        height: 260,
        top: 60,
        left: 584,
        zIndex: 3
    },//3
    {
        width: 300,
        height: 214,
        top: 88,
        left: 730,
        zIndex: 2
    },//4
    {
        width: 800,
        height: 214,
        top: 88,
        left: 130,
        zIndex: 1,
        display: "none"
    },//5
    {
        width: 800,
        height: 214,
        top: 88,
        left: 130,
        zIndex: 1,
        display: "none"
    },//6
    {
        width: 800,
        height: 214,
        top: 88,
        left: 130,
        zIndex: 1,
        display: "none"
    },//7
    {
        width: 800,
        height: 214,
        top: 88,
        left: 130,
        zIndex: 1,
        display: "none"
    },//8
    {
        width: 800,
        height: 214,
        top: 88,
        left: 130,
        zIndex: 1,
        display: "none"
    },//9
    {
        width: 800,
        height: 214,
        top: 88,
        left: 130,
        zIndex: 1,
        display: "none"
    },//10
    {
        width: 800,
        height: 214,
        top: 88,
        left: 130,
        zIndex: 1,
        display: "none"
    },//11
    {
        width: 800,
        height: 214,
        top: 88,
        left: 130,
        zIndex: 1,
        display: "none"
    }//12


];

var timeId = setInterval(nextClick, 4000);
//获取ul标签
var ulObjs = my$("focus_Box").children[2];
//获取所有的li标签
var list = my$("focus_Box").getElementsByTagName("li");
//散开图片
function assgin() {
    for (var i = 0; i < list.length; i++) {
        animate(list[i], config[i], function () {
            flag = true;
        }, 100)
    }
}

assgin();

//鼠标进入，清除计时器
my$("focus_Box").onmouseover = function () {
    clearInterval(timeId);
};
//鼠标离开，计时器启动
my$("focus_Box").onmouseout = function () {
    timeId = setInterval(nextClick, 2000);
};

//点击右边的按钮
my$("next").onclick = nextClick;
function nextClick() {
    if (flag) {
        flag = false;
        config.push(config.shift());
        assgin();
    }

}

//点击左边按钮
my$("prev").onclick = function () {
    if (flag) {
        flag = false;
        config.unshift(config.pop());
        assgin();
    }

};




//top4 轮播图开始------------------

//获取ul标签
var ulTop4 = my$("mSlider").children[0].children[0];
//获取多有的li标签
var listTop4 = my$("mSlider").children[0].children[0].children;
//获取一个li的宽
var listWidth = parseInt(listTop4[1].offsetWidth);

for (var i = 0; i < listTop4.length; i++) {
    listTop4[i].onmouseover = function () {
        animate(this.children[1], {"top": 113}, 1000);
        animate(this.children[2], {"top": -7});
    };
    listTop4[i].onmouseout = function () {
        animate(this.children[1], {"top": 380});
        animate(this.children[2], {"top": 60});

    };
}

//计时器
var timeTop4 = setInterval(btnNextClick, 2000);

//鼠标进入离开启动清除计时器
my$("mSlider").onmouseover = function () {
    clearInterval(timeTop4);
};
my$("mSlider").onmouseout = function () {
    timeTop4 = setInterval(btnNextClick, 2000)
};


//右侧按钮点击事件
var pic = 0;
my$("btn-next").onclick = btnNextClick;
function btnNextClick() {
    if (pic == listTop4.length / 2) {
        pic = 0;
        ulTop4.style.left = -(pic * listWidth) + "px";
    }
    pic++;
    animate(ulTop4, {"left": -(pic * listWidth)});

};
//左侧按钮点击事件
my$("btn-prev").onclick = function () {
    if (pic == 0) {
        pic = listTop4.length / 2;
        ulTop4.style.left = -(pic * listWidth) + "px";
    }
    pic--;
    animate(ulTop4, {"left": -(pic * listWidth)})

};


//top4结束------------------



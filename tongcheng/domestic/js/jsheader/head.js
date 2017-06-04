/**
 * Created by Administrator on 2017/3/30.
 */

window.onload=function (){

//我的同程
//获取id为mytc的li，注册事件
my$("mytcli").onmouseover = function () {
    console.log("1");
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

//模拟百度搜索框
    var datas=[
        {"三亚": ["三亚一地", "娱支洲岛", "亚龙湾天堂公园", "三亚森林公园"]},
        {"北京": ["故宫","北京颐和园","八达岭长城","北京玉渊潭公园","北京后海","海底世界","北京欢乐谷"]}
    ];
    my$("intxt").onkeyup=function(){
        //判断存在div则清除
        if(my$("dv")){
            my$("dv").parent.removeChild(my$("dv"));
        }
        var temp=[];
        var txt=this.value;
        for(var i=0;i<datas.length;i++){
            var dt=datas[i];
            if(dt[txt]){
                temp=dt[txt];
            }
        }
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












};
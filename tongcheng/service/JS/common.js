/**
 * Created by Administrator on 2017/3/24.
 */

/**
 * 鏍煎紡鍖栨棩鏈�
 * @param dt 鏃ユ湡瀵硅薄
 * @returns {string} 杩斿洖鍊兼槸鏍煎紡鍖栫殑瀛楃涓叉棩鏈�
 */
function getDates(dt) {
    var str = "";//瀛樺偍鏃堕棿鐨勫瓧绗︿覆
    //鑾峰彇骞�
    var year = dt.getFullYear();
    //鑾峰彇鏈�
    var month = dt.getMonth() + 1;
    //鑾峰彇鏃�
    var day = dt.getDate();
    //鑾峰彇灏忔椂
    var hour = dt.getHours();
    //鑾峰彇鍒嗛挓
    var min = dt.getMinutes();
    //鑾峰彇绉�
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "骞�" + month + "鏈�" + day + "鏃� " + hour + ":" + min + ":" + sec;
    return str;
}
/**
 * 鑾峰彇鎸囧畾鏍囩瀵硅薄
 * @param id 鏍囩鐨刬d灞炴�у��
 * @returns {Element}鏍规嵁id灞炴�у�艰繑鍥炴寚瀹氭爣绛惧璞�
 */
function my$(id) {
    return document.getElementById(id);
}
/**
 * 璁剧疆鍏冪礌鐨勬枃鏈唴瀹�
 * @param element 浠绘剰鍏冪礌
 * @param text 浠绘剰鏂囨湰鍐呭
 */
function setInnerText(element, text) {
    if (typeof(element.textContent) == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}
/**
 * 鑾峰彇鍏冪礌鐨勬枃鏈唴瀹�
 * @param element 浠绘剰鍏冪礌
 * @returns {*} 浠绘剰鍏冪礌涓殑鏂囨湰鍐呭
 */
function getInnerText(element) {
    if (typeof(element.textContent) == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 鑾峰彇鐖剁骇鍏冪礌涓殑绗竴涓瓙鍏冪礌
 * @param element 鐖剁骇鍏冪礌
 * @returns {*} 鐖剁骇鍏冪礌涓殑瀛愮骇鍏冪礌
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 鑾峰彇鐖剁骇鍏冪礌涓殑鏈�鍚庝竴涓瓙鍏冪礌
 * @param element 鐖剁骇鍏冪礌
 * @returns {*} 鏈�鍚庝竴涓瓙鍏冪礌
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * 鑾峰彇鏌愪釜鍏冪礌鐨勫墠涓�涓厔寮熷厓绱�
 * @param element 鏌愪釜鍏冪礌
 * @returns {*} 鍓嶄竴涓厔寮熷厓绱�
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * 鑾峰彇鏌愪釜鍏冪礌鐨勫悗涓�涓厔寮熷厓绱�
 * @param element 鏌愪釜鍏冪礌
 * @returns {*} 鍚庝竴涓厔寮熷厓绱�
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 鑾峰彇鏌愪釜鍏冪礌鐨勬墍鏈夊厔寮熷厓绱�
 * @param element 鏌愪釜鍏冪礌
 * @returns {Array} 鍏勫紵鍏冪礌
 */
function getSiblings(element) {
    if (!element)return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}
/**
 * 杩斿洖褰撳墠娴忚鍣ㄦ槸浠�涔堢被鍨嬬殑娴忚鍣�
 */
function userBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
        if(/msie/i.test(browserName) && !/opera/.test(browserName)){
            console.log("IE");
        }else if(/firefox/i.test(browserName)){
            console.log("Firefox");
        }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
            console.log("Chrome");
        }else if(/opera/i.test(browserName)){
            console.log("Opera");
        }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
            console.log("Safari");
    }else{
        console.log("涓嶇煡閬撲粈涔堥!");
    }
}

function getStyle(element,attr) {
    return element.currentStyle?element.currentStyle[attr]:window.getComputedStyle(element,null)[attr];
}
//缂撳姩鍔ㄧ敾鍑芥暟鐨勫皝瑁�
function animate(element, json,fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag=true;
        for (var attr in json) {
            if(attr=="opacity"){
                var current = getStyle(element, attr)*100;
                var target=json[attr]*100;
                //姣忔绉诲姩鐨勬鏁�
                var step = (target - current) / 50;
                //姣忔绉诲姩姝ユ暟閮芥槸鏁存暟(姣旇緝澶х殑鏁板瓧)
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;//绉诲姩鍚庣殑褰撳墠鐨勫儚绱�
                element.style[attr] = current/100;
            }else if(attr=="zIndex"){
                element.style[attr]=json[attr];
            }else{
                var current = parseInt(getStyle(element, attr));
                var target=json[attr];
                //姣忔绉诲姩鐨勬鏁�
                var step = (target - current) / 10;
                //姣忔绉诲姩姝ユ暟閮芥槸鏁存暟(姣旇緝澶х殑鏁板瓧)
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;//绉诲姩鍚庣殑褰撳墠鐨勫儚绱�
                element.style[attr] = current + "px";
            }
            if (current != target) {//鍒拌揪鐩爣鍚庡仠姝㈣鏃跺櫒
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.timeId);//娓呯悊璁℃椂鍣�
            if(fn){
                fn();
            }
        }
    }, 20);
}




//鍏充簬浜嬩欢鍙傛暟瀵硅薄鐨勫伐鍏风殑浠ｇ爜
var evtTools={
    //浜嬩欢鍙傛暟
    evt:function (e) {
        return window.event?window.event:e;
    },
    //椤甸潰鍚戝乏鍗锋洸鍑哄幓鐨勮窛绂�
    left:function () {
        return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    //椤甸潰鍚戜笂鍗锋洸鍑哄幓鐨勮窛绂�
    top:function () {
        return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    },
    //浜嬩欢鍙傛暟瀵硅薄涓殑灞炴�у皝瑁�---鍙鍖哄煙鐨勬í鍧愭爣
    clientX:function (e) {
        return this.evt(e).clientX;
    },
    //浜嬩欢鍙傛暟瀵硅薄涓殑灞炴�у皝瑁�---鍙鍖哄煙鐨勭旱鍧愭爣
    clientY:function (e) {
        return this.evt(e).clientY;
    },
    pageX:function (e) {
        return this.evt(e).pageX?this.evt(e).pageX:this.left()+this.clientX(e);
    },
    pageY:function (e) {
        return this.evt(e).pageY?this.evt(e).pageY:this.top()+this.clientY(e);
    }
};

//褰撴祻瑙堝櫒鐨勫搴﹀彂鐢熷彉鍖�,灏辫幏鍙栨祻瑙堝櫒(椤甸潰鍙鍖哄煙鐨勫搴�)
function getClient() {
    return{
        width:window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth||0,
        height:window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight||0
    }
}
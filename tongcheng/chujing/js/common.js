/**
 * Created by odin on 2017/3/24.
 */
function my$(id) {
    return document.getElementById(id)
}

function getDates(dt) {
    var str = "";
    var year = dt.getFullYear();
    var month = dt.getMonth();
    var day = dt.getDate();
    var hour = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "年" + month + "月" + day + "日" + hour + ":" + min + ":" + sec;
    return str;
}

function setInnerText(element, text) {
    if (typeof (element.textContent) == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}

function getInnerText(element, text) {
    if (typeof (element.textContent) == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

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

function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = element.previousSibling;
        }
        return node;
    }
}

function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = element.previousSibling;
        }
        return node;
    }
}

function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = element.nextSibling;
        }
        return node;
    }
}

function getSibLings(element) {
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

function touMing(element) {
    var a = 10;
    var timeId = setInterval(function () {
        a--;
        if (a < 0) {
            clearInterval(timeId);
            return;
        }
        element.style.opacity = a / 10;
    }, 80)
}

/*function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            if (attr == "opacity") {
                //获取当前元素的位置
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                //每次移动的步数
                var step = (target - current) / 10;
                //每次移动的步数都是整数
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //移动后的像素
                current += step;
                element.style[attr] = current / 100;
            } else if (current == "zIndex") {
                element.style[attr] = json[attr];
            } else {
                //获取当前元素的位置
                var current = parseInt(getStyle(element, attr))||0;
                var target = json[attr];
                //每次移动的步数
                var step = (target - current) / 10;
                //每次移动的步数都是整数
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //移动后的像素
                current += step;
                element.style[attr] = current + "px";

            }
            if (current != target) {//到达目标位置后清除计时器
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeId);
            if (fn) {
                fn();
            }
        }
    }, 20)

}*/

function getStyle(element, attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}

function animate(element,json,fn){
    clearInterval(element.timeId);
    element.timeId=setInterval(function(){
        var flag=true;
        for(var attr in json){
            if(attr=="opacity"){
                var current=getStyle(element,attr)*100;
                var target=json[attr]*100;
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){
                element.style[attr]=json[attr];
            }else{
                var current=parseInt(getStyle(element,attr));
                var target=json[attr];
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.timeId);
            if(fn){
                fn();
            }
        }
    },30)
}

var evtTools={
    evt:function(e){
        return window.event?window.event:e;
    },
    left:function(){
        return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    top:function(){
        return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    },
    clientX:function(e){
        return this.evt(e).clientX;
    },
    clientY:function(e){
        return this.evt(e).clientY;
    },
    pageX:function(e){
        return this.evt(e).pageX?this.evt(e).pageX:this.clientX(e)+this.left();
    },
    pageY:function(e){
        return this.evt(e).pageY?this.evt(e).pageY:this.clientY(e)+this.top();
    }
}

//封装代码,为任意元素注册任意的事件
function addEvent(element,type,fn) {
    var oldEvent=element["on"+type];
    if(typeof oldEvent!="function"){
        element["on"+type]=fn;//没有事件则注册事件
    }else{
        //注册了
        element["on"+type]=function () {
            oldEvent();
            fn();
            //当这个事件触发的时候,把之前注册事件的所有的事件处理函数，拿出来直接调用
        };
    }
}

//为元素绑定多个事件
function addEventListener(element,type,fn) {
    //判断浏览器是否支持这个方法
    if(typeof (element.addEventListener)!='undefined'){
        element.addEventListener(type,fn,false);
    }else if(typeof(element.attachEvent)!='undefined'){
        element.attachEvent("on"+type,fn);
    }else{
        addEvent(element,type,fn)
    }
}

//为元素解绑多个元素
/**
 *
 * @param element---对象
 * @param type---事件名
 * @param fn---函数
 */
function removeEventListener(element,type,fn){
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}

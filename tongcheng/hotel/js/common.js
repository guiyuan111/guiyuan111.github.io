/**
 * Created by Administrator on 2017/4/1.
 */
function my$(id){
    return document.getElementById(id);
}
function getStyle(element,attr) {
    return element.currentStyle?element.currentStyle[attr]:window.getComputedStyle(element,null)[attr];
}
//缓动动画函数的封装
function animate(element, json,fn) {
    if(element.timeId){
        clearInterval(element.timeId);
    }
    element.timeId = setInterval(function () {
        var flag=true;
        for (var attr in json) {
            if(attr=="opacity"){
                var current = getStyle(element, attr)*100;
                var target=json[attr]*100;
                //每次移动的步数
                var step = (target - current) / 10;
                //每次移动步数都是整数(比较大的数字)
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;//移动后的当前的像素
                element.style[attr] = current/100;
            }else if(attr=="zIndex"){
                element.style[attr]=json[attr];
            }else if(attr=="display"){
                element.style[attr]=json[attr];
            }else{
                var current = parseInt(getStyle(element, attr));
                var target=json[attr];
                //每次移动的步数
                var step = (target - current) / 10;
                //每次移动步数都是整数(比较大的数字)
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;//移动后的当前的像素
                element.style[attr] = current + "px";
            }
            if (current != target) {//到达目标后停止计时器
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.timeId);//清理计时器
            if(fn){
                fn();
            }
        }
    }, 20);
}

/**
 * Created by Administrator on 2017/4/1.
 */
function my$(id){
    return document.getElementById(id);
}
function getStyle(element,attr) {
    return element.currentStyle?element.currentStyle[attr]:window.getComputedStyle(element,null)[attr];
}
//�������������ķ�װ
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
                //ÿ���ƶ��Ĳ���
                var step = (target - current) / 10;
                //ÿ���ƶ�������������(�Ƚϴ������)
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;//�ƶ���ĵ�ǰ������
                element.style[attr] = current/100;
            }else if(attr=="zIndex"){
                element.style[attr]=json[attr];
            }else if(attr=="display"){
                element.style[attr]=json[attr];
            }else{
                var current = parseInt(getStyle(element, attr));
                var target=json[attr];
                //ÿ���ƶ��Ĳ���
                var step = (target - current) / 10;
                //ÿ���ƶ�������������(�Ƚϴ������)
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;//�ƶ���ĵ�ǰ������
                element.style[attr] = current + "px";
            }
            if (current != target) {//����Ŀ���ֹͣ��ʱ��
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.timeId);//�����ʱ��
            if(fn){
                fn();
            }
        }
    }, 20);
}

/**
 * Created by lenovo on 2017/4/6.
 */
//��������ҳ�������������onmouseover�¼�
    $(function(){


//�ҵ�����div,ul,���������a
//var list=my$("a_dv").children[0].children;

 //for(var i=0;i<list.length;i++){
 //    var aObj=list[i].children[0];
 //    list[i].onmouseover=function(){
 //        for(var i=0;i<list.length;i++){
 //            list[i].children[0].style.color="";
 //            list[i].children[0].style.borderBottom="";
 //        }
 //        this.children[0].style.color="#50B400";
 //        this.children[0].style.borderBottom="2px solid #50B400";
 //
 //    }
 //}
//����б�
//������ȥ���֣��뿪����
my$("l_dv").onmouseover=function(){
  my$("r_dv").style.display="block";
};
my$("l_dv").onmouseout=function(){
    my$("r_dv").style.display="none";
};
//��2��
my$("ll_dv").onmouseover=function(){
    my$("rr_dv").style.display="block";
};
my$("ll_dv").onmouseout=function(){
    my$("rr_dv").style.display="none";
};
//��3��
my$("lll_dv").onmouseover=function(){
    my$("rrr_dv").style.display="block";
};
my$("lll_dv").onmouseout=function(){
    my$("rrr_dv").style.display="none";
};
//�ֲ�ͼ
        var temId=null;
        $("#t_dv>.lunboshu>ul>li:eq(0)").css("backgroundColor","red")
        var ulObj=$("#t_dv>.lunbo");
        var pic=0;
        $("#t_dv>.lunboshu>ul>li").mouseenter(function () {
            pic=$(this).index();
            $(this).css("backgroundColor","red").siblings("li").css("backgroundColor","");
            ulObj.children("li").fadeOut(300);
            ulObj.children("li:eq("+pic+")").fadeIn(300);
        });
             temId=setInterval(tem,1000);
        function tem(){
            pic++;
            if(pic==$(".lunbo>li").length-1){
                pic=0;
            }
            ulObj.children("li").fadeOut(300);
            ulObj.children("li:eq("+pic+")").fadeIn(300);
            $("#t_dv>.lunboshu>ul>li:eq("+pic+")").css("backgroundColor","red").siblings("li").css("backgroundColor","");
        }
        $("#t_dv").mouseenter(function(){
           clearInterval(temId);
        }).mouseleave(function(){
            temId=setInterval(tem,1000);
        });




















//�ַ���
//��ȡ����li��ǩ
var lists=my$("box").children[0].children;
//Ӧ�ñ���ͼƬ
for(var i=0;i<lists.length;i++){
    lists[i].style.backgroundImage="url(images/image/"+(i+1)+".webp)";
    lists[i].onmouseover=mouseoverHandle;//������
    lists[i].onmouseout=mouseoutHandle;//����뿪
}
function mouseoverHandle(){
    for(var j=0;j<lists.length;j++){//����ͼƬ�Ŀ��
        animate(lists[j],{"width":139});
        //Ĭ�Ͽ��
    }
    animate(this,{"width":330});
    //���Ժ�ͼƬ�Ŀ��

}
function mouseoutHandle(){
    for(var j=0;j<lists.length;j++){
        animate(lists[j],{"width":139})
    }
    animate(this,{"width":330});
}
//���е���л�
  var hangzhou=my$("hangZhou").children;

//��ȡ�����
var hezi=my$("daHeZi").children;
//��ȡ��������ĵ�һ����Ԫ��
hezi[0].style.display="block";
hangzhou[0].style.backgroundColor="#8C96A2";
for(var i=0;i<hangzhou.length;i++){
    hangzhou[i].setAttribute("index",i);
    hangzhou[i].onclick=function(){
      for(var j=0;j<hezi.length;j++){
          hezi[j].style.display="none";
          hangzhou[j].style.backgroundColor="";
          //hangzhou[j].style.width="50px";
          //hangzhou[j].style.height="25px";
          hangzhou[j].style.color="";
    }
        this.style.color="white";
        this.style.backgroundColor="#8C96A2";
        var index=this.getAttribute("index");
        hezi[index].style.display="block";
        console.log(index);
    };
}

    });











//���Ҷ�λ
var rSilder=my$("right-silder");
var listRsilder=rSilder.children[0].children;
var listRslider2=rSilder.children[1].children;
function Lbox(list){
    for(var i=0;i<list.length;i++){
        list[i].onmouseover=function(){
            this.style.backgroundColor="#f60";
            this.children[1].style.display="block";
            animate(this.children[1],{"right":40,"opacity":1})

        };
        list[i].onmouseout=function(){
            this.style.backgroundColor="";
            this.children[1].style.display="none";
            animate(this.children[1],{"right":65,"opacity":0})

        }
    }
}
Lbox(listRsilder);
Lbox(listRslider2);
window.onscroll=function(){
    var tem=document.body.scrollTop;
    if(tem>0){
        my$("top").style.visibility="visible";
    }else{
        my$("top").style.visibility="hidden";
    }
};

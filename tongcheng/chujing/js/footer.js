/**
 * Created by Administrator on 2017/4/5 0005.
 */
$(function(){
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
});
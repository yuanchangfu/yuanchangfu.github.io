/**
 * Created by kk on 2016/12/11.
 */
(function(window,document){
    window.addEventListener('resize',change,false);
    function change(){
        document.documentElement.style.fontSize=document.documentElement.clientWidth*20/320+'px';
    }
    change();
})(window,document);
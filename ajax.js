/**
 * Created by kk on 2017/1/6.
 */
function ajax(json){
    if(!json.url){
        alert('shab')
        return;
    }
    json.type=json.type||'get';
    json.data=json.data||{};
    josn.time=json.time||3000;
    var timer=null;
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=ActiveXObject('Microsoft.XMLHTTP');
    }
    switch (json.type.toLowerCase()){
        case 'get':
            oAjax.open('GET',json.url+'?'+json2Str(json.data),true);
            oAjax.send();
            break;
        case 'post':
            oAjax.open('POST',josn.url,true);
            oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            oAjax.send(json2Str(json.data));
            break;
    }

    oAjax.onreadystatechange=function(){
        if(oAjax.readyState=4){
            if(oAjax.status==200&oAjax.status==300&&oAjax.status==304){
                json.success&&json.success(oAjax.responseText);
            }else{
                json.error&&json.error(oAjax.status)
            }
            clearTimeout(timer);
        }
    }
    timer=setTimeout(function(){
        alert('请求超时！')
        oAjax.onreadystatechange=null
    },josn.time);
}
function json2Str(json){
    json.t=Math.random();
    var arr=[];
    for(var na me in json){
        arr.push(name+'='+json[name])
    }
    return arr.json('&');
}
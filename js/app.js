function oauth_1()
{
    //var url = "https://github.com/login/oauth/authorize?client_id=ca24fda06e84714a41f4";
    //var xmlHttp = new XMLHttpRequest();
   // xmlHttp.open( "GET", url, true ); // false for synchronous request
    //xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    //xmlHttp.setRequestHeader("ca24fda06e84714a41f4","client_id");
    //xmlHttp.setRequestHeader("cache-control", "no-cache");
   // xmlHttp.send();
   // return xmlHttp.responseText;
    var url = "https://github.com/login/oauth/authorize?client_id=ca24fda06e84714a41f4";
    window.location.href = url;
    
}
function getCode(){
    var url = window.location.href;
    var code = url.searchParams.get("code");
    alert(code);
 }
function oauth_1()
{
    var url = "https://github.com/login/oauth/authorize?client_id=ca24fda06e84714a41f4";
    window.location.href = url;
}
var code;
function getCode(){
    code = window.location.href.match(/\?code=(.*)/)[1];
    alert(code);
    var response=getAccessToken();
    alert(response);
 }
 function getAccessToken()
{
    var params = "client_id=ca24fda06e84714a41f4&client_secret=ba97a335e04b5e56ac39657dd9fa91f07c3ec1b9&code="+ code;
    var url = "https://github.com/login/oauth/access_token?"+ params;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url, true ); // false for synchronous request
    xmlHttp.setRequestHeader("cache-control", "no-cache");
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            console.log(myObj.access_token);
            document.getElementById("demo").innerHTML = myObj.access_token;
            alert(myObj.access_token);
        }
    };
    //xmlHttp.send(params);
    window.location.href = url;
    // return xmlHttp.responseText;
    
    
}
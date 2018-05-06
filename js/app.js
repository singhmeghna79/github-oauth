function oauth_1()
{
    var url = "https://github.com/login/oauth/authorize";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, true ); // false for synchronous request
    xmlHttp.setRequestHeader("ca24fda06e84714a41f4","client_id");
    xmlHttp.setRequestHeader("cache-control", "no-cache");
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
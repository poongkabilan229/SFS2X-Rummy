// var sample=include("sample1Extension.js")
var SFS= Java.type("java.lang.Object");
// var SFSZone =Java.type('com.smartfoxserver.v2.entities.SFSZone');
// var SFSUser = new SFSUSER();

function init(){
    trace("Sample Extension enabled in",new Date());
    addRequestHandler("OnJoiningRoom",onJoiningRoom);
    addRequestHandler("BetMoneyUpdate");
    // var ID=SFSUser.getId();
    // var zones=   SFSUser.isActive();
    var check = getApi().getUserByName(SFSZone(java.lang.String, "jsZone") , "Kabilan");
    // var check = getApi().getUserById(3)
    trace('User--3',check )
    // trace("zones---",zones)
    // trace("sample1--",sample)
}
function onJoiningRoom(params,sender)
{
    trace("params of room joining",params);
    var reqParams = { userId: 25,gameId:"",cardValues:[] };
    var httpReq = getApi().newHttpGetRequest("http://localhost:80/rummygame/index.php/api/user/joinGameRoom", reqParams, httpCallback);
    httpReq.execute();
} 

function httpCallback(result)
{ 
    if (result.code )  
        trace("HTTP request failed: " + result.error);
    else
    {
        trace("HTTP request successful: " + result.statusCode);
        trace("success message---",result.html)
        trace("third param--",result.error )
        // trace(result.html);
    }
}
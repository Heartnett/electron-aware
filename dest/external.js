var Server=require("./server"),server=new Server;module.exports={closed:function(e){server.on("electron-closed",e)},on:function(e,r){server.on(e,r)},refresh:function(){server.log("refreshing page..."),server.send("refresh-page")},reload:function(){server.log("reloading electron..."),server.send("reload-app")},start:function(){server.start()}};
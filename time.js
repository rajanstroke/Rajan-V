var eventdate = new Date("may 23, 2021 10:00:00").getTime();

var x=setInterval(function(){

    var todaydate= new Date().getTime();

    var difference= eventdate-todaydate;

    var days=Math.floor(difference/(1000*60*60*24));

    var hours=Math.floor(difference%(1000*60*60*24)/(1000*60*60));

    var minutes=Math.floor(difference%(1000*60*60)/(1000*60));

    var seconds=Math.floor(difference%(1000*60)/1000);

    document.getElementById("timepar").innerHTML=days +"&emsp;Days&emsp; "+hours +"&emsp;Hours&emsp; "+minutes +"&emsp;Minutes&emsp; "+seconds +"&emsp;Seconds&emsp; "},1000);
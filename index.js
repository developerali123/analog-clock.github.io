setInterval(setclock,1000);
    var hour=document.getElementById("hour");
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    var time=document.getElementById("time");
    var time_date=document.getElementById("date");
    function setclock(){
        var date=new Date();
        var hours=date.getHours();
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var session="AM";
        if(hours==0){
            hours=12;
        }
        if(hours>=12){
            hours=hours-12;
            session="PM";
        }
        if(hours<10){
            hours="0"+hours;
        }
        if(minutes<10){
            minutes="0"+minutes;
        }
        if(seconds<10){
            seconds="0"+seconds;
        }
        time.innerHTML=hours+" : "+minutes+" : "+seconds+" "+session;
        time_date.innerHTML=date.toDateString();
        var hour_ratio=30*date.getHours()+date.getMinutes()/2;
        var min_ratio=6*date.getMinutes();
        var sec_ratio=6*date.getSeconds();
        hour.style.transform=`rotate(${hour_ratio}deg)`;
        min.style.transform=`rotate(${min_ratio}deg)`;
        sec.style.transform=`rotate(${sec_ratio}deg)`;
    }
    setclock();
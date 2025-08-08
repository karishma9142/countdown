const endtime=new Date("9 Aug 2025 10:00:00").getTime();
const starttime=new Date().getTime();
let x= setInterval(function UpdateTime(){
    const now = new Date().getTime();

    const DistTraveled=now-starttime;
    const DistPending=endtime-now;

    //calculate days hours mins secs
    // 1 day=24 * 60 * 60 * 1000 ms
    // 1 hours= 60 * 60 * 1000 ms
    // 1 min=60 * 1000 ms
    // 1 sec=100 ms
    const days=Math.floor( DistPending/(24 * 60 * 60 * 1000));
    const hrs=Math.floor( DistPending % (24 * 60 * 60 * 1000)/(60 * 60 * 1000));
    const mins=Math.floor( DistPending % (60 * 60 * 1000)/(60 * 1000));
    const sec=Math.floor( DistPending % (60 * 1000)/(1000));

    // Populate in UI
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("mins").innerHTML=mins;
    document.getElementById("secs").innerHTML=sec;

    const totaldist=endtime-starttime;
    const prcentDist=(DistTraveled/totaldist)*100;
    
    document.getElementById("Progress-bar").style.width=prcentDist + "%";

    if(DistPending<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPAIRED";
        document.getElementById("Progress-bar").style.width="100%";

    }

},1000);
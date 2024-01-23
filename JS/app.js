const enddate = "24 Januray 2024  1:04 AM";
document.getElementById('end-date').innerText = enddate;
const  inputs = document.querySelectorAll('input');
const clock = () => {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if(diff<0)return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600) % 24 );
    inputs[2].value = Math.floor(diff /60%60);
    inputs[3].value = Math.floor(diff%60);
    //convert into days


}

clock();
setInterval(
    () =>{
        clock()
    },
    1000
);
// setInterval(clock,1000);
/*
1 day = 24 hours 
24 hours = 60 min
60 min = 3600 sec
*/
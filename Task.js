var startBtn = document.getElementById("start");

var resetBtn = document.getElementById("reset");

var stopBtn = document.getElementById("stop");

var seconds = document.getElementById("seconds");


var minutes = document.getElementById("minutes");


var hours = document.getElementById("hours");




//Interval Every Second

var Timer;

startBtn.addEventListener('click',function(){
    Timer = setInterval(()=>{
        
        for(var i=0;i<1;i++){
            seconds.innerText++;
            if(seconds.innerText<=9){
                seconds.innerText = "0" + seconds.innerText;
            }
            
            if(seconds.innerText>60){
                for(var m=0;m<1;m++){
                    minutes.innerText++;
                    if(minutes.innerText<=9){
                        minutes.innerText = "0" + minutes.innerText;
                    }
                    
                    
                    if(minutes.innerText>60){
                        for(var h=0;h<1;h++){
                            hours.innerText++;
                            if(hours.innerText<=9){
                                hours.innerText = "0" + hours.innerText
                            }
                }
                minutes.innerText = 0;
                
            }
            seconds.innerText = 0;
        }
    }
    }
    
},10)
})


stopBtn.addEventListener('click',function(){
    stop();
});

resetBtn.addEventListener('click',function(){
    reset();
});




function stop(){
    clearInterval(Timer);
}


function reset(){
    clearInterval(Timer);
    seconds.innerText = '00';
    minutes.innerText = '00';
    hours.innerText = '00';
}

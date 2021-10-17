window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var sum1 = 0;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonsum = document.getElementById('sum');
  var buttonStop = document.getElementById('button-stop');
  
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }

  buttonsum.onclick = function (){
    let num1 = Number(document.getElementsByName("num1")[0].value);
  let num2 = Number(document.getElementsByName("num2")[0].value);
    calcSum(num1, num2);
     
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }



  function calcSum(num1, num2) 
  {
    window.alert((num1) + (num2));
    return (num1 + num2);
  }


  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}

module.exports = calcSum

function writer() {
  var total = 0;
  var marker1 = document.optica.q1.value;
  var marker2 = document.optica.b1.value;
  var marker3 = document.optica.c1.value;
  var marker4 = document.optica.d1.value;
  var marker5 = document.optica.e1.value;
  
  var hinga = document.getElementById('results');
  
  if (marker1=='quire'){total+=20};
  if (marker2=='bicep'){total+=20};
  if (marker3=='tilda'){total+=20};
  if (marker4=='bosi'){total+=20};
  if (marker5=='kick'){total+=20};
  
  document.write ("Your score is " + total) ; {
  
  }
  
  signed.style.display='none'; 
  
  if (total>80) {
  hinga.textContent= "You have passed the Quiz";
  
  }
  else if ((total)=>50) {
  hinga.textContent= "Your perfomance is average";
  }
  
  else if (total<50) {
  hinga.textContent= "Kindly try Again";
  }
 
}
  



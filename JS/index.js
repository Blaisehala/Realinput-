
function writer() {
  var total = 0;
  var marker1 = document.optica.q1.value;
  var marker2 = document.optica.b1.value;
  var marker3 = document.optica.c1.value;
  var marker4 = document.optica.d1.value;
  var marker5 = document.optica.e1.value;
  
  var hinga = document.getElementById('results');
  
  if (marker1=='quire'){total+=20};
  if (marker2=='tricep'){total+=20};
  if (marker3=='write'){total+=20};
  if (marker4=='how'){total+=20};
  if (marker5=='kick'){total+=20};
  
  document.write(total); {
  
  }
  
  lap.style.display='none'; // div shouldnt be disayed 
  
  if (total=>80) {
  hinga.textContent= "passed";
  
  }
  else if (total=>50) {
  hinga.textContent= "average";
  }
  
  else if (total<50) {
  hinga.textContent= "Try Again";
  }
  }
  



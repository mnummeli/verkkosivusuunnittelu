document
.getElementsByTagName('button')[0]
.addEventListener("click", function(event) {
  var numerot=document.getElementById("numerot");
  numerot.innerHTML="";
  for(var i=0;i<10;i++) {
    var p=document.createElement('p');
    var t=document.createTextNode(i);
    p.appendChild(t);
    numerot.appendChild(p);
  }
});

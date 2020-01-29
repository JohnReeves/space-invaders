var attackers = $("#attackers");
var count = 0;
var attackersTrans = {dX: 1, dY: 0};

function moveRow(){
  count++;
  if (count%10 == 0) {
    attackersTrans.dY += 10;
    attackersTrans.dX -= 50;
  }
  else 
    attackersTrans.dX += 5;

  setTransform(attackers, attackersTrans);
}

function setTransform (svg, svgTran) {
    var svgTranString = 
    ("translatex("+svgTran.dX+"px) "+
     "translatey("+svgTran.dY+ "px)");

    svg.attr("style","transform: "+svgTranString);
}

setInterval(moveRow,500);
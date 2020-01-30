var attackers = $("#attackers");
var count = 0;
var attackersTrans = {dX: 1, dY: 0};
var laserfire = $("#laserfire");
var laserfireTrans = {dX: 0, dY: 1};

function moveAttackers(){
  count++;
  if (count%10 == 0) {
    attackersTrans.dY += 10;
    attackersTrans.dX -= 50;
  }
  else 
    attackersTrans.dX += 5;

  setTransform(attackers, attackersTrans);
}

function movelaserfire(){
  (count%30 == 0) ? 
    laserfireTrans.dY = 0 :
    laserfireTrans.dY -= 10;
  setTransform(laserfire, laserfireTrans);
}

function setTransform (svg, svgTran) {
    var svgTranString = 
    ("translatex("+svgTran.dX+"px) "+
     "translatey("+svgTran.dY+"px)");

    svg.attr("style","transform: "+svgTranString);
}

setInterval(moveAttackers,500);
setInterval(movelaserfire,200);
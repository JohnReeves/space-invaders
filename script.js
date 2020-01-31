var invaders = $("#invaders");

var attackers = $("#attackers");
var attackersTrans = {dX: 1, dY: 0};
var laserfire = $("#laserfire");
var laserfireTrans = {dX: 0, dY: 1};
var defender = $("#defender");
var defenderTrans = {dX: 1, dY: 0};

var count = 0;

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

function moveLaserfire(){
  (count%30 == 0) ? 
    laserfireTrans.dX = 0 :
    laserfireTrans.dY -= 10;
  setTransform(laserfire, laserfireTrans);
}

function moveDefender(){
  (count%30 == 0) ? 
    defenderTrans.dX -= 10 :
    defenderTrans.dY = 0;
  setTransform(defender, defenderTrans);
}

$('#invaders').hover(function(e) {
    //if(e.keyCode==13 || e.which){
        // Enter pressed... do anything here...
        console.log("keypressed ...");
        moveDefender();
   // }
});

function isAttackerHit(){

}

function setTransform (svg, svgTran) {
    var svgTranString = 
    ("translatex("+svgTran.dX+"px) "+
     "translatey("+svgTran.dY+"px)");

    svg.attr("style","transform: "+svgTranString);
}

setInterval(moveAttackers,500);
setInterval(moveLaserfire,200);
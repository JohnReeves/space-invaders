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
  (count%20 == 0) ? 
    laserfireTrans.dY = 0 :
    laserfireTrans.dY -= 10;

  setTransform(laserfire, laserfireTrans);
  checkIfLaserfireHitInvader(laserfire, laserfireTrans);
}

function moveDefender(X){
    defenderTrans.dX -= X ;
  setTransform(defender, defenderTrans);
}

$('#invaders').hover(function(e) {
    //if(e.keyCode==13 || e.which){
        // Enter pressed... do anything here...
        console.log("keypressed ...");
        moveDefender(-10);
   // }
});

$('#defender').hover(function(e) {
    //if(e.keyCode==13 || e.which){
        // Enter pressed... do anything here...
        console.log("keypressed ...");
        moveDefender(+10);
   // }
});

function checkIfLaserfireHitInvader(laserfire, laserfireTrans){
  // height down the screen
  // needs to adjust height with transform
  //
  
  for (i=0; i<11; i++){
    var centreY = $("#attacker"+i).attr("cy");
    var centreX = $("#attacker"+i).attr("cx");
    var radius = $("#attacker"+i).attr("r");

    var minY = parseInt(centreY)-parseInt(radius);
    var maxY = parseInt(centreY)+parseInt(radius);
    var minX = parseInt(centreX)-parseInt(radius);
    var maxX = parseInt(centreX)-parseInt(radius);

    var laserY = parseInt(laserfire.attr("y1"))+parseInt(laserfireTrans.dY);
    var laserX = parseInt(laserfire.attr("x1"));
    console.log("attacker"+i+" laserY: "+laserY+", centreY: "+centreY);
    if ((laserY > minY && laserY < maxY) &&
       (laserX > minX && laserX < maxX)){
        $("#attacker"+i).attr("fill","#263238");
    }
  }
}

function setTransform (svg, svgTran) {
    var svgTranString = 
    ("translatex("+svgTran.dX+"px) "+
     "translatey("+svgTran.dY+"px)");

    svg.attr("style","transform: "+svgTranString);
}

//moveAttackers();
//moveLaserfire();
setInterval(moveAttackers,500);
setInterval(moveLaserfire,200);
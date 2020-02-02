var invaders = $("#invaders");

var attackers = $("#attackers");
var attackersTrans = {dX: 1, dY: 0};
var laserfire = $("#laserfire");
var laserfireTrans = {dX: 0, dY: 1};
var defender = $("#defender");
var defenderTrans = {dX: 1, dY: 0};

var count = 0;

function moveAttackers(){
  count++;console.log(count);
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
  checkIfLaserfireHitInvader();
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

function isAttackerHit(){

}

function checkIfLaserfireHitInvader(userX, userY, circleID){
    var points = $("#"+circleID+"Box").attr("points");
    var coords = points.split(" ");
    var firstCoords = coords[0].split(",");

    var minX = parseInt(firstCoords[0]);
    var maxX = parseInt(firstCoords[0]);
    
    var minY = parseInt(firstCoords[1]);
    var maxY = parseInt(firstCoords[1]);

 
    for (var i = 0; i < coords.length; i++){
        
        var coord = coords[i].split(",");
        var x = parseInt(coord[0]);
        var y = parseInt(coord[1]);
        
        if(x < minX) minX = x;
        if(x > maxX) maxX = x;
        
        if(y < minY) minY = y;
        if(y > maxY) maxY = y;
    }
    
    if (userX > minX && userX < maxX &&
        userY > minY && userY < maxY){
        $("#"+circleID).attr("fill","#263238");
    }
    
}

function setTransform (svg, svgTran) {
    var svgTranString = 
    ("translatex("+svgTran.dX+"px) "+
     "translatey("+svgTran.dY+"px)");

    svg.attr("style","transform: "+svgTranString);
}

setInterval(moveAttackers,500);
setInterval(moveLaserfire,200);
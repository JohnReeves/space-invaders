var row1 = $("#row1");
var count = 0;
var row1Trans = {dX: 1, dY: 0};

function moveRow(){
  count++;
  console.log(count);
  if (count%10 == 0) {
    row1Trans.dY += 10;
    row1Trans.dX -= 5;
  }
  else 
    row1Trans.dX += 5;

  setTransform(row1, row1Trans);
}

function setTransform (svg, svgTran) {
    var svgTranString = 
    ("translatex("+svgTran.dX+"px) "+
     "translatey("+svgTran.dY+ "px)");

    svg.attr("style","transform: "+svgTranString);
}

setInterval(moveRow,500);
# Space invaders in HTML & Javascript

## Task 1 - make some `html` sprites

* make the paper .  

```HTML
<svg height="600" width="600">
  
</svg>
```

* put in the space background .  

```HTML
<polygon points="0,0 0,600 600,600 600,0" fill="black"/>
```

* add in some attackers    

```HTML
<g id="attackers" style="transform: translateY(0) translateX(0);">
	<circle cx="100" cy="150" r="20" fill="red" />
	<circle cx="200" cy="150" r="20" fill="green" />
	<circle cx="300" cy="150" r="20" fill="blue" />
</g>
```

* add in a defender    

```HTML
<polygon id="defender" points="270,550 300,520 330,550" fill="yellow"/>
```

* finally a laserfire .  

```HTML
<line id="laserfire" x1="300" x2="300" y1="400" y2="450" stroke-width="5" stroke="grey"/>
```

## Task 2 - add some movement and colour

* javascript variables
```javascript
var attackers = $("#attackers");
var count = 0;
var attackersTrans = {dX: 1, dY: 0};
var laserfire = $("#laserfire");
var laserfireTrans = {dX: 0, dY: 1};
```
* use `css transforms` .  
```javascript
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
```
* use `javascript interval timers` .  
* use `material design` colours .  
colour overlays or attributes .  

## Task 3 - add interactive controls

* use the spacebar for laserfire .  
* use arrow keys for the defender .  
* detect a target .  
bounding box contact in:   
`https://repl.it/@JohnReeves/svg-interactions`

## Task 4 - extend `your` space-invaders

* images from the internet;   
* your own images; or .  
* svg shapes.   

var row1 = $("#row1");

//row1.attr("style","transform: rotate(30deg) skew(45deg)");

var elTransform = {
    rot: 30,   // the rotation 'counter' for the element 'el'
    sca: 10,   // the scale 'counter' for the element 'el'
    skx: 0,   // the skewX 'counter' for the element 'el'
    sky: 0    // the skewY 'counter' for the element 'el'
};

console.log(elTransform);

setTransform(row1, elTransform);

function setTransform (element, elTransformArg) {
  // element.style.transform = ("rotate() scale() skewX() skewY()");
    var transfromString = ("rotate(" + elTransformArg.rot + "deg) scale("
        + elTransformArg.sca + ") skewX(" + elTransformArg.skx + "deg ) skewY("
        + elTransformArg.sky + "deg )");

console.log(element);
console.log(transfromString);

    // now attach that variable to each prefixed style
    // element.style.webkitTransform = transfromString;
    //element.style.MozTransform = transfromString;
    //element.style.msTransform = transfromString;
    //element.style.OTransform = transfromString;
    //element.style.transform = (transfromString);
    element.attr("style","transform: rotate(30deg) skew(45deg)");


}


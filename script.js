var row1 = $("#row1");

var elTranform = {
    rot: 0,   // the rotation 'counter' for the element 'el'
    sca: 1,   // the scale 'counter' for the element 'el'
    skx: 0,   // the skewX 'counter' for the element 'el'
    sky: 0    // the skewY 'counter' for the element 'el'
};

console.log(elTranform);
setTransform(row1, elTransform);

function setTransform (element, elTransformArg) {
    var transfromString = ("rotate(" + elTransformArg.rot + "deg ) scale("
        + elTransformArg.sca + ") skewX(" + elTransformArg.skx + "deg ) skewY("
        + elTransformArg.sky + "deg )");

console.log(element);

    // now attach that variable to each prefixed style
    element.style.webkitTransform = transfromString;
    element.style.MozTransform = transfromString;
    element.style.msTransform = transfromString;
    element.style.OTransform = transfromString;
    element.style.transform = transfromString;
}


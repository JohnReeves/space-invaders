var elTranform = {
    rot: 0,   // the rotation 'counter' for the element 'el'
    sca: 1,   // the scale 'counter' for the element 'el'
    skx: 0,   // the skewX 'counter' for the element 'el'
    sky: 0    // the skewY 'counter' for the element 'el'
};

function setTransform (element, rotationArg, scaleArg, skewXArg, skewYArg) {
    var transfromString = ("rotate(" + rotationArg + "deg ) scale(" + scaleArg
        + ") skewX(" + skewXArg + "deg ) skewY(" + skewYArg + "deg )");

    // now attach that variable to each prefixed style
    element.style.webkitTransform = transfromString;
    element.style.MozTransform = transfromString;
    element.style.msTransform = transfromString;
    element.style.OTransform = transfromString;
    element.style.transform = transfromString;
}

setTransform(row1, elTransform);

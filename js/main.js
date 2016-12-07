
var elemHeight;

function boxClick(e) {
    // to prevent click event of parent elements
    e.stopPropagation();

    // assuming header & content classNames are of length 3
    // check breakpoint1
    var curClass = e.currentTarget.className;
    var classArray = curClass.split(" ");

    var curClassColor = classArray[2];
    var conDiv = document.getElementsByClassName(curClassColor+"Content");
    var conClassArray = conDiv[0].className.split(" ");

    var otherElems = document.getElementsByClassName("active");

    if(classArray[0] === "inactive") {
        if(otherElems.length > 0) {
            var otherClassArray = otherElems[0].className.split(" ");
            var otherConElems = document.getElementsByClassName("show");
            alterPadding("remove");
            otherConElems[0].className = otherClassArray[2]+"Content hide content";
            otherElems[0].className = "inactive box "+otherClassArray[2];
        }

        e.currentTarget.className = "active box "+curClassColor;

        // show the content div
        conDiv[0].className = conClassArray[0]+" show content";
        alterPadding("add");
    }
    else {
        e.currentTarget.className = "inactive box "+curClassColor;
        alterPadding("remove");
        // hide the content div
        conDiv[0].className = conClassArray[0]+" hide content";
    }
}

function closeClick(e) {
    // to prevent click event of parent elements
    e.stopPropagation();

    // assuming header & content classNames are of length 3
    // check breakpoint1
    var curClass = e.currentTarget.className;
    var classArray = curClass.split(" ");

    var actElem = document.getElementsByClassName("active");
    var actClassArray = actElem[0].className.split(" ");
    actElem[0].className = "inactive box "+actClassArray[2];
    
    alterPadding("remove");
    var actConElem = document.getElementsByClassName("show");
    actConElem[0].className = actClassArray[2]+"Content hide content";
}

function alterPadding(alterType){
    
    var elemDispStyle, elemHeightStyle;
    if(alterType==="add"){
        elemDispStyle="block";
        elemHeightStyle=(elemHeight+50).toString()+"px";   
    }
    else {
        elemDispStyle="none";
        elemHeightStyle="0px";
    }
    var activeElem = document.getElementsByClassName("show");
    if(activeElem.length>1)
        alert('wrong');
    var elemID = activeElem[0].id;
    var fillElem = document.getElementById(elemID).previousElementSibling;    
    fillElem.style.display=elemDispStyle;
    fillElem.style.height=elemHeightStyle;
}

$('document').ready(function() {

    var resumeUrl="https://www.dropbox.com/s/ufpum6zd04u4ms5/PM_Prakash_%28Web_Developer_4_yrs%29.doc?dl=";
    $("#btnOpenRes").on('click', function(){
        window.open((resumeUrl+"0"), '_blank');
    });
    $("#btnDownRes").on('click', function(){
        window.open((resumeUrl+"1"), '_blank');
    });
    
    // implement iframe to display resume
    
    if (document.documentElement.clientWidth < 450) {    
        $('.box').on('click', boxClick);
        $('.halfbox').on('click', boxClick);
        $('.close').on('click', closeClick);
    }
});

// loader image when the webpage loads for the first time
$(window).on("load",function(){$(".loader").fadeOut("slow");});

if (document.documentElement.clientWidth < 450) {

    var totalHeight = window.outerHeight;

    var divElems = document.getElementsByClassName("box");
    var halfDivElems = document.getElementsByClassName("halfbox");
    var i;
    
    elemHeight = (parseInt(totalHeight)/5);

    elemHeight = parseInt(elemHeight)-25;
    
    for (i=0; i<divElems.length; i++) {
        divElems[i].style.height = elemHeight.toString() + "px";
    }

    for (i=0; i<halfDivElems.length; i++) {
        halfDivElems[i].style.height = (elemHeight/2.09).toString() + "px";
    }
    
    
    /*
    // set height of the content div elems
    var conDivElems = document.getElementsByClassName("content");
    for(i=0; i<conDivElems.length;i++) {
        conDivElems[i].style.minHeight = totalHeight+"px";
    }
    */
}
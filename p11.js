// sliding left right function
function scrollleft(){
    var left = document.querySelector(".slidebox");
    left.scrollBy(-310,0);
}

function scrollright(){
    var right = document.querySelector(".slidebox");
    right.scrollBy(310,0);
}

// bar to cross toggle
function myfunc(){
    var x =document.querySelector(".order");
    var y =document.querySelector(".cancel");
    var z =document.querySelector(".bar");
    if(x.style.display=="block")
    {
        x.style.display="none";
        y.style.display="none";
        z.style.display="block";
        
    }
    else
    {
        x.style.display="block";
        y.style.display="block";
        z.style.display="none";
    }
}

// down arrow to up arrow toggle 
function arrowfunc(){
    var a =document.querySelector(".open");
    var b =document.querySelector(".up");
    var c =document.querySelector(".down");
    if(a.style.display=="block")
    {
        a.style.display="none";
        b.style.display="none";
        c.style.display="block";
        
    }
    else
    {
        a.style.display="block";
        b.style.display="block";
        c.style.display="none";
    }
}


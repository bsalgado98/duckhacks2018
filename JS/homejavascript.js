function FadeIn() {
    document.getElementById("form1").style.opacity = "1";
    document.getElementById("form1").style.transition = "opacity 1s";
}

//function getInput() {
//    let user_input = document.getElementById("problem").value; 
//    let user_input = "something user said"
//    alert(user_input);
//}


function onInput1() {
    document.getElementById("form2").style.opacity = "1";
    document.getElementById("form2").style.transition = "opacity 1s";
    //store input
    var sth = document.getElementById("problem");
    localStorage.setItem("userinput", sth.value);
}

function onLoad2() {
    //change text opacity
    document.getElementById("p1").style.opacity = "1";
    document.getElementById("p1").style.transition = "opacity 1s";
    
    //shrink image
    document.getElementById("img").style.width = "50%";
    document.getElementById("img").style.transition = "width 10s";
    document.getElementById("img").style.height = auto;
    document.getElementById("img").style.transition = "height 10s";
}


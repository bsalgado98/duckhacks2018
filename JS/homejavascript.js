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

function FadeIn2() {
    document.getElementById("p1").style.opacity = "1";
    document.getElementById("p1").style.transition = "opacity 1s";
}


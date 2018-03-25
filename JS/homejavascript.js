function FadeIn() {
    document.getElementById("form1").style.opacity = "1";
    document.getElementById("form1").style.transition = "opacity 1s";
}

function onInput1() {
    let user_input = document.getElementById("problem").value; 
    document.getElementById("form2").style.opacity = "1";
    document.getElementById("form2").style.transition = "opacity 1s";
}


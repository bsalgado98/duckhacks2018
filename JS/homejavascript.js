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
    
    
    $.post(
      'https://apiv2.indico.io/sentimenthq',
      JSON.stringify({
        'api_key': "a8fc73b43844d3af49810fa05da5bc65",
        'data': localStorage.getItem("userinput"),
      })
    ).then(function(res) { 
        var obj = JSON.parse(res);
        var value = obj.results;
        console.log(value);
        if(value < .5){
            console.log("seek Help") ;
            alert("There is someone out there who cares. If you ever want to talk about something, call 1-800-273-8255. Much Love ❤");
        }
        else{
            console.log("you good fam, happy feels")
        }
                         
    });
}

function onLoad2() {
    //change text opacity
    document.getElementById("p1").style.opacity = "1";
    document.getElementById("p1").style.transition = "opacity 1s";
    
    //shrink image
//    document.getElementById("img").style.width = "50%";
//    document.getElementById("img").style.height = auto;
//    document.getElementById("img").style.transition = "all 10s";
    
}

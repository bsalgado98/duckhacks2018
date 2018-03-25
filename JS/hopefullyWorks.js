var obj = {
     "encodingType" : "UTF8",
     "document"     : {
          "type"    : "PLAIN_TEXT",
          "content" : "I am happy but I should put a variable here"
     }
}

var jason = JSON.stringify(obj);

document.getElementById("demo").innerHTML = myJSON;
//
// //initialize xmlhttprequest object
// var xhr = new XMLHttpRequest();
//
// xhr.open('GET', "https://ipinfo.io/json", true)
// xhr.send();
//
// //xhr.addEventListener("readystatechange", processRequest, false);
// xhr.onreadystatechange = processRequest;
//
// function processRequest(e){
//      if(xhr.readyState == 4 && xhr.status == 200){
//                var response = JSON.parse(xhr.responseText);
//                alert(response.city);
//      }
// }
// //
// // $(document).ready(function(){
// //      $("button").click(function(){
// //           $.post("demo_test_post.asp",{
// //
// //                encodingType: "UTF8",
// //                document: {
// //                     type: "PLAIN_TEXT",
// //                     content: "Enoy your vacation!"
// //                }
// //           },
// //           "https://language.googleapis.com/v1/documents:analyzeSentiment"
// //      });
// // });

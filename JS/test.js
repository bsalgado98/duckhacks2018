// single example
function sendData(){
//    $.post(
//      'https://apiv2.indico.io/sentimenthq',
//      JSON.stringify({
//        'api_key': "a8fc73b43844d3af49810fa05da5bc65",
//        'data': "i just really want to die",
//      })
//    ).then(function(res) { 
//        var value = res;
//        if(value > .5){
//            console.log(value) ;
//        }
//        else{
//            console.log("you should seek help")
//        }
//                         
//    });
}

//// Send a POST request
//axios({
//  method: 'post',
//  url: '/user/12345',
//  data: {
//    firstName: 'Fred',
//    lastName: 'Flintstone'
//  }
//});

//function options(){
//    //
//}
//
//axios.post('http://text-processing.com/api/sentiment/', {
//    data: "great",
//  })
//  .then(function (response) {
//    console.log(response);
//  })
//  .catch(function (error) {
//    console.log(error);
//  });



// $(document).ready(function(){
//     $("button").click(function(){
//         $.post("http://text-processing.com/api/sentiment/",
//         {
//           name: "Donald Duck",
//           city: "Duckburg"
//         },
//         function(data,status){
//             alert("Data: " + data + "\nStatus: " + status);
//         });
//     });
// });
//
//function sendData(){
//     var request = require('request');
//
//     var dataString = 'text=great';
//
//     var options = {
//          url: 'http://text-processing.com/api/sentiment/',
//          method: 'POST',
//          body: dataString
//     };
//
//     function callback(error, response, body) {
//          if (!error && response.statusCode == 200) {
//               console.log(body);
//          }
//          console.log(body);
//     }
//
//     request(options, callback);
//
//}
//
//
// var url = "http://text-processing.com/api/sentiment/";
// var method = "POST";
// var postData = "Some data";
//
// var shouldBeAsync = true;
//
// var request = new XMLHttpRequest();
//
// // Before we send anything, we first have to say what we will do when the
// // server responds. This seems backwards (say how we'll respond before we send
// // the request? huh?), but that's how Javascript works.
// // This function attached to the XMLHttpRequest "onload" property specifies how
// // the HTTP response will be handled.
// request.onload = function () {
//
//    // Because of javascript's fabulous closure concept, the XMLHttpRequest "request"
//    // object declared above is available in this function even though this function
//    // executes long after the request is sent and long after this function is
//    // instantiated. This fact is CRUCIAL to the workings of XHR in ordinary
//    // applications.
//
//    // You can get all kinds of information about the HTTP response.
//    var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
//    var data = request.responseText; // Returned data, e.g., an HTML document.
// }
//
// request.open(method, url, shouldBeAsync);
//
// request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// // Or... request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
// // Or... whatever
//
// // Actually sends the request to the server.
// request.send(postData);
//
////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// // // Imports the Google Cloud client library
// // const language = require('@google-cloud/language');
// //
// // // Instantiates a client
// // const client = new language.LanguageServiceClient();
// //
// // // The text to analyze
// // const text = 'Hello, world!';
// //
// // const document = {
// //   content: text,
// //   type: 'PLAIN_TEXT',
// // };
// //
// // // Detects the sentiment of the text
// // client
// //   .analyzeSentiment({document: document})
// //   .then(results => {
// //     const sentiment = results[0].documentSentiment;
// //
// //     console.log(`Text: ${text}`);
// //     console.log(`Sentiment score: ${sentiment.score}`);
// //     console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
// //   })
// //   .catch(err => {
// //     console.error('ERROR:', err);
// //   });

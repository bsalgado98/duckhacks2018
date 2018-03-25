$(document).ready(function(){
     $("button").click(function(){
          $.post("demo_test_post.asp",{

               encodingType: "UTF8",
               document: {
                    type: "PLAIN_TEXT",
                    content: "Enoy your vacation!"
               }
          },
          "https://language.googleapis.com/v1/documents:analyzeSentiment"
     });
});

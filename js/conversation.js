var accessToken = "fb91d8987c274d568c656e7f4c71e000";
    var baseUrl = "https://api.dialogflow.com/v1/";
    $(document).ready(function() {
      $("#input").keypress(function(event) {
        if (event.which == 13)
        {
          console.log("++event.which==13 WORKING");
          event.preventDefault();
          send();
          this.value = '';
        }
      });
      
      $("#btn01").click(function(event) 
      {
        setResponse("This BoT is for Button 01"); 
      });
      $("#btn02").click(function(event) 
      {
        setResponse("This BoT is for Button 02"); 
      });
      $("#btn03").click(function(event) 
      {
        setResponse("This BoT is for Button 03"); 
      });
      $("#btn04").click(function(event) 
      {
        setResponse("This BoT is for Button 04"); 
      });
      $("#btn05").click(function(event) 
      {
        setResponse("This BoT is for Button 05"); 
      });
      $("#btn06").click(function(event) 
      {
        setResponse("This BoT is for Button 06"); 
      });
      $("#btn07").click(function(event) 
      {
        setResponse("This BoT is for Button 07"); 
      });
      $("#btn08").click(function(event) 
      {
        setResponse("This BoT is for Button 08"); 
      });
      $("#btn09").click(function(event) 
      {
        setResponse("This BoT is for Button 09"); 
      });
      $("#btn10").click(function(event) 
      {
        setResponse("This BoT is for Button 10"); 
      });

      $("#rec").click(function(event) 
      {
        switchRecognition();
        console.log("++SwitchRecognition() fired");  
      });  
    });
    var recognition;
    function startRecognition() {
      console.log("++inside startRecognition()");    
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition ||
      window.msSpeechRecognition)();
      recognition.onstart = function(event) {
        updateRec();
      };
      recognition.onresult = function(event) {
        var text = "";
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
          }
          setInput(text);
        stopRecognition();
      };
      recognition.onend = function() {
        stopRecognition();
      };
      recognition.lang = "en-US";
      recognition.start();
    }
  
    function stopRecognition() {
      if (recognition) {
        recognition.stop();
        console.log("++RecognitionStopped");  
        recognition = null;
      }
      updateRec();
    }
    function switchRecognition() {
      if (recognition) {
        stopRecognition();
      } else {
        startRecognition();
      }
    }
    function setInput(text) {
      $("#input").val(text);
      send();
    }
    function updateRec() {
      $("#rec").text(recognition ? "Stop" : "Speak");
    }
    function send() {
     console.log("++insideSend()_Function"); 
           
            var text = $("#input").val();
            console.log("++ValueofText==>"+text); 
            $('.response').append('<span class="user">' + '<b>YOU:</b> '+ text + '</span>\r\n');   

            //conversation.push("Me: " + text + '\r\n');
      $.ajax({
           
        type: "POST",
           
        url: baseUrl + "query?v=20150910",
      //  console.log("++lineAfter_baseUrl");  
        contentType: "application/json; charset=utf-8",
        dataType: "json",
     //   console.log("++lineBefore_headers");  
        headers: {
      //    console.log("++lineBefore_Authorization"); 
          "Authorization": "Bearer " + accessToken
     //     console.log("++Authorization_Done"); 
        },
        data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
        success: function(data) 
                {
                  console.log("++Success");   
                  var respText = data.result.fulfillment.speech;
                  console.log("Respuesta: " + respText);
                  setResponse(respText);
                  responsiveVoice.speak(respText,"Hindi Female");
                  $("#response").scrollTop($("#response").height());
        },
        error: function() {
          console.log("++Error");  
          setResponse("Internal Server Error");
        }
      });
      //setResponse("Thinking...");
    }
    function setResponse(val) {
            $('.response').append('<span class="bot">' + '<b>BOT:</b> '+ val + '</span>\r\n');
            //conversation.push("AI: " + val + '\r\n<br><br>');
     // $("#response").text(conversation.join(""));
    }
   // var conversation = [];
    

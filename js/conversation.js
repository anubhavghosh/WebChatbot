var accessToken = "ccedf284597a430cbba9eb16c33a34d9";
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
        setResponse("I can answer your queries related to FEES and ELIGIBILITY CRITERIA. But Hold On! I am still being trained for this section and I will be able to share information from next week. Meanwhile, you can fill up the admission form available in home screen."); 
      });
      $("#btn02").click(function(event) 
      {
        setResponse("Have any query about affiliations? Go ahead, type in your question!"); 
      });
      $("#btn03").click(function(event) 
      {
        setResponse("I'm here to give you answers related to Corporate Relations. Go ahead Ask me."); 
      });
      $("#btn04").click(function(event) 
      {
        setResponse("Hello! Are you seeking information related to Rankings? Go ahead, type in your message! I'm here to help you."); 
      });
      $("#btn05").click(function(event) 
      {
        setResponse("Seeking information about placements? Please tell me How may I help you?"); 
      });
      $("#btn06").click(function(event) 
      {
        setResponse("Looking for departments? Tell me how can I assist you?"); 
      });
      $("#btn07").click(function(event) 
      {
        setResponse("To know about Rankings you can ask me a question like 'What is the ranking in outlook?' or 'Can you tell me the ranking in India Today.' "); 
      });
      $("#btn08").click(function(event) 
      {
        setResponse("Do you want an appointment? Tell me what kind of appointmentare you looking for?"); 
      });
      $("#btn09").click(function(event) 
      {
        setResponse("Is there an Emergency? You can ask me the number of nearest Hospital, Police Station and Fire Brigade."); 
      });
      $("#btn10").click(function(event) 
      {
        setResponse("KOLKATA KNOWLEDGE CAMPUS 124 B L Saha Road, Kolkata 700 053 Phone/Fax: +91 33 2403 2300/01 DURGAPUR KNOWLEDGE CAMPUS Arrah, Shibtala Via Muchipara, Durgapur 713 212 Phone/Fax: +91 343 253 3813-15");      
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
    

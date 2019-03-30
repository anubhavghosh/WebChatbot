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
        setResponse("Hi! I am here to answer your queries related to NSHM, it's history and establishment. Go ahead, type in your message."); 
      });
      $("#btn02").click(function(event) 
      {
        setResponse("Do you have a query related to the admission procedure? I can tell you about the entrance tests, fees, departments and scholarships. Go ahead, type in your question!"); 
      });
      $("#btn03").click(function(event) 
      {
        setResponse("I see you're looking for fees. Go ahead type in a message like 'Tell me the fees' or 'I want to know the fees structure' you can also mention the course name in the phrase."); 
      });
      $("#btn04").click(function(event) 
      {
        setResponse("Hello! Are you seeking information related to departments and courses? Go ahead, type in your message! I'm here to help you."); 
      });
      $("#btn05").click(function(event) 
      {
        setResponse("Is there an emergency?  I can tell you the contact details of nearest Fire Brigade, Hospital and Police Station. Please tell me How may I help you?"); 
      });
      $("#btn06").click(function(event) 
      {
        setResponse("Are you concerned with the safety & security of this University? Tell me how can I assist you?"); 
      });
      $("#btn07").click(function(event) 
      {
        setResponse("Want to know about your numerous affiliations like UGC & AICTE? Go ahead, ask me your question related to the various Government Recognitions we have received!"); 
      });
      $("#btn08").click(function(event) 
      {
        setResponse("Jaw Dropping! Yes that's how the placements of Techno India Group are. Want to know more? Ask me a question about companies, salary and placement statistics."); 
      });
      $("#btn09").click(function(event) 
      {
        setResponse("Curious about scholarships? I can help. Please ask me a question related to the scholarships."); 
      });
      $("#btn10").click(function(event) 
      {
        setResponse("Our campus has separate Training & Placement Cell (TPC) well supported by the Industry Institute Partnership Cell (IIPC). Some of the recruiters are TCS, Microsoft, Cognizant, Accenture, IBM, Wipro, Infosys, BSE, Cognizant Technology Solution, Thoughtworks, CISCO, and Mu Sigma. SNU’s Centre of Excellence will soon have collaborations with world renowned companies like Bosch, Google, ABB Robotics, etc. and entrepreneurship cells to mentor students for developing skills that would further help in linking them to venture capitalists and angel investors. If you still have any query related to Industry Collaboration and Partnerships, please type in your message."); 
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
    


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta id="apple-mobile-web-app-capable" name="apple-mobile-web-app-capable" content="yes" > 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="G.I Labs">
    <meta name="author" content="GIL">

    <title>iVAC</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
   
    <script type="text/javascript" src="js/conversation.js"></script>

    <style type="text/css">
      @media screen and (max-width:700px) {
        .open-button {
          width:100%;
        }
        .quote {
          width: 100%;
          position: relative;
          top: 50px;
        }
      }
    </style>

</head>
<body>
<section>
  <div class="container">



    <div class="top">

      
        <img src="css/images/GILabs_logo.png" alt="G.I Labs" class="logo topleft">
      
      
      <div class="quote">
        <marquee behaviour = 'scroll' direction = 'left'><s>ALEXA</s>? <s>SIRI</s>? <b>Meet NSHM'S own AI assistant</b></marquee>
      </div>
      
     
        <img src="css/images/NSHM_logo.png" alt="NSHM Logo" class="logo topright">
      
    
    </div>
    <div class="mid-section">
      <button class=" admission-form-button" onclick="displayIframe()"><span class="">ADMISSION FORM</span></button>
      <button id="btn11" class=" how-to-button" onclick="openForm()"><span class="">HOW TO USE BOTS</span></button>
      <button class=" registration-form-button fl-rt" onclick="displayRegForm()"><span class="">NOTICE BOARD</span></button>
    </div>

    <div style="overflow: auto;">
      <div class="left-menu">
        <button id="btn01" class="open-button" onclick="openForm()">ADMISSION <b>BOT</b></button>
        <button id="btn02" class="open-button" onclick="openForm()">AFFILIATION <b>BOT</b></button>  
        <button id="btn03" class="open-button" onclick="openForm()">CORPORATE RELATION <b>BOT</b></button>
    <!--    <button id="btn04" class="open-button" onclick="openForm()">RANKING <b>BOT</b></button> -->
        <button id="btn05" class="open-button" onclick="openForm()">PLACEMENT <b>BOT</b></button>
      </div>
      <div class="right-menu">
        <button id="btn06" class="open-button fl-rt" onclick="openForm()">DEPARTMENT <b>BOT</b></button>
        <button id="btn07" class="open-button fl-rt" onclick="openForm()">RANKING <b>BOT</b></button>
  <!--      <button id="btn08" class="open-button fl-rt" onclick="openForm()">APPOINTMENT <b>BOT</b></button> -->
        <button id="btn09" class="open-button fl-rt" onclick="openForm()">EMERGENCY <b>BOT</b></button>
        <button id="btn10" class="open-button fl-rt" onclick="openForm()">CONTACT US <b>BOT</b></button>
      </div>
    </div> 
  
   <!--This is the division for application form which is initially hidden untill onclick="displayForm()" place it above the chat-popup class-->
    <div id="frame" class="chat-popup">
          <h1 class="bg-white">Fill this application form for admission in NSHM</h1>
          <iframe src="https://admission.nopaperforms.com/nshm-knowledge-campus/kolkata" height=87% width=100%></iframe>
          <button type="button" id="closeButton" class="btn cancel" onclick="closeFrame()"><b>Close</b></button>
    </div>
    <!-- Registration form -->
    <div id="registration-form" class="chat-popup">
      <h1 class="bg-white">Fill this registration form</h1>
      <iframe src="https://www.nshm.com/students/noticeboard/" height=87% width=100%></iframe>
      <button type="button" id="closeButton" class="btn cancel" onclick="closeRegForm()"><b>Close</b></button>
    </div>

    
    <div class="chat-popup" id="myForm">
      
      <div class="form-container">
        <h1>AI CHATBOT</h1>
        <div id="response" class="response"></div>
        <input id="input" class="input" placeholder="Type message..." type="text" autofocus>
        <button id="rec"><b class="fa fa-microphone">Voice</b></button>
        
        <button type="button" id="closeButton" class="btn cancel" onclick="closeForm()"><b>Close</b></button>
      </div>
    </div>
  </div>
</section>
<script>

//This will open the main form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("input").focus() ;
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById('response').innerHTML = ' ';
  if(responsiveVoice.isPlaying()) 
  {
    responsiveVoice.cancel();
  }
}

 // for displaying the iframe
  function displayIframe() {
          document.getElementById("frame").style.display = "block";
          document.getElementByClassName("open-button").style.display = "block";
      }
  //for closing the form
  function closeFrame() {
    document.getElementById("frame").style.display = "none";
    document.getElementByClassName("open-button").style.display = "none";
  }
  // for displaying the registration form in iframe
  function displayRegForm() {
          document.getElementById("registration-form").style.display = "block";
          document.getElementByClassName("open-button").style.display = "block";
      }

  //for closing the form
  function closeRegForm() {
    document.getElementById("registration-form").style.display = "none";
    document.getElementByClassName("open-button").style.display = "none";
  }

</script>
<script type="text/javascript">
  //THIS FUNCTION REDIRECTS USER UPON INACTIVITY
      (function() {
      const idleDurationSecs = 150;    // X number of seconds
      const redirectUrl = 'slideShow.html';  // Redirect idle users to this URL
      let idleTimeout; // variable to hold the timeout, do not modify
      const resetIdleTimeout = function() {
          // Clears the existing timeout
          if(idleTimeout) clearTimeout(idleTimeout);
          // Set a new idle timeout to load the redirectUrl after idleDurationSecs
          idleTimeout = setTimeout(() => location.href = redirectUrl, idleDurationSecs * 1000);
      };
      // Init on page load
      resetIdleTimeout();
      // Reset the idle timeout on any of the events listed below
      ['click', 'touchstart', 'mousemove','keypress'].forEach(evt => 
          document.addEventListener(evt, resetIdleTimeout, false)
      );
  })();
</script>
</body>
</html>

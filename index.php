
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
        <marquee behaviour = 'scroll' direction = 'left'><s>ALEXA</s>? <s>SIRI</s>? <b>Meet NSHM's own AI assistant</b></marquee>
      </div>
      
     
        <img src="css/images/NSHM_logo.png" alt="NSHM Logo" class="logo topright">
      
    
    </div>

    <div style="overflow: auto;">
      <div class="left-menu">
        <button id="btn01" class="open-button" onclick="openForm()">Departments | Schools <b>BOT</b></button>
        <button id="btn02" class="open-button" onclick="openForm()">ADMISSION <b>BOT</b></button>  
        <button id="btn03" class="open-button" onclick="openForm()">CORPORATE RELATION <b>BOT</b></button>
        <button id="btn04" class="open-button" onclick="openForm()">RANKING <b>BOT</b></button>
        <button id="btn05" class="open-button" onclick="openForm()">EMERGENCY <b>BOT</b></button>
      </div>
      <div class="right-menu">
        <button id="btn06" class="open-button fl-rt" onclick="openForm()">SAFETY & SECURITY <b>BOT</b></button>
        <button id="btn07" class="open-button fl-rt" onclick="openForm()">AFFILIATIONS <b>BOT</b></button>
        <button id="btn08" class="open-button fl-rt" onclick="openForm()">PLACEMENT <b>BOT</b></button>
        <button id="btn09" class="open-button fl-rt" onclick="openForm()">SCHOLARSHIP <b>BOT</b></button>
        <button id="btn10" class="open-button fl-rt" onclick="openForm()">INDUSTRY COLLABORATION <b>BOT</b></button>
      </div>
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
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("input").focus() ;
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById('response').innerHTML = ' ';
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

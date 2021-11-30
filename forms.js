window.addEventListener("load", function () {

    var loggedIn;
    var thisUser = null;

    function hideElements(){
        document.getElementById("begin").style.display="None";

    }
    function showElements(){
        document.getElementById("begin").style.display="block";
    }
    hideElements();

    function hideLogin() {
        document.getElementById("logUser").style.display = "None";
        document.getElementById("logPass").style.display = "None";
    }
    
    function showLogin() {
        document.getElementById("logUser").style.display = "block";
        document.getElementById("logPass").style.display = "block";
    }
    
    
    function sendData() {
        const XHR = new XMLHttpRequest();
              FD = new URLSearchParams(new FormData( form ));
        
        // Define what happens on successful data submission
        XHR.addEventListener( 'load', function( event ) {
            alert( 'Yeah! Data sent!' );
        } );

        // Define what happens in case of error
        XHR.addEventListener(' error', function( event ) {
            alert( 'Oops! Something went wrong.' );
        } );

        XHR.open("POST", "http://localhost:5000/app/new/user");
        XHR.send( FD );
    }
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        sendData();
    });

    function getUserdata( form ) {
        const sendRequest = new XMLHttpRequest();
        const userInfo = new URLSearchParams(new FormData( form ));


        sendRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                thisUser = JSON.parse(sendRequest.response);
                if(loggedIn){
                    
                    thisUser = null;
                    loggedIn = false;
                    document.getElementById("login").value = "Login";

                    hideElements()
                    alert("Logging Out");
                } else {

                    document.getElementById("login").value = "Logout";
                    loggedIn = true;

                    showElements();
                    alert("Login successful!")
                    hideLogin();
                }
            } else if ( this.status != 200 ) {
                alert("Bad Credential! (If Login successful message pop up next, you are good!)")
            }
           
        }
        sendRequest.open("POST", "http://localhost:5000/app/login/user");
        sendRequest.send( userInfo );
    };

    
    
    const selfUser = document.getElementById("loginForm");
    selfUser.addEventListener("submit", function(event){
        event.preventDefault();
        if(loggedIn){
            alert("Logged Out");
            hideElements()
            thisUser = null;
            loggedIn = false;
            document.getElementById("login").value = "Login";
            this.reset();
            showLogin();
        } else {
            getUserdata(this);
        }
    });

    
});
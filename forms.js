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
        sendRequest.addEventListener("error", function(event){
            alert('Accessing users unsuccessful! Please try again.');
        });

        sendRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                thisUser = JSON.parse(sendRequest.response);
                if(loggedIn){
                    alert("Login successful!")
                    thisUser = null;
                    loggedIn = false;
                    document.getElementById("login").value = "Login";
                    document.getElementById("greeting").innerHTML = thisUser;

                    hideElements()
                    alert("Logging Out");
                } else {

                    document.getElementById("login").value = "Logout";
                    loggedIn = true;

                    showElements();
                    alert("Login successful!")
                }
            }
        }
        sendRequest.open("POST", "http://localhost:5000/app/login/user");
        sendRequest.send( userInfo );
    };

    
    
    const selfUser = document.getElementById("loginForm");
    selfUser.addEventListener("submit", function(event){
        event.preventDefault();
        if(loggedIn){
            alert("Logging Out");
            // document.getElementById("loggedInUser").classList.add("hide-on-logout");
            hideElements()
            thisUser = null;
            loggedIn = false;
            document.getElementById("login").value = "Login";
            document.getElementById("greeting").innerHTML = thisUser;
            this.reset();
        } else {
            getUserdata(this);
        }
    });

    
});
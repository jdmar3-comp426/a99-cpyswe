window.addEventListener("load", function () {

    var isLogIn;
    var current = null;

    function hideElements(){        // Hide elements that require log in (new game, delte, modify)

        document.getElementById("begin").style.display="None";
        document.getElementById("dataPlace").style.display="None";
        document.getElementById("updateForm").style.display="None";
        document.getElementById("deleteAcc").style.display="None";

    }
    function showElements(){        // Show those elements after log in

        document.getElementById("begin").style.display="block";
        document.getElementById("dataPlace").style.display="block";
        document.getElementById("updateForm").style.display="block";
        document.getElementById("deleteAcc").style.display="block";

    }

    hideElements();

    function hideLogin() {          // Hide login form after log in
        document.getElementById("logUser").style.display = "None";
        document.getElementById("logPass").style.display = "None";
    }
    
    function showLogin() {          // Show login for after log out
        document.getElementById("logUser").style.display = "block";
        document.getElementById("logPass").style.display = "block";
    }
    
    
    function sendData() {           // Send the form for registration
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

    const form = document.getElementById("myForm");     // When submit, call sendData()
    form.addEventListener("submit", function(event){
        event.preventDefault();
        sendData();
    });

    function checkLog( form ) {      // Send the form for log in
        const sendRequest = new XMLHttpRequest();
        const userInfo = new URLSearchParams(new FormData( form ));


        sendRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {       // If the credential is correct, perform changes
                current = JSON.parse(sendRequest.response);
                if(isLogIn){                                        // If already logged in, change elements to logged out state
                    
                    current = null;
                    isLogIn = false;
                    document.getElementById("login").value = "Login";

                    hideElements()
                    alert("Logged Out");

                } else {                                            // If not logged in, change to logged in

                    document.getElementById("login").value = "Logout";
                    isLogIn = true;

                    showElements();
                    alert("Login successful!")
                    hideLogin();

                }
            } else if ( this.status != 200 ) {
                alert("Bad Credential! (If Login successful message pop up next, you are good to go!)")
            }
           
        }
        sendRequest.open("POST", "http://localhost:5000/app/login/user");
        sendRequest.send( userInfo );
    };

    
    
    const selfUser = document.getElementById("loginForm");          // If click submit in the log in form, call function checkLog()
    selfUser.addEventListener("submit", function(event){
        event.preventDefault();
        if(isLogIn){

            alert("Logged Out");
            hideElements()
            current = null;
            isLogIn = false;
            document.getElementById("login").value = "Login";
            this.reset();
            showLogin();

        } else {
            checkLog(this);
        }
    });

    function updateInfo( form ) {                                   // Send form for updating information
        const XHR = new XMLHttpRequest();
        var FD = new URLSearchParams(new FormData( form ));

        FD.append('user', current.user);

        XHR.addEventListener("load", function(event){
            alert('Info Updated!');
        });

        XHR.open("PATCH", "http://localhost:5000/app/update/user");
        XHR.send( FD );
    }

    const newData = document.getElementById("updateinfo");

    newData.addEventListener("submit", function(event){             // If click submit, call updateInfo()

        event.preventDefault();
        updateInfo(this);

    });

    function deleteUser(form) {                                     // Send form for deleting account
        const XHR = new XMLHttpRequest();
        var FD = new URLSearchParams(new FormData( form ));
        FD.append('user', current.user);

        XHR.addEventListener("load", function(event){
            alert('Account Deleted!');
        });

        XHR.open("DELETE", "http://localhost:5000/app/delete/user");
        XHR.send( FD );

    }

    const deleted = document.getElementById("deleteAcc");           // If click delete, call deleteUser()
    deleted.addEventListener("submit", function(event) {    
        event.preventDefault();
        deleteUser(this);
    });

    const showData = document.getElementById("showData");
    showData.addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("profileData").innerHTML = `Username: ${current.user}, 
        Email: ${current.email}, 
        Highest Score: ${current.highestScore}`

    });

    function recordHigh (form) {                                    // Send the form to record the highest score (This does not seem to work)
        alter("GGGGGG");
        const XHR = new XMLHttpRequest();
        var FD = new URLSearchParams(new FormData( form ));
        FD.append('user', current.user);

        document.getElementById("sss").innerHTML = `${FD}`;
        XHR.open("PATCH", "http://localhost:5000/app/recordscore/user");
        XHR.send( FD );

        // if (FD.highest <= current.highestScore) {
        //     alert("Score Is Lower Than Your Highest, Not Recorded!");
        // } else {
        //     XHR.addEventListener("load", function(event){
        //         alert('Score Recorded!');
        //     });

        //     XHR.open("PATCH", "http://localhost:5000/app/recordscore/user");
        //     XHR.send( FD );
        // }

    }

    const highest = document.getElementById("scoreForm");           
    highest.addEventListener("submit", function(event) {
        event.preventDefault();
        recordHigh(this);
    });

    
});
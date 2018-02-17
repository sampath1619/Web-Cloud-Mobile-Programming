$(document).ready(function () {

    var form_height = $('#home_form').height();
    

    $('#reg_here').click(function () {
        $('#email_visibility').show();
        $('#reg_visibility').show();
        $('#login_visibility').hide();
        $('#login_here').show();
        $('#reg_here').hide();
    });


    $('#login_here').click(function () {
        //$('#home_form').height(form_height);
        $('#email_visibility').hide();
        $('#reg_visibility').hide();
        $('#login_visibility').show();
        $('#login_here').hide();
        $('#reg_here').show();
    });


		//inserting values into local storage for firt time so that it wont throw null storage next time while accessing it whose code is below that we are using in code
			//var localObject = [];
            //var testObject = { user_id: "1", userName: "firstUser", userEmail: "firstUser@gmail.com", password: "firstUser" };
            //localObject.push(testObject);
            //localStorage.setItem("news_app_users", JSON.stringify(localObject));
            //console.log(JSON.parse(localStorage.getItem("news_app_users")));
			
			
    //user registration
    $("#reg_submit").click(function () {
        if (typeof (Storage) !== "undefined") {
            var existing_users = JSON.parse(localStorage.getItem('news_app_users'));
            var previous_id = existing_users[existing_users.length - 1].user_id;
            var user_input = { user_id: parseInt(previous_id) + 1, userName: $('#user_name').val(), userEmail: $('#user_email').val(), password: $('#user_password').val() };
            existing_users.push(user_input);
            localStorage.setItem("news_app_users", JSON.stringify(existing_users));
            console.log(JSON.parse(localStorage.getItem("news_app_users")));

            alert("User registration completed successfully. Please login to continue.");
            
        }
        else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }        

    });

    $('#login_submit').click(function () {
        var i = 0;
        var userID=0;
        var matchFlag = 0;
        var username_input= $('#user_name').val();
        var password_input = $('#user_password').val();
        var existing_users_news_app = JSON.parse(localStorage.getItem('news_app_users'));
        for (i = 0; i < existing_users_news_app.length; i++) {
            if (username_input == existing_users_news_app[i].userName && password_input == existing_users_news_app[i].password) {
                matchFlag=1;
                userID= existing_users_news_app[i].user_id;
            }
        }

        if(matchFlag==1){
            window.location.href = "../news.html?" + userID;
        }
        else{
        alert("Username or password is incorrect");

        }
    });
});





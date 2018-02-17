    var outputJSON;
    var topicFlag = 0;
    var sourceFlag = 0;
    var i = 0;
    var current_username;

    //get user id passed from index page from the url
    var url = window.location.href.split('?');
    var current_user_id = url[url.length - 1];

    var users = JSON.parse(localStorage.getItem("news_app_users"));
    for (i = 0 ; i < users.length; i++){
        if (users[i].user_id == current_user_id) {
            current_username = users[i].userName;
            $('#current_user').text("Hi " + users[i].userName + "...!!!");
        }
    }

    $('#submit').click(function () {
        $('#contentPanel').empty();
        //get topic
        var topic = $('#topic option:selected').val();
        if (topic.length > 0 && topic != null && topic != '' && topic != 'Select Topic') {
            topicFlag = 1;
        }

        //get source
        var source = $('#source option:selected').val();
        if (source.length > 0 && source != null && source != '' && source != 'Select Source') {
            sourceFlag = 1;
        }

        //give appropriate API depending on input
        if(topicFlag == 1 && sourceFlag == 1){
            var url = 'https://newsapi.org/v2/everything?q=' + topic+ '&sources=' + source +
                        '&apiKey=11435bb600564433b2771bafd5527899';
        }

        else if (topicFlag == 0 && sourceFlag == 1) {
            var url = 'https://newsapi.org/v2/everything?sources=' + source +
                        '&apiKey=11435bb600564433b2771bafd5527899';
        }

        else if (topicFlag == 1 && sourceFlag == 0) {
            var url = 'https://newsapi.org/v2/everything?q=' + topic + 
                        '&apiKey=11435bb600564433b2771bafd5527899';
        }

        else {
            var url = 'https://newsapi.org/v2/top-headlines?country=us' +
                       '&apiKey=11435bb600564433b2771bafd5527899';
        }

        //Read JSON from API
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, false);
        xhttp.send();
        response = xhttp;
        outputJSON = JSON.parse(response.responseText);
        console.log(outputJSON);
        for (var i = 1; i <= outputJSON.totalResults; i++) {
            if (outputJSON.articles[i - 1].urlToImage !=null) {
                var myCol = $('<div class="col-md-4"></div>');
                var myPanel = $('<div class="card card-outline-info" id="Card' + i + '">' +
                    '<a href="' + outputJSON.articles[i - 1].url + '" target="_blank">' +
                    '<img class="card-img-top" style="height:200px; width: 100%" src="' + outputJSON.articles[i - 1].urlToImage +
                    '"></a>' +
                    '<div class="card-block">' +
                    '<h4 class="card-title">' + outputJSON.articles[i - 1].title + '</h4>' +
                    '<p class="card-text">' + outputJSON.articles[i - 1].description +
                    '<span class="pull-right"><br/>' + outputJSON.articles[i - 1].publishedAt + '</span>' +
                    '</p>' +
                    '</div></div>');
                myPanel.appendTo(myCol);
                myCol.appendTo('#contentPanel');
            }
        }
    });
    
     
    $('#logout_btn').on('click', function(e){
        window.location.href = "../index.html";
    });












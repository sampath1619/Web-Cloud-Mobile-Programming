// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http,$sce) {
        $scope.resulttrue =false;
        $scope.getVideos = function () {
            var searchKey = document.getElementById("txt_search").value;
            $scope.YoutubeUrl = new Array();
            if (searchKey != null && searchKey != "" ) {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchKey+"&key=AIzaSyCkgmLrynuDPT1XavcBanNK-QQfC1vomZM");

                handler.success(function (data) {
                    if (data != null && data.items != null) {
                        // Tie an array named "venueList" to the scope which is an array of objects.
                        // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                        // Marks will be distributed between logic, implementation and UI
                        $scope.resulttrue = $scope.resulttrue ? false : true;
                        for (var i = 0; i < 5; i++) {
                            var filter = data.items[i].id.videoId;

                            $scope.YoutubeUrl[i] = {
                                "title": data.items[i].snippet.title,
                                "vurl": $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+filter)
                            };
                        }

                    }
                    return true;
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                    return false;
                });
            }

        }
    });


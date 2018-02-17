var app = angular
    .module('NewsApp', [])
    .controller('NewsAppController', function ($scope, $http, $log) {

        $scope.getPosts = function () {

            $("#news").dataTable({
                responsive: true,
                "columnDefs": [
                    { "orderable": false, "width": "200px", "targets": [2] }
                ],
                "columns": [
                    { "data": "Description", className: "all" },
                    { "data": "Image", className: "all" },
                    { "data": "TimeStamp ", className: "all" },
                    
                ]

            });

            if ($scope.topic != null && $scope.src != null) {
                var url = 'https://newsapi.org/v2/everything?' +
                    'q=' + $scope.topic + '&' +
                    'sources=' + $scope.src + '&' +
                    'sortBy=popularity&' +
                    'apiKey=bdc95f0d4eb64c4f8dbd7a8b86515a36';
            }
            else if ($scope.topic == null && $scope.src != null) {
                var url = 'https://newsapi.org/v2/everything?' +
                    'sources=' + $scope.src + '&' +
                    'sortBy=popularity&' +
                    'apiKey=bdc95f0d4eb64c4f8dbd7a8b86515a36';
            }
            else if ($scope.topic != null && $scope.src == null) {
                var url = 'https://newsapi.org/v2/everything?' +
                    'q=' + $scope.topic + '&' +
                    'sortBy=popularity&' +
                    'apiKey=bdc95f0d4eb64c4f8dbd7a8b86515a36';
            }

            $http({
                method: 'GET',
                url: url
            }).then(function (success) {
                $scope.posts = success.data.articles;
            }, function (error) {
                $scope.error = error.data;
                $log.info(error);
            });

        }
    });//controller end


/*
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=34277a7a131b4b81a6c3b36aeaa106b8';
var req = new Request(url);

HttpService.getPost()
    .then(function(response) {
        $scope.post = response;
    });

.controller('AppCtrl', function($scope,HttpService) {
    HttpService.getPost()
        .then(function(response) {
            $scope.post = response;
        });
    HttpService.display()
    { getPost();
    }
}),

.service('HttpService', function($http) {
        return {
            getPost: function () {
                // $http returns a promise, which has a then function, which also returns a promise.
                return $http.get('url')
                        .then(function (response) {
                            // In the response, resp.data contains the result. Check the console to see all of the data returned.
                            console.log('Get Post', response);
                            return response.data;
                        });
            }
        };
});

.init()
{
    getPost();
}

$scope.display = function () {
    search();
};






    /!*search.controller ('NewsAppController',[$scope ,function($scope){
        $scope.items = ['headlines','images','timestamp',{text:"class",image:getSelection(Window.OPEN),done:false}];

        $scope.display = function () {
            /!*if($scope.items.display != EMPTY)
            {
                $scope.items.push({text:$scope.title,image:$scope.getImageData,done:false});
            }*!/
            $scope.items.push({text:$scope.title,image:$scope.getImageData(url),done:false});
        };
        $scope.display= function (items) {
            //display
                getPost();
        };
    }]);*!/*/

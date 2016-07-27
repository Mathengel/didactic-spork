app.controller('topicCtrl', ['$scope', 'topicFctry', 'userFctry','$routeParams', topicCtrl])

function topicCtrl($scope, topicFctry, userFctry, $routeParams){
    console.log('topic controller loaded!!!!!!!! serving topics for user #')

    function getTopics(){
        console.log("getting topics...")
        topicFctry.index(function(response){
            console.log("response from topicfactory.index", response)
            $scope.topics = response.data;
        })
    }
    getTopics();

    function getUser(){ 
        userFctry.getCurrentUser(function(data){
        $scope.currentUser = data;
        })
    }


    getUser();

    $scope.create = function(newTopic, currentUser){
        $scope.newTopic = {};
        newTopic._user = currentUser
        newTopic.name = currentUser.name
        console.log('scope.create method fires!!!', newTopic)
        topicFctry.create(newTopic, function (response){
            console.log("response from topicFctry.create, but from controller call", response)
        })
        getTopics();
        $scope.newTopic = {};
    }
}

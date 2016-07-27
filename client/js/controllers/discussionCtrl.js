app.controller('discussionCtrl', ['$scope', 'topicFctry', 'userFctry', '$routeParams', discussionCtrl])

function discussionCtrl($scope, topicFctry, userFctry, $routeParams){
    console.log('topic controller loaded!!!!!!!! serving topics for user #', $routeParams.id)

    function getTopic(){
        console.log("getting topics...")
        topicFctry.show($routeParams.id, function(response){
            console.log("response from topicfactory.show", response)
            $scope.topic = response.data;
        })
    }
    getTopic();

    function getUser(){
         userFctry.getCurrentUser(function(data){
        $scope.currentUser = data;
        })
    }

    getUser();

    $scope.createPost = function(newPost, topic, currentUser){
        $scope.newPost = {};
        newPost._topic = topic
        newPost.topic = topic.topic
        newPost.name = currentUser.name
        console.log("createPost fired!!! with,", newPost)
        postFctry.create()

    }

}

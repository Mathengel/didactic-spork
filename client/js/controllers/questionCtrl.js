app.controller('questionCtrl', ['$scope', 'questionFctry', 'userFctry','$routeParams', '$location',questionCtrl])

function questionCtrl($scope, questionFctry, userFctry, $routeParams, $location){
    console.log('question controller loaded!!!!!!!! serving questions for user #')

    function getQuestions(){
        console.log("getting questions...")
        questionFctry.index(function(response){
            console.log("response from questionFctry.index", response)
            $scope.questions = response.data;
        })
    }
    getQuestions();

    function getUser(){ 
        userFctry.getCurrentUser(function(data){
        $scope.currentUser = data;
        })
    }


    getUser();

    $scope.create = function(newQuestion){
        $scope.newQuestion = {};
        console.log('scope.create method fires!!!', newQuestion)
        questionFctry.create(newQuestion, function (response){
            console.log("response from questionFctry.create, but from controller call", response)
        })
        $location.path('home')
    }

}
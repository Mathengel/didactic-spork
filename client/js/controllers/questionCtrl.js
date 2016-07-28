app.controller('questionCtrl', ['$scope', 'questionFctry', 'userFctry','$routeParams', questionCtrl])

function questionCtrl($scope, questionFctry, userFctry, $routeParams){
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

    $scope.create = function(newQuestion, currentUser){
        $scope.newQuestion = {};
        newQuestion.yes = 0;
        newQuestion.no = 0;
        newQuestion._user = currentUser
        newQuestion.name = currentUser.name
        console.log('scope.create method fires!!!', newQuestion)
        questionFctry.create(newQuestion, function (response){
            console.log("response from questionFctry.create, but from controller call", response)
        })
        getQuestions();
        $scope.newQuestion = {};
    }

    $scope.yes = function(question){
        questionFctry.yes(question, function(response){
            console.log("response from yes function")
        })
    }

    $scope.no = function(question){
        questionFctry.no(question, function(response){
            console.log("response from no function")
        })
    }
}

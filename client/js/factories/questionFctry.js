app.factory('questionFctry', ['$http', questionFctry])

function questionFctry($http){
    console.log("questionFctry factory loaded!!!.. ")

    return {

        index: function(success){
            console.log("questionFctry.index fired!!!")
            $http.get('/questions').then(success);
        },
        create: function(newQuestion, success){
            console.log("questionFctry.create fired!!!!", newQuestion)
            $http.post('/questions', newQuestion).then(success);
        },
        show: function(id, success){
            console.log("questionFctry.show fired!!")
            $http.get('/questions/'+id).then(success);
        },        

    }
}
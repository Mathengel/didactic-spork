app.factory('answerFctry', ['$http', answerFctry])

function answerFctry($http){
    console.log("answerFctry factory loaded!!!.. ")

    return {

        index: function(success){
            console.log("answerFctry.index fired!!!")
            $http.get('/answers/'+id+'/question').then(success);
        },
        create: function(newAnswer, id, success){
            console.log("answerFctry.create fired!!!!", newAnswer)
            $http.post('/answers/'+id, newAnswer).then(success);
        },
        like: function(answer, success){
            console.log("answerFctry.like fired!!", answer._id)
            answer.likes ++
            $http.post('/answers/'+answer._id+'/like', answer).then(success);
        },         

    }
}
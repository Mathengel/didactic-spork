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
            $http.post('/questions/'+newQuestion._user._id, newQuestion).then(success);
        },

        show: function(id, success){
            console.log("questionFctry.show fired!!")
            $http.get('/questions/'+id).then(success);
        }, 
        yes: function(question, success){
            console.log("questionFctry.yes fired!!", question._id)
            question.yes ++
            $http.post('/questions/'+question._id+'/yes', question).then(success);
        },
        no: function(question, success){
            console.log("questionFctry.no fired!!", question._id)
            question.no ++
            $http.post('/questions/'+question._id+'/no', question).then(success);
        }        

    }
}
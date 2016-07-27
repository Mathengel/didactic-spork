app.factory('topicFctry', ['$http', topicFctry])

function topicFctry($http){
    console.log("topicFctry factory loaded!!!.. ")

    return {

        index: function(success){
            console.log("topicFctry.index fired!!!")
            $http.get('/topics').then(success);
        },

        create: function(newTopic, success){
            console.log("topicFctry.create fired!!!!", newTopic)
            $http.post('/topics/', newTopic).then(success);
        },

        show: function(id, success){
            console.log("topicFctry.show fired!!")
            $http.get('/topics/'+id).then(success);
        }

    }
}
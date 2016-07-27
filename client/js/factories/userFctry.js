app.factory('userFctry', ['$http', '$location', userFctry])

function userFctry($http, $location){
    var factory = {};
    console.log("userFctry factory loaded!!!.. ")
    var thisUser = null;
    var message = {name: "no current user"}
    // factory.show = function(id, success){
    //         console.log("userFctry.show fired!!!")
    //         $http.get('/users/'+id).then(success);
    //     }
    factory.checkUsers = function(user, callback) {
        //initialize a flag
        var newUser = true;
        // go get all existsing users, and see if any match the recently entered username. If one does, switch flag to false, set thisUser(which will be the persistent session like usermodel), and redirect to the dashboard.
        $http.get('/users').success(function(data){
            angular.forEach(data, function(oldUser){
                if(user.name == oldUser.name){
                    console.log(user.name, "matches", oldUser.name);
                    newUser = false;
                    thisUser = oldUser
                    $location.path('/dashboard')
                }
            })
            // if the flag, newUser remains true, that means we have a new user. Now put that user in the database via a POST and set thisUser to the data we get back. Then redirect.
            if(newUser == true){
                console.log("This user is new, creating a spot in the database for them.", user)
                $http.post('/users', user).success(function(data){
                    console.log("new user created")
                    thisUser = data;
                    $location.path('/dashboard')
                })
            }
        })
        callback(thisUser);
    }

    factory.getCurrentUser = function(callback){
        if(thisUser){
            callback(thisUser);
        }
        else{
            callback(message);
        }
    }

    return factory;
        

}
app.factory('userFctry', ['$http', '$location', '$localStorage', userFctry])

function userFctry($http, $location, $localStorage){
    var factory = {};
    console.log("userFctry factory loaded!!!.. ")
    var thisUser = null;
    var message = {name: "no current user"}

    factory.checkUsers = function(user, callback) {
        //initialize a flag
        var newUser = true;
        // go get all existsing users, and see if any match the recently entered username. If one does, switch flag to false, set thisUser(which will be the persistent session like usermodel), and redirect to the home.
        $http.get('/users').success(function(data){
            console.log("checking all users,", data)
            angular.forEach(data, function(oldUser){
                if(user.name == oldUser.name){
                    console.log(user.name, "matches", oldUser.name);
                    newUser = false;
                    $localStorage.thisUser = oldUser
                    $location.path('/home')
                }
            })
            // if the flag, newUser remains true, that means we have a new user. Now put that user in the database via a POST and set thisUser to the data we get back. Then redirect.
            if(newUser == true){
                console.log("This user is new, creating a spot in the database for them.", user)
                $http.post('/users', user).success(function(data){
                    console.log("new user created")
                    $localStorage.thisUser = data;
                    $location.path('/home')
                })
            }
        })
        callback($localStorage.thisUser);
    }

    factory.getCurrentUser = function(callback){
        if($localStorage.hasOwnProperty('thisUser')){
            callback($localStorage.thisUser);
        }
        else{
            $location.path('/');
        }
    }

    factory.logout = function(callback){
        delete $localStorage.thisUser;
        location.reload()
    }

    return factory;
        

}
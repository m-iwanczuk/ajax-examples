$(document).ready(function(){

    function getUserData(nextUser){

        $.getJSON('https://jsonplaceholder.typicode.com/users/'+nextUser, + function(jsonUserData){

            console.log(jsonUserData);
            let userDataList = $('<ul></ul>').addClass('user');
            userDataList.append('<li>' + jsonUserData.name + '</li>')
            userDataList.append('<li>' + jsonUserData.phone + '</li>')
            userDataList.append('<li>' + jsonUserData.address.city + '</li>')

                
            $('#users-list').append(userDataList);
        });
    }

    getUserData(1);

    $('#get-new-data').click(function(){
        let userListCount = $('.user').length;
        getUserData(userListCount + 1);
    });

});
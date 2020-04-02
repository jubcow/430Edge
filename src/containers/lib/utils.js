require("isomorphic-fetch");

function getLogin(user_info){
        const header = {'Accept' : "application/json", "Content-Type": "application/x-www-form-urlencoded"};
        const searchParams = new URLSearchParams(user_info);

        return fetch(`http://35.192.57.209:8000/login`,
        {method: "POST",
         headers: header,
         body: searchParams }).then(function(resp){
             return resp.json();
         });

}

function handleError(error){
        console.warn(error);
        return null;

}

module.exports = {
 getLogin: function(login_info){
        return getLogin(login_info).catch(handleError);
    }
}
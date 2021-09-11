const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos/';
//execute request
Http.open("GET",url);
Http.send();
//http request response callback
Http.onreadystatechange = function(event){
    //check for successful request status:
    if(this.readyState == 4 && this.status == 200){
        //Read content in json format:
        let json = JSON.parse(Http.responseText);
        console.log(Http);
        console.log(json);
        //extract properties from object
        let id = json.id;
        let name = json.name;
        //update application view with received data
        let userId = document.getElementById("id");
        if(userId) userId.innerHTML = id;
        let userName = document.getElementById("name");
        if(userName) userName.innerHTML = name;  
    }
};


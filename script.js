// REquest to server using API

// Step 1 Create request object
var request = new XMLHttpRequest();

// Step 2 Open my request connection 
request.open('GET','https://jsonplaceholder.typicode.com/posts');

// Step 3 Send a request
request.send();

// Step 4 Data After Response
request.onload = function(){

    //getting the  data from the response
    var data = JSON.parse(this.response);
    //Looping through the data length 
    for(i=0;i<data.length;i++){
        console.log(data[i].id); //printing only the ID from the Data response
    }
}


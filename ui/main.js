//counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //create the request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLRequest.DONE){
         //Take some action
         if(request.status === 200) {
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
         }
        }
        //Not done yet
    };
    
    //Make tha request
    request.open('GET', 'http://someonenikhilkr.imad.hasura-app.io', true);
    request.send(null);
};

//submit name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick= function () {
    //Make a request to the server and send name
    //create the request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLRequest.DONE){
         //Take some action
         if(request.status === 200) {
            var names = request.response.Text;
            names = JSON.parse(names);
            var list = '';
            for (var i=0;i<names.length;i++) {
              list+= '<li>' + names[i] + '</li>';
          }
        var ul=document.getElementById('namelist');
        ul.innerHTML = list; 
         }
        }
        //Not done yet
    };
    
    //Make tha request
    request.open('GET', 'http://someonenikhilkr.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    //capture a list of names and render it as a list.
    
};

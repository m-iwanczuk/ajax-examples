fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())

           /*  w rozwinięciu robi to:
                .then(function(response){
                return response.json();
            }); */ 
    
  .then(json => {
      console.log(json)
      json.forEach(elem => {
          console.log(elem);

/* stworz div z klasa post */

        let singlePostDiv = document.createElement('div');
        singlePostDiv.classList.add('post');
       

/* stworz h2 i ustaw w nim tekst bedacy wartoscia pola title */

        let postHeading = document.createElement('h2');
        postHeading.classList.add('title');
        postHeading.innerText = elem.title


/* stworz p i ustaw w nim tekst bedacy waroscia pola body */

        let postContent = document.createElement('p');
        postContent.classList.add('content');
        postContent.innerText = elem.body


/* dodaj h2 i p jako dzieci div.post */

        singlePostDiv.appendChild(postHeading);
        singlePostDiv.appendChild(postContent);


/* dodaj div.post jako dziecko elementu div$post-list z dokumentu HTML */

document.getElementById('posts-list').appendChild(singlePostDiv);

      });


      
                /* // bez strzałek
                json.forEach(function(elem){

                }); */


  /*     for(var postList in json) {
        console.log(postList);
        var par = document.createElement('div');
        par.innerText = jsonData[prop];
        userDataContainer.appendChild(par);
    } */

});

           /*  w rozwinięciu robi to:
                .then(function(jsonResponseObject){
                console.log(jsonResponseObject);
            }); */
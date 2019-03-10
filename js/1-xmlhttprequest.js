'use strict';



// definicja funkcji ajax
function ajax( method, url ) {
    
    
    // utworzenie obiektu klasy XMLHttpRequest - nie tworzymy jej - jest juz zaimplementowana 
    var httpReq = new XMLHttpRequest();

    console.log(httpReq);
    
    
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
    
    
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function() {

        console.log(httpReq.readyState);
        
        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

                //zamieniamy zwrócone dane na JSON

                var jsonData = JSON.parse(returnData);
                var userDataContainer = document.getElementById('user-data');
                
                
                console.log(jsonData);     


                /*     var parFirst = document.createElement('p');
                    parFirst.innerText = jsonData.userName;
                    
                    userDataContainer.appendChild(parFirst);

                    var parSec = document.createElement('p');
                    parSec.innerText = jsonData.userId;
                    
                    userDataContainer.appendChild(parSec);

                    var parThrd = document.createElement('p');
                    parThrd.innerText = jsonData.userURL;
                    
                    userDataContainer.appendChild(parThrd); */
                
                for(var prop in jsonData) {   // wyciągnij nazwy kluczy z obiektu jsonData
                    console.log(prop);
                    var par = document.createElement('p');
                    par.innerText = jsonData[prop];
                    userDataContainer.appendChild(par);
                }


            
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
                
            }
            
        }
    
    }


    // wysłanie danych do serwera
    httpReq.send();
}






// wywołujemy naszą funkcję ajax() :)    
ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" );







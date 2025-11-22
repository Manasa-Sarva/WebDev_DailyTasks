                                                    // DOM Steps 
                                                    
var btn = document.querySelector('button')          // 1. Selecting HTML Element
var h = document.querySelector('h5')

count = 0;

btn.addEventListener('click', function(){           // 2. Adding an Eventlistener

    if(count===0){
    h.innerHTML = "Friend";                         // 3. Changing HTML  
    h.style.color = "Green"                         // 4. Changing CSS
    btn.innerHTML = "Remove Friend"
    count = 1;
    }
    else {
    h.innerHTML = "Stranger";
    h.style.color = "Black"
    btn.innerHTML = "Add Friend"
    }
}) 
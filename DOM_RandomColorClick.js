/** @type {HTMLElement} */ 

var box = document.querySelector('#chngBox');
var btn = document.querySelector('#btn');


btn.addEventListener('click',function(){

        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        
        var x = Math.floor(Math.random()*256);
        var y = Math.floor(Math.random()*256);
        var z = Math.floor(Math.random()*256);

        box.style.backgroundColor = `rgb(${r},${g},${b})`;
        box.style.borderColor = `rgb(${x},${y},${z})`;

        console.log({r,g,b},{x,y,z});

    
    }
 )   
    


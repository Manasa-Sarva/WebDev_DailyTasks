let btn = document.querySelector("#btn");
        let status = document.querySelector("#status");

        var arr=[
            {
                image:"https://www.bing.com/th/id/OIP.nyny4CCtVL8HMowuYlM6cAHaK-?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                username:"Mahesh Babu"      
            },
            {
                image:"https://th.bing.com/th/id/OIP.Jw6z4LCtEvrkSfeRFC9wlgHaKm?w=208&h=299&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                username:"Ram Charan"
            },
            {
                image:"https://www.bing.com/th/id/OIP.5013p1zAY9UzpQYS1u98vQAAAA?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                username:"Prabhas"
            },
            {
                image:"https://th.bing.com/th/id/OIP.MkI9SQXrgSoSFBD2V5LHgAHaIN?w=208&h=231&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                username:"NTR"
            },
            {
                image:"https://th.bing.com/th/id/OIP.zxHHY2usbFLfsUvUhghmKAHaFj?w=208&h=156&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                username:"Pawan"
            }
            
            
        ]
        var sum=''
        arr.forEach(function(e){
            console.log(e)

            sum=sum+`
                <div class="card">
                    <img src="${e.image}" alt="User">
                    <h2>${e.username}</h2>
                    <h4 class="status">Stranger</h4>
                    <button class="btn">Add Friend</button>
                    </div>
                </div>`
        })
        console.log(sum)
        var main = document.querySelector('#main')
        main.innerHTML=sum

        let buttons = document.querySelectorAll(".btn");
        let statuses = document.querySelectorAll(".status");

        buttons.forEach(function(button, index) {
            button.addEventListener("click", function(){               
                if (button.innerText === "Add Friend") {
                    button.innerText = "Remove Friend";
                    statuses[index].innerText = "Friend";
                    statuses[index].style.color = "green";
                } else {
                    button.innerText = "Add Friend";
                    statuses[index].innerText = "Stranger";
                    statuses[index].style.color = "black";
                }
            });
        });
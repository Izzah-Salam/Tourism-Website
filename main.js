// set date dynamically
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear()



// close Links

var toggleBtn = document.getElementById("toggle-btn")
var LinksContainer = document.getElementById("links-container")
var Links = document.getElementById("links")


toggleBtn.addEventListener("click",function(){
    console.log("you click the toggle btn");
    LinksContainer.classList.remove("-translate-y-[100%]")
})
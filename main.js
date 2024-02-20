// set date dynamically
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear()




var toggleBtn = document.getElementById("toggle-btn")
var LinksContainer = document.getElementById("links-container")
var Links = document.getElementById("links")
var cross = document.getElementById("cross")

// toggle
toggleBtn.addEventListener("click",function(){
    console.log("you click the toggle btn");
    LinksContainer.classList.toggle("-translate-y-[100%]")
})




// fixed navbad
// pageoffset is a read only  window property that returns the numbers of pixels 
// the documents has been scrolled vertically

const body = document.body; // Define the body variable
const navbar = document.getElementById("navbar");
const colour = document.querySelector(".colour")

window.addEventListener("scroll", () => {
   const scrollHeight = window.pageYOffset;
   if (scrollHeight > 0) {
      navbar.style.background = "skyBlue";
       
      
   } else {
      navbar.style.background = ""; // Reset to original background color when back to top
   }
});

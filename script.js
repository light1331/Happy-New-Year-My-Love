function heartEffect() {
let pageOne = document.querySelector("#pageOne");
let love = document.querySelector("#pageOne i");

pageOne.addEventListener("dblclick", function() {
   love.style.transform = "translate(-50%, -50%) scale(1)"
   love.style.opacity = 1

   setTimeout(function() {
      love.style.opacity = "0"
      love.style.transform = "translate(-50%, -50%) scale(0)"
   }, 1300)
})
}
heartEffect(); /*---Code For The Heart Effect---*/

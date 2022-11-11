const gamelink = document.getElementById("btnGame")
var gameURL = "http://google.com.br"

gamelink.setAttribute("target", "_blank")
gamelink.setAttribute("href",gameURL )

function openTheGame(){
    setTimeout(()=>{
        gamelink.click()
      },3000)
}

document.addEventListener("DOMContentLoaded", () => {
  
});

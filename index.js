const MarkAll = document.querySelector(".MarkR")
const UnRead = document.querySelectorAll(".top3")
const RemoveDot = document.querySelectorAll(".redDot")


MarkAll.addEventListener("click", ReadAll)

function ReadAll() {
  for (let i = 0; i < UnRead.length; i++){
    UnRead[i].style.backgroundColor = "hsl(0, 0%, 100%)"
  }
  for (let i = 0; i < RemoveDot.length; i++){
    RemoveDot[i].style.display = "none"
  }

  
 
}
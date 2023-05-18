 const pTop = document.querySelectorAll(".pTop")

 
 window.onload = () => {
    for (let pAll = 0; pAll < pTop.length;pAll++) {
    let newAr =     Array.from(pTop[pAll].innerHTML)
    pTop[pAll].innerHTML = "";
      for (let ar = 0; ar < newAr.length; ar++) {
     let newSpans = `<span> ${newAr[ar]} </span>`
    //  Array.from(  newSpans).forEach(element => {
        // element.style.color = "red"
    //  });
    // newSpans.style.animation = 
    //  console.log(newSpans);
    pTop[pAll].innerHTML += newSpans
    // newSpans.style.animation = "moveUp 1s ease-in-out forwards"
   let spanArray = Array.from(pTop[pAll].children)
  let el = spanArray.forEach((element,index) => {
    element.style.animationDelay = index / 100 * 2 + "s"
  })
  let lastSpan = spanArray[spanArray.length - 1]
  let ad = document.querySelector(".dul") 
lastSpan.onanimationend = () => {
    // lastSpan.parentNode.parentNode.style.height = "400px"
    ad.style.animation ="h 1s ease-in-out forwards 0.9s"
    // lastSpan.parentNode.parentNode.style.flexDirection = "column"
}
    
      }
}
 }
//  for (let pOne = 0; pOne < pTop.length; pOne++)
 document.querySelector(".dul").onanimationstart = (e) => {
    // console.log(40);
    setTimeout(() => {
 for (let pOne = 0; pOne < pTop.length; pOne++) {
  pTop[pOne].style.marginTop = "400px"
    
 }

}, 0100)
 

 } 
//  console.log(new);
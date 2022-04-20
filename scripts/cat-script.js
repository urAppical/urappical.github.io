// dont forget to use google developer tools (f12) for debugging
var cat = document.getElementById("cat")

// you cant pass paramenter to anonymos functuion, only declare in bracets
cat.addEventListener("click", function(){
    //alert("aaaaaaaaaaa")
    if (!document.querySelector("#cat-note")){
        
        alert("Gotcha!")

        cat.setAttribute("src", "images/gru-with-gun.png")
        const parag = document.createElement("p")
        parag.setAttribute("id", "cat-note")
        const conc = document.querySelector("section.conclusion")
        parag.textContent = "Don't you dare to touch my cat! (it's not mine actually)."
        parag.setAttribute("class", "comment")
        conc.appendChild(parag)
    }
})


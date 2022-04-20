var cat = document.getElementById("cat")

// you cant pass paramenter to anonymos functuion, only declare in bracets
cat.addEventListener("click", function(){
    //alert("aaaaaaaaaaa")
    cat.setAttribute("src", "images/gru-with-gun.png")
})
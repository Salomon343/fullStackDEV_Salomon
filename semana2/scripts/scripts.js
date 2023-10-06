window.addEventListener("scroll", function(){
    var link = document.querySelector("nav a");
    var section = document.getElementById("a");

    var sectionTop = section.getBoundingClientRect().top;
    var scrollThreshold = 100;

    if(sectionTop<scrollThreshold){
        link.classList.add("active");
    } else{
        link.classList.remove("active");
          }
});

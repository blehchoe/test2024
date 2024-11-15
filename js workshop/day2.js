let buttonStyle, words; 


buttonStyle = document.getElementById("styleChangingButton");
words = document.getElementById("words");

buttonStyle.addEventListener('click',function (){
    console.log("hiii");
    words.style.color ="red"; 
    words.style.backgroundColor="black"; 
    words.style.fontSize = "40px"; 
    words.style.textAlign ="left"; 
    words.style.border = "20px solid pink";
}); 






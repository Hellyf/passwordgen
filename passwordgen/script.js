
var generateBtn = document.querySelector("#generate");

var lowercasechar = "abcdefghijklmopqrstuvwxyzéç";
var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYSÉÀÇ";
var numericalchar = "0123456789";
var specialchar =  "!@#$%?&*()_+";

// Write password to the #password input
function writePassword() {
    var passwordchar = "";
    var password = "";
    var passwordlengthuser = prompt("what lengh do you want your passeword to have between between 8-128");
    passwordlengthuser = parseInt(passwordlengthuser);
   
    if (passwordlengthuser < 8){
         alert ("you need to choose a number superior then 7");
         return"";
         }
         
     if (passwordlengthuser > 128) {
         alert("you need to choose a number inferior then 128");
         return "";
     }
     var lowercasecharacterschoice = confirm("do you want lowercase characters");
    
     if (lowercasecharacterschoice){
         passwordchar += lowercasechar;
     }
     var uppercasecharacterschoice = confirm("do you want to up uppercase letters");
     if( uppercasecharacterschoice){
         passwordchar += uppercasechar;
     }
     var numericalcharacterschoice = confirm("do you want numbers");
     if (numericalcharaterschoise){
         passwordchar += numericalchar;
     }  
     var specialcharacterchoice = confirm("want to add special characters");

     if (specialcharacterchoice){
         passwordchar += specialchar;
     }
     for ( var i = 0;i<passwordlengthuser; i++) {
         password = passwordchar [Math.floor(math.random() * passwordchar.length)]
     }
     
     funtion writePassword(password){

        var password = generatePassword();
        var pwtextarea= document.getElementById("#password");
        pwtextarea.value=password;
        return ("")
     }
    console.log(writePassword)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
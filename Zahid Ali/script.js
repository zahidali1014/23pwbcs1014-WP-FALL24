const lines = ["Welcome to Fit&Smart", "Your journey to health and fitness starts here."];
let lineIndex = 0; 
let charIndex = 0; 
const typingSpeed = 50; 


function typeText() {

    const typingTextElement = document.getElementById("typing-text");


    if (lineIndex < lines.length) {


    
        if (charIndex < lines[lineIndex].length) {
        
            typingTextElement.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++; 
            setTimeout(typeText, typingSpeed); 
        } else {
        
            charIndex = 0; 
            lineIndex++; 
            typingTextElement.innerHTML += "<br>"; 

            
            setTimeout(typeText, typingSpeed * 3);
        }
    }
}

typeText();
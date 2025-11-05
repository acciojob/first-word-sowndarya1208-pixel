function firstWord(s) {
  // your code here
	if (s === "") {
        return s;
    }
    
    // Trim the string to remove leading/trailing spaces
    const trimmed = s.trim();
    
    // Find the index of the first space
    const spaceIndex = trimmed.indexOf(' ');
    
    // If no space is found, return the entire trimmed string
    if (spaceIndex === -1) {
        return trimmed;
    }
    
    // Return the substring from start to the first space
    return trimmed.substring(0, spaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
console. log(firstWord('see and stop'));

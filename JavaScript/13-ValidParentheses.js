var isValid = function(s) {
    const brackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    
    let temp = []
    let left = 0
    
    if(s.length <= 1 || s.length %2 != 0) return false
       
    for(let i=0; i<s.length; i++){
        // action for left side bracket
        if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
            temp.push(brackets[s[i]])
            left += 1
        }
        
        // action for right side
        else if (s[i] == temp[temp.length-1]){
            temp.pop()
            left -= 1
        }
        
        // check there is any right side which don't have left side 
        else {
            left -= 1
        }
    }
    
    if(temp.length == 0 && left == 0) return true
    
    return false
};

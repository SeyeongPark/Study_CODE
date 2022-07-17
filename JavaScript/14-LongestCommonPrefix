var longestCommonPrefix = function(strs) {
        if(!strs.length) {
            return '';
        }
    
        for(let i = 0; i < strs[0].length; i++) {
            
            for(let s of strs) {
                if(s[i] !== strs[0][i]) {
                    return s.slice(0, i);
                }
            }
            
        }
        return strs[0];
    
    };

//https://leetcode.com/problems/longest-common-prefix/discuss/833959/Javascript-Solution%3A14

// 3. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without indexOfRepeatCharing characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.



//interate the string,while record currentLength of this substring
//if we find the repeating repeating characters
//first interate the string after this repeating characters
//then if currentLength> maxLen ,then maxLen = currentLength
//ryan


const lengthOfLongestSubstring = function(s) {
    if(s===''){
        return 0;
    }
    let maxLen=1,
    currentLen=1,
    len=s.length,
    i,
    repeat;

    for(i=1; i<len; i++){

        const subString =s.substr(i-currentLen,currentLen);

        indexOfRepeatChar= subString.indexOf(s.substr(i,1));

        if(indexOfRepeatChar === -1){      //if current letter(index i) is not in this subString
            currentLen++;
        }
        else{
            currentLen -= indexOfRepeatChar;
        }
        if(maxLen<currentLen){
            maxLen = currentLen;
        }
    }
    return maxLen;
};






//the scond approach

// var lengthOfLongestSubstring = function(s) {
//     const length = s.length;
//     if (length < 1) {
//       return length;
//     };
//     var longest = 1;
//     var currentLength = 1;
//     var subStart = 0;
//     var charPosition = {};
//     charPosition[s[0]]] = 0;
//
//     for (var i = 1; i < length; i++) {
//         let char = s[i];
//         var positionCharPrev = charPosition[char];
//
//         if (positionCharPrev !== undefined && positionCharPrev >= subStart) {
//             subStart = positionCharPrev + 1;
//             currentLength = i - subStart + 1;
//         }
//
//         else {
//             currentLength++;
//             if (currentLength > longest) longest = currentLength;
//         }
//         charPosition[char] = i;
//     }
//     return longest;
// };

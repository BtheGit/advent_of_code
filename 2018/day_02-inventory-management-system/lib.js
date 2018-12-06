const getLetterCounts = str => {
    const map = {};
    for(let i = 0; i < str.length; i++){
        const letter = str[i];
        if(map[letter]){
            map[letter]++;
        }
        else{
            map[letter] = 1;
        }
    }
    return Object.values(map);
}

const testFor2and3 = arr => arr.map(counts => ({ hasTwo: counts.includes(2), hasThree: counts.includes(3)}))

const countInstances = arr => {
    let hasTwo = 0;
    let hasThree = 0;
    const letterCounts = arr.map(str => getLetterCounts(str));
    const countArr = testFor2and3(letterCounts);
    for(let counts of countArr){
        if(counts.hasTwo){
            hasTwo++
        }
        if(counts.hasThree){
            hasThree++
        }
    }
    return (hasTwo * hasThree)
}
const matchTest = (base, element) => {
    let failedCount = 0;
    for(let i = 0; i < element.length; i++){
        const testLetter = element[i];
        const baseLetter = base[i];
        if(testLetter !== baseLetter){
            failedCount++;
        }
        if(failedCount > 1){
            return false;
        }
    }
    return true;
}

const getCommonLetters = (str1, str2) => str1.split('').filter((ltr, idx) => ltr === str2[idx]).join('');

const findMatch = arr => {
    while(arr.length > 1){
        const base = arr.pop();
        for(let test of arr){
            const isMatch = matchTest(base, test);
            if(isMatch){
                return getCommonLetters(base, test);
            }
        }
    }
}

module.exports = {
    getLetterCounts,
    testFor2and3,
    countInstances,
    matchTest,
    getCommonLetters,
    findMatch,
}
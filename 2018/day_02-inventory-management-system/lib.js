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

module.exports = {
    getLetterCounts,
    testFor2and3,
    countInstances,
}
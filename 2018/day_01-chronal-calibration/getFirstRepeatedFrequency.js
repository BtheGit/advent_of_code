const getFirstRepeatedFrequency = arr => {
    // Create a map to track calculated frequencies and track their count (or Set)
    // Loop through array adding each calculated frequency to the map until a repeated frequency is found
    const calculatedFrequencies = new Set([0]);
    let calculatedFrequency = 0;
    let result = null;
    while(result == null){
        for(let i = 0; i < arr.length; i++){
            const frequency = arr[i];
            calculatedFrequency += frequency;
            if(calculatedFrequencies.has(calculatedFrequency)){
                result = calculatedFrequency;
                break;
            }
            else {
                calculatedFrequencies.add(calculatedFrequency);
            }
        }
    }
    return result;
}

module.exports = getFirstRepeatedFrequency;
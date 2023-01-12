module.exports = function toReadable (n) {
    const unit = { 
        0: 'zero', 
        1: 'one', 
        2: 'two', 
        3: 'three', 
        4: "four", 
        5: 'five', 
        6: 'six', 
        7: "seven", 
        8: 'eight', 
        9: 'nine', 
        10: 'ten', 
        11: 'eleven', 
        12: 'twelve', 
        13: 'thirteen', 
        14: 'fourteen', 
        15: 'fifteen', 
        16: 'sixteen', 
        17: 'seventeen',       
        18: 'eighteen', 
        19: 'nineteen', 
        20: 'twenty' 
    }; 
    const dozens = { 
        20: 'twenty', 
        30: 'thirty', 
        40: 'forty', 
        50: 'fifty', 
        60: 'sixty', 
        70: 'seventy', 
        80: 'eighty', 
        90: 'ninety',     
    }; 
     
    let translatedNumber = ''; 
    const numberToString = n.toString(); 
    // 0 - 20
    if (numberToString.length === 1 || numberToString.length === 2 && n <= 20){ 
        translatedNumber = unit[n]; 
    }; 
    // 21 - 99
    if (numberToString.length === 2 && n > 20 && n % 10 !== 0){ 
        translatedNumber = `${dozens[Number(numberToString[0] + '0')]} ${unit[Number(numberToString[1])]}`; 
    } else if (numberToString.length === 2 && n > 20 && n % 10 === 0) {
        translatedNumber = dozens[n];
    };
    // 100 - 999
    if (numberToString.length === 3 && n % 100 > 20 && n % 10 !== 0) {
        translatedNumber = `${unit[Number(numberToString[0])]} hundred ${dozens[Number(numberToString[1] + '0')]} ${unit[Number(numberToString[2])]}`;
    } else if (numberToString.length === 3 && n % 100 <= 20 && n % 100 !== 0) {
        translatedNumber = `${unit[Number(numberToString[0])]} hundred ${unit[n % 100]}`;
    } else if (numberToString.length === 3 && n % 100 === 0) {
        translatedNumber = `${unit[Number(numberToString[0])]} hundred`;
    } else if (numberToString.length === 3 && n % 10 === 0) {
        translatedNumber = `${unit[Number(numberToString[0])]} hundred ${dozens[Number(numberToString[1] + '0')]}`;
    };
     
    return translatedNumber;
}

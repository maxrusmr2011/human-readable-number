module.exports = function toReadable(number) {
    let num = number + '';
    let len = num.length;
    let res = []
    if (num === '0') {
        return 'zero';
    }
    let oneNum = nn => {
        switch (nn) {
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
        }
    }
    if (len === 1) {
        return oneNum(num);
    }
    if (num[len - 2] !== '1' && num[len - 1] !== '0') {
        res.push(oneNum(num[len - 1]));
    }
    if (num[len - 2] === '1') {
        switch (num[len - 2] + num[len - 1]) {
            case '10': res.push('ten'); break;
            case '11': res.push('eleven'); break;
            case '12': res.push('twelve'); break;
            case '13': res.push('thirteen'); break;
            case '14': res.push('fourteen'); break;
            case '15': res.push('fifteen'); break;
            case '16': res.push('sixteen'); break;
            case '17': res.push('seventeen'); break;
            case '18': res.push('eighteen'); break;
            case '19': res.push('nineteen'); break;
        }
    }

    if (num[len - 2] !== '0' && num[len - 2] !== '1') {
        switch (num[len - 2]) {
            case '2': res.unshift('twenty'); break;
            case '3': res.unshift('thirty'); break;
            case '4': res.unshift('forty'); break;
            case '5': res.unshift('fifty'); break;
            case '6': res.unshift('sixty'); break;
            case '7': res.unshift('seventy'); break;
            case '8': res.unshift('eighty'); break;
            case '9': res.unshift('ninety'); break;
        }
    }
    if (num.length === 3) {
        res.unshift(oneNum(num[0])+' hundred');
    }

    return res.join(' ');
}

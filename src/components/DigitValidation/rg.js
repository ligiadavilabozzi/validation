const ValidationRg = (rg) => {

    let result = rg

    const INVALID_RG = [
        '000000000',
        '111111111',
        '222222222',
        '333333333',
        '444444444',
        '555555555',
        '666666666',
        '777777777',
        '888888888',
        '999999999',
    ];


    if (!result || result.length !== 9 || INVALID_RG.includes(result)) {
        return false;
    }

    let sum = parseInt(result[8], 10) * 100;

    for (let i = 0; i < 8; i += 1) {
        sum += parseInt(result[i], 10) * (2 + i);
        sum % 11 === 0;
    }


    return result
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");;
};
console.log(ValidationRg('362683827'))
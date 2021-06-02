function validationCpf(cpf){
    if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var result = cpf;
    [9,10].forEach(function(j){
        var sum = 0, remnant;
        cpf.split(/(?=)/).splice(0,j).forEach(function(event, i){
            sum += parseInt(event) * ((j+2)-(i+1));
        });
        remnant = sum % 11;
        remnant = (remnant <2)?0:11-remnant;
        if(remnant != cpf.substring(j, j+1)) result = false;
    });
    return result
    .replace(/\D/g, '')
.replace(/(\d{3})(\d)/, '$1.$2')
.replace(/(\d{3})(\d)/, '$1.$2')
.replace(/(\d{3})(\d{1,2})/, '$1-$2') 
;
}

console.log(validationCpf('40956958893'))
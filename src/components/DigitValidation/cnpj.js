function validarCNPJ(cnpj) {
    var result = cnpj
  
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;

    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         

    cnpjlength = cnpj.length - 2
    numbers  = cnpj.substring(0,cnpjlength);
    digits = cnpj.substring(cnpjlength);
    sum = 0;
    pos = cnpjlength - 7;
    for (i = cnpjlength; i >= 1; i--) {
        sum += numbers.charAt(cnpjlength - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    final = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (final != digits.charAt(0))
        return false;
         
           
          return result
          .replace(/\D/g, '')
          .replace(/^(\d{2})(\d)/, "$1.$2")
          .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
          .replace(/\.(\d{3})(\d)/, ".$1/$2")
          .replace(/(\d{4})(\d)/, "$1-$2") 
    
}

console.log(validarCNPJ('19910576000114'))
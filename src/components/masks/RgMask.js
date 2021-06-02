export const RgMask = value => {
    return value
    .replace(/\D/g,"") 
    .replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4"); 
}



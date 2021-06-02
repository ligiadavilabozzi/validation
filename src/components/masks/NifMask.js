export const NifMask = value => {
    if (!/^[123]|45|5/.test(value)) {
        return ''
    } else{
        return value
            .replace(/\D/g, "");
    }
}
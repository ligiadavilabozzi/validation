export const SsnMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{3})/, '$1-')
        .replace(/-(\d{2})/, '-$1-')
        .replace(/(\d)-(\d{4}).*/, '$1-$2')
        
}

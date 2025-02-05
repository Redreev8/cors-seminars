const formatDateInput = (date: string) => {
    return date.split('.').reverse().join('-')
}

export default formatDateInput

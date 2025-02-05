const formatDate = (date: string) => {
    return date.split('-').reverse().join('.')
}

export default formatDate

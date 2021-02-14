export const numberFormat = (number = 0) => {
    const value = new Intl.NumberFormat('ko-KR').format(number)

    return value
}

export const moneyFormat = (number = 0) => {
    const money = numberFormat(number)

    return `${money}원`
}

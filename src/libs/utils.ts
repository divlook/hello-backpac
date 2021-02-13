export const moneyFormat = (number = 0) => {
    const money = new Intl.NumberFormat('ko-KR', {
        currency: 'KRW',
    }).format(number)

    return `${money}원`
}

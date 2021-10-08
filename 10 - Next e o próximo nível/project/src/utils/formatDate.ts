const useFormatDate = (date: string, option: 1 | 2): string => {
    /* 2020-01-01 */
    const year = date.slice(0, 4)
    let month = date.slice(5, 7)
    const day = date.slice(-2)

    switch (month) {
        case '01':
            month = 'jan'
            break

        case '02':
            month = 'fev'
            break

        case '03':
            month = 'mar'
            break

        case '04':
            month = 'abr'
            break

        case '05':
            month = 'mai'
            break

        case '06':
            month = 'jun'
            break

        case '07':
            month = 'jul'
            break

        case '08':
            month = 'ago'
            break

        case '09':
            month = 'set'
            break

        case '10':
            month = 'out'
            break

        case '11':
            month = 'nov'
            break

        case '12':
            month = 'dez'
            break
    }

    if (option === 1) {
        return `${day} ${month}. ${year}`
    } else {
        return `${
            month.charAt(0).toUpperCase() + month.slice(1)
        } ${day}, ${year}`
    }
}

export default useFormatDate

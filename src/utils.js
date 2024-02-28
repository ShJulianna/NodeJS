import {
    addDays,
    addMonths,
    addYears,
    getDate,
    getMonth,
    getYear,
    subDays,
    subMonths,
    subYears
} from "date-fns";

export const getCurrentDate = (arg) => {
    switch (arg) {
        case 'y':
        case 'year':
            console.log(new Date().getFullYear())
            break;
        case 'm':
        case  'month':
            console.log(new Date().getMonth() + 1)
            break;
        case 'd':
        case 'date':
            console.log(new Date().getDate())
            break;
        default:
            console.log(new Date().toISOString())
    }
}
export const addDate = (type, number) => {
    switch (type) {
        case 'y':
        case 'year':
            console.log(getYear(addYears(new Date(), Number(number))))
            break;
        case 'm':
        case  'month':
            console.log(getMonth(addMonths(new Date(), Number(number))) + 1 )
            break;
        case 'd':
        case 'date':
            console.log(getDate(addDays(new Date(), Number(number))))
            break;
        default:
            console.log("invalid argument")
    }
}

export const subDate = (type, number) => {
    switch (type) {
        case 'y':
        case 'year':
            console.log(getYear(subYears(new Date(), Number(number))))
            break;
        case 'm':
        case  'month':
            console.log(getMonth(subMonths(new Date(), Number(number))) + 1 )
            break;
        case 'd':
        case 'date':
            console.log(getDate(subDays(new Date(), Number(number))))
            break;
        default:
            console.log("invalid argument")
    }
}

export const validateArgs = (arg) => {
    const rightArgs = ['year', 'month', "date", "y", "m", "d"]
    return Object.values(arg).length < 5 && rightArgs.includes(Object.keys(arg)[1])
}
// function isLeapYear(year) {
//     const reminder = year % 4;
//     if (reminder === 0) {
//         console.log('year is leap year', year);
//     }
//     else {
//         console.log('year is not leap year', year);
//     }

// }
// isLeapYear(1980);
// isLeapYear(1966);






function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0) {
        return true;
    }
    else {
        return false;
    }

}

const isMyYearLeapYear = isLeapYear(1990);
console.log('my year:', isMyYearLeapYear);
isHerYearLeapYear = isLeapYear(1960);
console.log('her year:', isHerYearLeapYear);

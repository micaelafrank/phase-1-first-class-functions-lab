// Code your solution in this file!

// const returnFirstTwoDrivers = function (array) {
//     return array.slice(0, 2);
// }

// const returnLastTwoDrivers = function (array) {
//     return array.slice(-2);
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function priceMultiplier(fare){
//     console.log(fare*num);
//     return fare * num;
// }

// const createFareMultiplier = function (num){
//     return function (fare){
//         return fare*num;
//     };
// };

// const fareDoubler = function (fare) {
//     return fare*2;
// }

// const fareTripler = function (fare) {
//     return fare*3;
// }

// const selectDifferentDrivers = function (array, firstOrSecond){
//     return firstOrSecond(array);
// }







const drivers = ["Milan", "Sage", "Benjamin", "Shai", "Gil"]

const returnFirstTwoDrivers = array => array.slice(0, 2);

const returnLastTwoDrivers = array => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num => {
    return function (fare){
        return fare*num;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, cb) => cb(array);

console.log(createFareMultiplier(3));

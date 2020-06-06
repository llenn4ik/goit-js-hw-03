'use strict';

const findBestEmployee = function (employees) {
    const numberTasks = Object.entries(employees);
    let maxValue = 0;
    let desiredName;
    for (const [name, value] of numberTasks) {
        if (maxValue < value) {
            maxValue = value;
            desiredName = name;
        }
    }

    return desiredName;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
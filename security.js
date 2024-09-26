"use strict";
function analyzeSecurity(data) {
    return data.reduce((acc, curr) => ({
        truePositive: acc.truePositive + curr.truePositive,
        falsePositive: acc.falsePositive + curr.falsePositive,
        trueNegative: acc.trueNegative + curr.trueNegative,
        falseNegative: acc.falseNegative + curr.falseNegative,
    }), {
        truePositive: 0, falsePositive: 0, trueNegative: 0, falseNegative: 0,
    });
}
console.log(analyzeSecurity([
    {
        truePositive: 1,
        falsePositive: 4,
        trueNegative: 8,
        falseNegative: 2,
    },
    {
        truePositive: 2,
        falsePositive: 4,
        trueNegative: 16,
        falseNegative: 1,
    },
]));

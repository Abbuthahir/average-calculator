"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverage = void 0;
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error('Array must not be empty');
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
exports.calculateAverage = calculateAverage;

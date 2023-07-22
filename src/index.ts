// src/index.ts

export function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error('Array must not be empty');
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }

import Chance from 'chance';

const chance = new Chance();

export const randomColor = () => chance.color({ format: 'hex' });

export const randomPercent = Math.random;

export const randomInteger = (max: number, min: number = 0) => chance.integer({ min, max: max + 1});
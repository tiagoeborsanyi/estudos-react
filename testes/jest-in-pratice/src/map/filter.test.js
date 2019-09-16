'use strict';

import { expect } from 'chai';
import filter from './filter';

it('filter should be a function', () => {
    expect(filter).to.be.a('function');
});

it('filter([1, 2], (item) => item > 1) should return [2]', () => {
    expect(filter([1, 2], (item) => item > 1)).to.be.deep.equal([2]);
});

it('filter([1, 2], (item) => item < 2) should return [1]', () => {
    expect(filter([1, 2], (item) => item < 2)).to.be.deep.equal([1]);
});
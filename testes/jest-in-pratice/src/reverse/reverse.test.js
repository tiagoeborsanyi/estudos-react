'use strict';

import { expect } from 'chai';
import reverse from './reverse';

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function');
});

it('reverse([0, 2, 3], (item) => item) should return [3, 2, 0]', () => {
    expect(reverse([0, 2, 3], (item) => item)).to.be.deep.equal([3, 2, 0]);
});



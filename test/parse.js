'use strict';

const parse = require('../lib/parse');
const expect = require('chai').expect;

describe('parse test', () => {
  it('should return empty object', () => {
    const args = [];
    const result = parse(args);

    expect(result).to.be.a('object');
    expect(result).to.be.empty;
  });
});

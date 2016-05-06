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

  it('should return string value', () => {
    const args = ['test=string'];
    const result = parse(args);

    expect(result).to.deep.equal({test: 'string'});
  });

  it('should return array value', () => {
    const args = ['test=[array1, array2]'];
    const result = parse(args);

    expect(result).to.deep.equal({test: ['array1', 'array2']});
    expect(result.test).to.have.lengthOf(2);
  });

  it('should return array value(different writing)', () => {
    const args = ['test[]=array1'];
    const result = parse(args);

    expect(result).to.deep.equal({test: ['array1']});
    expect(result.test).to.have.lengthOf(1);
  });

  context('when creating nested object', () => {
    it('should return string value', () => {
      const args = ['test[key]=string'];
      const result = parse(args);

      expect(result).to.deep.equal({
        test: {
          key: 'string'
        }
      });
    });

    it('should return array value', () => {
      const args = ['test[key]=[array1, array2]'];
      const result = parse(args);

      expect(result).to.deep.equal({
        test: {
          key: ['array1', 'array2']
        }
      });
    });
  });

  context('when multiple arguments', () => {
    it('should return concated object', () => {
      const args = ['key1=hoge', 'key2=fuga'];
      const result = parse(args);

      expect(result).to.deep.equal({
        key1: 'hoge',
        key2: 'fuga'
      });
    });

    it('should return concated object and then it has parent key', () => {
      const args = ['key[test]=hoge', 'key[test2]=fuga'];
      const result = parse(args);

      expect(result).to.deep.equal({
        key: {
          test: 'hoge',
          test2: 'fuga'
        }
      });
    });

  });
});

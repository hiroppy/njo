'use strict';

const _ = require('lodash');

module.exports = (args) => {
  const result = {};

  for (const item of args) {
    const key = item.split('=')[0];
    let value = item.split('=')[1];

    if (key === undefined || value === undefined) return console.log('parse error');

    if (value[0] === '[' && value[value.length - 1] === ']') {
      value = value.substring(1, value.length - 1).split(',').map((e) => e.trim());

      // if value is []
      if (value[0] === '' && value.length === 1) value = [];
    }

    if (value[0] === '{' && value[value.length - 1] === '}') {
      value = value
        .substring(1, value.length - 1)
        .split(',')
        .map((e) => {
        })
        .join('');
    }

    const nestedObj = key.match(/\[\w*\]/g);

    if (nestedObj !== null) {
      const parentKey = key.substring(0, key.indexOf(nestedObj[0]));

      let tmpValue;

      nestedObj.reverse();

      nestedObj.map((e, i) => {
        const tmpKey = e.substring(1, e.length - 1);

        let current;

        if (i === 0) tmpValue = value;

        // array
        if (tmpKey === '') {
          current = [];
          current.push(tmpValue);
        }

        // object
        else {
          current = {};
          current[tmpKey] = tmpValue;
        }

        tmpValue = current;
      });

      if (!(parentKey in result)) {
        if (Array.isArray(tmpValue)) result[parentKey] = tmpValue;
        else result[parentKey] = tmpValue;
      }
      else {
        try {
          if (Array.isArray(tmpValue)) result[parentKey].push(tmpValue);
          else _.merge(result[parentKey], tmpValue);
        } catch (e) {
          return console.error('parse error');
        }
      }
    }
    else {
      result[key] = value;
    }
  }

  return result;
};

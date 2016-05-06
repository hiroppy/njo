# node-jo

[![Build Status](https://travis-ci.org/abouthiroppy/njo.svg?branch=master)](https://travis-ci.org/abouthiroppy/njo)
[![codecov](https://codecov.io/gh/abouthiroppy/njo/branch/master/graph/badge.svg)](https://codecov.io/gh/abouthiroppy/njo)

`njo` creates JSON objects.

## Install
```
$ npm install -g njo
```

## Respect
[jpmens/jo](https://github.com/jpmens/jo)

## Example
```
$ njo fruits=[apple,orange] favorite=pineapple
{
  "fruits": [
    "apple",
    "orange"
  ],
  "favorite": "pineapple"
}

# if you want to create nested objects

$ njo fruits[apple][name]=[hoge,fuga] fruits[orange][name]=piyo
{
  "fruits": {
    "apple": {
      "name": [
        "hoge",
        "fuga"
      ]
    },
    "orange": {
      "name": "piyo"
    }
  }
}
```

## LICENSE
MIT

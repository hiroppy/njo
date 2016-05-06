# node-jo

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

if you want to create nested objects
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

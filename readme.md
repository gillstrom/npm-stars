# npm-stars [![Build Status](https://travis-ci.org/gillstrom/npm-stars.svg?branch=master)](https://travis-ci.org/gillstrom/npm-stars)

> Get starred packages by a npm user


## Install

```
$ npm install --save npm-stars
```


## Usage

```js
const npmStars = require('npm-stars');

npmStars('gillstrom').then(res => {
	console.log(res);
	//=> [{value: 'battery-level' }, ...]
});
```


## API

### npmStars(username)

#### username

Type: `string`

User to fetch starred packages from.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)

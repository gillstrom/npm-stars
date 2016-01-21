'use strict';
var got = require('got');
var Promise = require('pinkie-promise');

module.exports = function (username) {
	var url = 'https://registry.npmjs.org/-/_view/starredByUser?key="' + username + '"';

	if (typeof username !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	return got(url, {json: true}).then(function (res) {
		return res.body.rows;
	});
};

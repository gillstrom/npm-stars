import test from 'ava';
import m from './';

test(async t => {
	const x = await m('gillstrom');

	t.assert(x.length);
	t.ok(x[0].value);
});

import test from 'ava';
import m from './';

test(async t => {
	const x = await m('gillstrom');

	t.ok(x.length);
	t.ok(x[0].value);
});

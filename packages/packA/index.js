// @flow

import multi from '../packB';

const add = (a: number, b: number) => {
	return a + b;
}

console.log(add(5, 10));
console.log(multi(5, 10));

export default add;

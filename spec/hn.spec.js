import {returnsPromise} from '../src/hn'

describe('Promise',()=>{

	it('should return a promise',()=>{
		var promise = returnsPromise();

		expect(typeof promise.then).toBe('function');
		expect(typeof promise.catch).toBe('function');
	});



});

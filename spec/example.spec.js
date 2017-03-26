import {example} from '../src/example';

describe('Example Spec',()=>{

	it('should return  Hello World! ',()=>{
		expect(example()).toBe('Hello World!');
		expect(example()).not.toBe('Something else');
	});
});

let returnsPromise = ()=>{
	let p = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			return 'hahah';
		},1000);
	});
	return p;
}

export {returnsPromise};

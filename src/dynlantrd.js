export default class DynlantRD {
	constructor(dom){
		if (!dom) {
			console.error('Charts Missing parameters!')
			return false
		}
	}
	static version = "1.0.1"
	
	static init(element,theme="default"){
		return new DynlantRD(element)
	}
}

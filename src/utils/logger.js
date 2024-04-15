const LOGLEVEL = Object.freeze({
	DEBUG: -1,
	INFO: 0,
	WARNING: 1,
	ERROR: 2
})
class LoggerHelper{
	constructor(loglevel = LOGLEVEL.INFO){
		this.GLOBAL_TAG = "DynlantRD"
		this.LOGLEVEL = loglevel
	}
	info(msg){
		if (msg && this.LOGLEVEL<=LOGLEVEL.INFO) {
			console.info(`[${this.GLOBAL_TAG}]${msg}`);
		}
	}

	error(msg){
		if (msg && this.LOGLEVEL<=LOGLEVEL.ERROR) {
			console.error(`[${this.GLOBAL_TAG}]${msg}`);
		}
	}

	warning(msg){
		if (msg && this.LOGLEVEL<=LOGLEVEL.WARNING) {
			console.warn(`[${this.GLOBAL_TAG}]${msg}`);
		}
	}

	debug(msg){
		if (msg && this.LOGLEVEL<=LOGLEVEL.DEBUG) {
			console.debug(`[${this.GLOBAL_TAG}]${msg}`);
		}
	}
}

export default LoggerHelper;

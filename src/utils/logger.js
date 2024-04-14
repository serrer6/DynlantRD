const LOGLEVEL = Object.freeze({
	INFO: 0,
	WARNING: 1,
	ERROR: 2,
	DEBUG: -1
})
class Logger{
	constructor(loglevel = LOGLEVEL.INFO){
		this.LOGLEVEL = loglevel
	}
	GLOBAL_TAG = "DynlantRD"
	info(msg){
		if (msg && this.LOGLEVEL>=LOGLEVEL.INFO) {
			console.info(`[${this.GLOBAL_TAG}]${msg}`);
		}
	}

	error(msg){
		if (msg && tthis.LOGLEVEL>=LOGLEVEL.ERROR) {
			console.error(`[${this.GLOBAL_TAG}]${msg}`);
		}
	}

	warning(msg){
		if (msg && this.LOGLEVEL>=LOGLEVEL.WARNING) {
			console.warn(`[${this.GLOBAL_TAG}]${msg}`);
		}
	}

	debug(msg){
		if (msg && this.LOGLEVEL>=LOGLEVEL.DEBUG) {
			console.debug(`[${this.GLOBAL_TAG}]${msg}`);
		}
	}
}

export default Logger;

class Logger{
	static info(msg){
		if (!msg) {
			return;
		}
		var tag = Logger.GLOBAL_TAG;
		if (!Logger.ENABLE_INFO) {
			return;
		}
		let str = `[${tag}]${msg}`;
		console.info(str);
	}

	static error(msg){
		if(!msg){
			return;
		}
		var tag = Logger.GLOBAL_TAG;
		if (!Logger.ENABLE_ERROR){
			return;
		}
		let str = `[${tag}]${msg}`;
		console.error(str);
	}

	static warning(msg){
		if(!msg){
			return;
		}
		var tag = Logger.GLOBAL_TAG;
		if(!Logger.ENABLE_WARNING){
			return;
		}
		let str = `[${tag}]${msg}`;
		console.warn(str);
	}

	static debug(msg){
		if(!msg){
			return;
		}
		var tag = Logger.GLOBAL_TAG;
		if(!Logger.ENABLE_DEBUG){
			return;
		}
		let str = `%c[DEBUG][${tag}]${msg}`;
		console.info(str,"color:#D19800");
	}

}

Logger.GLOBAL_TAG = "DynlantRD";
Logger.ENABLE_ERROR = true;
Logger.ENABLE_INFO = true;
Logger.ENABLE_WARNING = true;
Logger.ENABLE_DEBUG = true;

export default Logger;

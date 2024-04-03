(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dynlantrd"] = factory();
	else
		root["dynlantrd"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_dynlantrd)
});

;// CONCATENATED MODULE: ./src/utils/logger.js
class Logger{
	static info(msg){
		if (!msg) {
			return;
		}
		var tag = Logger.GLOBAL_TAG;
		if (Logger.ENABLE_INFO) {
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
		if (Logger.ENABLE_ERROR){
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
		if(Logger.ENABLE_WARNING){
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
		if(Logger.ENABLE_DEBUG){
			return;
		}
		let str = `%c[DEBUG][${tag}]${msg}`;
		console.info(str,"color:yellow");
	}

}

Logger.GLOBAL_TAG = "DynlantRD";
Logger.ENABLE_ERROR = true;
Logger.ENABLE_INFO = true;
Logger.ENABLE_WARNING = true;
Logger.ENABLE_DEBUG = true;

/* harmony default export */ const logger = (Logger);

;// CONCATENATED MODULE: ./src/utils/text2dom.js
function ConversionEnter(originaltext){
	let textin = originaltext;
	let outtext = "";
	if(textin.includes("\n") || textin.includes("\r") || textin.includes("\r\n")|| textin.includes("↵")){
		outtext = textin.replace(/(\n|\r|\r\n|↵)/g, '<br/>');
	}
	if(outtext.includes("\s")){
		outtext = textin.replace(/\s/g, '&nbsp;');
	}
	return outtext;
}

function text2dom(text){
	let out = "";
	let input = text;
	out = ConversionEnter(input);
	return out;
}

/* harmony default export */ const utils_text2dom = (text2dom);

;// CONCATENATED MODULE: ./src/utils/processors.js



class Processors{
	constructor(dom,debug){
		if (!dom){
			logger.error("DOM is not defined!");
			return;
		}
		this.element = dom;
		this.enable_debug = debug;
	}

	insert(elements){
		let input = elements;
		let doms = utils_text2dom(input)
		if(enable_debug){logger.debug(`[${Text2DOM}]Original content:"${input}",Convert content"${doms}"`);}
		console.log(doms)
	}
}

/* harmony default export */ const utils_processors = (Processors);

;// CONCATENATED MODULE: ./src/dynlantrd.js



function RenderJSON(){
	let processors = new utils_processors(document.getElementById("jjj"));
  console.log('test');
	processors.insert("eee\n")
}

let dynlantrd = {};

// interfaces
dynlantrd.RenderJSON = RenderJSON;

// export dynlantrd
/* harmony default export */ const src_dynlantrd = (dynlantrd);


/***/ }),

/***/ 44:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// entry file

module.exports = __webpack_require__(678)["default"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(44);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
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

/***/ 385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_dynlantrd)
});

;// CONCATENATED MODULE: ./src/utils/logger.js
class logger_Logger{
	static info(msg){
		if (!msg) {
			return;
		}
		var tag = logger_Logger.GLOBAL_TAG;
		if (!logger_Logger.ENABLE_INFO) {
			return;
		}
		let str = `[${tag}]${msg}`;
		console.info(str);
	}

	static error(msg){
		if(!msg){
			return;
		}
		var tag = logger_Logger.GLOBAL_TAG;
		if (!logger_Logger.ENABLE_ERROR){
			return;
		}
		let str = `[${tag}]${msg}`;
		console.error(str);
	}

	static warning(msg){
		if(!msg){
			return;
		}
		var tag = logger_Logger.GLOBAL_TAG;
		if(!logger_Logger.ENABLE_WARNING){
			return;
		}
		let str = `[${tag}]${msg}`;
		console.warn(str);
	}

	static debug(msg){
		if(!msg){
			return;
		}
		var tag = logger_Logger.GLOBAL_TAG;
		if(!logger_Logger.ENABLE_DEBUG){
			return;
		}
		let str = `%c[DEBUG][${tag}]${msg}`;
		console.info(str,"color:yellow");
	}

}

logger_Logger.GLOBAL_TAG = "DynlantRD";
logger_Logger.ENABLE_ERROR = true;
logger_Logger.ENABLE_INFO = true;
logger_Logger.ENABLE_WARNING = true;
logger_Logger.ENABLE_DEBUG = true;

/* harmony default export */ const logger = (logger_Logger);

;// CONCATENATED MODULE: ./src/utils/processors.js



class Processors{
	constructor(dom,debug){
		if (!dom){
			Logger.error("[Processors]DOM is not defined!");
			return;
		}
		this.element = dom;
		this.enable_debug = debug;
	}

	OutDebug(msg){
		if(this.enable_debug){
			Logger.debug(msg);
		}
	}

	RenderElement(elements){
		let element_obj = elements;
		let element_dom = undefined;
		let element_orig = this.element;
		// 判断是不是Object
		if(typeof element_obj && isNaN(element_obj.length)){

			// 创建元素
			if(element_obj.hasOwnProperty("element") && typeof element_obj.element == "string"){
				element_dom = document.createElement(element_obj.element);
				this.OutDebug(`[Processors]CreateElement ${element_obj.element}`);
			}
			else{
				element_dom = document.createElement("p");
				Logger.warn("[Processors]Not Define ElementName,Use Default Elements: p");
			}

			// 文本节点处理
			if(element_obj.hasOwnProperty("text") && typeof element_obj.text == "string"){
				let textarea = document.createTextNode(element_obj.text);
				element_dom.appendChild(textarea);
				this.OutDebug(`[Processors]Element Add TextNode: ${element_obj.text}`);
			}

			// 处理元素属性
			if(element_obj.hasOwnProperty("attribute") && typeof element_obj.attribute == "object" && isNaN(element_obj.length)){
				let orig_keys = Object.keys(element_obj.attribute);
				Logger.info(orig_keys);
				const rp = (data, obj) => {return data.map(item => obj[item] || item);}
        let keys = rp(orig_keys,{eclass:'class'});
				Logger.info(keys);
				for(let index=0;index<orig_keys.length;index++){
				  
					if(element_obj.attribute.hasOwnProperty(orig_keys[index]) && !Array.isArray(element_obj.attribute[orig_keys[index]])){
						element_dom.setAttribute(keys[index],element_obj.attribute[orig_keys[index]]);
						this.OutDebug(`[Processors]Add Attribute(TEXT) ${keys[index]} Vaule ${element_obj.attribute[orig_keys[index]]}`);
					}else{
						let value = element_obj.attribute[orig_keys[index]];
						let outvalue = value.join(' ');
						element_dom.setAttribute(keys[index],outvalue);
						this.OutDebug(`[Processors]Add Attribute(Array) ${keys[index]} Vaule ${outvalue}`);
					}
			  }
			}

			// 插入
			element_orig.appendChild(element_dom);
		}
	}
}

/* harmony default export */ const processors = ((/* unused pure expression or super */ null && (Processors)));

;// CONCATENATED MODULE: ./src/DefaultConfig.js
const defaultconfig = {
	debug:false
}

function CreateDefaultConfig(){
	return Object.assign({}, defaultconfig);
}

;// CONCATENATED MODULE: ./src/render/render.js



class Render{
	constructor(element,debug){
		this.element = element;
		this.plugins = {space:[],textnode:[],exec:[]};
		this.edebug = debug;
		this.plug_position = 0;

		//Loading Plugins
		for(let index=0;index<dynlantrd_root_plugin_storage.length;index++){
			this.plugins.space[index] = dynlantrd_root_plugin_storage[index].name;
			this.plugins.textnode[index] = dynlantrd_root_plugin_storage[index].node
			this.plugins.exec[index] = dynlantrd_root_plugin_storage[index].exec
		}
	}

	findPlugin(name){
		let plug = name;
		for(let index = 0;index<this.plugins.textnode.length;index++){
			if(this.plugins.textnode[index] == plug){
				this.plug_position = index;
			}
		}
	}

	RenderJSON(content){
		let contents = content;
		let { desc: { items : items }} = contents;
		// Performance statistics
		let timer_start = undefined;
		// Render
		if(contents.hasOwnProperty("protocol") && contents.protocol == 1){
			if(Array.isArray(items)){
				timer_start = performance.now();
				for(let index = 0;index<items.length;index++){
					if(items[index].node){
						this.findPlugin(items[index].node);
						this.plugins.exec[this.plug_position](items[index]);
					}
				}
				let timer_end  = timer_start - performance.now();
				return {rtimer: timer_end};
			}
			return;
		}else{return;}
	}
}

/* harmony default export */ const render = (Render);

;// CONCATENATED MODULE: ./src/dynlantrd.js





window.dynlantrd_root_plugin_storage = [];

function initDynlantRD(element,settings){
	let elementer = element;
	if(!element){logger.error("You must provide a dom element!");return;}
	return new render(elementer,edebug)
}

function RegisterPlugin(plug_obj){
	let plug_object = plug_obj;
	if(!plug_object.hasOwnProperty("name") && !plug_object.hasOwnProperty("protocol") && !plug_object.hasOwnProperty("exec")){
		logger.error("[Main---PluginMan]You must provide the object key:name/protocol/exec!");
		return;}
	if(!plug_object.protocol == 1){
		logger.warn("[Main---PluginMan]Wrong protocol version,May affect operation");
	}
	if(!window.dynlantrd_root_plugin_storage){window.dynlantrd_root_plugin_storage = [];}
	for(let index=0;index<dynlantrd_root_plugin_storage.length;index++){
		if(dynlantrd_root_plugin_storage[index].name == plug_object.name){
			logger.error(`[Main---PluginMan]plugin ${plug_object.name} has already been registered！(PASS)`)
			return;
		}
	}
	window.dynlantrd_root_plugin_storage.push(plug);
	return;
}

let dynlantrd = {};

// interfaces
dynlantrd.initDynlantRD = initDynlantRD;
dynlantrd.RegisterPlugin = RegisterPlugin;

// export dynlantrd
/* harmony default export */ const src_dynlantrd = (dynlantrd);


/***/ }),

/***/ 44:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// entry file

module.exports = __webpack_require__(385)["default"];

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
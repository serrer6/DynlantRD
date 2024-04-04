import Logger from "./logger"
import text2dom from "./text2dom"

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

export default Processors;

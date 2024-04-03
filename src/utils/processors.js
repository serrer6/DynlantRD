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
		if(typeof element_obj && !isNaN(element_obj.length)){

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
			if(element_obj.hasOwnProperty("attribute") && typeof element_obj.attribute == "object" && !isNaN(element_obj.length)){
				let keys = Object.keys(element_obj.attribute);
				for(let index=0;index<keys.lenght;index++){
					if(keys[index] == "eclass"){
						keys[index] = "class";
					}
				}
				for(let index=0;index<keys.length;index++){

					if(element_obj["attribute"].hasOwnProperty(keys[index]) && typeof element_obj["attribute"][keys[index]] == "string"){
						element_dom.setAttribute(keys[index],element_obj["attribute"][keys[index]]);
						this.OutDebug(`[Processors]Add Attribute(TEXT) ${keys[inded]} Vaule ${element_obj["attribute"][keys[index]]}`);
					}else if(Array.isArray(element_obj["attribute"][keys[index]])){
						let value = element_obj["attribute"][keys[index]];
						let outvalue = "";
						for(let tindex=0;tindex<value.lenght;tindex++){
							outvalue += value[tindex] + " ";
						}
						element_dom.setAttribute(keys[index],outvalue);
						this.OutDebug(`[Processors]Add Attribute(TEXT) ${keys[inded]} Vaule ${element_    obj["attribute"][keys[index]]}`);
					}
				}
			}

			// 插入
			element_orig.appendChild(element_dom);
		}
	}
}

export default Processors;

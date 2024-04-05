import Logger from "./logger"
import text2dom from "./text2dom"

class Processors{
	constructor(dom,setting){
		if (!dom){
			Logger.error("[Processors]DOM is not defined!");
			return;
		}
		this.element = dom;
		this.settinge = {safely:{xssfilter:false}}
		this.settings = {...this.settinge,...setting};
		this.element_job = undefined;
	}

	OutDebug(msg){
		if(this.settings.debug){
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
				let textarea = document.createTextNode(this.XSSfilter(element_obj.text,this.settings.safely.xssfilter));
				element_dom.appendChild(textarea);
				this.OutDebug(`[Processors]Element Add TextNode: ${element_obj.text}`);
			}

			// 处理元素属性
			if(element_obj.hasOwnProperty("attribute") && typeof element_obj.attribute == "object" && isNaN(element_obj.length)){
				let orig_keys = Object.keys(element_obj.attribute);
				const rp = (data, obj) => {return data.map(item => obj[item] || item);}
				let keys = rp(orig_keys,{eclass:'class'});
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
		return "rendered";
	}

	createElement(){
		this.element_job = {element:undefined};
	}

	setElement(element_k){
		this.element_job.element = element_k;
	}

	setText(text){
		this.element_job.text = text;
	}

	setAttribute(attr_key,attr_obj){
		this.element_job.attribute[attr_key] = attr_obj;
	}

	pushAttribute(push_key,push_obj){
		this.element_job.attribute[push_key].push(push_obj);
	}

	deleteAttribute(del_key,del_obj){
		this.element_job.attribute[del_key] = this.element_job.attribute[del_key].filter(function(item){return item !== del_obj});
	}

	exportElement(){
		return this.element_job;
	}

	XSSfilter(str,bol){
	if(!bol) return str;
	var s = "";
	if(str.length == 0) return "";
	s = str.replace(/&/g,"&amp;");
	s = s.replace(/</g,"&lt;");
	s = s.replace(/>/g,"&gt;");
	s = s.replace(/ /g,"&nbsp;");
	s = s.replace(/\'/g,"&#39;");
	s = s.replace(/\"/g,"&quot;");
	return s;
	}

}

export default Processors;

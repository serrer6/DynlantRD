import Logger from "../utils/logger";
import Processors from "../utils/processors";

class Render{
	constructor(element,setting){
		this.element = element;
		this.edebug = setting.debug;
		this.settings = setting;
		this.plug_position = [];
	}

	findPlugin(node,type){
		this.plug_position = [];
		for(let index = 0;index<dynlantrd_root_plugin_storage.length;index++){
			if(dynlantrd_root_plugin_storage[index].node == node && dynlantrd_root_plugin_storage[index].type == type){
				this.plug_position.push(index);
			}
		}
		if(this.plug_position.length == 0) this.plug_position = "un";
	}

	RenderJSON(content,elements = this.element){
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
						let ele_dom = undefined;
						this.findPlugin(items[index].node,"render");
						if(Array.isArray(this.plug_position)){
							ele_dom= dynlantrd_root_plugin_storage[this.plug_position[0]].exec(items[index],new Processors(elements,this.settings),this.settings,this);
						}
						if(Object.prototype.toString.call(ele_dom) === '[object Object]'){
						let prog = new Processors(this.element,this.settings);
							this.findPlugin(items[index].node,"ornament");
							for(let indexo;indexo<this.plug_position.length;indexo++){
								if(Array.isArray(this.plug_position)){
									ele_dom = dynlantrd_root_plugin_storage[this.plug_position[indexo]].exec(ele_dom,new Processors(elements,this.settings),this.settings,this);
							}}
						prog.RenderElement(ele_dom);
						}
					}
				}
				let timer_end  =  performance.now() - timer_start;
				return {rtimer: timer_end};
			}
			return;
		}else{return;}
	}
}

export default Render;

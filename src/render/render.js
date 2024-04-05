import Logger from "../utils/logger";
import Processors from "../utils/processors";

class Render{
	constructor(element,setting){
		this.element = element;
		this.edebug = setting.debug;
		this.settings = setting;
		this.plug_position = 0;
	}

	findPlugin(node,type){
		for(let index = 0;index<dynlantrd_root_plugin_storage.length;index++){
			if(dynlantrd_root_plugin_storage[index].node == node && dynlantrd_root_plugin_storage[index].type == type){
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
						this.findPlugin(items[index].node,"render");
						let ele_dom= dynlantrd_root_plugin_storage[this.plug_position].exec(items[index],new Processors(this.element,this.settings));
						if(!ele_dom == "rendered"){
							this.findPlugin(items[index].node,"ornament")
							ele_dom = dynlantrd_root_plugin_storage[this.plug_position].exec(ele_dom,new Processors(this.element,this.settings));
							let prog = new Processors(this.element,this.settings);
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

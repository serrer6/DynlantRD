import Logger from "../utils/logger";
import Processors from "../utils/processors";

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

export default Render;

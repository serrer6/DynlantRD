import Logger from "./utils/logger";
import CreateDefaultConfig from "./DefaultConfig"
import Render from "./render/render";

window.dynlantrd_root_plugin_storage = [];

function initDynlantRD(element,settings){
	let elementer = element;
	if(!element){Logger.error("You must provide a dom element!");return;}
	return new Render(elementer,settings)
}

function RegisterPlugin(plug_obj){
	let plug_object = plug_obj;
	if(!plug_object.hasOwnProperty("name") && !plug_object.hasOwnProperty("protocol") && !plug_object.hasOwnProperty("exec")){
		Logger.error("[Main---PluginMan]You must provide the object key:name/protocol/exec!");
		return;}
	if(!plug_object.protocol == 1){
		Logger.warn("[Main---PluginMan]Wrong protocol version,May affect operation");
	}
	if(!window.dynlantrd_root_plugin_storage){window.dynlantrd_root_plugin_storage = [];}
	for(let index=0;index<dynlantrd_root_plugin_storage.length;index++){
		if(dynlantrd_root_plugin_storage[index].name == plug_object.name){
			Logger.error(`[Main---PluginMan]plugin ${plug_object.name} has already been registered！(PASS)`)
			return;
		}
	}
	window.dynlantrd_root_plugin_storage.push(plug_object);
	return;
}

function UnRegisterPlugin(plug_name){
	window.dynlantrd_root_plugin_storage.forEach(function(item, index, arr) {
		if(item.name == plug_name){
			arr.splice(index, 1);
		}});
}

let dynlantrd = {};

// interfaces
dynlantrd.initDynlantRD = initDynlantRD;
dynlantrd.RegisterPlugin = RegisterPlugin;
dynlantrd.UnRegisterPlugin = UnRegisterPlugin;

// export dynlantrd
export default dynlantrd;

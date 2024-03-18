export default class DynlantRD {
	constructor(dom,themes){
		if (!dom) {
			console.error('[DynlantRD]No selected element!');
			return false;
		}
	}
	static version = "1.0.1";
	//辨别json格式富文本的版本，对未来提供向下兼容性
	static protocol = '1';
	
	static init(element,theme="default"){
		return new DynlantRD(element);
	}
}

/**
 * @description JSON格式的富文本的渲染器
 * @param {String} richtext          想要修改的配置项的key
 * @return {Undefined} 无返回值
 */
DynlantRD.prototyp.RenderJSON = function(richtext){
  var richtext_obj = JSON.parse(richtext);
}